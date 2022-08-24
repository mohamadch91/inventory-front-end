"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [8546],
  {
    78546: function (e, n, i) {
      i.r(n);
      var l = i(4942),
        s = i(1413),
        a = i(70885),
        t = i(56890),
        r = i(35855),
        c = i(53994),
        o = i(53382),
        d = i(16536),
        u = i(72791),
        v = i(95907),
        m = i(23821),
        x = i(65218),
        h = i(53596),
        f = i(59909),
        j = (i(93650), i(2423), i(65487), i(5227), i(87004), i(80184));
      n.default = function () {
        var e = ["male", "female"],
          n = ["Nurse", "Vaccinator", "Assistant"],
          i = ["Diploma", "Bsc"],
          p = (0, u.useState)([]),
          g = (0, a.Z)(p, 2),
          _ = g[0],
          Z = g[1],
          y = (0, u.useState)({
            genders: e[0],
            position_level: n[0],
            educatioin_level: i[0],
          }),
          b = (0, a.Z)(y, 2),
          N = b[0],
          C = b[1],
          H = (0, u.useState)({
            genders: e[0],
            position_level: n[0],
            educatioin_level: i[0],
          }),
          w = (0, a.Z)(H, 2),
          R = w[0],
          k = w[1],
          I = (0, u.useState)(!0),
          S = (0, a.Z)(I, 2),
          F = S[0],
          P = S[1],
          T = (0, u.useState)([]),
          z = (0, a.Z)(T, 2),
          L = z[0],
          q = z[1],
          A = (0, u.useState)(null),
          E = (0, a.Z)(A, 2),
          Y = E[0],
          D = E[1],
          G = (0, u.useState)(!1),
          B = (0, a.Z)(G, 2),
          O = B[0],
          M = B[1],
          V = (0, u.useState)(!1),
          X = (0, a.Z)(V, 2),
          J = X[0],
          K = X[1];
        function Q(e) {
          h.Z.getHRList(e)
            .then(function (e) {
              Z(e.data), P(!1);
            })
            .catch(function (e) {
              x.ZP.error("There is a problem loading data"), P(!1);
            });
        }
        function U(e) {
          var n = e.target,
            i = n.name,
            a = n.value;
          C((0, s.Z)((0, s.Z)({}, N), {}, (0, l.Z)({}, i, a)));
        }
        function W(e) {
          var n = e.target,
            i = n.name,
            a = n.value;
          k((0, s.Z)((0, s.Z)({}, R), {}, (0, l.Z)({}, i, a)));
        }
        return (
          (0, u.useEffect)(function () {
            h.Z.getFacilities()
              .then(function (e) {
                var n = e.data;
                q(n), D(n[0].id), P(!1), Q(n[0].id);
              })
              .catch(function (e) {
                x.ZP.error("There is a problem loading data"), P(!1);
              });
          }, []),
          (0, u.useEffect)(
            function () {
              var e;
              L &&
                k(
                  (0, s.Z)(
                    (0, s.Z)({}, R),
                    {},
                    {
                      facility:
                        null === (e = L[0]) || void 0 === e ? void 0 : e.id,
                    }
                  )
                );
            },
            [L]
          ),
          (0, j.jsxs)("div", {
            className: "item-class-page hr-page",
            children: [
              (0, j.jsx)("h3", {
                className: "page-title mb-3",
                children: "HR Information by Facility",
              }),
              F
                ? (0, j.jsx)(f.Z, {})
                : (0, j.jsxs)(j.Fragment, {
                    children: [
                      (0, j.jsxs)("div", {
                        className: "row mb-4 mt-4",
                        children: [
                          (0, j.jsx)("div", {
                            className: "col-md-2 d-flex align-items-center",
                            children: (0, j.jsx)("h4", {
                              className: "page-title",
                              children: "Main Facility",
                            }),
                          }),
                          (0, j.jsx)("div", {
                            className: "col-md-10 d-flex",
                            children: (0, j.jsx)("select", {
                              name: "facility",
                              onChange: function (e) {
                                D(e.target.value), P(!0), Q(e.target.value);
                              },
                              value: Y,
                              children: L.map(function (e, n) {
                                return (0,
                                j.jsx)("option", { value: e.id, children: e.name }, e.id);
                              }),
                            }),
                          }),
                        ],
                      }),
                      L &&
                        _ &&
                        _.length > 0 &&
                        (0, j.jsx)("div", {
                          children: (0, j.jsxs)(m.Z, {
                            children: [
                              (0, j.jsx)(t.Z, {
                                children: (0, j.jsxs)(r.Z, {
                                  children: [
                                    (0, j.jsx)(c.Z, {}),
                                    (0, j.jsx)(c.Z, { children: "Full Name" }),
                                    (0, j.jsx)(c.Z, { children: "Facility" }),
                                    (0, j.jsx)(c.Z, {
                                      children: "HR Position Levels",
                                    }),
                                    (0, j.jsx)(c.Z, { children: "Gender" }),
                                    (0, j.jsx)(c.Z, {
                                      children: "HR Education Levels",
                                    }),
                                    (0, j.jsx)(c.Z, {
                                      children: "Total Years In Service",
                                    }),
                                    (0, j.jsx)(c.Z, {
                                      children: "Total Year In This Position",
                                    }),
                                    (0, j.jsx)(c.Z, { children: "Edit" }),
                                  ],
                                }),
                              }),
                              (0, j.jsx)(o.Z, {
                                children:
                                  _ &&
                                  _.map(function (e, n) {
                                    var i, l;
                                    return (0, j.jsx)(j.Fragment, {
                                      children: (0, j.jsxs)(r.Z, {
                                        children: [
                                          (0, j.jsx)(c.Z, { children: n + 1 }),
                                          (0, j.jsx)(c.Z, {
                                            children: e.full_name,
                                          }),
                                          (0, j.jsx)(c.Z, {
                                            children:
                                              null ===
                                                ((l = e.facility),
                                                (i = L.find(function (e) {
                                                  return e.id === l;
                                                }))) || void 0 === i
                                                ? void 0
                                                : i.name,
                                          }),
                                          (0, j.jsx)(c.Z, {
                                            children: e.position_level,
                                          }),
                                          (0, j.jsx)(c.Z, {
                                            children: e.genders,
                                          }),
                                          (0, j.jsx)(c.Z, {
                                            children: e.educatioin_level,
                                          }),
                                          (0, j.jsx)(c.Z, {
                                            children: e.years_in_service,
                                          }),
                                          (0, j.jsx)(c.Z, {
                                            children: e.year_in_position,
                                          }),
                                          (0, j.jsx)(c.Z, {
                                            children: (0, j.jsx)("button", {
                                              className: "edit-btn",
                                              onClick: function (n) {
                                                return (function (e) {
                                                  var n = _.find(function (n) {
                                                    return n.id === e.id;
                                                  });
                                                  C(n), K(!0);
                                                })(e);
                                              },
                                              children: (0, j.jsx)(v.Z, {}),
                                            }),
                                          }),
                                        ],
                                      }),
                                    });
                                  }),
                              }),
                            ],
                          }),
                        }),
                      (0, j.jsx)(d.Z, {
                        show: J,
                        onHide: function () {
                          return K(!1);
                        },
                        children: (0, j.jsxs)("form", {
                          onSubmit: function (l) {
                            var s;
                            if (
                              (l.preventDefault(),
                              Object.keys(N).every(function (e) {
                                return "" !== N[e];
                              }))
                            ) {
                              P(!0);
                              var a = {
                                id: (s = N).id,
                                full_name: s.full_name,
                                position_level: s.position_level,
                                educatioin_level: s.educatioin_level,
                                genders: s.genders,
                              };
                              N.genders || (a.genders = "male"),
                                N.position_level || (a.position_level = n[0]),
                                N.educatioin_level ||
                                  (a.educatioin_level = i[0]),
                                (a.year_in_position = parseInt(
                                  N.year_in_position
                                )),
                                (a.years_in_service = parseInt(
                                  N.years_in_service
                                )),
                                (a.facility = parseInt(N.facility)),
                                h.Z.putHR(a)
                                  .then(function (l) {
                                    P(!0),
                                      Q(Y),
                                      C({
                                        genders: e[0],
                                        position_level: n[0],
                                        educatioin_level: i[0],
                                      }),
                                      K(!1);
                                  })
                                  .catch(function (e) {
                                    x.ZP.error(
                                      "There is a problem sending data"
                                    ),
                                      P(!1);
                                  });
                            } else x.ZP.error("Please fill all the fields");
                          },
                          children: [
                            (0, j.jsx)("h3", {
                              className: "mb-1",
                              children: "Human Resource Information",
                            }),
                            (0, j.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, j.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, j.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, j.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, j.jsx)("label", { children: "Facility" }),
                                (0, j.jsx)("select", {
                                  name: "facility",
                                  onChange: U,
                                  value:
                                    null === N || void 0 === N
                                      ? void 0
                                      : N.facility,
                                  children: L.map(function (e, n) {
                                    return (0,
                                    j.jsx)("option", { value: e.id, selected: e.facility === e.id, children: e.name }, e.id);
                                  }),
                                }),
                              ],
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, j.jsx)("label", { children: "Full Name" }),
                                (0, j.jsx)("input", {
                                  name: "full_name",
                                  type: "text",
                                  onChange: U,
                                  value:
                                    null === N || void 0 === N
                                      ? void 0
                                      : N.full_name,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, j.jsx)("label", {
                                  children: "HR Position Levels",
                                }),
                                (0, j.jsx)("select", {
                                  name: "position_level",
                                  onChange: U,
                                  value:
                                    null === N || void 0 === N
                                      ? void 0
                                      : N.position_level,
                                  children: n.map(function (e, n) {
                                    return (0,
                                    j.jsx)("option", { value: e, children: e }, n);
                                  }),
                                }),
                              ],
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, j.jsx)("label", {
                                  children: "HR Education Levels",
                                }),
                                (0, j.jsx)("select", {
                                  name: "educatioin_level",
                                  onChange: U,
                                  value:
                                    null === N || void 0 === N
                                      ? void 0
                                      : N.educatioin_level,
                                  children: i.map(function (e, n) {
                                    return (0,
                                    j.jsx)("option", { value: e, children: e }, n);
                                  }),
                                }),
                              ],
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, j.jsx)("label", { children: "Gender" }),
                                (0, j.jsx)("select", {
                                  name: "genders",
                                  onChange: U,
                                  value:
                                    null === N || void 0 === N
                                      ? void 0
                                      : N.genders,
                                  children: e.map(function (e, n) {
                                    return (0,
                                    j.jsx)("option", { value: e, children: e }, n);
                                  }),
                                }),
                              ],
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, j.jsx)("label", {
                                  children: "Total Years In Service",
                                }),
                                (0, j.jsx)("input", {
                                  name: "years_in_service",
                                  type: "number",
                                  onChange: U,
                                  value:
                                    null === N || void 0 === N
                                      ? void 0
                                      : N.years_in_service,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, j.jsx)("label", {
                                  children: "Total Years In This Position",
                                }),
                                (0, j.jsx)("input", {
                                  name: "year_in_position",
                                  type: "number",
                                  onChange: U,
                                  value:
                                    null === N || void 0 === N
                                      ? void 0
                                      : N.year_in_position,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, j.jsx)("button", {
                              className: "save-btn w-100",
                              type: "submit",
                              children: "Save",
                            }),
                          ],
                        }),
                      }),
                      (0, j.jsx)("button", {
                        className: "modal-btn",
                        onClick: function () {
                          M(function (e) {
                            return !e;
                          });
                        },
                        children: "Human Resource add",
                      }),
                      (0, j.jsx)(d.Z, {
                        show: O,
                        onHide: function () {
                          return M(!1);
                        },
                        children: (0, j.jsxs)("form", {
                          onSubmit: function (l) {
                            var a;
                            if (
                              (l.preventDefault(),
                              Object.keys(R).every(function (e) {
                                return "" !== R[e];
                              }))
                            ) {
                              P(!0);
                              var t = {
                                id: (a = R).id,
                                full_name: a.full_name,
                                position_level: a.position_level,
                                educatioin_level: a.educatioin_level,
                                years_in_service: a.years_in_service,
                                year_in_position: a.year_in_position,
                                genders: a.genders,
                              };
                              (t.year_in_position = parseInt(
                                R.year_in_position
                              )),
                                (t.years_in_service = parseInt(
                                  R.years_in_service
                                )),
                                (t.facility = parseInt(R.facility)),
                                h.Z.postHR(t)
                                  .then(function (l) {
                                    P(!0),
                                      Q(Y),
                                      k(
                                        (0, s.Z)(
                                          (0, s.Z)({}, R),
                                          {},
                                          {
                                            genders: e[0],
                                            position_level: n[0],
                                            educatioin_level: i[0],
                                          }
                                        )
                                      ),
                                      M(!1);
                                  })
                                  .catch(function (e) {
                                    x.ZP.error(
                                      "There is a problem sending data"
                                    ),
                                      P(!1);
                                  });
                            } else x.ZP.error("Please fill all the fields");
                          },
                          children: [
                            (0, j.jsx)("h3", {
                              className: "mb-1",
                              children: "Human Resource Information",
                            }),
                            (0, j.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, j.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, j.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, j.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, j.jsx)("label", { children: "Facility" }),
                                (0, j.jsx)("select", {
                                  name: "facility",
                                  onChange: W,
                                  value:
                                    null === R || void 0 === R
                                      ? void 0
                                      : R.facility,
                                  children: L.map(function (e, n) {
                                    return (0,
                                    j.jsx)("option", { value: e.id, selected: e.facility === e.id, children: e.name }, e.id);
                                  }),
                                }),
                              ],
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, j.jsx)("label", { children: "Full Name" }),
                                (0, j.jsx)("input", {
                                  name: "full_name",
                                  type: "text",
                                  onChange: W,
                                  value:
                                    null === R || void 0 === R
                                      ? void 0
                                      : R.full_name,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, j.jsx)("label", {
                                  children: "HR Position Levels",
                                }),
                                (0, j.jsx)("select", {
                                  name: "position_level",
                                  onChange: W,
                                  value:
                                    null === R || void 0 === R
                                      ? void 0
                                      : R.position_level,
                                  children: n.map(function (e, n) {
                                    return (0,
                                    j.jsx)("option", { value: e, children: e }, n);
                                  }),
                                }),
                              ],
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, j.jsx)("label", {
                                  children: "HR Education Levels",
                                }),
                                (0, j.jsx)("select", {
                                  name: "educatioin_level",
                                  onChange: W,
                                  value:
                                    null === R || void 0 === R
                                      ? void 0
                                      : R.educatioin_level,
                                  children: i.map(function (e, n) {
                                    return (0,
                                    j.jsx)("option", { value: e, children: e }, n);
                                  }),
                                }),
                              ],
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, j.jsx)("label", { children: "Gender" }),
                                (0, j.jsx)("select", {
                                  name: "genders",
                                  onChange: W,
                                  value:
                                    null === R || void 0 === R
                                      ? void 0
                                      : R.genders,
                                  children: e.map(function (e, n) {
                                    return (0,
                                    j.jsx)("option", { value: e, children: e }, n);
                                  }),
                                }),
                              ],
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, j.jsx)("label", {
                                  children: "Total Years In Service",
                                }),
                                (0, j.jsx)("input", {
                                  name: "years_in_service",
                                  type: "number",
                                  onChange: W,
                                  value:
                                    null === R || void 0 === R
                                      ? void 0
                                      : R.years_in_service,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, j.jsx)("label", {
                                  children: "Total Years In This Position",
                                }),
                                (0, j.jsx)("input", {
                                  name: "year_in_position",
                                  type: "number",
                                  onChange: W,
                                  value:
                                    null === R || void 0 === R
                                      ? void 0
                                      : R.year_in_position,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, j.jsx)("button", {
                              className: "save-btn w-100",
                              type: "submit",
                              children: "Save",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
            ],
          })
        );
      };
    },
    53596: function (e, n, i) {
      var l = i(15671),
        s = i(43144),
        a = i(74569),
        t = i.n(a),
        r = i(54318),
        c = "http://127.0.0.1:8000/hr/",
        o = (function () {
          function e() {
            (0, l.Z)(this, e);
          }
          return (
            (0, s.Z)(e, [
              {
                key: "getFacilities",
                value: function () {
                  return t().get(c + "hr-helper/", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getHRList",
                value: function (e) {
                  return t().get(c + "?id=" + e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "putHR",
                value: function (e) {
                  return t().put(c, e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "postHR",
                value: function (e) {
                  return t().post(c, e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "deleteHR",
                value: function (e) {
                  return t().delete(c, e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new o();
    },
    95907: function (e, n, i) {
      var l = i(80184);
      n.Z = function () {
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, l.jsx)("g", {
              children: (0, l.jsx)("g", {
                children: (0, l.jsx)("path", {
                  d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
                }),
              }),
            }),
          }),
        });
      };
    },
    23821: function (e, n, i) {
      var l = i(39281),
        s = i(79836),
        a = i(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(l.Z, {
            children: (0, a.jsx)(s.Z, { children: n }),
          }),
        });
      };
    },
    5227: function () {},
    87004: function () {},
    65487: function () {},
    2423: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=8546.1234ea64.chunk.js.map
