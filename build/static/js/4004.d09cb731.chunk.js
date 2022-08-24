"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [4004],
  {
    69778: function (e, t, n) {
      var r = n(15671),
        i = n(43144),
        a = n(74569),
        s = n.n(a),
        l = n(54318),
        c = "http://127.0.0.1:8000/items/",
        u = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "getItemClasses",
                value: function () {
                  return s().get(c + "itemClass", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getActiveItemClasses",
                value: function () {
                  return s().get(c + "class-helper", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putItemClass",
                value: function (e) {
                  return s().put(c + "itemClass", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getItemTypes",
                value: function () {
                  return s().get(c + "itemType", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "postItemType",
                value: function (e) {
                  return s().post(c + "itemType", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putItemTypes",
                value: function (e) {
                  return s().put(c + "itemType", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getItemClassesOfAnItemType",
                value: function (e) {
                  return s().get(c + "itembyclass?id=" + e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getActiveItemClassesWithFields",
                value: function (e) {
                  var t = {};
                  return (
                    e && (t.id = e),
                    s().get(c + "itembyclass", {
                      headers: { Authorization: (0, l.Z)() },
                      params: t,
                    })
                  );
                },
              },
              {
                key: "getItemTinLevels",
                value: function (e) {
                  var t = {};
                  return (
                    e && (t.level = e),
                    s().get(c + "itemTinLevels", {
                      headers: { Authorization: (0, l.Z)() },
                      params: t,
                    })
                  );
                },
              },
              {
                key: "putItemTypeInClass",
                value: function (e) {
                  return s().put(c + "itemTinLevels", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getManufacturers",
                value: function (e) {
                  return s().get(c + "manufacturer?id=" + e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "postManufacturer",
                value: function (e) {
                  return s().post(c + "manufacturer", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putManufacturer",
                value: function (e) {
                  return s().put(c + "manufacturer", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new u();
    },
    71986: function (e, t, n) {
      var r = n(15671),
        i = n(43144),
        a = n(74569),
        s = n.n(a),
        l = n(54318),
        c = "http://127.0.0.1:8000/related/",
        u = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "getParameters",
                value: function () {
                  return s().get(c + "params", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getParameterDescriptions",
                value: function (e, t) {
                  return s().get(c + "params/?id=" + e + "&type=" + t, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putParameters",
                value: function (e) {
                  return s().put(c + "params/", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getItemFields",
                value: function () {
                  return s().get(c + "item-fields", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putItemFields",
                value: function (e) {
                  return s().put(c + "item-fields", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getRelatedItemType",
                value: function (e) {
                  var t = {};
                  return (
                    e && (t.id = e),
                    s().get(c + "related-item-type", {
                      headers: { Authorization: (0, l.Z)() },
                      params: t,
                    })
                  );
                },
              },
              {
                key: "putRelatedItemType",
                value: function (e) {
                  return s().put(c + "related-item-type", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getRelatedFacility",
                value: function () {
                  return s().get(c + "related-facility/", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putRelatedFacility",
                value: function (e) {
                  return s().put(c + "related-facility/", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new u();
    },
    4004: function (e, t, n) {
      n.r(t);
      var r = n(1413),
        i = n(42982),
        a = n(37762),
        s = n(74165),
        l = n(15861),
        c = n(70885),
        u = n(56890),
        d = n(35855),
        o = n(53994),
        m = n(53382),
        h = n(72791),
        p = n(23821),
        v = n(94912),
        f = n(69778),
        x = n(91933),
        Z = n(59909),
        y = n(95907),
        j = n(40277),
        g = n(70242),
        k = n(74512),
        b = n(64554),
        w = n(36151),
        N = n(74130),
        z = (n(93650), n(71986)),
        A = (n(2423), n(80184));
      t.default = function () {
        var e,
          t = (0, h.useState)(0),
          n = (0, c.Z)(t, 2),
          C = n[0],
          I = n[1],
          T = (0, h.useState)(),
          F = (0, c.Z)(T, 2),
          L = F[0],
          S = F[1],
          q = (0, h.useState)(),
          R = (0, c.Z)(q, 2),
          M = R[0],
          O = R[1],
          _ = (0, h.useState)([]),
          B = (0, c.Z)(_, 2),
          P = B[0],
          Q = B[1],
          D = (0, h.useState)(null),
          E = (0, c.Z)(D, 2),
          G = E[0],
          W = E[1],
          X = (0, h.useState)(""),
          V = (0, c.Z)(X, 2),
          H = V[0],
          J = V[1],
          K = (0, x.useQuery)(
            ["active-item-classes-with-item-type"],
            (0, l.Z)(
              (0, s.Z)().mark(function e() {
                var t;
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2), f.Z.getActiveItemClassesWithFields()
                        );
                      case 2:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            {
              onSuccess: function (e) {
                S(e[0]), O(e[0].item_type[0]);
              },
            }
          ),
          U = K.data,
          Y = K.isLoading,
          $ = (0, x.useQuery)(
            ["related-item-fields"],
            (0, l.Z)(
              (0, s.Z)().mark(function e() {
                var t;
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.Z.getItemFields();
                      case 2:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { staleTime: 1 / 0 }
          ),
          ee = $.data,
          te = $.isLoading,
          ne = $.refetch,
          re = (0, x.useQuery)(
            ["related-item-type", null === M || void 0 === M ? void 0 : M.id],
            (0, l.Z)(
              (0, s.Z)().mark(function e() {
                var t;
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.Z.getRelatedItemType(M.id);
                      case 2:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { enabled: !Y, staleTime: 3e5 }
          ).data,
          ie = (0, h.useMemo)(
            function () {
              var e = {};
              if (ee) {
                var t,
                  n = (0, a.Z)(ee);
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r,
                      i = t.value,
                      s = null !== (r = e[i.topic]) && void 0 !== r ? r : [];
                    s.push(i), (e[i.topic] = s);
                  }
                } catch (l) {
                  n.e(l);
                } finally {
                  n.f();
                }
              }
              return e;
            },
            [ee]
          ),
          ae = function (e, t, n) {
            var a = e.target.checked,
              s = (0, i.Z)(P),
              l = P.findIndex(function (e) {
                return e.itemtypeid === M.id && e.fieldid === t.id;
              });
            if (-1 === l)
              s.push({
                itemtypeid: M.id,
                fieldid: t.id,
                required: "required" === n && a,
                enable: "enable" !== n || a,
              });
            else {
              var c = P[l];
              s[l] = (0, r.Z)(
                (0, r.Z)({}, c),
                {},
                {
                  required: "required" === n ? a : c.required,
                  enable: "enable" === n ? a : c.enable,
                }
              );
            }
            Q(s);
          },
          se = (function () {
            var e = (0, l.Z)(
              (0, s.Z)().mark(function e() {
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          z.Z.putItemFields(
                            (0, r.Z)((0, r.Z)({}, G), {}, { name: H })
                          )
                        );
                      case 2:
                        e.sent, ne(), W(null), J("");
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
            var e = (0, l.Z)(
              (0, s.Z)().mark(function e() {
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.Z.putRelatedItemType(P);
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
        return (0, A.jsxs)("div", {
          children: [
            (0, A.jsx)("h3", {
              className: "page-title mb-3",
              children: 'Fields of "item category"',
            }),
            Y
              ? (0, A.jsx)(Z.Z, {})
              : (0, A.jsx)("div", {
                  className: "mt-3",
                  children: (0, A.jsx)("div", {
                    className: "card",
                    children: (0, A.jsx)("div", {
                      className: "card-body",
                      children: (0, A.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, A.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, A.jsxs)(v.Z.Group, {
                              className: "row",
                              children: [
                                (0, A.jsx)("label", {
                                  className: "col-sm-12",
                                  children: "Item class",
                                }),
                                (0, A.jsx)("div", {
                                  className: "col-sm-12",
                                  children: (0, A.jsx)(v.Z.Control, {
                                    onChange: function (e) {
                                      S(U[e.target.value]);
                                    },
                                    className: "form-select",
                                    as: "select",
                                    children: U.map(function (e, t) {
                                      return (0,
                                      A.jsx)("option", { value: t, children: e.item_class.title });
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, A.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, A.jsxs)(v.Z.Group, {
                              className: "row",
                              children: [
                                (0, A.jsx)("label", {
                                  className: "col-sm-12",
                                  children: "item category",
                                }),
                                (0, A.jsx)("div", {
                                  className: "col-sm-12",
                                  children: (0, A.jsx)(v.Z.Control, {
                                    onChange: function (e) {
                                      O(L.item_type[e.target.value]);
                                    },
                                    className: "form-select",
                                    disabled: null === L,
                                    as: "select",
                                    children:
                                      null === L || void 0 === L
                                        ? void 0
                                        : L.item_type.map(function (e, t) {
                                            return (0,
                                            A.jsx)("option", { value: t, children: e.title });
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
              ? (0, A.jsx)(Z.Z, {})
              : (0, A.jsxs)(A.Fragment, {
                  children: [
                    (0, A.jsx)("div", {
                      className: "mt-3",
                      children: (0, A.jsx)("div", {
                        className: "card",
                        children: (0, A.jsxs)("div", {
                          className: "card-body pb-3",
                          children: [
                            (0, A.jsx)("div", {
                              className: "row pb-4",
                              style: { overflow: "auto" },
                              children: (0, A.jsx)(g.Z, {
                                activeStep: C,
                                children: Object.keys(ie).map(function (e, t) {
                                  return (0, A.jsx)(
                                    k.Z,
                                    {
                                      onClick: function () {
                                        I(t);
                                      },
                                      children: (0, A.jsx)(N.Z, {
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
                            (0, A.jsx)("div", {
                              className: "row mt-2",
                              children: (0, A.jsxs)(b.Z, {
                                sx: {
                                  display: "flex",
                                  flexDirection: "row",
                                  pt: 2,
                                },
                                children: [
                                  (0, A.jsx)(w.Z, {
                                    color: "inherit",
                                    disabled: 0 === C,
                                    onClick: function () {
                                      I(function (e) {
                                        return e - 1;
                                      });
                                    },
                                    sx: { mr: 1 },
                                    children: "Back",
                                  }),
                                  (0, A.jsx)(b.Z, { sx: { flex: "1 1 auto" } }),
                                  (0, A.jsx)(w.Z, {
                                    disabled: C === Object.keys(ie).length - 1,
                                    onClick: function () {
                                      I(function (e) {
                                        return e + 1;
                                      });
                                    },
                                    sx: { mr: 1 },
                                    children: "Next",
                                  }),
                                  (0, A.jsx)("button", {
                                    className: "btn btn-primary ",
                                    onClick: le,
                                    children: "Save",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, A.jsx)("div", {
                      className: "mt-3",
                      children: (0, A.jsx)("div", {
                        className: "card",
                        children: (0, A.jsx)("div", {
                          className: "card-body p-3",
                          children: (0, A.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, A.jsxs)("h4", {
                                children: [" ", Object.keys(ie)[C]],
                              }),
                              (0, A.jsx)("div", {
                                className: "mt-5 table-container",
                                children: (0, A.jsxs)(p.Z, {
                                  children: [
                                    (0, A.jsx)(u.Z, {
                                      children: (0, A.jsxs)(d.Z, {
                                        children: [
                                          (0, A.jsx)(o.Z, {
                                            className: "col-sm-4",
                                            children: "Field name",
                                          }),
                                          (0, A.jsx)(o.Z, {
                                            className: "col-sm-2",
                                            children: "Enable",
                                          }),
                                          (0, A.jsx)(o.Z, {
                                            className: "col-sm-4",
                                            children:
                                              "Is this required field for item category?",
                                          }),
                                          (0, A.jsx)(o.Z, {
                                            className: "col-sm-2",
                                            children: "Edit",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, A.jsx)(m.Z, {
                                      children:
                                        null === (e = Object.values(ie)[C]) ||
                                        void 0 === e
                                          ? void 0
                                          : e.map(function (e) {
                                              var t,
                                                n,
                                                r =
                                                  null !==
                                                    (t = P.find(function (t) {
                                                      return (
                                                        t.fieldid === e.id &&
                                                        t.itemtypeid === M.id
                                                      );
                                                    })) && void 0 !== t
                                                    ? t
                                                    : null === re ||
                                                      void 0 === re
                                                    ? void 0
                                                    : re.find(function (t) {
                                                        return (
                                                          e.id === t.field.id &&
                                                          M.id === t.itemtype.id
                                                        );
                                                      }),
                                                i =
                                                  null !==
                                                    (n =
                                                      null === r || void 0 === r
                                                        ? void 0
                                                        : r.enable) &&
                                                  void 0 !== n
                                                    ? n
                                                    : !!r,
                                                a =
                                                  null === r || void 0 === r
                                                    ? void 0
                                                    : r.required;
                                              return (0, A.jsxs)(
                                                d.Z,
                                                {
                                                  children: [
                                                    (0, A.jsx)(o.Z, {
                                                      className: "col-sm-4",
                                                      children:
                                                        (null === G ||
                                                        void 0 === G
                                                          ? void 0
                                                          : G.id) === e.id
                                                          ? (0, A.jsx)(
                                                              "input",
                                                              {
                                                                name: "field-name",
                                                                type: "text",
                                                                onChange:
                                                                  function (e) {
                                                                    return J(
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
                                                    (0, A.jsx)(o.Z, {
                                                      className: "col-sm-2",
                                                      children: (0, A.jsx)(
                                                        "input",
                                                        {
                                                          type: "checkbox",
                                                          disabled: !re,
                                                          checked: i,
                                                          onChange: function (
                                                            t
                                                          ) {
                                                            return ae(
                                                              t,
                                                              e,
                                                              "enable"
                                                            );
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                    (0, A.jsx)(o.Z, {
                                                      className: "col-sm-4",
                                                      children: (0, A.jsx)(
                                                        "input",
                                                        {
                                                          type: "checkbox",
                                                          disabled: !i,
                                                          checked: a,
                                                          onChange: function (
                                                            t
                                                          ) {
                                                            return ae(
                                                              t,
                                                              e,
                                                              "required"
                                                            );
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                    (null === G || void 0 === G
                                                      ? void 0
                                                      : G.id) === e.id
                                                      ? (0, A.jsxs)(o.Z, {
                                                          className: "col-sm-2",
                                                          children: [
                                                            (0, A.jsx)(
                                                              "button",
                                                              {
                                                                className:
                                                                  "save-btn",
                                                                onClick: se,
                                                                children:
                                                                  "Save",
                                                              }
                                                            ),
                                                            (0, A.jsx)(
                                                              "button",
                                                              {
                                                                className:
                                                                  "close-btn",
                                                                onClick:
                                                                  function () {
                                                                    W(null),
                                                                      J("");
                                                                  },
                                                                children: (0,
                                                                A.jsx)(j.Z, {}),
                                                              }
                                                            ),
                                                          ],
                                                        })
                                                      : (0, A.jsx)(o.Z, {
                                                          className: "col-sm-2",
                                                          children: (0, A.jsx)(
                                                            "button",
                                                            {
                                                              className:
                                                                "edit-btn",
                                                              onClick:
                                                                function () {
                                                                  W(e),
                                                                    J(e.name);
                                                                },
                                                              children: (0,
                                                              A.jsx)(y.Z, {}),
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
    40277: function (e, t, n) {
      var r = n(80184);
      t.Z = function () {
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("svg", {
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
            children: (0, r.jsx)("g", {
              children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z",
              }),
            }),
          }),
        });
      };
    },
    95907: function (e, t, n) {
      var r = n(80184);
      t.Z = function () {
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, r.jsx)("g", {
              children: (0, r.jsx)("g", {
                children: (0, r.jsx)("path", {
                  d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
                }),
              }),
            }),
          }),
        });
      };
    },
    23821: function (e, t, n) {
      var r = n(39281),
        i = n(79836),
        a = n(80184);
      t.Z = function (e) {
        var t = e.children;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(r.Z, {
            children: (0, a.jsx)(i.Z, { children: t }),
          }),
        });
      };
    },
    2423: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=4004.d09cb731.chunk.js.map
