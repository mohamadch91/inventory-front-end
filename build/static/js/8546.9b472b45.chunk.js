"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [8546],
  {
    78546: function (e, n, i) {
      i.r(n);
      var l = i(4942),
        s = i(1413),
        c = i(29439),
        a = i(56890),
        t = i(35855),
        r = i(53994),
        d = i(53382),
        o = i(16536),
        u = i(72791),
        x = i(95907),
        h = i(23821),
        v = i(65218),
        m = i(53596),
        f = i(59909),
        j = (i(93650), i(2423), i(65487), i(5227), i(87004), i(30606)),
        p = i(80184);
      n.default = function () {
        var e = ["male", "female"],
          n = ["Nurse", "Vaccinator", "Assistant"],
          i = ["Diploma", "Bsc"],
          _ = (0, u.useState)([]),
          g = (0, c.Z)(_, 2),
          Z = g[0],
          y = g[1],
          b = (0, u.useState)({
            genders: e[0],
            position_level: n[0],
            educatioin_level: i[0],
          }),
          N = (0, c.Z)(b, 2),
          w = N[0],
          C = N[1],
          H = (0, u.useState)({
            genders: e[0],
            position_level: n[0],
            educatioin_level: i[0],
          }),
          R = (0, c.Z)(H, 2),
          k = R[0],
          I = R[1],
          S = (0, u.useState)(!0),
          F = (0, c.Z)(S, 2),
          P = F[0],
          T = F[1],
          z = (0, u.useState)([]),
          L = (0, c.Z)(z, 2),
          q = L[0],
          A = L[1],
          E = (0, u.useState)(null),
          Y = (0, c.Z)(E, 2),
          D = Y[0],
          G = Y[1],
          B = (0, u.useState)(!1),
          O = (0, c.Z)(B, 2),
          M = O[0],
          V = O[1],
          X = (0, u.useState)(!1),
          J = (0, c.Z)(X, 2),
          K = J[0],
          Q = J[1];
        function U(e) {
          m.Z.getHRList(e)
            .then(function (e) {
              y(e.data), T(!1);
            })
            .catch(function (e) {
              v.ZP.error("There is a problem loading data"), T(!1);
            });
        }
        function W(e) {
          var n = e.target,
            i = n.name,
            c = n.value;
          C((0, s.Z)((0, s.Z)({}, w), {}, (0, l.Z)({}, i, c)));
        }
        function $(e) {
          var n = e.target,
            i = n.name,
            c = n.value;
          I((0, s.Z)((0, s.Z)({}, k), {}, (0, l.Z)({}, i, c)));
        }
        return (
          (0, u.useEffect)(function () {
            m.Z.getFacilities()
              .then(function (e) {
                var n = e.data;
                A(n), G(n[0].id), T(!1), U(n[0].id);
              })
              .catch(function (e) {
                v.ZP.error("There is a problem loading data"), T(!1);
              });
          }, []),
          (0, u.useEffect)(
            function () {
              var e;
              q &&
                I(
                  (0, s.Z)(
                    (0, s.Z)({}, k),
                    {},
                    {
                      facility:
                        null === (e = q[0]) || void 0 === e ? void 0 : e.id,
                    }
                  )
                );
            },
            [q]
          ),
          (0, p.jsxs)("div", {
            className: "item-class-page hr-page",
            children: [
              (0, p.jsx)("h3", {
                className: "page-title mb-3",
                children: (0, p.jsx)(j.c, {
                  children: "HR Information by Facility",
                }),
              }),
              P
                ? (0, p.jsx)(f.Z, {})
                : (0, p.jsxs)(p.Fragment, {
                    children: [
                      (0, p.jsxs)("div", {
                        className: "row mb-4 mt-4",
                        children: [
                          (0, p.jsx)("div", {
                            className: "col-md-2 d-flex align-items-center",
                            children: (0, p.jsx)("h4", {
                              className: "page-title",
                              children: "Main Facility",
                            }),
                          }),
                          (0, p.jsx)("div", {
                            className: "col-md-10 d-flex",
                            children: (0, p.jsx)("select", {
                              name: "facility",
                              onChange: function (e) {
                                G(e.target.value), T(!0), U(e.target.value);
                              },
                              value: D,
                              children: q.map(function (e, n) {
                                return (0,
                                p.jsx)("option", { value: e.id, children: e.name }, e.id);
                              }),
                            }),
                          }),
                        ],
                      }),
                      q &&
                        Z &&
                        Z.length > 0 &&
                        (0, p.jsx)("div", {
                          children: (0, p.jsxs)(h.Z, {
                            children: [
                              (0, p.jsx)(a.Z, {
                                children: (0, p.jsxs)(t.Z, {
                                  children: [
                                    (0, p.jsx)(r.Z, { children: "Id" }),
                                    (0, p.jsx)(r.Z, {
                                      children: (0, p.jsx)(j.c, {
                                        children: "Full Name",
                                      }),
                                    }),
                                    (0, p.jsx)(r.Z, {
                                      children: (0, p.jsx)(j.c, {
                                        children: "Facility",
                                      }),
                                    }),
                                    (0, p.jsx)(r.Z, {
                                      children: (0, p.jsx)(j.c, {
                                        children: "HR Position Levels",
                                      }),
                                    }),
                                    (0, p.jsx)(r.Z, {
                                      children: (0, p.jsx)(j.c, {
                                        children: "Gender",
                                      }),
                                    }),
                                    (0, p.jsx)(r.Z, {
                                      children: (0, p.jsx)(j.c, {
                                        children: "HR Education Levels",
                                      }),
                                    }),
                                    (0, p.jsx)(r.Z, {
                                      children: (0, p.jsx)(j.c, {
                                        children: "Total Years In Service",
                                      }),
                                    }),
                                    (0, p.jsx)(r.Z, {
                                      children: (0, p.jsx)(j.c, {
                                        children: "Total Year In This Position",
                                      }),
                                    }),
                                    (0, p.jsx)(r.Z, {
                                      children: (0, p.jsx)(j.c, {
                                        children: "Edit",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, p.jsx)(d.Z, {
                                children:
                                  Z &&
                                  Z.map(function (e, n) {
                                    var i, l;
                                    return (0, p.jsx)(p.Fragment, {
                                      children: (0, p.jsxs)(t.Z, {
                                        children: [
                                          (0, p.jsx)(r.Z, { children: n + 1 }),
                                          (0, p.jsx)(r.Z, {
                                            children: e.full_name,
                                          }),
                                          (0, p.jsx)(r.Z, {
                                            children:
                                              null ===
                                                ((l = e.facility),
                                                (i = q.find(function (e) {
                                                  return e.id === l;
                                                }))) || void 0 === i
                                                ? void 0
                                                : i.name,
                                          }),
                                          (0, p.jsx)(r.Z, {
                                            children: e.position_level,
                                          }),
                                          (0, p.jsx)(r.Z, {
                                            children: e.genders,
                                          }),
                                          (0, p.jsx)(r.Z, {
                                            children: e.educatioin_level,
                                          }),
                                          (0, p.jsx)(r.Z, {
                                            children: e.years_in_service,
                                          }),
                                          (0, p.jsx)(r.Z, {
                                            children: e.year_in_position,
                                          }),
                                          (0, p.jsx)(r.Z, {
                                            children: (0, p.jsx)("button", {
                                              className: "edit-btn",
                                              onClick: function (n) {
                                                return (function (e) {
                                                  var n = Z.find(function (n) {
                                                    return n.id === e.id;
                                                  });
                                                  C(n), Q(!0);
                                                })(e);
                                              },
                                              children: (0, p.jsx)(x.Z, {}),
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
                      (0, p.jsx)(o.Z, {
                        show: K,
                        onHide: function () {
                          return Q(!1);
                        },
                        children: (0, p.jsxs)("form", {
                          onSubmit: function (l) {
                            var s;
                            if (
                              (l.preventDefault(),
                              Object.keys(w).every(function (e) {
                                return "" !== w[e];
                              }))
                            ) {
                              T(!0);
                              var c = {
                                id: (s = w).id,
                                full_name: s.full_name,
                                position_level: s.position_level,
                                educatioin_level: s.educatioin_level,
                                genders: s.genders,
                              };
                              w.genders || (c.genders = "male"),
                                w.position_level || (c.position_level = n[0]),
                                w.educatioin_level ||
                                  (c.educatioin_level = i[0]),
                                (c.year_in_position = parseInt(
                                  w.year_in_position
                                )),
                                (c.years_in_service = parseInt(
                                  w.years_in_service
                                )),
                                (c.facility = parseInt(w.facility)),
                                m.Z.putHR(c)
                                  .then(function (l) {
                                    T(!0),
                                      U(D),
                                      C({
                                        genders: e[0],
                                        position_level: n[0],
                                        educatioin_level: i[0],
                                      }),
                                      Q(!1);
                                  })
                                  .catch(function (e) {
                                    v.ZP.error(
                                      "There is a problem sending data"
                                    ),
                                      T(!1);
                                  });
                            } else v.ZP.error("Please fill all the fields");
                          },
                          children: [
                            (0, p.jsx)("h3", {
                              className: "mb-1",
                              children: (0, p.jsx)(j.c, {
                                children: "Human Resource Information",
                              }),
                            }),
                            (0, p.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, p.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, p.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, p.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, p.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, p.jsx)("label", {
                                  children: (0, p.jsx)(j.c, {
                                    children: "Facility",
                                  }),
                                }),
                                (0, p.jsx)("select", {
                                  name: "facility",
                                  onChange: W,
                                  value:
                                    null === w || void 0 === w
                                      ? void 0
                                      : w.facility,
                                  children: q.map(function (e, n) {
                                    return (0,
                                    p.jsx)("option", { value: e.id, selected: e.facility === e.id, children: e.name }, e.id);
                                  }),
                                }),
                              ],
                            }),
                            (0, p.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, p.jsx)("label", {
                                  children: (0, p.jsx)(j.c, {
                                    children: "Full Name",
                                  }),
                                }),
                                (0, p.jsx)("input", {
                                  name: "full_name",
                                  type: "text",
                                  onChange: W,
                                  value:
                                    null === w || void 0 === w
                                      ? void 0
                                      : w.full_name,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, p.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, p.jsx)("label", {
                                  children: (0, p.jsx)(r.Z, {
                                    children: "HR Position Levels",
                                  }),
                                }),
                                (0, p.jsx)("select", {
                                  name: "position_level",
                                  onChange: W,
                                  value:
                                    null === w || void 0 === w
                                      ? void 0
                                      : w.position_level,
                                  children: n.map(function (e, n) {
                                    return (0,
                                    p.jsx)("option", { value: e, children: e }, n);
                                  }),
                                }),
                              ],
                            }),
                            (0, p.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, p.jsx)("label", {
                                  children: (0, p.jsx)(j.c, {
                                    children: "HR Education Levels",
                                  }),
                                }),
                                (0, p.jsx)("select", {
                                  name: "educatioin_level",
                                  onChange: W,
                                  value:
                                    null === w || void 0 === w
                                      ? void 0
                                      : w.educatioin_level,
                                  children: i.map(function (e, n) {
                                    return (0,
                                    p.jsx)("option", { value: e, children: e }, n);
                                  }),
                                }),
                              ],
                            }),
                            (0, p.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, p.jsx)("label", {
                                  children: (0, p.jsx)(j.c, {
                                    children: "Gender",
                                  }),
                                }),
                                (0, p.jsx)("select", {
                                  name: "genders",
                                  onChange: W,
                                  value:
                                    null === w || void 0 === w
                                      ? void 0
                                      : w.genders,
                                  children: e.map(function (e, n) {
                                    return (0,
                                    p.jsx)("option", { value: e, children: e }, n);
                                  }),
                                }),
                              ],
                            }),
                            (0, p.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, p.jsx)("label", {
                                  children: (0, p.jsx)(j.c, {
                                    children: "Total Years In Service",
                                  }),
                                }),
                                (0, p.jsx)("input", {
                                  name: "years_in_service",
                                  type: "number",
                                  onChange: W,
                                  value:
                                    null === w || void 0 === w
                                      ? void 0
                                      : w.years_in_service,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, p.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, p.jsx)("label", {
                                  children: (0, p.jsx)(j.c, {
                                    children: "Total Years In This Position",
                                  }),
                                }),
                                (0, p.jsx)("input", {
                                  name: "year_in_position",
                                  type: "number",
                                  onChange: W,
                                  value:
                                    null === w || void 0 === w
                                      ? void 0
                                      : w.year_in_position,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, p.jsx)("button", {
                              className: "save-btn w-100",
                              type: "submit",
                              children: (0, p.jsx)(j.c, { children: "Save" }),
                            }),
                          ],
                        }),
                      }),
                      (0, p.jsx)("button", {
                        className: "modal-btn",
                        onClick: function () {
                          V(function (e) {
                            return !e;
                          });
                        },
                        children: (0, p.jsx)(j.c, {
                          children: "Human Resource add",
                        }),
                      }),
                      (0, p.jsx)(o.Z, {
                        show: M,
                        onHide: function () {
                          return V(!1);
                        },
                        children: (0, p.jsxs)("form", {
                          onSubmit: function (l) {
                            var c;
                            if (
                              (l.preventDefault(),
                              Object.keys(k).every(function (e) {
                                return "" !== k[e];
                              }))
                            ) {
                              T(!0);
                              var a = {
                                id: (c = k).id,
                                full_name: c.full_name,
                                position_level: c.position_level,
                                educatioin_level: c.educatioin_level,
                                years_in_service: c.years_in_service,
                                year_in_position: c.year_in_position,
                                genders: c.genders,
                              };
                              (a.year_in_position = parseInt(
                                k.year_in_position
                              )),
                                (a.years_in_service = parseInt(
                                  k.years_in_service
                                )),
                                (a.facility = parseInt(k.facility)),
                                m.Z.postHR(a)
                                  .then(function (l) {
                                    T(!0),
                                      U(D),
                                      I(
                                        (0, s.Z)(
                                          (0, s.Z)({}, k),
                                          {},
                                          {
                                            genders: e[0],
                                            position_level: n[0],
                                            educatioin_level: i[0],
                                          }
                                        )
                                      ),
                                      V(!1);
                                  })
                                  .catch(function (e) {
                                    v.ZP.error(
                                      "There is a problem sending data"
                                    ),
                                      T(!1);
                                  });
                            } else v.ZP.error("Please fill all the fields");
                          },
                          children: [
                            (0, p.jsx)("h3", {
                              className: "mb-1",
                              children: "Human Resource Information",
                            }),
                            (0, p.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, p.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, p.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, p.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                            }),
                            (0, p.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, p.jsx)("label", {
                                  children: (0, p.jsx)(j.c, {
                                    children: "Facility",
                                  }),
                                }),
                                (0, p.jsx)("select", {
                                  name: "facility",
                                  onChange: $,
                                  value:
                                    null === k || void 0 === k
                                      ? void 0
                                      : k.facility,
                                  children: q.map(function (e, n) {
                                    return (0,
                                    p.jsx)("option", { value: e.id, selected: e.facility === e.id, children: e.name }, e.id);
                                  }),
                                }),
                              ],
                            }),
                            (0, p.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, p.jsx)("label", {
                                  children: (0, p.jsx)(j.c, {
                                    children: "Full Name",
                                  }),
                                }),
                                (0, p.jsx)("input", {
                                  name: "full_name",
                                  type: "text",
                                  onChange: $,
                                  value:
                                    null === k || void 0 === k
                                      ? void 0
                                      : k.full_name,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, p.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, p.jsx)("label", {
                                  children: (0, p.jsx)(j.c, {
                                    children: "HR Position Levels",
                                  }),
                                }),
                                (0, p.jsx)("select", {
                                  name: "position_level",
                                  onChange: $,
                                  value:
                                    null === k || void 0 === k
                                      ? void 0
                                      : k.position_level,
                                  children: n.map(function (e, n) {
                                    return (0,
                                    p.jsx)("option", { value: e, children: e }, n);
                                  }),
                                }),
                              ],
                            }),
                            (0, p.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, p.jsx)("label", {
                                  children: (0, p.jsx)(j.c, {
                                    children: "HR Education Levels",
                                  }),
                                }),
                                (0, p.jsx)("select", {
                                  name: "educatioin_level",
                                  onChange: $,
                                  value:
                                    null === k || void 0 === k
                                      ? void 0
                                      : k.educatioin_level,
                                  children: i.map(function (e, n) {
                                    return (0,
                                    p.jsx)("option", { value: e, children: e }, n);
                                  }),
                                }),
                              ],
                            }),
                            (0, p.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, p.jsx)("label", {
                                  children: (0, p.jsx)(j.c, {
                                    children: "Gender",
                                  }),
                                }),
                                (0, p.jsx)("select", {
                                  name: "genders",
                                  onChange: $,
                                  value:
                                    null === k || void 0 === k
                                      ? void 0
                                      : k.genders,
                                  children: e.map(function (e, n) {
                                    return (0,
                                    p.jsx)("option", { value: e, children: e }, n);
                                  }),
                                }),
                              ],
                            }),
                            (0, p.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, p.jsx)("label", {
                                  children: (0, p.jsx)(j.c, {
                                    children: "Total Years In Service",
                                  }),
                                }),
                                (0, p.jsx)("input", {
                                  name: "years_in_service",
                                  type: "number",
                                  onChange: $,
                                  value:
                                    null === k || void 0 === k
                                      ? void 0
                                      : k.years_in_service,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, p.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                (0, p.jsx)("label", {
                                  children: (0, p.jsx)(j.c, {
                                    children: "Total Years In This Position",
                                  }),
                                }),
                                (0, p.jsx)("input", {
                                  name: "year_in_position",
                                  type: "number",
                                  onChange: $,
                                  value:
                                    null === k || void 0 === k
                                      ? void 0
                                      : k.year_in_position,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, p.jsx)("button", {
                              className: "save-btn w-100",
                              type: "submit",
                              children: (0, p.jsx)(j.c, { children: "Save" }),
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
        c = i(74569),
        a = i.n(c),
        t = i(54318),
        r = "http://127.0.0.1:8000/hr/",
        d = (function () {
          function e() {
            (0, l.Z)(this, e);
          }
          return (
            (0, s.Z)(e, [
              {
                key: "getFacilities",
                value: function () {
                  return a().get(r + "hr-helper/", {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "getHRList",
                value: function (e) {
                  return a().get(r + "?id=" + e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "putHR",
                value: function (e) {
                  return a().put(r, e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "postHR",
                value: function (e) {
                  return a().post(r, e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "deleteHR",
                value: function (e) {
                  return a().delete(r, e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new d();
    },
    95907: function (e, n, i) {
      var l = i(80184);
      n.Z = function () {
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            width: "20",
            height: "20",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, l.jsx)("path", {
              d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
            }),
          }),
        });
      };
    },
    23821: function (e, n, i) {
      var l = i(39281),
        s = i(79836),
        c = i(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)(l.Z, {
            children: (0, c.jsx)(s.Z, { children: n }),
          }),
        });
      };
    },
    5227: function () {},
    87004: function () {},
    65487: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=8546.9b472b45.chunk.js.map
