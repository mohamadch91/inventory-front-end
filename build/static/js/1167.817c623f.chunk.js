"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1167],
  {
    53596: function (e, n, i) {
      var s = i(15671),
        l = i(43144),
        r = i(74569),
        a = i.n(r),
        c = i(54318),
        t = "http://127.0.0.1:8000/hr/",
        d = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, l.Z)(e, [
              {
                key: "getFacilities",
                value: function () {
                  return a().get(t + "hr-helper/", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getHRList",
                value: function (e) {
                  return a().get(t + "?id=" + e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putHR",
                value: function (e) {
                  return a().put(t, e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "postHR",
                value: function (e) {
                  return a().post(t, e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "deleteHR",
                value: function (e) {
                  return a().delete(t, e, {
                    headers: { Authorization: (0, c.Z)() },
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
            width: "20",
            height: "20",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, s.jsx)("path", {
              d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
            }),
          }),
        });
      };
    },
    23821: function (e, n, i) {
      var s = i(39281),
        l = i(79836),
        r = i(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(s.Z, {
            children: (0, r.jsx)(l.Z, { children: n }),
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
        l = i(1413),
        r = i(29439),
        a = i(56890),
        c = i(35855),
        t = i(53994),
        d = i(53382),
        o = i(16536),
        u = i(72791),
        m = i(95907),
        x = i(23821),
        h = i(65218),
        j = i(53596),
        f = i(15671),
        v = i(43144),
        p = i(39877),
        g = i(54318),
        Z = "http://127.0.0.1:8000/auth/",
        b = new ((function () {
          function e() {
            (0, f.Z)(this, e);
          }
          return (
            (0, v.Z)(e, [
              {
                key: "getUsersByFacilityId",
                value: function (e) {
                  return p.Z.get(Z + "get-users/?id=" + e, {
                    headers: { Authorization: (0, g.Z)() },
                  });
                },
              },
              {
                key: "updateUser",
                value: function (e) {
                  return p.Z.put(Z + "update_profile/" + e.pk + "/", e, {
                    headers: { Authorization: (0, g.Z)() },
                  });
                },
              },
              {
                key: "addUser",
                value: function (e) {
                  return p.Z.post(Z + "register/", e, {
                    headers: { Authorization: (0, g.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })())(),
        y = i(59909),
        N = (i(93650), i(2423), i(65487), i(5227), i(87004), i(30606)),
        k = i(80184);
      var w = function () {
        var e = (0, u.useState)([]),
          n = (0, r.Z)(e, 2),
          i = n[0],
          f = n[1],
          v = (0, u.useState)({}),
          p = (0, r.Z)(v, 2),
          g = p[0],
          Z = p[1],
          w = (0, u.useState)({
            facadmin: !1,
            itemadmin: !1,
            reportadmin: !1,
            useradmin: !1,
            is_superuser: !1,
          }),
          C = (0, r.Z)(w, 2),
          P = C[0],
          _ = C[1],
          F = (0, u.useState)(!0),
          S = (0, r.Z)(F, 2),
          q = S[0],
          U = S[1],
          z = (0, u.useState)([]),
          A = (0, r.Z)(z, 2),
          M = A[0],
          I = A[1],
          R = (0, u.useState)(null),
          D = (0, r.Z)(R, 2),
          H = D[0],
          B = D[1],
          E = (0, u.useState)(!1),
          T = (0, r.Z)(E, 2),
          V = T[0],
          O = T[1],
          L = (0, u.useState)(!1),
          X = (0, r.Z)(L, 2),
          G = X[0],
          J = X[1],
          K = (0, u.useState)(0),
          Q = (0, r.Z)(K, 2),
          W = Q[0],
          Y = Q[1];
        function $(e) {
          b.getUsersByFacilityId(e)
            .then(function (e) {
              f(e.data), U(!1);
            })
            .catch(function (e) {
              h.ZP.error("There is a problem loading data"), U(!1);
            });
        }
        function ee(e) {
          var n = e.target,
            i = n.name,
            r = n.value;
          Z((0, l.Z)((0, l.Z)({}, g), {}, (0, s.Z)({}, i, r)));
        }
        function ne(e) {
          var n = e.target,
            i = n.name,
            r = n.value;
          _((0, l.Z)((0, l.Z)({}, P), {}, (0, s.Z)({}, i, r)));
        }
        return (
          (0, u.useEffect)(function () {
            j.Z.getFacilities()
              .then(function (e) {
                var n = e.data;
                I(n), B(n[0].id), U(!1), $(n[0].id);
              })
              .catch(function (e) {
                h.ZP.error("There is a problem loading data"), U(!1);
              });
          }, []),
          (0, u.useEffect)(
            function () {
              var e;
              M &&
                _(
                  (0, l.Z)(
                    (0, l.Z)({}, P),
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
                children: (0, k.jsx)(N.c, { children: "User by Facility" }),
              }),
              q
                ? (0, k.jsx)(y.Z, {})
                : (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsxs)("div", {
                        className: "row mb-4 mt-4",
                        children: [
                          (0, k.jsx)("div", {
                            className: "col-md-2 d-flex align-items-center",
                            children: (0, k.jsx)("h4", {
                              className: "page-title",
                              children: (0, k.jsx)(N.c, {
                                children: "Main Facility",
                              }),
                            }),
                          }),
                          (0, k.jsx)("div", {
                            className: "col-md-10 d-flex",
                            children: (0, k.jsx)("select", {
                              name: "facilityid",
                              onChange: function (e) {
                                B(e.target.value), U(!0), $(e.target.value);
                              },
                              value: H,
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
                              (0, k.jsx)(a.Z, {
                                children: (0, k.jsxs)(c.Z, {
                                  children: [
                                    (0, k.jsx)(t.Z, {}),
                                    (0, k.jsx)(t.Z, {
                                      children: (0, k.jsx)(N.c, {
                                        children: "Name",
                                      }),
                                    }),
                                    (0, k.jsx)(t.Z, {
                                      children: (0, k.jsx)(N.c, {
                                        children: "Username",
                                      }),
                                    }),
                                    (0, k.jsx)(t.Z, {
                                      children: (0, k.jsx)(N.c, {
                                        children: "Facility Name",
                                      }),
                                    }),
                                    (0, k.jsx)(t.Z, {
                                      children: (0, k.jsx)(N.c, {
                                        children: "Manage Facilities",
                                      }),
                                    }),
                                    (0, k.jsx)(t.Z, {
                                      children: (0, k.jsx)(N.c, {
                                        children: "Manage Items",
                                      }),
                                    }),
                                    (0, k.jsx)(t.Z, {
                                      children: (0, k.jsx)(N.c, {
                                        children: "View Reports",
                                      }),
                                    }),
                                    (0, k.jsx)(t.Z, {
                                      children: (0, k.jsx)(N.c, {
                                        children: "Manage Users",
                                      }),
                                    }),
                                    (0, k.jsx)(t.Z, {
                                      children: (0, k.jsx)(N.c, {
                                        children: "Super User",
                                      }),
                                    }),
                                    (0, k.jsx)(t.Z, {
                                      children: (0, k.jsx)(N.c, {
                                        children: "Position",
                                      }),
                                    }),
                                    (0, k.jsx)(t.Z, {
                                      children: (0, k.jsx)(N.c, {
                                        children: "Edit",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, k.jsx)(d.Z, {
                                children:
                                  i &&
                                  i.map(function (e, n) {
                                    var s, l;
                                    return (0, k.jsx)(k.Fragment, {
                                      children: (0, k.jsxs)(c.Z, {
                                        children: [
                                          (0, k.jsx)(t.Z, { children: e.pk }),
                                          (0, k.jsx)(t.Z, { children: e.name }),
                                          (0, k.jsx)(t.Z, {
                                            children: e.username,
                                          }),
                                          (0, k.jsx)(t.Z, {
                                            children:
                                              null ===
                                                ((l = e.facilityid),
                                                (s = M.find(function (e) {
                                                  return e.id === l;
                                                }))) || void 0 === s
                                                ? void 0
                                                : s.name,
                                          }),
                                          (0, k.jsx)(t.Z, {
                                            children: (0, k.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.facadmin,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(t.Z, {
                                            children: (0, k.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.itemadmin,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(t.Z, {
                                            children: (0, k.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.reportadmin,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(t.Z, {
                                            children: (0, k.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.useradmin,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(t.Z, {
                                            children: (0, k.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.is_superuser,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(t.Z, {
                                            children: e.position,
                                          }),
                                          (0, k.jsx)(t.Z, {
                                            children: (0, k.jsx)("button", {
                                              className: "edit-btn",
                                              onClick: function (n) {
                                                return (function (e) {
                                                  var n = i.find(function (n) {
                                                    return n.pk === e.pk;
                                                  });
                                                  Z(n), J(!0);
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
                        show: G,
                        onHide: function () {
                          J(!1), Y(0);
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
                                b
                                  .updateUser(i)
                                  .then(function (e) {
                                    U(!0),
                                      $(H),
                                      Z({}),
                                      J(!1),
                                      Y(0),
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
                            0 === W
                              ? (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    (0, k.jsx)("h3", {
                                      className: "mb-3 text-center",
                                      children: (0, k.jsx)(N.c, {
                                        children: "Edit user",
                                      }),
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
                                          onChange: ee,
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
                                          onChange: ee,
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
                                          onChange: ee,
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
                                          onChange: ee,
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
                                            ? Y(function (e) {
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
                                          onChange: ee,
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
                                          onChange: ee,
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
                                                  (0, l.Z)(
                                                    (0, l.Z)({}, g),
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
                                                  (0, l.Z)(
                                                    (0, l.Z)({}, g),
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
                                                  (0, l.Z)(
                                                    (0, l.Z)({}, g),
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
                                                  (0, l.Z)(
                                                    (0, l.Z)({}, g),
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
                                                (0, l.Z)(
                                                  (0, l.Z)({}, g),
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
                                        return Y(function (e) {
                                          return e - 1;
                                        });
                                      },
                                      children: (0, k.jsx)(N.c, {
                                        children: "Back",
                                      }),
                                    }),
                                    (0, k.jsx)("button", {
                                      className: "save-btn w-100",
                                      type: "submit",
                                      children: (0, k.jsx)(N.c, {
                                        children: "Save",
                                      }),
                                    }),
                                  ],
                                }),
                        }),
                      }),
                      (0, k.jsx)("button", {
                        className: "modal-btn",
                        onClick: function () {
                          O(function (e) {
                            return !e;
                          });
                        },
                        children: (0, k.jsx)(N.c, { children: "Add user" }),
                      }),
                      (0, k.jsx)(o.Z, {
                        show: V,
                        onHide: function () {
                          O(!1), Y(0);
                        },
                        children: (0, k.jsx)("form", {
                          onSubmit: function (e) {
                            var n;
                            if (
                              (e.preventDefault(),
                              Object.keys(P).every(function (e) {
                                return "" !== P[e];
                              }))
                            ) {
                              U(!0);
                              var i = {
                                password: (n = P).password,
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
                              b.addUser(i)
                                .then(function (e) {
                                  h.ZP.success("user added succesfully"),
                                    U(!0),
                                    $(H),
                                    _(
                                      (0, l.Z)(
                                        (0, l.Z)({}, P),
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
                                    O(!1),
                                    Y(0);
                                })
                                .catch(function (e) {
                                  h.ZP.error("There is a problem sending data"),
                                    U(!1);
                                });
                            } else h.ZP.error("Please fill all the fields");
                          },
                          children:
                            0 === W
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
                                          children: (0, k.jsx)(N.c, {
                                            children: "Facility",
                                          }),
                                        }),
                                        (0, k.jsx)("select", {
                                          name: "facilityid",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.facilityid,
                                          children: M.map(function (e, n) {
                                            return (0,
                                            k.jsx)("option", { value: e.id, selected: e.id === (null === P || void 0 === P ? void 0 : P.facilityid), children: e.name }, e.id);
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: (0, k.jsx)(N.c, {
                                            children: "Name",
                                          }),
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "name",
                                          type: "text",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.name,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: (0, k.jsx)(N.c, {
                                            children: "Username",
                                          }),
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "username",
                                          type: "text",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.username,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: (0, k.jsx)(N.c, {
                                            children: "Password",
                                          }),
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "password",
                                          type: "password",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.password,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: (0, k.jsx)(N.c, {
                                            children: "Confirm Password",
                                          }),
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "conf_password",
                                          type: "password",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.conf_password,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsx)("button", {
                                      className: "save-btn w-100",
                                      onClick: function (e) {
                                        e.preventDefault(),
                                          (null === P || void 0 === P
                                            ? void 0
                                            : P.password) ===
                                          (null === P || void 0 === P
                                            ? void 0
                                            : P.conf_password)
                                            ? Y(function (e) {
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
                                          children: (0, k.jsx)(N.c, {
                                            children: "ID Number",
                                          }),
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "idnumber",
                                          type: "number",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.idnumber,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: (0, k.jsx)(N.c, {
                                            children: "Position",
                                          }),
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "position",
                                          type: "text",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.position,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, k.jsx)("label", {
                                          children: (0, k.jsx)(N.c, {
                                            children: "Phone Number",
                                          }),
                                        }),
                                        (0, k.jsx)("input", {
                                          name: "phone",
                                          type: "tel",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.phone,
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
                                              children: (0, k.jsx)(N.c, {
                                                children: "Super user",
                                              }),
                                            }),
                                            (0, k.jsx)("input", {
                                              name: "is_superuser",
                                              type: "checkbox",
                                              onChange: function () {
                                                return _(
                                                  (0, l.Z)(
                                                    (0, l.Z)({}, P),
                                                    {},
                                                    {
                                                      is_superuser:
                                                        !P.is_superuser,
                                                    }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === P || void 0 === P
                                                  ? void 0
                                                  : P.is_superuser,
                                            }),
                                          ],
                                        }),
                                        (0, k.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, k.jsx)("label", {
                                              className: "m-0 mr-2",
                                              children: (0, k.jsx)(N.c, {
                                                children: "Manage Facilities",
                                              }),
                                            }),
                                            (0, k.jsx)("input", {
                                              name: "facadmin",
                                              type: "checkbox",
                                              onChange: function () {
                                                return _(
                                                  (0, l.Z)(
                                                    (0, l.Z)({}, P),
                                                    {},
                                                    { facadmin: !P.facadmin }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === P || void 0 === P
                                                  ? void 0
                                                  : P.facadmin,
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
                                              children: (0, k.jsx)(N.c, {
                                                children: "Manage Items",
                                              }),
                                            }),
                                            (0, k.jsx)("input", {
                                              name: "itemadmin",
                                              type: "checkbox",
                                              onChange: function () {
                                                return _(
                                                  (0, l.Z)(
                                                    (0, l.Z)({}, P),
                                                    {},
                                                    { itemadmin: !P.itemadmin }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === P || void 0 === P
                                                  ? void 0
                                                  : P.itemadmin,
                                            }),
                                          ],
                                        }),
                                        (0, k.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, k.jsx)("label", {
                                              className: "m-0 mr-2",
                                              children: (0, k.jsx)(N.c, {
                                                children: "View Reports",
                                              }),
                                            }),
                                            (0, k.jsx)("input", {
                                              name: "reportadmin",
                                              type: "checkbox",
                                              onChange: function () {
                                                return _(
                                                  (0, l.Z)(
                                                    (0, l.Z)({}, P),
                                                    {},
                                                    {
                                                      reportadmin:
                                                        !P.reportadmin,
                                                    }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === P || void 0 === P
                                                  ? void 0
                                                  : P.reportadmin,
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
                                            children: (0, k.jsx)(N.c, {
                                              children: "Manage Users",
                                            }),
                                          }),
                                          (0, k.jsx)("input", {
                                            name: "useradmin",
                                            type: "checkbox",
                                            onChange: function () {
                                              return _(
                                                (0, l.Z)(
                                                  (0, l.Z)({}, P),
                                                  {},
                                                  { useradmin: !P.useradmin }
                                                )
                                              );
                                            },
                                            checked:
                                              null === P || void 0 === P
                                                ? void 0
                                                : P.useradmin,
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, k.jsx)("button", {
                                      className: "save-btn w-100",
                                      onClick: function () {
                                        return Y(function (e) {
                                          return e - 1;
                                        });
                                      },
                                      children: (0, k.jsx)(N.c, {
                                        children: "Back",
                                      }),
                                    }),
                                    (0, k.jsx)("button", {
                                      className: "save-btn w-100",
                                      type: "submit",
                                      children: (0, k.jsx)(N.c, {
                                        children: "Save",
                                      }),
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
    93650: function () {},
  },
]);
//# sourceMappingURL=1167.817c623f.chunk.js.map
