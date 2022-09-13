"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [4004],
  {
    71986: function (e, n, t) {
      var i = t(15671),
        r = t(43144),
        s = t(39877),
        a = t(54318),
        c = "https://inventory.runflare.run/related/",
        l = (function () {
          function e() {
            (0, i.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getParameters",
                value: function () {
                  return s.Z.get(c + "params", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getParameterDescriptions",
                value: function (e, n) {
                  return s.Z.get(c + "params/?id=" + e + "&type=" + n, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putParameters",
                value: function (e) {
                  return s.Z.put(c + "params/", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getItemFields",
                value: function () {
                  return s.Z.get(c + "item-fields", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putItemFields",
                value: function (e) {
                  return s.Z.put(c + "item-fields", e, {
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
                    s.Z.get(c + "related-item-type", {
                      headers: { Authorization: (0, a.Z)() },
                      params: n,
                    })
                  );
                },
              },
              {
                key: "putRelatedItemType",
                value: function (e) {
                  return s.Z.put(c + "related-item-type", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getRelatedFacility",
                value: function () {
                  return s.Z.get(c + "related-facility/", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putRelatedFacility",
                value: function (e) {
                  return s.Z.put(c + "related-facility/", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new l();
    },
    4004: function (e, n, t) {
      t.r(n);
      var i = t(1413),
        r = t(93433),
        s = t(37762),
        a = t(74165),
        c = t(15861),
        l = t(29439),
        o = t(56890),
        d = t(35855),
        u = t(53994),
        h = t(53382),
        m = t(72791),
        x = t(23821),
        p = t(16149),
        f = t(69778),
        v = t(91933),
        Z = t(59909),
        j = t(95907),
        y = t(40277),
        g = t(70242),
        b = t(74512),
        w = t(64554),
        N = t(36151),
        k = t(74130),
        C = (t(93650), t(71986)),
        R = (t(2423), t(30606)),
        S = t(80184);
      n.default = function () {
        var e,
          n = (0, m.useState)(0),
          t = (0, l.Z)(n, 2),
          z = t[0],
          I = t[1],
          F = (0, m.useState)(),
          L = (0, l.Z)(F, 2),
          A = L[0],
          q = L[1],
          B = (0, m.useState)(),
          M = (0, l.Z)(B, 2),
          O = M[0],
          P = M[1],
          T = (0, m.useState)([]),
          _ = (0, l.Z)(T, 2),
          E = _[0],
          Q = _[1],
          D = (0, m.useState)(null),
          G = (0, l.Z)(D, 2),
          V = G[0],
          X = G[1],
          W = (0, m.useState)(""),
          H = (0, l.Z)(W, 2),
          J = H[0],
          K = H[1],
          U = (0, v.useQuery)(
            ["active-item-classes-with-item-type"],
            (0, c.Z)(
              (0, a.Z)().mark(function e() {
                var n;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2), f.Z.getActiveItemClassesWithFields()
                        );
                      case 2:
                        return (n = e.sent), e.abrupt("return", n.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            {
              onSuccess: function (e) {
                q(e[0]), P(e[0].item_type[0]);
              },
            }
          ),
          Y = U.data,
          $ = U.isLoading,
          ee = (0, v.useQuery)(
            ["related-item-fields"],
            (0, c.Z)(
              (0, a.Z)().mark(function e() {
                var n;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), C.Z.getItemFields();
                      case 2:
                        return (n = e.sent), e.abrupt("return", n.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            {}
          ),
          ne = ee.data,
          te = ee.isLoading,
          ie = ee.refetch,
          re = (0, v.useQuery)(
            ["related-item-type", null === O || void 0 === O ? void 0 : O.id],
            (0, c.Z)(
              (0, a.Z)().mark(function e() {
                var n;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), C.Z.getRelatedItemType(O.id);
                      case 2:
                        return (n = e.sent), e.abrupt("return", n.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { enabled: !$ }
          ).data,
          se = (0, m.useMemo)(
            function () {
              var e = {};
              if (ne) {
                var n,
                  t = (0, s.Z)(ne);
                try {
                  for (t.s(); !(n = t.n()).done; ) {
                    var i,
                      r = n.value,
                      a = null !== (i = e[r.topic]) && void 0 !== i ? i : [];
                    a.push(r), (e[r.topic] = a);
                  }
                } catch (c) {
                  t.e(c);
                } finally {
                  t.f();
                }
              }
              return e;
            },
            [ne]
          ),
          ae = function (e, n, t) {
            var s = e.target.checked,
              a = (0, r.Z)(E),
              c = E.findIndex(function (e) {
                return e.itemtypeid === O.id && e.fieldid === n.id;
              });
            if ((console.log(t), -1 === c))
              a.push({
                itemtypeid: O.id,
                fieldid: n.id,
                required: "required" === t && s,
                enable: "enable" !== t || s,
              });
            else {
              var l = E[c];
              a[c] = (0, i.Z)(
                (0, i.Z)({}, l),
                {},
                {
                  required: "required" === t ? s : l.required,
                  enable: "enable" === t ? s : l.enable,
                }
              );
            }
            Q(a);
          },
          ce = (function () {
            var e = (0, c.Z)(
              (0, a.Z)().mark(function e() {
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          C.Z.putItemFields(
                            (0, i.Z)((0, i.Z)({}, V), {}, { name: J })
                          )
                        );
                      case 2:
                        e.sent, ie(), X(null), K("");
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
          le = (function () {
            var e = (0, c.Z)(
              (0, a.Z)().mark(function e() {
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), C.Z.putRelatedItemType(E);
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
        return (0, S.jsxs)("div", {
          children: [
            (0, S.jsxs)("h3", {
              className: "page-title mb-3",
              children: [
                (0, S.jsx)(R.c, { children: "Fields of" }),
                " ",
                (0, S.jsx)(R.c, { children: '"Item category"' }),
              ],
            }),
            $
              ? (0, S.jsx)(Z.Z, {})
              : (0, S.jsx)("div", {
                  className: "mt-3",
                  children: (0, S.jsx)("div", {
                    className: "card",
                    children: (0, S.jsx)("div", {
                      className: "card-body",
                      children: (0, S.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, S.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, S.jsxs)(p.Z.Group, {
                              className: "row",
                              children: [
                                (0, S.jsxs)("label", {
                                  className: "col-sm-12",
                                  children: [
                                    (0, S.jsx)(R.c, { children: "Item class" }),
                                    " ",
                                  ],
                                }),
                                (0, S.jsx)("div", {
                                  className: "col-sm-12",
                                  children: (0, S.jsx)(p.Z.Control, {
                                    onChange: function (e) {
                                      q(Y[e.target.value]);
                                    },
                                    className: "form-select",
                                    as: "select",
                                    children: Y.map(function (e, n) {
                                      return (0,
                                      S.jsx)("option", { value: n, children: e.item_class.title });
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, S.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, S.jsxs)(p.Z.Group, {
                              className: "row",
                              children: [
                                (0, S.jsx)("label", {
                                  className: "col-sm-12",
                                  children: (0, S.jsx)(R.c, {
                                    children: "Item category",
                                  }),
                                }),
                                (0, S.jsx)("div", {
                                  className: "col-sm-12",
                                  children: (0, S.jsx)(p.Z.Control, {
                                    onChange: function (e) {
                                      P(A.item_type[e.target.value]);
                                    },
                                    className: "form-select",
                                    disabled: null === A,
                                    as: "select",
                                    children:
                                      null === A || void 0 === A
                                        ? void 0
                                        : A.item_type.map(function (e, n) {
                                            return (0,
                                            S.jsx)("option", { value: n, children: e.title });
                                          }),
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
            te
              ? (0, S.jsx)(Z.Z, {})
              : (0, S.jsxs)(S.Fragment, {
                  children: [
                    (0, S.jsx)("div", {
                      className: "mt-3",
                      children: (0, S.jsx)("div", {
                        className: "card",
                        children: (0, S.jsxs)("div", {
                          className: "card-body pb-3",
                          children: [
                            (0, S.jsx)("div", {
                              className: "row pb-4",
                              style: { overflow: "auto" },
                              children: (0, S.jsx)(g.Z, {
                                activeStep: z,
                                children: Object.keys(se).map(function (e, n) {
                                  return (0, S.jsx)(
                                    b.Z,
                                    {
                                      onClick: function () {
                                        I(n);
                                      },
                                      children: (0, S.jsx)(k.Z, {
                                        color: "inherit",
                                        style: { width: "max-content" },
                                        children: e,
                                      }),
                                    },
                                    e
                                  );
                                }),
                              }),
                            }),
                            (0, S.jsx)("div", {
                              className: "row mt-2",
                              children: (0, S.jsxs)(w.Z, {
                                sx: {
                                  display: "flex",
                                  flexDirection: "row",
                                  pt: 2,
                                },
                                children: [
                                  (0, S.jsx)(N.Z, {
                                    color: "inherit",
                                    disabled: 0 === z,
                                    onClick: function () {
                                      I(function (e) {
                                        return e - 1;
                                      });
                                    },
                                    sx: { mr: 1 },
                                    children: (0, S.jsx)(R.c, {
                                      children: "Back",
                                    }),
                                  }),
                                  (0, S.jsx)(w.Z, { sx: { flex: "1 1 auto" } }),
                                  (0, S.jsx)(N.Z, {
                                    disabled: z === Object.keys(se).length - 1,
                                    onClick: function () {
                                      I(function (e) {
                                        return e + 1;
                                      });
                                    },
                                    sx: { mr: 1 },
                                    children: "Next",
                                  }),
                                  (0, S.jsx)("button", {
                                    className: "btn btn-primary ",
                                    onClick: le,
                                    children: (0, S.jsx)(R.c, {
                                      children: "Save all",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, S.jsx)("div", {
                      className: "mt-3",
                      children: (0, S.jsx)("div", {
                        className: "card",
                        children: (0, S.jsx)("div", {
                          className: "card-body p-3",
                          children: (0, S.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, S.jsxs)("h4", {
                                children: [" ", Object.keys(se)[z]],
                              }),
                              (0, S.jsx)("div", {
                                className: "mt-5 table-container",
                                children: (0, S.jsxs)(x.Z, {
                                  children: [
                                    (0, S.jsx)(o.Z, {
                                      children: (0, S.jsxs)(d.Z, {
                                        children: [
                                          (0, S.jsx)(u.Z, {
                                            className: "col-sm-4",
                                            children: (0, S.jsx)(R.c, {
                                              children: "Field name",
                                            }),
                                          }),
                                          (0, S.jsx)(u.Z, {
                                            className: "col-sm-2",
                                            children: (0, S.jsx)(R.c, {
                                              children: "Enable",
                                            }),
                                          }),
                                          (0, S.jsxs)(u.Z, {
                                            className: "col-sm-4",
                                            children: [
                                              (0, S.jsx)(R.c, {
                                                children:
                                                  "Is this required field for",
                                              }),
                                              " ",
                                              (0, S.jsx)(R.c, {
                                                children: "item category",
                                              }),
                                              "?",
                                            ],
                                          }),
                                          (0, S.jsx)(u.Z, {
                                            className: "col-sm-2",
                                            children: (0, S.jsx)(R.c, {
                                              children: "Edit",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, S.jsx)(h.Z, {
                                      children:
                                        null === (e = Object.values(se)[z]) ||
                                        void 0 === e
                                          ? void 0
                                          : e.map(function (e) {
                                              var n,
                                                t,
                                                i =
                                                  null !==
                                                    (n = E.find(function (n) {
                                                      return (
                                                        n.fieldid === e.id &&
                                                        n.itemtypeid === O.id
                                                      );
                                                    })) && void 0 !== n
                                                    ? n
                                                    : null === re ||
                                                      void 0 === re
                                                    ? void 0
                                                    : re.find(function (n) {
                                                        return (
                                                          e.id === n.field.id &&
                                                          O.id === n.itemtype.id
                                                        );
                                                      }),
                                                r =
                                                  null !==
                                                    (t =
                                                      null === i || void 0 === i
                                                        ? void 0
                                                        : i.enable) &&
                                                  void 0 !== t
                                                    ? t
                                                    : !!i,
                                                s =
                                                  null === i || void 0 === i
                                                    ? void 0
                                                    : i.required;
                                              return (0, S.jsxs)(
                                                d.Z,
                                                {
                                                  children: [
                                                    (0, S.jsx)(u.Z, {
                                                      className: "col-sm-4",
                                                      children:
                                                        (null === V ||
                                                        void 0 === V
                                                          ? void 0
                                                          : V.id) === e.id
                                                          ? (0, S.jsx)(
                                                              "input",
                                                              {
                                                                name: "field-name",
                                                                type: "text",
                                                                onChange:
                                                                  function (e) {
                                                                    return K(
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
                                                    (0, S.jsx)(u.Z, {
                                                      className: "col-sm-2",
                                                      children: (0, S.jsx)(
                                                        "input",
                                                        {
                                                          type: "checkbox",
                                                          disabled: !re,
                                                          checked: r,
                                                          onChange: function (
                                                            n
                                                          ) {
                                                            return ae(
                                                              n,
                                                              e,
                                                              "enable"
                                                            );
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                    (0, S.jsx)(u.Z, {
                                                      className: "col-sm-4",
                                                      children: (0, S.jsx)(
                                                        "input",
                                                        {
                                                          type: "checkbox",
                                                          disabled: !r,
                                                          checked: s,
                                                          onChange: function (
                                                            n
                                                          ) {
                                                            return ae(
                                                              n,
                                                              e,
                                                              "required"
                                                            );
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                    (null === V || void 0 === V
                                                      ? void 0
                                                      : V.id) === e.id
                                                      ? (0, S.jsxs)(u.Z, {
                                                          className: "col-sm-2",
                                                          children: [
                                                            (0, S.jsx)(
                                                              "button",
                                                              {
                                                                className:
                                                                  "save-btn",
                                                                onClick: ce,
                                                                children: (0,
                                                                S.jsx)(R.c, {
                                                                  children:
                                                                    "Save",
                                                                }),
                                                              }
                                                            ),
                                                            (0, S.jsx)(
                                                              "button",
                                                              {
                                                                className:
                                                                  "close-btn",
                                                                onClick:
                                                                  function () {
                                                                    X(null),
                                                                      K("");
                                                                  },
                                                                children: (0,
                                                                S.jsx)(y.Z, {}),
                                                              }
                                                            ),
                                                          ],
                                                        })
                                                      : (0, S.jsx)(u.Z, {
                                                          className: "col-sm-2",
                                                          children: (0, S.jsx)(
                                                            "button",
                                                            {
                                                              className:
                                                                "edit-btn",
                                                              onClick:
                                                                function () {
                                                                  X(e),
                                                                    K(e.name);
                                                                },
                                                              children: (0,
                                                              S.jsx)(j.Z, {
                                                                sx: {
                                                                  marginLeft:
                                                                    "0",
                                                                },
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                  ],
                                                },
                                                e.id
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
    23821: function (e, n, t) {
      var i = t(39281),
        r = t(79836),
        s = t(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(i.Z, {
            children: (0, s.jsx)(r.Z, { children: n }),
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
        s = t(87462),
        a = t(72791),
        c = t(28182),
        l = t(94419),
        o = t(47630),
        d = t(61046),
        u = t(23701),
        h = t(15825),
        m = t(19103),
        x = t(75414),
        p = t(73822),
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
        y = ["children", "className", "icon", "optional"],
        g = (0, o.ZP)(u.Z, {
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
          s.Z)({ width: "100%", padding: "24px 16px", margin: "-24px -16px", boxSizing: "content-box" }, "vertical" === n.orientation && { justifyContent: "flex-start", padding: "8px", margin: "-8px" }, (0, i.Z)({}, "& .".concat(Z.touchRipple), { color: "rgba(0, 0, 0, 0.3)" }));
        }),
        b = a.forwardRef(function (e, n) {
          var t = (0, d.Z)({ props: e, name: "MuiStepButton" }),
            i = t.children,
            o = t.className,
            u = t.icon,
            f = t.optional,
            Z = (0, r.Z)(t, y),
            b = a.useContext(p.Z).disabled,
            w = a.useContext(x.Z).orientation,
            N = (0, s.Z)({}, t, { orientation: w }),
            k = (function (e) {
              var n = e.classes,
                t = {
                  root: ["root", e.orientation],
                  touchRipple: ["touchRipple"],
                };
              return (0, l.Z)(t, v, n);
            })(N),
            C = { icon: u, optional: f },
            R = (0, m.Z)(i, ["StepLabel"])
              ? a.cloneElement(i, C)
              : (0, j.jsx)(h.Z, (0, s.Z)({}, C, { children: i }));
          return (0,
          j.jsx)(g, (0, s.Z)({ focusRipple: !0, disabled: b, TouchRippleProps: { className: k.touchRipple }, className: (0, c.Z)(k.root, o), ref: n, ownerState: N }, Z, { children: R }));
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
//# sourceMappingURL=4004.3c1d4a0a.chunk.js.map
