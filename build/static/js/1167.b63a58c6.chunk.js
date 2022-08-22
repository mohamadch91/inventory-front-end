"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1167],
  {
    53596: function (e, n, i) {
      var s = i(15671),
        a = i(43144),
        l = i(74569),
        r = i.n(l),
        t = i(54318),
        c = "http://127.0.0.1:8000/hr/",
        d = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, a.Z)(e, [
              {
                key: "getFacilities",
                value: function () {
                  return r().get(c + "hr-helper/", {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "getHRList",
                value: function (e) {
                  return r().get(c + "?id=" + e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "putHR",
                value: function (e) {
                  return r().put(c, e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "postHR",
                value: function (e) {
                  return r().post(c, e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "deleteHR",
                value: function (e) {
                  return r().delete(c, e, {
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
      var s = i(80184);
      n.Z = function () {
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, s.jsx)("g", {
              children: (0, s.jsx)("g", {
                children: (0, s.jsx)("path", {
                  d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
                }),
              }),
            }),
          }),
        });
      };
    },
    23821: function (e, n, i) {
      var s = i(39281),
        a = i(79836),
        l = i(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(s.Z, {
            children: (0, l.jsx)(a.Z, { children: n }),
          }),
        });
      };
    },
    31167: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return w;
          },
        });
      var s = i(4942),
        a = i(1413),
        l = i(70885),
        r = i(56890),
        t = i(35855),
        c = i(53994),
        d = i(53382),
        o = i(16536),
        u = i(72791),
        m = i(95907),
        x = i(23821),
        h = i(65218),
        f = i(53596),
        v = i(15671),
        j = i(43144),
        p = i(74569),
        g = i.n(p),
        Z = i(54318),
        b = "http://127.0.0.1:8000/auth/",
        y = new ((function () {
          function e() {
            (0, v.Z)(this, e);
          }
          return (
            (0, j.Z)(e, [
              {
                key: "getUsersByFacilityId",
                value: function (e) {
                  return g().get(b + "get-users/?id=" + e, {
                    headers: { Authorization: (0, Z.Z)() },
                  });
                },
              },
              {
                key: "updateUser",
                value: function (e) {
                  return g().put(b + "update_profile/" + e.pk + "/", e, {
                    headers: { Authorization: (0, Z.Z)() },
                  });
                },
              },
              {
                key: "addUser",
                value: function (e) {
                  return g().post(b + "register/", e, {
                    headers: { Authorization: (0, Z.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })())(),
        N = i(59909),
        k = (i(93650), i(2423), i(65487), i(5227), i(87004), i(80184));
      var w = function () {
        var e = (0, u.useState)([]),
          n = (0, l.Z)(e, 2),
          i = n[0],
          v = n[1],
          j = (0, u.useState)({}),
          p = (0, l.Z)(j, 2),
          g = p[0],
          Z = p[1],
          b = (0, u.useState)({
            facadmin: !1,
            itemadmin: !1,
            reportadmin: !1,
            useradmin: !1,
            is_superuser: !1,
          }),
          w = (0, l.Z)(b, 2),
          C = w[0],
          P = w[1],
          _ = (0, u.useState)(!0),
          F = (0, l.Z)(_, 2),
          S = F[0],
          U = F[1],
          q = (0, u.useState)([]),
          z = (0, l.Z)(q, 2),
          M = z[0],
          A = z[1],
          I = (0, u.useState)(null),
          R = (0, l.Z)(I, 2),
          D = R[0],
          H = R[1],
          B = (0, u.useState)(!1),
          E = (0, l.Z)(B, 2),
          T = E[0],
          V = E[1],
          O = (0, u.useState)(!1),
          L = (0, l.Z)(O, 2),
          X = L[0],
          G = L[1],
          J = (0, u.useState)(0),
          K = (0, l.Z)(J, 2),
          Q = K[0],
          W = K[1];
        function Y(e) {
          y.getUsersByFacilityId(e)
            .then(function (e) {
              v(e.data), U(!1);
            })
            .catch(function (e) {
              h.ZP.error("There is a problem loading data"), U(!1);
            });
        }
        function $(e) {
          var n = e.target,
            i = n.name,
            l = n.value;
          Z((0, a.Z)((0, a.Z)({}, g), {}, (0, s.Z)({}, i, l)));
        }
        function ee(e) {
          var n = e.target,
            i = n.name,
            l = n.value;
          P((0, a.Z)((0, a.Z)({}, C), {}, (0, s.Z)({}, i, l)));
        }
        return (
          (0, u.useEffect)(function () {
            f.Z.getFacilities()
              .then(function (e) {
                var n = e.data;
                A(n), H(n[0].id), U(!1), Y(n[0].id);
              })
              .catch(function (e) {
                h.ZP.error("There is a problem loading data"), U(!1);
              });
          }, []),
          (0, u.useEffect)(
            function () {
              var e;
              M &&
                P(
                  (0, a.Z)(
                    (0, a.Z)({}, C),
                    {},
                    {
                      facilityid:
                        null === (e = M[0]) || void 0 === e ? void 0 : e.id,
                    }
                  )
                );
            },
            [M]
          ),
          (0, k.jsxs)("div", {
            className: "item-class-page hr-page",
            children: [
              (0, k.jsx)("h3", {
                className: "page-title mb-3",
                children: "User by Facility",
              }),
              S
                ? (0, k.jsx)(N.Z, {})
                : (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsxs)("div", {
                        className: "row mb-4 mt-4",
                        children: [
                          (0, k.jsx)("div", {
                            className: "col-md-2 d-flex align-items-center",
                            children: (0, k.jsx)("h4", {
                              className: "page-title",
                              children: "Main Facility",
                            }),
                          }),
                          (0, k.jsx)("div", {
                            className: "col-md-10 d-flex",
                            children: (0, k.jsx)("select", {
                              name: "facilityid",
                              onChange: function (e) {
                                H(e.target.value), U(!0), Y(e.target.value);
                              },
                              value: D,
                              children: M.map(function (e, n) {
                                return (0,
                                k.jsx)("option", { value: e.id, children: e.name }, e.id);
                              }),
                            }),
                          }),
                        ],
                      }),
                      M &&
                        i &&
                        i.length > 0 &&
                        (0, k.jsx)("div", {
                          children: (0, k.jsxs)(x.Z, {
                            children: [
                              (0, k.jsx)(r.Z, {
                                children: (0, k.jsxs)(t.Z, {
                                  children: [
                                    (0, k.jsx)(c.Z, {}),
                                    (0, k.jsx)(c.Z, { children: "Name" }),
                                    (0, k.jsx)(c.Z, { children: "Username" }),
                                    (0, k.jsx)(c.Z, {
                                      children: "Facility Name",
                                    }),
                                    (0, k.jsx)(c.Z, {
                                      children: "Manage Facilities",
                                    }),
                                    (0, k.jsx)(c.Z, {
                                      children: "Manage Items",
                                    }),
                                    (0, k.jsx)(c.Z, {
                                      children: "View Reports",
                                    }),
                                    (0, k.jsx)(c.Z, {
                                      children: "Manage Users",
                                    }),
                                    (0, k.jsx)(c.Z, { children: "Super User" }),
                                    (0, k.jsx)(c.Z, { children: "Position" }),
                                    (0, k.jsx)(c.Z, { children: "Edit" }),
                                  ],
                                }),
                              }),
                              (0, k.jsx)(d.Z, {
                                children:
                                  i &&
                                  i.map(function (e, n) {
                                    var s, a;
                                    return (0, k.jsx)(k.Fragment, {
                                      children: (0, k.jsxs)(t.Z, {
                                        children: [
                                          (0, k.jsx)(c.Z, { children: e.pk }),
                                          (0, k.jsx)(c.Z, { children: e.name }),
                                          (0, k.jsx)(c.Z, {
                                            children: e.username,
                                          }),
                                          (0, k.jsx)(c.Z, {
                                            children:
                                              null ===
                                                ((a = e.facilityid),
                                                (s = M.find(function (e) {
                                                  return e.id === a;
                                                }))) || void 0 === s
                                                ? void 0
                                                : s.name,
                                          }),
                                          (0, k.jsx)(c.Z, {
                                            children: (0, k.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.facadmin,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(c.Z, {
                                            children: (0, k.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.itemadmin,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(c.Z, {
                                            children: (0, k.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.reportadmin,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(c.Z, {
                                            children: (0, k.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.useradmin,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(c.Z, {
                                            children: (0, k.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.is_superuser,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(c.Z, {
                                            children: e.position,
                                          }),
                                          (0, k.jsx)(c.Z, {
                                            children: (0, k.jsx)("button", {
                                              className: "edit-btn",
                                              onClick: function (n) {
                                                return (function (e) {
                                                  var n = i.find(function (n) {
                                                    return n.pk === e.pk;
                                                  });
                                                  Z(n), G(!0);
                                                })(e);
                                              },
                                              children: (0, k.jsx)(m.Z, {}),
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
                      (0, k.jsx)(o.Z, {
                        show: X,
                        onHide: function () {
                          G(!1), W(0);
                        },
                        children: (0, k.jsx)("form", {
                          onSubmit: function (e) {
                            var n;
                            if (
                              (e.preventDefault(),
                              Object.keys(g).every(function (e) {
                                return "" !== g[e];
                              }))
                            ) {
                              U(!0);
                              var i = {
                                pk: (n = g).pk,
                                password: n.password,
                                is_superuser: n.is_superuser,
                                facilityid: n.facilityid,
                                username: n.username,
                                idnumber: n.idnumber,
                                position: n.position,
                                phone: n.phone,
                                facadmin: n.facadmin,
                                itemadmin: n.itemadmin,
                                reportadmin: n.reportadmin,
                                useradmin: n.useradmin,
                              };
                              console.log(g),
                                y
                                  .updateUser(i)
                                  .then(function (e) {
                                    U(!0),
                                      Y(D),
                                      Z({}),
                                      G(!1),
                                      W(0),
                                      h.ZP.success("user edit succesfuly");
                                  })
                                  .catch(function (e) {
                                    h.ZP.error(
                                      "There is a problem sending data"
                                    ),
                                      U(!1);
                                  });
                            } else h.ZP.error("Please fill all the fields");
                          },
                          children:
                            0 === Q
                              ? (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    (0, k.jsx)("h3", {
                                      className: "mb-3 text-center",
                                      children: "Edit user",
                                    }),
                                    (0, k.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, k.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, k.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, k.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "Facility",
                                        }),
                                        (0, k.jsx)("select", {
                                          name: "facilityid",
                                          onChange: $,
                                          value:
                                            null === g || void 0 === g
                                              ? void 0
                                              : g.facilityid,
                                          children: M.map(function (e, n) {
                                            return (0,
                                            k.jsx)("option", { value: e.id, selected: e.id === (null === g || void 0 === g ? void 0 : g.facilityid), children: e.name }, e.id);
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "Name",
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "name",
                                          type: "text",
                                          onChange: $,
                                          value:
                                            null === g || void 0 === g
                                              ? void 0
                                              : g.name,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "Username",
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "username",
                                          type: "text",
                                          onChange: $,
                                          value:
                                            null === g || void 0 === g
                                              ? void 0
                                              : g.username,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "Password",
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "password",
                                          type: "password",
                                          onChange: $,
                                          value:
                                            null === g || void 0 === g
                                              ? void 0
                                              : g.password,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "Confirm Password",
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "conf_password",
                                          type: "password",
                                          onChange: $,
                                          value:
                                            null === g || void 0 === g
                                              ? void 0
                                              : g.conf_password,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsx)("button", {
                                      className: "save-btn w-100",
                                      onClick: function (e) {
                                        e.preventDefault(),
                                          (null === g || void 0 === g
                                            ? void 0
                                            : g.password) ===
                                          (null === g || void 0 === g
                                            ? void 0
                                            : g.conf_password)
                                            ? W(function (e) {
                                                return e + 1;
                                              })
                                            : h.ZP.error(
                                                "Passwords doesn't match"
                                              );
                                      },
                                      children: "Next",
                                    }),
                                  ],
                                })
                              : (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "ID Number",
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "idnumber",
                                          type: "number",
                                          onChange: $,
                                          value:
                                            null === g || void 0 === g
                                              ? void 0
                                              : g.idnumber,
                                          required: !0,
                                          disabled: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "Position",
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "position",
                                          type: "text",
                                          onChange: $,
                                          value:
                                            null === g || void 0 === g
                                              ? void 0
                                              : g.position,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "Phone Number",
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "phone",
                                          type: "tel",
                                          onChange: $,
                                          value:
                                            null === g || void 0 === g
                                              ? void 0
                                              : g.phone,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className: "row mt-3",
                                      children: [
                                        (0, k.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, k.jsx)("label", {
                                              className: "m-0 mr-2",
                                              children: "Super user",
                                            }),
                                            (0, k.jsx)("input", {
                                              name: "is_superuser",
                                              type: "checkbox",
                                              onChange: function () {
                                                return Z(
                                                  (0, a.Z)(
                                                    (0, a.Z)({}, g),
                                                    {},
                                                    {
                                                      is_superuser:
                                                        !g.is_superuser,
                                                    }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === g || void 0 === g
                                                  ? void 0
                                                  : g.is_superuser,
                                            }),
                                          ],
                                        }),
                                        (0, k.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, k.jsx)("label", {
                                              className: "m-0 mr-2",
                                              children: "Manage Facilities",
                                            }),
                                            (0, k.jsx)("input", {
                                              name: "facadmin",
                                              type: "checkbox",
                                              onChange: function () {
                                                return Z(
                                                  (0, a.Z)(
                                                    (0, a.Z)({}, g),
                                                    {},
                                                    { facadmin: !g.facadmin }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === g || void 0 === g
                                                  ? void 0
                                                  : g.facadmin,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className: "row mt-3",
                                      children: [
                                        (0, k.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, k.jsx)("label", {
                                              className: "m-0 mr-1",
                                              children: "Manage Items",
                                            }),
                                            (0, k.jsx)("input", {
                                              name: "itemadmin",
                                              type: "checkbox",
                                              onChange: function () {
                                                return Z(
                                                  (0, a.Z)(
                                                    (0, a.Z)({}, g),
                                                    {},
                                                    { itemadmin: !g.itemadmin }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === g || void 0 === g
                                                  ? void 0
                                                  : g.itemadmin,
                                            }),
                                          ],
                                        }),
                                        (0, k.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, k.jsx)("label", {
                                              className: "m-0 mr-2",
                                              children: "View Reports",
                                            }),
                                            (0, k.jsx)("input", {
                                              name: "reportadmin",
                                              type: "checkbox",
                                              onChange: function () {
                                                return Z(
                                                  (0, a.Z)(
                                                    (0, a.Z)({}, g),
                                                    {},
                                                    {
                                                      reportadmin:
                                                        !g.reportadmin,
                                                    }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === g || void 0 === g
                                                  ? void 0
                                                  : g.reportadmin,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, k.jsx)("div", {
                                      className: "row mt-3",
                                      children: (0, k.jsxs)("div", {
                                        className:
                                          "d-flex align-items-center justify-content-center col-sm-12",
                                        children: [
                                          (0, k.jsx)("label", {
                                            className: "m-0 mr-2",
                                            children: "Manage Users",
                                          }),
                                          (0, k.jsx)("input", {
                                            name: "useradmin",
                                            type: "checkbox",
                                            onChange: function () {
                                              return Z(
                                                (0, a.Z)(
                                                  (0, a.Z)({}, g),
                                                  {},
                                                  { useradmin: !g.useradmin }
                                                )
                                              );
                                            },
                                            checked:
                                              null === g || void 0 === g
                                                ? void 0
                                                : g.useradmin,
                                            value:
                                              null === g || void 0 === g
                                                ? void 0
                                                : g.useradmin,
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, k.jsx)("button", {
                                      className: "save-btn w-100",
                                      onClick: function () {
                                        return W(function (e) {
                                          return e - 1;
                                        });
                                      },
                                      children: "Back",
                                    }),
                                    (0, k.jsx)("button", {
                                      className: "save-btn w-100",
                                      type: "submit",
                                      children: "Save",
                                    }),
                                  ],
                                }),
                        }),
                      }),
                      (0, k.jsx)("button", {
                        className: "modal-btn",
                        onClick: function () {
                          V(function (e) {
                            return !e;
                          });
                        },
                        children: "User add",
                      }),
                      (0, k.jsx)(o.Z, {
                        show: T,
                        onHide: function () {
                          V(!1), W(0);
                        },
                        children: (0, k.jsx)("form", {
                          onSubmit: function (e) {
                            var n;
                            if (
                              (e.preventDefault(),
                              Object.keys(C).every(function (e) {
                                return "" !== C[e];
                              }))
                            ) {
                              U(!0);
                              var i = {
                                password: (n = C).password,
                                is_superuser: n.is_superuser,
                                facilityid: n.facilityid,
                                username: n.username,
                                idnumber: n.idnumber,
                                position: n.position,
                                phone: n.phone,
                                facadmin: n.facadmin,
                                itemadmin: n.itemadmin,
                                reportadmin: n.reportadmin,
                                useradmin: n.useradmin,
                                name: n.name,
                              };
                              y.addUser(i)
                                .then(function (e) {
                                  h.ZP.success("user add succesfully"),
                                    U(!0),
                                    Y(D),
                                    P(
                                      (0, a.Z)(
                                        (0, a.Z)({}, C),
                                        {},
                                        {
                                          facadmin: !1,
                                          itemadmin: !1,
                                          reportadmin: !1,
                                          useradmin: !1,
                                          is_superuser: !1,
                                        }
                                      )
                                    ),
                                    V(!1),
                                    W(0);
                                })
                                .catch(function (e) {
                                  h.ZP.error("There is a problem sending data"),
                                    U(!1);
                                });
                            } else h.ZP.error("Please fill all the fields");
                          },
                          children:
                            0 === Q
                              ? (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    (0, k.jsx)("h3", {
                                      className: "mb-3 text-center",
                                      children: "Add user",
                                    }),
                                    (0, k.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, k.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, k.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, k.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "Facility",
                                        }),
                                        (0, k.jsx)("select", {
                                          name: "facilityid",
                                          onChange: ee,
                                          value:
                                            null === C || void 0 === C
                                              ? void 0
                                              : C.facilityid,
                                          children: M.map(function (e, n) {
                                            return (0,
                                            k.jsx)("option", { value: e.id, selected: e.id === (null === C || void 0 === C ? void 0 : C.facilityid), children: e.name }, e.id);
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "Name",
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "name",
                                          type: "text",
                                          onChange: ee,
                                          value:
                                            null === C || void 0 === C
                                              ? void 0
                                              : C.name,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "Username",
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "username",
                                          type: "text",
                                          onChange: ee,
                                          value:
                                            null === C || void 0 === C
                                              ? void 0
                                              : C.username,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "Password",
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "password",
                                          type: "password",
                                          onChange: ee,
                                          value:
                                            null === C || void 0 === C
                                              ? void 0
                                              : C.password,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "Confirm Password",
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "conf_password",
                                          type: "password",
                                          onChange: ee,
                                          value:
                                            null === C || void 0 === C
                                              ? void 0
                                              : C.conf_password,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsx)("button", {
                                      className: "save-btn w-100",
                                      onClick: function (e) {
                                        e.preventDefault(),
                                          (null === C || void 0 === C
                                            ? void 0
                                            : C.password) ===
                                          (null === C || void 0 === C
                                            ? void 0
                                            : C.conf_password)
                                            ? W(function (e) {
                                                return e + 1;
                                              })
                                            : h.ZP.error(
                                                "Passwords doesn't match"
                                              );
                                      },
                                      children: "Next",
                                    }),
                                  ],
                                })
                              : (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "ID Number",
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "idnumber",
                                          type: "number",
                                          onChange: ee,
                                          value:
                                            null === C || void 0 === C
                                              ? void 0
                                              : C.idnumber,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "Position",
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "position",
                                          type: "text",
                                          onChange: ee,
                                          value:
                                            null === C || void 0 === C
                                              ? void 0
                                              : C.position,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: "Phone Number",
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "phone",
                                          type: "tel",
                                          onChange: ee,
                                          value:
                                            null === C || void 0 === C
                                              ? void 0
                                              : C.phone,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className: "row mt-3",
                                      children: [
                                        (0, k.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, k.jsx)("label", {
                                              className: "m-0 mr-2",
                                              children: "Super user",
                                            }),
                                            (0, k.jsx)("input", {
                                              name: "is_superuser",
                                              type: "checkbox",
                                              onChange: function () {
                                                return P(
                                                  (0, a.Z)(
                                                    (0, a.Z)({}, C),
                                                    {},
                                                    {
                                                      is_superuser:
                                                        !C.is_superuser,
                                                    }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === C || void 0 === C
                                                  ? void 0
                                                  : C.is_superuser,
                                            }),
                                          ],
                                        }),
                                        (0, k.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, k.jsx)("label", {
                                              className: "m-0 mr-2",
                                              children: "Manage Facilities",
                                            }),
                                            (0, k.jsx)("input", {
                                              name: "facadmin",
                                              type: "checkbox",
                                              onChange: function () {
                                                return P(
                                                  (0, a.Z)(
                                                    (0, a.Z)({}, C),
                                                    {},
                                                    { facadmin: !C.facadmin }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === C || void 0 === C
                                                  ? void 0
                                                  : C.facadmin,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className: "row mt-3",
                                      children: [
                                        (0, k.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, k.jsx)("label", {
                                              className: "m-0 mr-1",
                                              children: "Manage Items",
                                            }),
                                            (0, k.jsx)("input", {
                                              name: "itemadmin",
                                              type: "checkbox",
                                              onChange: function () {
                                                return P(
                                                  (0, a.Z)(
                                                    (0, a.Z)({}, C),
                                                    {},
                                                    { itemadmin: !C.itemadmin }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === C || void 0 === C
                                                  ? void 0
                                                  : C.itemadmin,
                                            }),
                                          ],
                                        }),
                                        (0, k.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, k.jsx)("label", {
                                              className: "m-0 mr-2",
                                              children: "View Reports",
                                            }),
                                            (0, k.jsx)("input", {
                                              name: "reportadmin",
                                              type: "checkbox",
                                              onChange: function () {
                                                return P(
                                                  (0, a.Z)(
                                                    (0, a.Z)({}, C),
                                                    {},
                                                    {
                                                      reportadmin:
                                                        !C.reportadmin,
                                                    }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === C || void 0 === C
                                                  ? void 0
                                                  : C.reportadmin,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, k.jsx)("div", {
                                      className: "row mt-3",
                                      children: (0, k.jsxs)("div", {
                                        className:
                                          "d-flex align-items-center justify-content-center col-sm-12",
                                        children: [
                                          (0, k.jsx)("label", {
                                            className: "m-0 mr-2",
                                            children: "Manage Users",
                                          }),
                                          (0, k.jsx)("input", {
                                            name: "useradmin",
                                            type: "checkbox",
                                            onChange: function () {
                                              return P(
                                                (0, a.Z)(
                                                  (0, a.Z)({}, C),
                                                  {},
                                                  { useradmin: !C.useradmin }
                                                )
                                              );
                                            },
                                            checked:
                                              null === C || void 0 === C
                                                ? void 0
                                                : C.useradmin,
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, k.jsx)("button", {
                                      className: "save-btn w-100",
                                      onClick: function () {
                                        return W(function (e) {
                                          return e - 1;
                                        });
                                      },
                                      children: "Back",
                                    }),
                                    (0, k.jsx)("button", {
                                      className: "save-btn w-100",
                                      type: "submit",
                                      children: "Save",
                                    }),
                                  ],
                                }),
                        }),
                      }),
                    ],
                  }),
            ],
          })
        );
      };
    },
    5227: function () {},
    87004: function () {},
    65487: function () {},
    2423: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=1167.b63a58c6.chunk.js.map
