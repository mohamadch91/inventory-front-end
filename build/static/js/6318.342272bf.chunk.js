"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [6318],
  {
    71986: function (e, n, t) {
      var i = t(15671),
        r = t(43144),
        c = t(39877),
        a = t(54318),
        l = "https://phlapi.invgap.org/related/",
        s = (function () {
          function e() {
            (0, i.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getParameters",
                value: function () {
                  return c.Z.get(l + "params", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getParameterDescriptions",
                value: function (e, n) {
                  return c.Z.get(l + "params/?id=" + e + "&type=" + n, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putParameters",
                value: function (e) {
                  return c.Z.put(l + "params/", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getItemFields",
                value: function () {
                  return c.Z.get(l + "item-fields", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putItemFields",
                value: function (e) {
                  return c.Z.put(l + "item-fields", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getRelatedItemType",
                value: function (e) {
                  var n = {};
                  return (
                    e && (n.id = e),
                    c.Z.get(l + "related-item-type", {
                      headers: { Authorization: (0, a.Z)() },
                      params: n,
                    })
                  );
                },
              },
              {
                key: "putRelatedItemType",
                value: function (e) {
                  return c.Z.put(l + "related-item-type", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getRelatedFacility",
                value: function () {
                  return c.Z.get(l + "related-facility/", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putRelatedFacility",
                value: function (e) {
                  return c.Z.put(l + "related-facility/", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new s();
    },
    16318: function (e, n, t) {
      t.r(n);
      var i = t(1413),
        r = t(93433),
        c = t(37762),
        a = t(74165),
        l = t(15861),
        s = t(29439),
        o = t(56890),
        d = t(35855),
        u = t(53994),
        h = t(53382),
        x = t(72791),
        p = t(23821),
        m = t(91933),
        f = t(59909),
        v = t(95907),
        Z = t(40277),
        j = t(70242),
        g = t(74512),
        y = t(64554),
        b = t(36151),
        w = t(74130),
        k = (t(93650), t(71986)),
        N = (t(2423), t(30606)),
        R = t(2997),
        C = t(80906),
        z = t(80184);
      n.default = function () {
        var e,
          n = (0, x.useState)(0),
          t = (0, s.Z)(n, 2),
          S = t[0],
          F = t[1],
          L = (0, x.useState)([]),
          B = (0, s.Z)(L, 2),
          A = B[0],
          M = B[1],
          q = (0, x.useState)(null),
          I = (0, s.Z)(q, 2),
          O = I[0],
          P = I[1],
          E = (0, x.useState)(""),
          T = (0, s.Z)(E, 2),
          _ = T[0],
          D = T[1],
          H = (0, m.useQuery)(
            ["related-facility"],
            (0, l.Z)(
              (0, a.Z)().mark(function e() {
                var n;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), k.Z.getRelatedFacility();
                      case 2:
                        return (n = e.sent), e.abrupt("return", n.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !0 }
          ),
          V = H.data,
          X = H.isLoading,
          Q = H.refetch,
          G = (0, x.useMemo)(
            function () {
              var e = {};
              if (V) {
                var n,
                  t = (0, c.Z)(V);
                try {
                  for (t.s(); !(n = t.n()).done; ) {
                    var i,
                      r = n.value,
                      a = null !== (i = e[r.topic]) && void 0 !== i ? i : [];
                    a.push(r), (e[r.topic] = a);
                  }
                } catch (l) {
                  t.e(l);
                } finally {
                  t.f();
                }
              }
              return e;
            },
            [V]
          ),
          J = function (e, n, t) {
            var c = e.target.checked,
              a = (0, r.Z)(A),
              l = A.findIndex(function (e) {
                return e.id === n.id;
              });
            if (-1 === l)
              a.push(
                (0, i.Z)(
                  (0, i.Z)({}, n),
                  {},
                  {
                    required: "required" === t && c,
                    active: "enable" !== t || c,
                  }
                )
              );
            else {
              var s = A[l];
              a[l] = (0, i.Z)(
                (0, i.Z)({}, s),
                {},
                {
                  required: "required" === t ? c : s.required,
                  active: "enable" === t ? c : s.active,
                }
              );
            }
            M(a);
          },
          K = (function () {
            var e = (0, l.Z)(
              (0, a.Z)().mark(function e() {
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          k.Z.putRelatedFacility([
                            (0, i.Z)((0, i.Z)({}, O), {}, { name: _ }),
                          ])
                        );
                      case 2:
                        e.sent, Q(), P(null), D("");
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          U = (function () {
            var e = (0, l.Z)(
              (0, a.Z)().mark(function e() {
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), k.Z.putRelatedFacility(A);
                      case 2:
                        e.sent;
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (0, z.jsxs)("div", {
          children: [
            (0, z.jsx)("h3", {
              className: "page-title mb-3",
              children: (0, z.jsx)(N.c, {
                children: "Fields related to facilities",
              }),
            }),
            X
              ? (0, z.jsx)(f.Z, {})
              : (0, z.jsxs)(z.Fragment, {
                  children: [
                    (0, z.jsx)("div", {
                      className: "mt-3",
                      children: (0, z.jsx)("div", {
                        className: "card",
                        children: (0, z.jsxs)("div", {
                          className: "card-body pb-3",
                          children: [
                            (0, z.jsx)("div", {
                              className: "row pb-4",
                              style: { overflow: "auto" },
                              children: (0, z.jsx)(j.Z, {
                                activeStep: S,
                                children: Object.keys(G).map(function (e, n) {
                                  return (0, z.jsx)(
                                    g.Z,
                                    {
                                      onClick: function () {
                                        F(n);
                                      },
                                      children: (0, z.jsx)(w.Z, {
                                        color: "inherit",
                                        style: { width: "max-content" },
                                        children: (0, z.jsx)(N.c, {
                                          children: e,
                                        }),
                                      }),
                                    },
                                    e
                                  );
                                }),
                              }),
                            }),
                            (0, z.jsx)("div", {
                              className: "row mt-2",
                              children: (0, z.jsxs)(y.Z, {
                                sx: {
                                  display: "flex",
                                  flexDirection: "row",
                                  pt: 2,
                                },
                                children: [
                                  (0, z.jsxs)(b.Z, {
                                    disabled: 0 === S,
                                    onClick: function () {
                                      F(function (e) {
                                        return e - 1;
                                      });
                                    },
                                    sx: { mr: 1 },
                                    children: [
                                      (0, z.jsx)(R.Z, {
                                        style: { marginRight: 2 },
                                      }),
                                      (0, z.jsx)(N.c, { children: "Back" }),
                                    ],
                                  }),
                                  (0, z.jsx)(y.Z, {
                                    sx: { flex: "0.48 0.4 auto" },
                                  }),
                                  (0, z.jsx)("button", {
                                    className: "btn btn-primary ",
                                    onClick: U,
                                    children: (0, z.jsx)(N.c, {
                                      children: "Save all",
                                    }),
                                  }),
                                  (0, z.jsx)(y.Z, {
                                    sx: { flex: "0.5 0.5 auto" },
                                  }),
                                  (0, z.jsxs)(b.Z, {
                                    disabled: S === Object.keys(G).length - 1,
                                    onClick: function () {
                                      F(function (e) {
                                        return e + 1;
                                      });
                                    },
                                    sx: { mr: 1 },
                                    children: [
                                      (0, z.jsx)(N.c, { children: "Next" }),
                                      (0, z.jsx)(C.Z, {}),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, z.jsx)("div", {
                      className: "mt-3",
                      children: (0, z.jsx)("div", {
                        className: "card",
                        children: (0, z.jsx)("div", {
                          className: "card-body p-3",
                          children: (0, z.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, z.jsxs)("h4", {
                                children: [
                                  " ",
                                  (0, z.jsx)(N.c, {
                                    children: Object.keys(G)[S],
                                  }),
                                ],
                              }),
                              (0, z.jsx)("div", {
                                className: "mt-5 table-container",
                                children: (0, z.jsxs)(p.Z, {
                                  children: [
                                    (0, z.jsx)(o.Z, {
                                      children: (0, z.jsxs)(d.Z, {
                                        children: [
                                          (0, z.jsx)(u.Z, {
                                            className: "col-sm-4",
                                            children: (0, z.jsx)(N.c, {
                                              children: "Field name",
                                            }),
                                          }),
                                          (0, z.jsx)(u.Z, {
                                            className: "col-sm-2",
                                            children: (0, z.jsx)(N.c, {
                                              children: "Enable",
                                            }),
                                          }),
                                          (0, z.jsx)(u.Z, {
                                            className: "col-sm-4",
                                            children: (0, z.jsx)(N.c, {
                                              children:
                                                "Is this required for facility?",
                                            }),
                                          }),
                                          (0, z.jsx)(u.Z, {
                                            className: "col-sm-2",
                                            children: (0, z.jsx)(N.c, {
                                              children: "Edit",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, z.jsx)(h.Z, {
                                      children:
                                        null === (e = Object.values(G)[S]) ||
                                        void 0 === e
                                          ? void 0
                                          : e.map(function (e) {
                                              var n,
                                                t =
                                                  null !==
                                                    (n = A.find(function (n) {
                                                      return n.id === e.id;
                                                    })) && void 0 !== n
                                                    ? n
                                                    : null === V || void 0 === V
                                                    ? void 0
                                                    : V.find(function (n) {
                                                        return e.id === n.id;
                                                      });
                                              return (
                                                console.log(t),
                                                (0, z.jsxs)(
                                                  d.Z,
                                                  {
                                                    children: [
                                                      (0, z.jsx)(u.Z, {
                                                        className: "col-sm-4",
                                                        children:
                                                          (null === O ||
                                                          void 0 === O
                                                            ? void 0
                                                            : O.id) === e.id
                                                            ? (0, z.jsx)(
                                                                "input",
                                                                {
                                                                  name: "field-name",
                                                                  type: "text",
                                                                  onChange:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return D(
                                                                        e.target
                                                                          .value
                                                                      );
                                                                    },
                                                                  defaultValue:
                                                                    e.name,
                                                                }
                                                              )
                                                            : e.name,
                                                      }),
                                                      (0, z.jsx)(u.Z, {
                                                        className: "col-sm-2",
                                                        children: (0, z.jsx)(
                                                          "div",
                                                          {
                                                            class:
                                                              "form-check form-check-primary mt-3",
                                                            children: (0,
                                                            z.jsxs)("label", {
                                                              className:
                                                                "form-check-label",
                                                              children: [
                                                                (0, z.jsx)(
                                                                  "input",
                                                                  {
                                                                    type: "checkbox",
                                                                    disabled:
                                                                      null ===
                                                                        t ||
                                                                      void 0 ===
                                                                        t
                                                                        ? void 0
                                                                        : t.disabled,
                                                                    checked:
                                                                      null ===
                                                                        t ||
                                                                      void 0 ===
                                                                        t
                                                                        ? void 0
                                                                        : t.active,
                                                                    onChange:
                                                                      function (
                                                                        n
                                                                      ) {
                                                                        return J(
                                                                          n,
                                                                          e,
                                                                          "enable"
                                                                        );
                                                                      },
                                                                  }
                                                                ),
                                                                (0, z.jsx)(
                                                                  "i",
                                                                  {
                                                                    className:
                                                                      "input-helper mt-3",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, z.jsx)(u.Z, {
                                                        className: "col-sm-4",
                                                        children: (0, z.jsx)(
                                                          "div",
                                                          {
                                                            class:
                                                              "form-check form-check-primary mt-3",
                                                            children: (0,
                                                            z.jsxs)("label", {
                                                              className:
                                                                "form-check-label",
                                                              children: [
                                                                (0, z.jsx)(
                                                                  "input",
                                                                  {
                                                                    type: "checkbox",
                                                                    disabled:
                                                                      (null ===
                                                                        t ||
                                                                      void 0 ===
                                                                        t
                                                                        ? void 0
                                                                        : t.disabled) ||
                                                                      !(
                                                                        null !==
                                                                          t &&
                                                                        void 0 !==
                                                                          t &&
                                                                        t.active
                                                                      ),
                                                                    checked:
                                                                      null ===
                                                                        t ||
                                                                      void 0 ===
                                                                        t
                                                                        ? void 0
                                                                        : t.required,
                                                                    onChange:
                                                                      function (
                                                                        n
                                                                      ) {
                                                                        return J(
                                                                          n,
                                                                          e,
                                                                          "required"
                                                                        );
                                                                      },
                                                                  }
                                                                ),
                                                                (0, z.jsx)(
                                                                  "i",
                                                                  {
                                                                    className:
                                                                      "input-helper mt-3",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, z.jsx)(u.Z, {
                                                        className: "col-sm-2",
                                                        children:
                                                          (null === O ||
                                                          void 0 === O
                                                            ? void 0
                                                            : O.id) === e.id
                                                            ? (0, z.jsxs)(
                                                                z.Fragment,
                                                                {
                                                                  children: [
                                                                    (0, z.jsx)(
                                                                      "button",
                                                                      {
                                                                        className:
                                                                          "save-btn",
                                                                        onClick:
                                                                          K,
                                                                        children:
                                                                          (0,
                                                                          z.jsx)(
                                                                            N.c,
                                                                            {
                                                                              children:
                                                                                "Save",
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                    (0, z.jsx)(
                                                                      "button",
                                                                      {
                                                                        className:
                                                                          "close-btn",
                                                                        onClick:
                                                                          function () {
                                                                            P(
                                                                              null
                                                                            ),
                                                                              D(
                                                                                ""
                                                                              );
                                                                          },
                                                                        children:
                                                                          (0,
                                                                          z.jsx)(
                                                                            Z.Z,
                                                                            {}
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              )
                                                            : (0, z.jsx)(
                                                                "button",
                                                                {
                                                                  className:
                                                                    "edit-btn",
                                                                  onClick:
                                                                    function () {
                                                                      P(e),
                                                                        D(
                                                                          e.name
                                                                        );
                                                                    },
                                                                  children: (0,
                                                                  z.jsx)(
                                                                    v.Z,
                                                                    {}
                                                                  ),
                                                                }
                                                              ),
                                                      }),
                                                    ],
                                                  },
                                                  e.id
                                                )
                                              );
                                            }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
          ],
        });
      };
    },
    40277: function (e, n, t) {
      var i = t(80184);
      n.Z = function () {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            width: "121.31px",
            height: "122.876px",
            viewBox: "0 0 121.31 122.876",
            enableBackground: "new 0 0 121.31 122.876",
            xmlSpace: "preserve",
            children: (0, i.jsx)("g", {
              children: (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z",
              }),
            }),
          }),
        });
      };
    },
    95907: function (e, n, t) {
      var i = t(80184);
      n.Z = function () {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            width: "20",
            height: "20",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, i.jsx)("path", {
              d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
            }),
          }),
        });
      };
    },
    2997: function (e, n, t) {
      var i = t(80184);
      n.Z = function () {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("svg", {
            version: "1.1",
            id: "Capa_1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 400 400",
            style: { marginRight: "5px" },
            children: (0, i.jsx)("path", {
              fill: "currentColor",
              d: "M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z",
            }),
          }),
        });
      };
    },
    80906: function (e, n, t) {
      var i = t(80184);
      n.Z = function () {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("svg", {
            version: "1.1",
            id: "Capa_1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 1024 1024",
            children: (0, i.jsx)("path", {
              fill: "currentColor",
              d: "M754.752 480H160a32 32 0 100 64h594.752L521.344 777.344a32 32 0 0045.312 45.312l288-288a32 32 0 000-45.312l-288-288a32 32 0 10-45.312 45.312L754.752 480z",
            }),
          }),
        });
      };
    },
    23821: function (e, n, t) {
      var i = t(39281),
        r = t(79836),
        c = t(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)(i.Z, {
            children: (0, c.jsx)(r.Z, { children: n }),
          }),
        });
      };
    },
    74130: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      });
      var i = t(4942),
        r = t(63366),
        c = t(87462),
        a = t(72791),
        l = t(28182),
        s = t(94419),
        o = t(47630),
        d = t(61046),
        u = t(23701),
        h = t(15825),
        x = t(19103),
        p = t(75414),
        m = t(73822),
        f = t(21217);
      function v(e) {
        return (0, f.Z)("MuiStepButton", e);
      }
      var Z = (0, t(75878).Z)("MuiStepButton", [
          "root",
          "horizontal",
          "vertical",
          "touchRipple",
        ]),
        j = t(80184),
        g = ["children", "className", "icon", "optional"],
        y = (0, o.ZP)(u.Z, {
          name: "MuiStepButton",
          slot: "Root",
          overridesResolver: function (e, n) {
            var t = e.ownerState;
            return [
              (0, i.Z)({}, "& .".concat(Z.touchRipple), n.touchRipple),
              n.root,
              n[t.orientation],
            ];
          },
        })(function (e) {
          var n = e.ownerState;
          return (0,
          c.Z)({ width: "100%", padding: "24px 16px", margin: "-24px -16px", boxSizing: "content-box" }, "vertical" === n.orientation && { justifyContent: "flex-start", padding: "8px", margin: "-8px" }, (0, i.Z)({}, "& .".concat(Z.touchRipple), { color: "rgba(0, 0, 0, 0.3)" }));
        }),
        b = a.forwardRef(function (e, n) {
          var t = (0, d.Z)({ props: e, name: "MuiStepButton" }),
            i = t.children,
            o = t.className,
            u = t.icon,
            f = t.optional,
            Z = (0, r.Z)(t, g),
            b = a.useContext(m.Z).disabled,
            w = a.useContext(p.Z).orientation,
            k = (0, c.Z)({}, t, { orientation: w }),
            N = (function (e) {
              var n = e.classes,
                t = {
                  root: ["root", e.orientation],
                  touchRipple: ["touchRipple"],
                };
              return (0, s.Z)(t, v, n);
            })(k),
            R = { icon: u, optional: f },
            C = (0, x.Z)(i, ["StepLabel"])
              ? a.cloneElement(i, R)
              : (0, j.jsx)(h.Z, (0, c.Z)({}, R, { children: i }));
          return (0,
          j.jsx)(y, (0, c.Z)({ focusRipple: !0, disabled: b, TouchRippleProps: { className: N.touchRipple }, className: (0, l.Z)(N.root, o), ref: n, ownerState: k }, Z, { children: C }));
        });
    },
    19103: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(72791);
      var r = function (e, n) {
        return i.isValidElement(e) && -1 !== n.indexOf(e.type.muiName);
      };
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=6318.342272bf.chunk.js.map
