"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1167],
  {
    53596: function (e, n, i) {
      var s = i(15671),
        l = i(43144),
        c = i(74569),
        a = i.n(c),
        t = i(54318),
        r = "https://demoapi2.invgap.org/hr/",
        d = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, l.Z)(e, [
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
        c = i(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)(s.Z, {
            children: (0, c.jsx)(l.Z, { children: n }),
          }),
        });
      };
    },
    31167: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return k;
          },
        });
      var s = i(4942),
        l = i(1413),
        c = i(29439),
        a = i(56890),
        t = i(35855),
        r = i(53994),
        d = i(53382),
        o = i(16536),
        m = i(72791),
        u = i(95907),
        x = i(23821),
        h = i(65218),
        j = i(53596),
        f = i(15671),
        v = i(43144),
        p = i(39877),
        g = i(54318),
        b = "https://demoapi2.invgap.org/auth/",
        Z = new ((function () {
          function e() {
            (0, f.Z)(this, e);
          }
          return (
            (0, v.Z)(e, [
              {
                key: "getUsersByFacilityId",
                value: function (e) {
                  return p.Z.get(b + "get-users/?id=" + e, {
                    headers: { Authorization: (0, g.Z)() },
                  });
                },
              },
              {
                key: "updateUser",
                value: function (e) {
                  return p.Z.put(b + "update_profile/" + e.pk + "/", e, {
                    headers: { Authorization: (0, g.Z)() },
                  });
                },
              },
              {
                key: "addUser",
                value: function (e) {
                  return p.Z.post(b + "register/", e, {
                    headers: { Authorization: (0, g.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })())(),
        N = i(59909),
        y = (i(93650), i(2423), i(65487), i(5227), i(87004), i(30606)),
        w = i(80184);
      var k = function () {
        var e = (0, m.useState)([]),
          n = (0, c.Z)(e, 2),
          i = n[0],
          f = n[1],
          v = (0, m.useState)({}),
          p = (0, c.Z)(v, 2),
          g = p[0],
          b = p[1],
          k = (0, m.useState)({
            facadmin: !1,
            itemadmin: !1,
            reportadmin: !1,
            useradmin: !1,
            is_active: !1,
            password: "",
            conf_password: "",
          }),
          C = (0, c.Z)(k, 2),
          P = C[0],
          _ = C[1],
          F = (0, m.useState)(!0),
          S = (0, c.Z)(F, 2),
          A = S[0],
          U = S[1],
          z = (0, m.useState)([]),
          D = (0, c.Z)(z, 2),
          I = D[0],
          M = D[1],
          q = (0, m.useState)(null),
          R = (0, c.Z)(q, 2),
          H = R[0],
          B = R[1],
          E = (0, m.useState)(!1),
          O = (0, c.Z)(E, 2),
          T = O[0],
          V = O[1],
          J = (0, m.useState)(!1),
          L = (0, c.Z)(J, 2),
          X = L[0],
          G = L[1],
          K = (0, m.useState)(0),
          Q = (0, c.Z)(K, 2),
          W = Q[0],
          Y = Q[1];
        function $(e) {
          Z.getUsersByFacilityId(e)
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
            c = n.value;
          b((0, l.Z)((0, l.Z)({}, g), {}, (0, s.Z)({}, i, c)));
        }
        function ne(e) {
          var n = e.target,
            i = n.name,
            c = n.value;
          _((0, l.Z)((0, l.Z)({}, P), {}, (0, s.Z)({}, i, c)));
        }
        return (
          (0, m.useEffect)(function () {
            j.Z.getFacilities()
              .then(function (e) {
                var n = e.data;
                M(n), B(n[0].id), U(!1), $(n[0].id);
              })
              .catch(function (e) {
                h.ZP.error("There is a problem loading data"), U(!1);
              });
          }, []),
          (0, m.useEffect)(
            function () {
              var e;
              I &&
                _(
                  (0, l.Z)(
                    (0, l.Z)({}, P),
                    {},
                    {
                      facilityid:
                        null === (e = I[0]) || void 0 === e ? void 0 : e.id,
                    }
                  )
                );
            },
            [I]
          ),
          (0, w.jsxs)("div", {
            className: "item-class-page hr-page",
            children: [
              (0, w.jsx)("h3", {
                className: "page-title mb-3",
                children: (0, w.jsx)(y.c, { children: "User by Facility" }),
              }),
              A
                ? (0, w.jsx)(N.Z, {})
                : (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsxs)("div", {
                        className: "row mb-4 mt-4",
                        children: [
                          (0, w.jsx)("div", {
                            className: "col-md-2 d-flex align-items-center",
                            children: (0, w.jsx)("h4", {
                              className: "page-title",
                              children: (0, w.jsx)(y.c, {
                                children: "Main Facility",
                              }),
                            }),
                          }),
                          (0, w.jsx)("div", {
                            className: "col-md-10 d-flex",
                            children: (0, w.jsx)("select", {
                              name: "facilityid",
                              onChange: function (e) {
                                B(e.target.value),
                                  U(!0),
                                  $(e.target.value),
                                  _(
                                    (0, l.Z)(
                                      (0, l.Z)({}, P),
                                      {},
                                      { facilityid: e.target.value }
                                    )
                                  );
                              },
                              value: H,
                              children: I.map(function (e, n) {
                                return (0,
                                w.jsx)("option", { value: e.id, children: e.name }, e.id);
                              }),
                            }),
                          }),
                        ],
                      }),
                      I &&
                        i &&
                        i.length > 0 &&
                        (0, w.jsx)("div", {
                          children: (0, w.jsxs)(x.Z, {
                            children: [
                              (0, w.jsx)(a.Z, {
                                children: (0, w.jsxs)(t.Z, {
                                  children: [
                                    (0, w.jsx)(r.Z, {
                                      children: (0, w.jsx)(y.c, {
                                        children: "ID",
                                      }),
                                    }),
                                    (0, w.jsx)(r.Z, {
                                      children: (0, w.jsx)(y.c, {
                                        children: "Name",
                                      }),
                                    }),
                                    (0, w.jsx)(r.Z, {
                                      children: (0, w.jsx)(y.c, {
                                        children: "Username",
                                      }),
                                    }),
                                    (0, w.jsx)(r.Z, {
                                      children: (0, w.jsx)(y.c, {
                                        children: "Facility Name",
                                      }),
                                    }),
                                    (0, w.jsx)(r.Z, {
                                      children: (0, w.jsx)(y.c, {
                                        children: "Owner",
                                      }),
                                    }),
                                    (0, w.jsx)(r.Z, {
                                      children: (0, w.jsx)(y.c, {
                                        children: "Manage Facilities",
                                      }),
                                    }),
                                    (0, w.jsx)(r.Z, {
                                      children: (0, w.jsx)(y.c, {
                                        children: "Manage Items",
                                      }),
                                    }),
                                    (0, w.jsx)(r.Z, {
                                      children: (0, w.jsx)(y.c, {
                                        children: "View Reports",
                                      }),
                                    }),
                                    (0, w.jsx)(r.Z, {
                                      children: (0, w.jsx)(y.c, {
                                        children: "Manage Users",
                                      }),
                                    }),
                                    (0, w.jsx)(r.Z, {
                                      children: (0, w.jsx)(y.c, {
                                        children: "Active",
                                      }),
                                    }),
                                    (0, w.jsx)(r.Z, {
                                      children: (0, w.jsx)(y.c, {
                                        children: "Position",
                                      }),
                                    }),
                                    (0, w.jsx)(r.Z, {
                                      children: (0, w.jsx)(y.c, {
                                        children: "Edit",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, w.jsx)(d.Z, {
                                children:
                                  i &&
                                  i.map(function (e, n) {
                                    var s, l;
                                    return (0, w.jsx)(w.Fragment, {
                                      children: (0, w.jsxs)(t.Z, {
                                        children: [
                                          (0, w.jsx)(r.Z, { children: e.pk }),
                                          (0, w.jsx)(r.Z, { children: e.name }),
                                          (0, w.jsx)(r.Z, {
                                            children: e.username,
                                          }),
                                          (0, w.jsx)(r.Z, {
                                            children:
                                              null ===
                                                ((l = e.facilityid),
                                                (s = I.find(function (e) {
                                                  return e.id === l;
                                                }))) || void 0 === s
                                                ? void 0
                                                : s.name,
                                          }),
                                          (0, w.jsx)(r.Z, {
                                            children:
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.owner,
                                          }),
                                          (0, w.jsx)(r.Z, {
                                            children: (0, w.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.facadmin,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, w.jsx)(r.Z, {
                                            children: (0, w.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.itemadmin,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, w.jsx)(r.Z, {
                                            children: (0, w.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.reportadmin,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, w.jsx)(r.Z, {
                                            children: (0, w.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.useradmin,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, w.jsx)(r.Z, {
                                            children: (0, w.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.is_active,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, w.jsx)(r.Z, {
                                            children: e.position,
                                          }),
                                          (0, w.jsx)(r.Z, {
                                            children: (0, w.jsx)("button", {
                                              className: "edit-btn",
                                              onClick: function (n) {
                                                return (function (e) {
                                                  var n = i.find(function (n) {
                                                    return n.pk === e.pk;
                                                  });
                                                  b(n), G(!0);
                                                })(e);
                                              },
                                              children: (0, w.jsx)(u.Z, {}),
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
                      (0, w.jsx)(o.Z, {
                        show: X,
                        onHide: function () {},
                        children: (0, w.jsx)("form", {
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
                                is_active: n.is_active,
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
                                Z.updateUser(i)
                                  .then(function (e) {
                                    U(!0),
                                      $(H),
                                      b({}),
                                      G(!1),
                                      Y(0),
                                      h.ZP.success("user edit succesfuly");
                                  })
                                  .catch(function (e) {
                                    h.ZP.error(
                                      "There is a problem sending data"
                                    ),
                                      U(!1);
                                  });
                            } else
                              h.ZP.error(
                                (0, w.jsx)(y.c, {
                                  children: "Please fill all the fields",
                                })
                              );
                          },
                          children:
                            0 === W
                              ? (0, w.jsxs)(w.Fragment, {
                                  children: [
                                    (0, w.jsxs)("h3", {
                                      className: "mb-3 text-center",
                                      children: [
                                        (0, w.jsx)(y.c, { children: "Edit" }),
                                        " ",
                                        (0, w.jsx)(y.c, { children: "user" }),
                                      ],
                                    }),
                                    (0, w.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, w.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, w.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, w.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "Facility Name",
                                          }),
                                        }),
                                        (0, w.jsx)("select", {
                                          name: "facilityid",
                                          onChange: ee,
                                          value:
                                            null === g || void 0 === g
                                              ? void 0
                                              : g.facilityid,
                                          children: I.map(function (e, n) {
                                            return (0,
                                            w.jsx)("option", { value: e.id, selected: e.id === (null === g || void 0 === g ? void 0 : g.facilityid), children: e.name }, e.id);
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "Name",
                                          }),
                                        }),
                                        (0, w.jsx)("input", {
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
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "Username",
                                          }),
                                        }),
                                        (0, w.jsx)("input", {
                                          name: "username",
                                          type: "text",
                                          onChange: ee,
                                          value:
                                            null === g || void 0 === g
                                              ? void 0
                                              : g.username,
                                          autoComplete: "off",
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "Password",
                                          }),
                                        }),
                                        (0, w.jsx)("input", {
                                          name: "password",
                                          autoComplete: "off",
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
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "Confirm Password",
                                          }),
                                        }),
                                        (0, w.jsx)("input", {
                                          name: "conf_password",
                                          type: "password",
                                          autoComplete: "off",
                                          onChange: ee,
                                          value:
                                            null === g || void 0 === g
                                              ? void 0
                                              : g.conf_password,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, w.jsx)("button", {
                                      className: "save-btn w-25 ml-5 mr-5",
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
                                      children: (0, w.jsx)(y.c, {
                                        children: "Next",
                                      }),
                                    }),
                                    (0, w.jsx)("button", {
                                      className:
                                        "btn-danger text-dark w-25 ml-5",
                                      onClick: function (e) {
                                        e.preventDefault(), G(!1), Y(0);
                                      },
                                      children: (0, w.jsx)(y.c, {
                                        children: "Cancel",
                                      }),
                                    }),
                                  ],
                                })
                              : (0, w.jsxs)(w.Fragment, {
                                  children: [
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "ID Number",
                                          }),
                                        }),
                                        (0, w.jsx)("input", {
                                          name: "idnumber",
                                          type: "number",
                                          onChange: ee,
                                          value:
                                            null === g || void 0 === g
                                              ? void 0
                                              : g.idnumber,
                                        }),
                                      ],
                                    }),
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "Position",
                                          }),
                                        }),
                                        (0, w.jsx)("input", {
                                          name: "position",
                                          type: "text",
                                          onChange: ee,
                                          value:
                                            null === g || void 0 === g
                                              ? void 0
                                              : g.position,
                                        }),
                                      ],
                                    }),
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "Phone Number",
                                          }),
                                        }),
                                        (0, w.jsx)("input", {
                                          name: "phone",
                                          type: "tel",
                                          onChange: ee,
                                          value:
                                            null === g || void 0 === g
                                              ? void 0
                                              : g.phone,
                                        }),
                                      ],
                                    }),
                                    (0, w.jsxs)("div", {
                                      className: "row mt-3",
                                      children: [
                                        (0, w.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, w.jsx)("label", {
                                              className: "m-0 mr-2",
                                              children: (0, w.jsx)(y.c, {
                                                children: "Active",
                                              }),
                                            }),
                                            (0, w.jsx)("input", {
                                              name: "is_active",
                                              type: "checkbox",
                                              onChange: function () {
                                                return b(
                                                  (0, l.Z)(
                                                    (0, l.Z)({}, g),
                                                    {},
                                                    { is_active: !g.is_active }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === g || void 0 === g
                                                  ? void 0
                                                  : g.is_active,
                                            }),
                                          ],
                                        }),
                                        (0, w.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, w.jsx)("label", {
                                              className: "m-0 mr-2",
                                              children: (0, w.jsx)(y.c, {
                                                children: "Manage Facilities",
                                              }),
                                            }),
                                            (0, w.jsx)("input", {
                                              name: "facadmin",
                                              type: "checkbox",
                                              onChange: function () {
                                                return b(
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
                                    (0, w.jsxs)("div", {
                                      className: "row mt-3",
                                      children: [
                                        (0, w.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, w.jsx)("label", {
                                              className: "m-0 mr-1",
                                              children: (0, w.jsx)(y.c, {
                                                children: "Manage Items",
                                              }),
                                            }),
                                            (0, w.jsx)("input", {
                                              name: "itemadmin",
                                              type: "checkbox",
                                              onChange: function () {
                                                return b(
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
                                        (0, w.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, w.jsx)("label", {
                                              className: "m-0 mr-2",
                                              children: (0, w.jsx)(y.c, {
                                                children: "View Reports",
                                              }),
                                            }),
                                            (0, w.jsx)("input", {
                                              name: "reportadmin",
                                              type: "checkbox",
                                              onChange: function () {
                                                return b(
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
                                    (0, w.jsx)("div", {
                                      className: "row mt-3",
                                      children: (0, w.jsxs)("div", {
                                        className:
                                          "d-flex align-items-center justify-content-center col-sm-12",
                                        children: [
                                          (0, w.jsx)("label", {
                                            className: "m-0 mr-2",
                                            children: (0, w.jsx)(y.c, {
                                              children: "Manage Users",
                                            }),
                                          }),
                                          (0, w.jsx)("input", {
                                            name: "useradmin",
                                            type: "checkbox",
                                            onChange: function () {
                                              return b(
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
                                    (0, w.jsx)("button", {
                                      className: "save-btn w-25 ml-3 mr-4",
                                      onClick: function () {
                                        return Y(function (e) {
                                          return e - 1;
                                        });
                                      },
                                      children: (0, w.jsx)(y.c, {
                                        children: "Back",
                                      }),
                                    }),
                                    (0, w.jsx)("button", {
                                      className: "save-btn w-25 mr-4",
                                      type: "submit",
                                      children: (0, w.jsx)(y.c, {
                                        children: "Save",
                                      }),
                                    }),
                                    (0, w.jsx)("button", {
                                      className:
                                        "btn-danger text-dark w-25 ml-2",
                                      onClick: function (e) {
                                        e.preventDefault(), G(!1), Y(0);
                                      },
                                      children: (0, w.jsx)(y.c, {
                                        children: "Cancel",
                                      }),
                                    }),
                                  ],
                                }),
                        }),
                      }),
                      (0, w.jsx)("button", {
                        className: "modal-btn",
                        onClick: function () {
                          V(function (e) {
                            return !e;
                          });
                        },
                        children: (0, w.jsx)(y.c, { children: "Add user" }),
                      }),
                      (0, w.jsx)(o.Z, {
                        show: T,
                        onHide: function () {},
                        children: (0, w.jsx)("form", {
                          onSubmit: function (e) {
                            var n;
                            if (
                              (e.preventDefault(),
                              Object.keys(P).every(function (e) {
                                if (
                                  (console.log(e),
                                  "idnumber" !== e ||
                                    "phone" !== e ||
                                    "position" !== e)
                                )
                                  return console.log(P[e]), "" !== P[e];
                              }))
                            ) {
                              U(!0);
                              var i = JSON.parse(
                                  localStorage.getItem("user")
                                ).username,
                                s = {
                                  password: (n = P).password,
                                  is_active: n.is_active,
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
                              console.log(s),
                                (s.owner = i),
                                Z.addUser(s)
                                  .then(function (e) {
                                    h.ZP.success("user added successfully"),
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
                                            is_active: !0,
                                            password: "",
                                            conf_password: "",
                                          }
                                        )
                                      ),
                                      V(!1),
                                      Y(0);
                                  })
                                  .catch(function (e) {
                                    e.response.data.username
                                      ? (h.ZP.error(
                                          e.response.data.username[0]
                                        ),
                                        U(!1))
                                      : (h.ZP.error(
                                          "There is a problem sending data"
                                        ),
                                        U(!1));
                                  });
                            } else
                              h.ZP.error(
                                (0, w.jsx)(y.c, {
                                  children: "Please fill all the fields",
                                })
                              );
                          },
                          children:
                            0 === W
                              ? (0, w.jsxs)(w.Fragment, {
                                  children: [
                                    (0, w.jsx)("h3", {
                                      className: "mb-3 text-center",
                                      children: "Add user",
                                    }),
                                    (0, w.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, w.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, w.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, w.jsx)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                    }),
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "Facility Name",
                                          }),
                                        }),
                                        (0, w.jsx)("select", {
                                          name: "facilityid",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.facilityid,
                                          children: I.map(function (e, n) {
                                            return (0,
                                            w.jsxs)("option", { value: e.id, selected: parseInt(H) === e.id, children: [console.log(parseInt(null === P || void 0 === P ? void 0 : P.facilityid)), e.name] }, e.id);
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "Name",
                                          }),
                                        }),
                                        (0, w.jsx)("input", {
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
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "Username",
                                          }),
                                        }),
                                        (0, w.jsx)("input", {
                                          name: "username",
                                          type: "text",
                                          autoComplete: "off",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.username,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "Password",
                                          }),
                                        }),
                                        (0, w.jsx)("input", {
                                          name: "password",
                                          type: "password",
                                          autoComplete: "off",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.password,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "Confirm Password",
                                          }),
                                        }),
                                        (0, w.jsx)("input", {
                                          name: "conf_password",
                                          type: "password",
                                          autoComplete: "off",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.conf_password,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    (0, w.jsx)("button", {
                                      className: "save-btn w-25 ml-5 mr-5",
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
                                      children: (0, w.jsx)(y.c, {
                                        children: "Next",
                                      }),
                                    }),
                                    (0, w.jsx)("button", {
                                      className:
                                        "btn-danger text-dark w-25 ml-5",
                                      onClick: function (e) {
                                        e.preventDefault(), V(!1), Y(0);
                                      },
                                      children: (0, w.jsx)(y.c, {
                                        children: "Cancel",
                                      }),
                                    }),
                                  ],
                                })
                              : (0, w.jsxs)(w.Fragment, {
                                  children: [
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "ID Number",
                                          }),
                                        }),
                                        (0, w.jsx)("input", {
                                          name: "idnumber",
                                          type: "number",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.idnumber,
                                        }),
                                      ],
                                    }),
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "Position",
                                          }),
                                        }),
                                        (0, w.jsx)("input", {
                                          name: "position",
                                          type: "text",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.position,
                                        }),
                                      ],
                                    }),
                                    (0, w.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-center",
                                      children: [
                                        (0, w.jsx)("label", {
                                          children: (0, w.jsx)(y.c, {
                                            children: "Phone Number",
                                          }),
                                        }),
                                        (0, w.jsx)("input", {
                                          name: "phone",
                                          type: "tel",
                                          onChange: ne,
                                          value:
                                            null === P || void 0 === P
                                              ? void 0
                                              : P.phone,
                                        }),
                                      ],
                                    }),
                                    (0, w.jsxs)("div", {
                                      className: "row mt-3",
                                      children: [
                                        (0, w.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, w.jsx)("label", {
                                              className: "m-0 mr-2",
                                              children: (0, w.jsx)(y.c, {
                                                children: "Active",
                                              }),
                                            }),
                                            (0, w.jsx)("input", {
                                              name: "is_active",
                                              type: "checkbox",
                                              onChange: function () {
                                                return _(
                                                  (0, l.Z)(
                                                    (0, l.Z)({}, P),
                                                    {},
                                                    { is_active: !P.is_active }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === P || void 0 === P
                                                  ? void 0
                                                  : P.is_active,
                                            }),
                                          ],
                                        }),
                                        (0, w.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, w.jsx)("label", {
                                              className: "m-0 mr-2",
                                              children: (0, w.jsx)(y.c, {
                                                children: "Manage Facilities",
                                              }),
                                            }),
                                            (0, w.jsx)("input", {
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
                                    (0, w.jsxs)("div", {
                                      className: "row mt-3",
                                      children: [
                                        (0, w.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, w.jsx)("label", {
                                              className: "m-0 mr-1",
                                              children: (0, w.jsx)(y.c, {
                                                children: "Manage Items",
                                              }),
                                            }),
                                            (0, w.jsx)("input", {
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
                                        (0, w.jsxs)("div", {
                                          className:
                                            "d-flex align-items-center justify-content-center col-sm-6",
                                          children: [
                                            (0, w.jsx)("label", {
                                              className: "m-0 mr-2",
                                              children: (0, w.jsx)(y.c, {
                                                children: "View Reports",
                                              }),
                                            }),
                                            (0, w.jsx)("input", {
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
                                    (0, w.jsx)("div", {
                                      className: "row mt-3",
                                      children: (0, w.jsxs)("div", {
                                        className:
                                          "d-flex align-items-center justify-content-center col-sm-12",
                                        children: [
                                          (0, w.jsx)("label", {
                                            className: "m-0 mr-2",
                                            children: (0, w.jsx)(y.c, {
                                              children: "Manage Users",
                                            }),
                                          }),
                                          (0, w.jsx)("input", {
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
                                    (0, w.jsx)("button", {
                                      className: "save-btn w-25 ml-5 mr-4",
                                      onClick: function () {
                                        return Y(function (e) {
                                          return e - 1;
                                        });
                                      },
                                      children: (0, w.jsx)(y.c, {
                                        children: "Back",
                                      }),
                                    }),
                                    (0, w.jsx)("button", {
                                      className: "save-btn w-25 mr-3 mb-3",
                                      type: "submit",
                                      children: (0, w.jsx)(y.c, {
                                        children: "Save",
                                      }),
                                    }),
                                    (0, w.jsx)("button", {
                                      className:
                                        "btn-danger text-dark mr-4 btn-round w-25",
                                      onClick: function (e) {
                                        e.preventDefault(), V(!1), Y(0);
                                      },
                                      children: (0, w.jsx)(y.c, {
                                        children: "Cancel",
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
    93650: function () {},
  },
]);
//# sourceMappingURL=1167.835ef598.chunk.js.map
