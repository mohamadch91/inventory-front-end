"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [4991],
  {
    30027: function (e, t, n) {
      var a = n(29439),
        i = n(1413),
        l = n(16149),
        r = n(78083),
        s = n(85109),
        c = n(97915),
        o = n(72791),
        d = n(80184),
        u = function (e) {
          return (0, d.jsx)("div", {
            children: (0, d.jsxs)(
              s.F.Option,
              (0, i.Z)(
                (0, i.Z)({}, e),
                {},
                {
                  children: [
                    (0, d.jsx)("input", {
                      type: "checkbox",
                      checked: e.isSelected,
                      onChange: function () {
                        return null;
                      },
                    }),
                    " ",
                    (0, d.jsx)("label", { children: e.label }),
                  ],
                }
              )
            ),
          });
        };
      t.Z = function (e) {
        var t,
          n = e.field,
          i = e.onChangeHandler,
          s = e.defaultValue,
          f = e.separator,
          m = (0, o.useState)([]),
          v = (0, a.Z)(m, 2),
          p = v[0],
          h = v[1];
        if ("select" === n.type) {
          if ("other_services" !== n.stateName)
            return (0, d.jsxs)(l.Z.Control, {
              onChange: function (e) {
                return i(e.target.value, n);
              },
              className: "form-control form-select",
              multiple: "other_services" === n.stateName,
              as: "select",
              disabled: n.active ? !n.active : n.disabled,
              id: "field-".concat(n.id),
              children: [
                (0, d.jsx)("option", { value: "", children: "Please select" }),
                n.params.map(function (e) {
                  return (0,
                  d.jsx)("option", { disabled: e.enabled ? !e.enabled : e.active ? !e.active : !e.enable, value: e.id, selected: parseInt(s) === e.id, children: e.name || e.describe });
                }),
              ],
            });
          var x = [],
            g = [];
          console.log(g);
          for (var j = 0; j < n.params.length; j++) {
            var y = n.params[j].enabled
                ? !n.params[j].enabled
                : n.params[j].active
                ? !n.params[j].active
                : !n.params[j].enable,
              b = !(void 0 === s || null === s || !s.includes(n.params[j].id));
            y ||
              x.push({
                label: n.params[j].name || n.params[j].describe,
                value: n.params[j].id,
              }),
              b &&
                g.push({
                  label: n.params[j].name || n.params[j].describe,
                  value: n.params[j].id,
                });
          }
          return (0, d.jsx)(c.ZP, {
            options: x,
            isMulti: !0,
            closeMenuOnSelect: !1,
            hideSelectedOptions: !1,
            components: { Option: u },
            onChange: function (e) {
              console.log(e);
              var t = [],
                a = "";
              if (null !== e) {
                for (var l = 0; l < e.length; l++)
                  t.push(e[l].value), (a += e[l].value);
                h(e), (g = e), i(a, n);
              } else i("", n), h([]), (g = []);
            },
            allowSelectAll: !0,
            value: p.length > 0 ? p : g,
          });
        }
        if ("bool" === n.type)
          return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsxs)(l.Z.Control, {
              onChange: function (e) {
                return i("true" === e.target.value, n);
              },
              className: "form-control",
              as: "select",
              disabled: n.active ? !n.active : n.disabled,
              id: "field-".concat(n.id),
              children: [
                (0, d.jsx)("option", {
                  selected: null === s || void 0 === s,
                  disabled: !0,
                  children: "Please select",
                }),
                (0, d.jsx)("option", {
                  selected: null !== s && void 0 !== s && s,
                  value: !0,
                  children: "Yes",
                }),
                (0, d.jsx)("option", {
                  selected: null !== s && void 0 !== s && !s,
                  value: !1,
                  children: "No",
                }),
              ],
            }),
          });
        var S = null === (t = n.validation) || void 0 === t ? void 0 : t[0];
        return (0, d.jsx)(l.Z.Control, {
          onKeyPress: function (e) {
            if ((e.persist(), "number" === n.type))
              if (S && null !== S && void 0 !== S && S.float) {
                if (-1 === "0123456789.:".indexOf(e.key))
                  return void e.preventDefault();
              } else if (
                S &&
                !1 === (null === S || void 0 === S ? void 0 : S.float) &&
                -1 === "0123456789".indexOf(e.key)
              )
                return void e.preventDefault();
            i(e.target.value, n);
          },
          onChange: function (e) {
            return i(e.target.value, n);
          },
          value: s,
          className: "form-control",
          id: "field-".concat(n.id),
          disabled: n.active ? !n.active : n.disabled,
          min:
            S && -1 !== (null === S || void 0 === S ? void 0 : S.min)
              ? S.min
              : void 0,
          max:
            S && -1 !== (null === S || void 0 === S ? void 0 : S.max)
              ? S.max
              : void 0,
          step:
            S && null !== S && void 0 !== S && S.float
              ? Math.pow(0.1, S.floating).toFixed(S.floating)
              : void 0,
          maxLength:
            S && -1 !== (null === S || void 0 === S ? void 0 : S.digits)
              ? S.digits
              : void 0,
          onBlur: function (e) {
            if ((e.persist(), f)) {
              var t = (0, r.k)(e.target.value);
              i(t, n);
            }
          },
        });
      };
    },
    38275: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      n(72791);
      var a = n(64554),
        i = n(36151),
        l = n(30606),
        r = n(80184);
      var s = function () {
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("svg", {
            version: "1.1",
            id: "Capa_1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 400 400",
            children: (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z",
            }),
          }),
        });
      };
      var c = function () {
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("svg", {
            version: "1.1",
            id: "Capa_1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 1024 1024",
            children: (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M754.752 480H160a32 32 0 100 64h594.752L521.344 777.344a32 32 0 0045.312 45.312l288-288a32 32 0 000-45.312l-288-288a32 32 0 10-45.312 45.312L754.752 480z",
            }),
          }),
        });
      };
      var o = function (e) {
        var t = e.activeStep,
          n = e.handleBack,
          o = e.handleNext,
          d = e.stepsLength,
          u = e.isNextDisabled,
          f = e.id;
        return (0, r.jsx)("div", {
          className: "row mt-2",
          children: (0, r.jsxs)(a.Z, {
            sx: { display: "flex", flexDirection: "row", pt: 2 },
            children: [
              (0, r.jsxs)(i.Z, {
                color: "inherit",
                disabled: 0 === t,
                onClick: n,
                sx: { mr: 1 },
                type: "button",
                children: [
                  (0, r.jsx)(s, { sx: { mr: 2 } }),
                  (0, r.jsx)(l.c, { children: "Back" }),
                ],
              }),
              (0, r.jsx)(a.Z, { sx: { flex: "1 1 auto" } }),
              (0, r.jsxs)(r.Fragment, {
                children: [
                  "new" !== f &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("button", {
                          className: "btn btn-primary w-25 ",
                          children: "SAVE ALL",
                        }),
                        (0, r.jsxs)(i.Z, {
                          disabled: u,
                          onClick: o,
                          type: "button",
                          sx: { mr: 1 },
                          children: [
                            (0, r.jsx)(l.c, { children: "Next" }),
                            (0, r.jsx)(c, {}),
                          ],
                        }),
                      ],
                    }),
                  "new" === f &&
                    t !== d &&
                    (0, r.jsxs)(i.Z, {
                      disabled: u,
                      onClick: o,
                      type: "button",
                      sx: { mr: 1 },
                      children: [
                        (0, r.jsx)(l.c, { children: "Next" }),
                        (0, r.jsx)(c, {}),
                      ],
                    }),
                  "new" === f &&
                    t === d &&
                    (0, r.jsx)("button", {
                      className: "btn btn-primary w-25 ",
                      children: "SAVE ALL",
                    }),
                ],
              }),
            ],
          }),
        });
      };
    },
    78083: function (e, t, n) {
      n.d(t, {
        k: function () {
          return a;
        },
      });
      var a = function (e) {
        if (void 0 !== e && null !== e && "" !== e)
          return (function (e, t) {
            function n(e) {
              return e.split("").reverse().join("");
            }
            var a = /(\d{3}(?!.*\.|$))/g;
            t || (t = " ");
            return n(n(e.toString()).replace(a, "$1" + t));
          })((e = parseInt(e)));
      };
    },
    95804: function (e, t, n) {
      n.d(t, {
        D: function () {
          return i;
        },
        q: function () {
          return l;
        },
      });
      var a = n(78083),
        i = function (e, t) {
          if ("string" !== typeof e && "number" !== typeof e) return !1;
          var n = e.replaceAll(" ", "");
          return (
            !(void 0 === t || !n) &&
            (-1 !== t.min && t.min > n
              ? "value must greater than ".concat((0, a.k)(t.min))
              : -1 !== t.max && t.max < n
              ? "value must less than ".concat((0, a.k)(t.max))
              : (console.log(n.split(".")),
                !!(
                  t.float &&
                  n.includes(".") &&
                  n.split(".")[1].length > t.floating
                ) && "value must has ".concat(t.floating, " decimals")))
          );
        },
        l = function (e) {
          return (
            !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(e) &&
            "value must be in (hh:mm) format!"
          );
        };
    },
    14991: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        });
      var a = n(37762),
        i = n(74165),
        l = n(1413),
        r = n(15861),
        s = n(29439),
        c = n(72791),
        o = n(91933),
        d = n(79271),
        u = n(59909),
        f = n(70242),
        m = n(74512),
        v = n(15825),
        p = n(16149),
        h = n(74936),
        x = n(30027),
        g = [
          {
            id: "PQSPISCode",
            name: "PQS/PIS Code:",
            topic: "",
            type: "text",
            active: !0,
            disabled: !1,
            required: !1,
            state: "PQSPISCode",
            params: [],
          },
          {
            id: "PQSPISType",
            name: "PQS/PIS-Type:",
            topic: "",
            type: "text",
            active: !0,
            disabled: !1,
            required: !1,
            state: "PQSPISType",
            params: [],
          },
          {
            id: "PQSPISManufacturer",
            name: "PQS/PIS-Manufacturer",
            topic: "",
            type: "text",
            active: !0,
            disabled: !1,
            required: !1,
            state: "PQSPISManufacturer",
            params: [],
          },
          {
            id: "PQSPISRefrigerantGas",
            name: "PQS/PIS-Refrigerant gas",
            topic: "",
            type: "text",
            active: !0,
            disabled: !1,
            required: !1,
            state: "PQSPISRefrigerantGas",
            params: [],
          },
        ],
        j = n(95804),
        y = n(30606),
        b = n(97915),
        S = n(38275),
        Z = { IsItFunctioning: ["ReasonsForNotFunctioning", "NotInUseSince"] },
        N = { IsItFunctioning: ["ReasonsForNotFunctioning", "NotInUseSince"] },
        P = n(80184),
        I = {
          id: "facility",
          type: "text",
          active: !1,
          disabled: !0,
          state: "facility",
          name: "",
        };
      var w = function () {
        var e,
          t,
          n = (0, c.useState)(0),
          w = (0, s.Z)(n, 2),
          C = w[0],
          k = w[1],
          Q = (0, c.useState)({}),
          O = (0, s.Z)(Q, 2),
          q = O[0],
          F = O[1],
          _ = (0, c.useState)({}),
          L = (0, s.Z)(_, 2),
          H = L[0],
          M = L[1],
          G = (0, c.useState)(null),
          A = (0, s.Z)(G, 2),
          D = A[0],
          R = A[1],
          T = (0, c.useState)(null),
          B = (0, s.Z)(T, 2),
          E = B[0],
          V = B[1],
          z = (0, c.useState)(!1),
          U = (0, s.Z)(z, 2),
          W = U[0],
          $ = U[1],
          K = (0, d.UO)().id,
          Y = (0, d.k6)(),
          J = new URLSearchParams(Y.location.search).get("parent"),
          X = (0, o.useQuery)(
            ["item-default-value", K],
            (0, r.Z)(
              (0, i.Z)().mark(function e() {
                var t, n;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((t = { code: "Unique code generated by IGA" }),
                          "new" !== K)
                        ) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return", t);
                      case 3:
                        return (e.next = 5), h.Z.getItems(K);
                      case 5:
                        return (
                          (n = e.sent),
                          e.abrupt("return", (0, l.Z)({}, n.data[0]))
                        );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            {
              onSuccess: function (e) {
                F(function (t) {
                  return (0, l.Z)((0, l.Z)({}, e), t);
                });
              },
            }
          ).isLoading,
          ee = (0, o.useQuery)(
            ["item-classes-and-types"],
            (0, r.Z)(
              (0, i.Z)().mark(function e() {
                var t;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), h.Z.getItemClassesAndTypes(J);
                      case 2:
                        return (
                          (t = e.sent),
                          F(function (e) {
                            return (0,
                            l.Z)((0, l.Z)({}, e), {}, { facility: t.data.facility });
                          }),
                          e.abrupt(
                            "return",
                            t.data.data.filter(function (e) {
                              return e.item_type.length > 0;
                            })
                          )
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            {
              refetchOnMount: !0,
              onSuccess: function (e) {
                var t, n;
                R(e[0]),
                  V(
                    null === (t = e[0]) ||
                      void 0 === t ||
                      null === (n = t.item_type) ||
                      void 0 === n
                      ? void 0
                      : n[0]
                  );
              },
            }
          ),
          te = ee.data,
          ne = ee.isLoading,
          ae = (0, o.useQuery)(
            ["pqs", null === E || void 0 === E ? void 0 : E.id],
            (0, r.Z)(
              (0, i.Z)().mark(function e() {
                var t, n;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          h.Z.getPQS(null === E || void 0 === E ? void 0 : E.id)
                        );
                      case 2:
                        return (
                          (n = e.sent),
                          e.abrupt(
                            "return",
                            null === n ||
                              void 0 === n ||
                              null === (t = n.data) ||
                              void 0 === t
                              ? void 0
                              : t.map(function (e) {
                                  var t;
                                  return {
                                    label:
                                      null !== (t = e.pqsnumber) && void 0 !== t
                                        ? t
                                        : e.pqscode,
                                    value: e,
                                  };
                                })
                          )
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !0 }
          ),
          ie = ae.data,
          le = ae.isLoading,
          re = (0, o.useQuery)(
            [
              "item-fields",
              null === D || void 0 === D ? void 0 : D.item_class.id,
              null === E || void 0 === E ? void 0 : E.id,
              J,
            ],
            (0, r.Z)(
              (0, i.Z)().mark(function e() {
                var t, n, l, r, s, c, o, d, u;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          console.log(E),
                          (e.next = 3),
                          h.Z.getItemFields(D.item_class.id, E.id, J)
                        );
                      case 3:
                        if (((t = e.sent), (n = {}), t.data.fields)) {
                          r = (0, a.Z)(t.data.fields);
                          try {
                            for (r.s(); !(s = r.n()).done; )
                              (o = s.value),
                                (d =
                                  null !== (c = n[o.field.topic]) &&
                                  void 0 !== c
                                    ? c
                                    : []).push(o.field),
                                (n[o.field.topic] = d);
                          } catch (i) {
                            r.e(i);
                          } finally {
                            r.f();
                          }
                          (u =
                            null !== (l = Object.keys(n)[0]) && void 0 !== l
                              ? l
                              : "Type"),
                            void 0 === n[u] && (n[u] = []),
                            n[u].unshift({
                              id: "code",
                              name: "Item code:",
                              topic: u,
                              type: "text",
                              active: !1,
                              disabled: !0,
                              required: !1,
                              state: "code",
                              params: [],
                            });
                        }
                        return e.abrupt("return", n);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { enabled: !!E }
          ),
          se = re.data,
          ce = re.isLoading,
          oe = re.isIdle,
          de = re.refetch;
        (0, c.useEffect)(
          function () {
            E && de();
          },
          [E]
        );
        var ue = function () {
            var e = (0, l.Z)({}, H),
              t = Object.values(se)[C];
            for (var n in (t.forEach(function (t) {
              console.log(t),
                !t.required ||
                  q[t.state] ||
                  (function (e, t) {
                    for (var n in N)
                      if (N[n].indexOf(e) >= 0) return void 0 !== t[n] && t[n];
                    return !1;
                  })(t.state, q) ||
                  ("bool" === t.type
                    ? void 0 === q[t.state] &&
                      (e[t.state] = "this field is required!")
                    : (console.log("salaaam"),
                      (e[t.state] = "this field is required!")));
            }),
            Z)) {
              var a = Z[n];
              console.log(q[n]),
                !0 === q[n] &&
                  a.forEach(function (t) {
                    delete e[t];
                  });
            }
            return console.log(e), M(e), Object.keys(e).length > 0;
          },
          fe = function () {
            ue() ||
              k(function (e) {
                return e + 1;
              });
          },
          me = function () {
            k(function (e) {
              return e - 1;
            });
          },
          ve = (function () {
            var e = (0, r.Z)(
              (0, i.Z)().mark(function e(t, n) {
                var a, r, s, c, o, d;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (o in ((r = (0, j.D)(
                          t,
                          null === (a = n.validation) || void 0 === a
                            ? void 0
                            : a[0]
                        )),
                        ((s = (0, l.Z)({}, q))[n.state] = t),
                        F(s),
                        (c = (0, l.Z)({}, H)),
                        r ? (c[n.state] = r) : delete c[n.state],
                        Z))
                          (d = Z[o]),
                            console.log(q[o]),
                            d.forEach(function (e) {
                              delete c[e];
                            });
                        console.log(c), M(c);
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          pe = (function () {
            var e = (0, r.Z)(
              (0, i.Z)().mark(function e(t) {
                var n, a, r, s, c, o;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((t.preventDefault(), !ue())) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        for (a in ((n = (0, l.Z)({}, q)), Z))
                          (r = Z[a]),
                            !1 === q[a] &&
                              r.forEach(function (e) {
                                delete n[e];
                              });
                        if (!W)
                          for (c in ((s = function (e) {
                            g.find(function (t) {
                              return t.state === e;
                            }) && delete n[e];
                          }),
                          q))
                            s(c);
                        for (o in ((n.item_class = D.item_class.id),
                        (n.item_type = E.id),
                        (n.facility = n.facility.id),
                        console.log(n.facility.id),
                        n))
                          "" === n[o] && delete n[o];
                        return (
                          (e.next = 13),
                          "new" === K ? h.Z.postItem(n) : h.Z.putItem(n)
                        );
                      case 13:
                        e.sent, Y.push("/items/list"), F(n);
                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          he = (function () {
            var e = (0, r.Z)(
              (0, i.Z)().mark(function e(t) {
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        console.log(t.target.value),
                          console.log(te),
                          R(te[t.target.value]),
                          V(te[t.target.value].item_type[0]);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          xe = function () {
            var e,
              t =
                null ===
                  (e = ie.find(function (e) {
                    return e.label === q.PQSPISCode;
                  })) || void 0 === e
                  ? void 0
                  : e.value;
            if (void 0 !== t) {
              var n = (0, l.Z)({}, q);
              console.log(ie);
              var a = ie.find(function (e) {
                var n;
                return (
                  (null === e ||
                  void 0 === e ||
                  null === (n = e.value) ||
                  void 0 === n
                    ? void 0
                    : n.id) === (null === t || void 0 === t ? void 0 : t.id)
                );
              }).value;
              console.log(a),
                3 == a.ptype
                  ? ((n.PQSPISManufacturer = a.make),
                    (n.PQSPISRefrigerantGas = a.refrigerant),
                    (n.PQSPISType = a.model),
                    (n.PQSPISTemperatureWorkingZone = a.refrigerant),
                    (n.NetVaccineStorageCapacity = a.refrigeratorcapacity),
                    (n.FreezerNetCapacity = a.freezercapacity),
                    (n.Height = a.h),
                    (n.Width = a.w),
                    (n.Length = a.l))
                  : ((n.PQSPISType = a.type),
                    (n.PQSPISManufacturer = a.manufacturer),
                    (n.PQSPISRefrigerantGas = "--"),
                    (n.PQSPISTemperatureWorkingZone = "--"),
                    (n.NetVaccineStorageCapacity = a.vaccinenetstoragecapacity),
                    (n.CoolantPackNominalCapacity =
                      a.coolantpacknominalcapacity),
                    (n.NumberOfCoolantPacksRequired = a.numbercoolantpacks),
                    (n.ExternalSize = a.externalvolume)),
                F(n);
            }
          };
        return X || ne || ce || oe || le
          ? (0, P.jsx)(u.Z, {})
          : (0, P.jsxs)("form", {
              onSubmit: pe,
              children: [
                (0, P.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, P.jsx)(y.c, { children: "Item information" }),
                }),
                (0, P.jsx)("div", {
                  className: "mt-3",
                  children: (0, P.jsx)("div", {
                    className: "card",
                    children: (0, P.jsxs)("div", {
                      className: "card-body pb-3",
                      children: [
                        (0, P.jsx)("div", {
                          className: "row pb-4",
                          style: { overflow: "auto" },
                          children: (0, P.jsx)(f.Z, {
                            activeStep: C,
                            children: Object.keys(se).map(function (e) {
                              return (0,
                              P.jsx)(m.Z, { children: (0, P.jsx)(v.Z, { style: { width: "max-content" }, children: e }) }, e);
                            }),
                          }),
                        }),
                        (0, P.jsx)(S.Z, {
                          handleBack: me,
                          handleNext: fe,
                          activeStep: C,
                          id: K,
                          stepsLength: Object.keys(se).length - 1,
                          isNextDisabled: Object.keys(H).length > 0,
                        }),
                      ],
                    }),
                  }),
                }),
                (0, P.jsx)("div", {
                  className: "mt-3",
                  children: (0, P.jsx)("div", {
                    className: "card",
                    children: (0, P.jsxs)("div", {
                      className: "card-body pb-3",
                      children: [
                        (0, P.jsx)("div", {
                          className: "row",
                          children: (0, P.jsxs)(p.Z.Group, {
                            className: "row mb-0",
                            children: [
                              (0, P.jsx)("label", {
                                className: "col-sm-4 text-right",
                                style: {
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  alignItems: "center",
                                  lineHeight: "1.4",
                                  textAlign: "right",
                                },
                                children: "Facility Name:",
                              }),
                              (0, P.jsx)("div", {
                                className: "col-sm-8",
                                children: (0, P.jsx)(x.Z, {
                                  field: I,
                                  defaultValue:
                                    null === (e = q.facility) || void 0 === e
                                      ? void 0
                                      : e.name,
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, P.jsx)("div", {
                          className: "row mt-3",
                          children: (0, P.jsxs)(p.Z.Group, {
                            className: "row mb-0",
                            children: [
                              (0, P.jsx)("label", {
                                className: "col-sm-4 text-left control-label",
                                style: {
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  alignItems: "center",
                                  lineHeight: "1.4",
                                  textAlign: "right",
                                },
                                children: (0, P.jsx)(y.c, {
                                  children: "Item class",
                                }),
                              }),
                              (0, P.jsx)("div", {
                                className: "col-sm-8",
                                children: (0, P.jsx)(p.Z.Control, {
                                  onChange: he,
                                  className: "form-select",
                                  as: "select",
                                  value:
                                    null === te || void 0 === te
                                      ? void 0
                                      : te.findIndex(function (e) {
                                          return (
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.item_class.id) ===
                                            (null === D || void 0 === D
                                              ? void 0
                                              : D.item_class.id)
                                          );
                                        }),
                                  disabled: 0 !== C || "new" !== K,
                                  children: te.map(function (e, t) {
                                    return (0,
                                    P.jsx)("option", { value: t, children: e.item_class.title });
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, P.jsx)("div", {
                          className: "row mt-3",
                          children: (0, P.jsxs)(p.Z.Group, {
                            className: "row mb-0",
                            children: [
                              (0, P.jsx)("label", {
                                className: "col-sm-4 text-right control-label",
                                style: {
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  alignItems: "center",
                                  lineHeight: "1.4",
                                  textAlign: "right",
                                },
                                children: (0, P.jsx)(y.c, {
                                  children: "Item Category",
                                }),
                              }),
                              (0, P.jsx)("div", {
                                className: "col-sm-8",
                                children: (0, P.jsx)(p.Z.Control, {
                                  onChange: function (e) {
                                    V(D.item_type[e.target.value]);
                                  },
                                  className: "form-select",
                                  as: "select",
                                  value:
                                    null === D || void 0 === D
                                      ? void 0
                                      : D.item_type.findIndex(function (e) {
                                          return (
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.id) ===
                                            (null === E || void 0 === E
                                              ? void 0
                                              : E.id)
                                          );
                                        }),
                                  disabled: 0 !== C || "new" !== K,
                                  children:
                                    null === D || void 0 === D
                                      ? void 0
                                      : D.item_type.map(function (e, t) {
                                          return (0,
                                          P.jsx)("option", { value: t, children: e.title });
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
                (0, P.jsx)("div", {
                  className: "mt-3",
                  children: (0, P.jsx)("div", {
                    className: "card",
                    children: (0, P.jsxs)("div", {
                      className: "card-body",
                      children: [
                        0 === C &&
                          (0, P.jsx)(P.Fragment, {
                            children:
                              E.havepqs &&
                              (0, P.jsxs)(P.Fragment, {
                                children: [
                                  (0, P.jsx)("div", {
                                    className: "row",
                                    children: (0, P.jsxs)(p.Z.Group, {
                                      className: "row mb-0",
                                      children: [
                                        (0, P.jsx)("label", {
                                          className: "col-sm-4 text-right",
                                          style: {
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "center",
                                            lineHeight: "1.4",
                                            textAlign: "right",
                                          },
                                          children: (0, P.jsx)(y.c, {
                                            children:
                                              "Is this item from PQS/PIS list?",
                                          }),
                                        }),
                                        (0, P.jsx)("div", {
                                          className: "col-sm-6",
                                          children: (0, P.jsx)("input", {
                                            name: "is-from-pqs",
                                            type: "checkbox",
                                            onChange: function () {
                                              $(function (e) {
                                                return !e;
                                              });
                                            },
                                            checked: W,
                                          }),
                                        }),
                                        (0, P.jsx)("hr", { className: "my-3" }),
                                      ],
                                    }),
                                  }),
                                  W &&
                                    g.map(function (e) {
                                      var t;
                                      return (0, P.jsx)(
                                        "div",
                                        {
                                          className: "row",
                                          children: (0, P.jsxs)(p.Z.Group, {
                                            className: "row mb-0",
                                            children: [
                                              (0, P.jsx)("label", {
                                                className:
                                                  "col-sm-4 text-right ".concat(
                                                    e.required
                                                      ? "control-label"
                                                      : ""
                                                  ),
                                                style: {
                                                  display: "flex",
                                                  justifyContent: "flex-end",
                                                  alignItems: "center",
                                                  lineHeight: "1.4",
                                                  textAlign: "right",
                                                },
                                                children: e.name,
                                              }),
                                              (0, P.jsx)("div", {
                                                className: "".concat(
                                                  "PQSPISCode" === e.state
                                                    ? "col-sm-7"
                                                    : "col-sm-8"
                                                ),
                                                children:
                                                  ie && "PQSPISCode" === e.state
                                                    ? (0, P.jsx)(b.ZP, {
                                                        options: ie,
                                                        onChange: function (t) {
                                                          ve(t.label, e);
                                                        },
                                                        value: {
                                                          label: q.PQSPISCode,
                                                          value:
                                                            null ===
                                                              (t = ie.find(
                                                                function (e) {
                                                                  return (
                                                                    e.label ===
                                                                    q.PQSPISCode
                                                                  );
                                                                }
                                                              )) || void 0 === t
                                                              ? void 0
                                                              : t.value,
                                                        },
                                                        onBlur: function (t) {
                                                          var n =
                                                            t.target.value;
                                                          n.length > 0 &&
                                                            ve(n, e);
                                                        },
                                                      })
                                                    : (0, P.jsx)(x.Z, {
                                                        field: e,
                                                        onChangeHandler: ve,
                                                        defaultValue:
                                                          q[e.state],
                                                      }),
                                              }),
                                              "PQSPISCode" === e.state &&
                                                (0, P.jsx)("div", {
                                                  className: "col-sm-1",
                                                  children: (0, P.jsx)(
                                                    "button",
                                                    {
                                                      className:
                                                        "btn btn-primary w-100 h-100",
                                                      onClick: xe,
                                                      type: "button",
                                                      children: (0, P.jsx)(
                                                        y.c,
                                                        { children: "Load" }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              (0, P.jsx)("hr", {
                                                className: "my-3",
                                              }),
                                            ],
                                          }),
                                        },
                                        e.name
                                      );
                                    }),
                                ],
                              }),
                          }),
                        null === (t = Object.values(se)[C]) || void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              if (
                                !(function (e, t) {
                                  for (var n in Z)
                                    if (Z[n].indexOf(e) >= 0)
                                      return (
                                        console.log(t[n]),
                                        void 0 !== t[n] && !t[n]
                                      );
                                  return !0;
                                })(e.state, q)
                              )
                                return null;
                              var t = !!H[e.state];
                              return (0,
                              P.jsx)("div", { className: "row", children: (0, P.jsxs)(p.Z.Group, { className: "row mb-0", children: [(0, P.jsx)("label", { className: "col-sm-4 text-right ".concat(e.required ? "control-label" : ""), style: { display: "flex", justifyContent: "flex-end", alignItems: "center", lineHeight: "1.4", textAlign: "right" }, children: e.name }), (0, P.jsx)("div", { className: "col-sm-8", children: (0, P.jsx)(x.Z, { field: e, onChangeHandler: ve, defaultValue: q[e.state] }) }), t && (0, P.jsxs)("div", { className: "row", children: [(0, P.jsx)("div", { className: "col-sm-4" }), (0, P.jsx)("div", { className: "col-sm-8", children: (0, P.jsx)("p", { className: "my-1 ml-2 text-danger", children: H[e.state] }) })] }), (0, P.jsx)("hr", { className: "my-3" })] }) }, e.name);
                            }),
                      ],
                    }),
                  }),
                }),
                (0, P.jsx)("div", {
                  className: "mt-3",
                  children: (0, P.jsx)("div", {
                    className: "card",
                    children: (0, P.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, P.jsx)(S.Z, {
                        handleBack: me,
                        handleNext: fe,
                        id: K,
                        activeStep: C,
                        stepsLength: Object.keys(se).length - 1,
                        isNextDisabled: Object.keys(H).length > 0,
                      }),
                    }),
                  }),
                }),
              ],
            });
      };
    },
  },
]);
//# sourceMappingURL=4991.dc54caba.chunk.js.map
