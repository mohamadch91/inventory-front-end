"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1612],
  {
    30027: function (e, t, n) {
      var a = n(29439),
        l = n(1413),
        i = n(16149),
        r = n(78083),
        o = n(85109),
        s = n(97915),
        c = n(30606),
        u = n(12902),
        d = n(60324),
        m = n(72791),
        p = n(80184),
        v = "0123456789.:",
        f = function (e) {
          return (0, p.jsx)("div", {
            children: (0, p.jsxs)(
              o.F.Option,
              (0, l.Z)(
                (0, l.Z)({}, e),
                {},
                {
                  children: [
                    (0, p.jsx)("input", {
                      type: "checkbox",
                      checked: e.isSelected,
                      onChange: function () {
                        return null;
                      },
                    }),
                    " ",
                    (0, p.jsx)("label", {
                      children: (0, p.jsx)(c.c, { children: e.label }),
                    }),
                  ],
                }
              )
            ),
          });
        };
      t.Z = function (e) {
        var t,
          n = e.field,
          l = e.onChangeHandler,
          o = e.defaultValue,
          c = e.separator,
          h = (0, m.useState)([]),
          x = (0, a.Z)(h, 2),
          g = x[0],
          j = x[1];
        if ("select" === n.type) {
          if ("other_services" !== n.stateName)
            return (0, p.jsxs)(i.Z.Control, {
              onChange: function (e) {
                return l(e.target.value, n);
              },
              className: "form-control form-select",
              as: "select",
              disabled: n.active ? !n.active : n.disabled,
              id: "field-".concat(n.id),
              children: [
                (0, p.jsx)(u.W, {
                  children: function (e, t) {
                    t.i18n;
                    return (0, p.jsx)("option", {
                      i18n: !0,
                      value: "",
                      selected: !0,
                      children: e("Please select"),
                    });
                  },
                }),
                n.params.map(function (e) {
                  return (0,
                  p.jsx)("option", { disabled: e.enabled ? !e.enabled : e.active ? !e.active : !e.enable, value: e.id, selected: parseInt(o) === e.id, children: e.name || e.describe });
                }),
              ],
            });
          var b = [],
            y = [];
          console.log(y);
          for (var N = 0; N < n.params.length; N++) {
            var Z = n.params[N].enabled
                ? !n.params[N].enabled
                : n.params[N].active
                ? !n.params[N].active
                : !n.params[N].enable,
              S = !(void 0 === o || null === o || !o.includes(n.params[N].id));
            Z ||
              b.push({
                label: n.params[N].name || n.params[N].describe,
                value: n.params[N].id,
              }),
              S &&
                y.push({
                  label: n.params[N].name || n.params[N].describe,
                  value: n.params[N].id,
                });
          }
          return (0, p.jsx)(s.ZP, {
            options: b,
            isMulti: !0,
            closeMenuOnSelect: !1,
            hideSelectedOptions: !1,
            components: { Option: f },
            onChange: function (e) {
              console.log(e);
              var t = [],
                a = "";
              if (null !== e) {
                for (var i = 0; i < e.length; i++)
                  t.push(e[i].value), (a += e[i].value);
                j(e), (y = e), l(a, n);
              } else l("", n), j([]), (y = []);
            },
            allowSelectAll: !0,
            value: g.length > 0 ? g : y,
          });
        }
        if ("bool" === n.type)
          return (0, p.jsx)(p.Fragment, {
            children: (0, p.jsx)(i.Z.Control, {
              onChange: function (e) {
                return l("true" === e.target.value, n);
              },
              className: "form-control form-select",
              as: "select",
              disabled: n.active ? !n.active : n.disabled,
              id: "field-".concat(n.id),
              children: (0, p.jsx)(u.W, {
                children: function (e, t) {
                  t.i18n;
                  return (0, p.jsxs)(p.Fragment, {
                    children: [
                      (0, p.jsx)("option", {
                        i18n: !0,
                        value: "",
                        selected: null === o || void 0 === o,
                        disabled: !0,
                        children: e("Please select"),
                      }),
                      (0, p.jsx)("option", {
                        selected: null !== o && void 0 !== o && o,
                        value: !0,
                        children: e("Yes"),
                      }),
                      (0, p.jsx)("option", {
                        selected: null !== o && void 0 !== o && !o,
                        value: !1,
                        children: e("No"),
                      }),
                    ],
                  });
                },
              }),
            }),
          });
        ("en" != d.Z.language) & ("ar" != d.Z.language) && (v = "0123456789,:");
        var w = null === (t = n.validation) || void 0 === t ? void 0 : t[0];
        return (0, p.jsx)(i.Z.Control, {
          onKeyPress: function (e) {
            if ((e.persist(), "number" === n.type))
              if (w && null !== w && void 0 !== w && w.float) {
                if (-1 === v.indexOf(e.key)) return void e.preventDefault();
              } else if (
                w &&
                !1 === (null === w || void 0 === w ? void 0 : w.float) &&
                -1 === "0123456789".indexOf(e.key)
              )
                return void e.preventDefault();
            l(e.target.value, n);
          },
          lang: "en-US",
          onChange: function (e) {
            return l(e.target.value, n);
          },
          value: o,
          className: "form-control",
          id: "field-".concat(n.id),
          disabled: n.active ? !n.active : n.disabled,
          min:
            w && -1 !== (null === w || void 0 === w ? void 0 : w.min)
              ? w.min
              : void 0,
          max:
            w && -1 !== (null === w || void 0 === w ? void 0 : w.max)
              ? w.max
              : void 0,
          step:
            w && null !== w && void 0 !== w && w.float
              ? Math.pow(0.1, w.floating).toFixed(w.floating)
              : void 0,
          maxLength:
            w && -1 !== (null === w || void 0 === w ? void 0 : w.digits)
              ? w.digits
              : void 0,
          onBlur: function (e) {
            if ((e.persist(), c)) {
              var t = (0, r.k)(e.target.value);
              l(t, n);
            }
          },
        });
      };
    },
    66437: function (e, t, n) {
      n(72791);
      var a = n(64554),
        l = n(36151),
        i = n(30606),
        r = n(2997),
        o = n(80906),
        s = n(79271),
        c = n(80184);
      t.Z = function (e) {
        var t = e.activeStep,
          n = e.handleBack,
          u = e.handleNext,
          d = e.stepsLength,
          m = e.isNextDisabled,
          p = e.id;
        return (
          (0, s.k6)(),
          (0, c.jsx)("div", {
            className: "row mt-2",
            children: (0, c.jsxs)(a.Z, {
              sx: { display: "flex", flexDirection: "row", pt: 2 },
              children: [
                (0, c.jsxs)(l.Z, {
                  disabled: 0 === t,
                  onClick: n,
                  sx: { mr: 1 },
                  type: "button",
                  children: [
                    (0, c.jsx)(r.Z, { sx: { mr: 2 } }),
                    (0, c.jsx)(i.c, { children: "Back" }),
                  ],
                }),
                (0, c.jsx)(a.Z, { sx: { flex: "0.5 0.5 auto" } }),
                (0, c.jsxs)(c.Fragment, {
                  children: [
                    "new" !== p &&
                      t !== d &&
                      (0, c.jsxs)(c.Fragment, {
                        children: [
                          (0, c.jsx)("button", {
                            className: "btn btn-primary w-10 ",
                            children: (0, c.jsx)(i.c, { children: "Save all" }),
                          }),
                          (0, c.jsx)(a.Z, { sx: { flex: "0.6 0.5 auto" } }),
                          (0, c.jsxs)(l.Z, {
                            disabled: m,
                            onClick: u,
                            type: "button",
                            sx: { mr: 1 },
                            children: [
                              (0, c.jsx)(i.c, { children: "Next" }),
                              (0, c.jsx)(o.Z, {}),
                            ],
                          }),
                        ],
                      }),
                    "new" !== p &&
                      t === d &&
                      (0, c.jsxs)(c.Fragment, {
                        children: [
                          (0, c.jsx)(a.Z, { sx: { flex: "0.48 0.5 auto" } }),
                          (0, c.jsx)("button", {
                            className: "btn btn-primary w-10 ",
                            value: "saveAll",
                            name: "saveaLL",
                            children: (0, c.jsx)(i.c, { children: "Save all" }),
                          }),
                        ],
                      }),
                    "new" === p &&
                      t !== d &&
                      (0, c.jsxs)(c.Fragment, {
                        children: [
                          (0, c.jsx)(a.Z, { sx: { flex: "0.6 0.5 auto" } }),
                          (0, c.jsxs)(l.Z, {
                            disabled: m,
                            onClick: u,
                            type: "button",
                            sx: { mr: 1 },
                            children: [
                              (0, c.jsx)(i.c, { children: "Next" }),
                              (0, c.jsx)(o.Z, {}),
                            ],
                          }),
                        ],
                      }),
                    "new" === p &&
                      t === d &&
                      (0, c.jsxs)(c.Fragment, {
                        children: [
                          (0, c.jsx)(a.Z, { sx: { flex: "0.6 0.5 auto" } }),
                          (0, c.jsx)("button", {
                            className: "btn btn-primary w-10 ",
                            name: "save",
                            value: "x",
                            children: (0, c.jsx)(i.c, { children: "Save all" }),
                          }),
                          (0, c.jsx)("button", {
                            className: "btn btn-primary w-10 ",
                            name: "saveNew",
                            value: "y",
                            children: (0, c.jsx)(i.c, {
                              children: "SAVE and New",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    63990: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        });
      var a = n(93433),
        l = n(37762),
        i = n(74165),
        r = n(1413),
        o = n(15861),
        s = n(29439),
        c = n(72791),
        u = n(91933),
        d = n(87681),
        m = n(79271),
        p = n(59909),
        v = n(70242),
        f = n(74512),
        h = n(15825),
        x = n(16149),
        g = n(30027),
        j = n(95804),
        b = {
          is_suitable: ["is_suitable_reason"],
          haveimmservice: [
            "typeimmservice",
            "numimmperweek",
            "coverageX1",
            "coverageX2",
            "coverageX3",
            "coverageX4",
            "individualsX1",
            "individualsX2",
            "individualsX3",
            "individualsX4",
          ],
          other_service: ["other_services"],
        },
        y = {
          is_suitable: ["is_suitable_reason"],
          haveimmservice: [
            "typeimmservice",
            "numimmperweek",
            "coverageX1",
            "coverageX2",
            "coverageX3",
            "coverageX4",
            "individualsX1",
            "individualsX2",
            "individualsX3",
            "individualsX4",
          ],
          other_service: ["other_services"],
        },
        N = (n(87649), n(30606)),
        Z = n(78083),
        S = n(66437),
        w = n(67116),
        k = n(46293),
        O = n(6042),
        C = n(59500),
        I = n(69961),
        F = n(17626),
        J = n(78559),
        A = n.n(J),
        z = (n(23666), n(65218)),
        _ = n(80184),
        D = {
          id: "parent-facility",
          type: "text",
          active: !1,
          disabled: !0,
          stateName: "parentName",
        };
      function U() {
        var e = (0, c.useState)(null),
          t = (0, s.Z)(e, 2),
          n = t[0],
          a = t[1],
          l = (0, k.zV)({
            click: function () {
              l.locate(), l.invalidateSize();
            },
            locationfound: function (e) {
              a(e.latlng), l.flyTo(e.latlng, l.getZoom());
            },
          });
        return null === n
          ? null
          : (0, _.jsx)(O.J, {
              position: n,
              children: (0, _.jsx)(C.G, { children: "You are here" }),
            });
      }
      delete A().Icon.Default.prototype._getIconUrl,
        A().Icon.Default.mergeOptions({
          iconRetinaUrl: n(6431),
          iconUrl: n(37093),
          shadowUrl: n(68858),
        });
      var X = function (e) {
        var t = (0, k.Sx)();
        return (
          (0, c.useEffect)(
            function () {
              if (t) {
                var e = A().DomUtil.create("div", "legend"),
                  n = A().Control.extend({
                    options: { position: "bottomleft" },
                    onAdd: function () {
                      return (
                        (e.textContent = "Click on map too add location"), e
                      );
                    },
                  });
                t.on("load", function (e) {
                  console.log("salam");
                }),
                  t.on("click", function (t) {
                    (e.textContent = t.latlng),
                      (function (e) {
                        window.handleMapClick(e);
                      })(t);
                  }),
                  t.addControl(new n());
              }
            },
            [t]
          ),
          null
        );
      };
      var L = function () {
        var e,
          t = (0, c.useState)(0),
          n = (0, s.Z)(t, 2),
          k = n[0],
          J = n[1],
          A = (0, c.useState)({}),
          L = (0, s.Z)(A, 2),
          G = L[0],
          H = L[1],
          P = (0, c.useState)({}),
          E = (0, s.Z)(P, 2),
          M = E[0],
          q = E[1],
          V = (0, c.useState)([]),
          B = (0, s.Z)(V, 2),
          W = B[0],
          R = B[1],
          $ = (0, m.UO)().id,
          T = (0, m.k6)(),
          Y = new URLSearchParams(T.location.search).get("pid"),
          Q = (0, c.useState)(null),
          K = (0, s.Z)(Q, 2),
          ee = K[0],
          te = K[1],
          ne = (0, c.useState)([]),
          ae = (0, s.Z)(ne, 2),
          le = ae[0],
          ie = (ae[1], (0, c.useState)(null)),
          re = (0, s.Z)(ie, 2),
          oe = re[0],
          se = re[1],
          ce = (0, c.useState)(null),
          ue = (0, s.Z)(ce, 2),
          de = ue[0],
          me = ue[1],
          pe = (0, u.useQuery)(
            ["facility-default-value", $],
            (0, o.Z)(
              (0, i.Z)().mark(function e() {
                var t, n, a, l, o, s, c, u, m, p, v, f, h, x, g, j, b, y;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((t = {
                            code: "Unique code generated by system",
                            updated_at: new Date().toISOString().split("T")[0],
                          }),
                          "new" !== $)
                        ) {
                          e.next = 6;
                          break;
                        }
                        return (
                          navigator.geolocation ||
                            z.ZP.error("cannot get location"),
                          se(
                            null ===
                              JSON.parse(localStorage.getItem("country")) ||
                              void 0 ===
                                JSON.parse(localStorage.getItem("country"))
                                  .mainlocation
                              ? 35
                              : null ===
                                  (n = JSON.parse(
                                    localStorage.getItem("country")
                                  ).mainlocation) ||
                                void 0 === n ||
                                null === (a = n.split("(")[1]) ||
                                void 0 === a
                              ? void 0
                              : a.split(",")[0]
                          ),
                          me(
                            null ===
                              JSON.parse(localStorage.getItem("country")) ||
                              void 0 ===
                                JSON.parse(localStorage.getItem("country"))
                                  .mainlocation
                              ? 51
                              : null ===
                                  (l = JSON.parse(
                                    localStorage.getItem("country")
                                  ).mainlocation) ||
                                void 0 === l ||
                                null === (o = l.split(",")[1]) ||
                                void 0 === o
                              ? void 0
                              : o.split(")")[0]
                          ),
                          e.abrupt("return", t)
                        );
                      case 6:
                        return (
                          (s = { id: $ }), (e.next = 9), d.Z.getFacilities(s)
                        );
                      case 9:
                        for (y in ((c = e.sent),
                        ((u = (0, r.Z)(
                          (0, r.Z)({}, c.data),
                          {},
                          { defaultData: t }
                        )).populationnumber = (0, Z.k)(u.populationnumber)),
                        (u.loverlevelfac = (0, Z.k)(u.loverlevelfac)),
                        (u.childrennumber = (0, Z.k)(u.childrennumber)),
                        (m = u.gpsCordinate)
                          ? ((f =
                              null === (p = m.split("(")[1]) || void 0 === p
                                ? void 0
                                : p.split(",")[0]),
                            (h =
                              null === (v = m.split(",")[1]) || void 0 === v
                                ? void 0
                                : v.split(")")[0]),
                            se(f),
                            me(h),
                            te([f, h]))
                          : (se(
                              null ===
                                JSON.parse(localStorage.getItem("country")) ||
                                void 0 ===
                                  JSON.parse(localStorage.getItem("country"))
                                    .mainlocation
                                ? 35
                                : null ===
                                    (x = JSON.parse(
                                      localStorage.getItem("country")
                                    ).mainlocation) ||
                                  void 0 === x ||
                                  null === (g = x.split("(")[1]) ||
                                  void 0 === g
                                ? void 0
                                : g.split(",")[0]
                            ),
                            me(
                              null ===
                                JSON.parse(localStorage.getItem("country")) ||
                                void 0 ===
                                  JSON.parse(localStorage.getItem("country"))
                                    .mainlocation
                                ? 51
                                : null ===
                                    (j = JSON.parse(
                                      localStorage.getItem("country")
                                    ).mainlocation) ||
                                  void 0 === j ||
                                  null === (b = j.split(",")[1]) ||
                                  void 0 === b
                                ? void 0
                                : b.split(")")[0]
                            )),
                        u))
                          "number" === typeof u[y] &&
                            u[y] % 1 !== 0 &&
                            (u[y] = u[y]
                              .toFixed(2)
                              .toString()
                              .replace(".", (0, w.p)()));
                        return e.abrupt("return", u);
                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            {
              refetchOnMount: !0,
              onSuccess: function (e) {
                H(e);
              },
            }
          ),
          ve = pe.isLoading,
          fe = (0, u.useQuery)(
            ["facility-fields"],
            (0, o.Z)(
              (0, i.Z)().mark(function e() {
                var t, n, a, o, s, c, u, m, p;
                return (0, i.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            ((t = {}).id = $),
                            Y && (t.parent = Y),
                            (e.next = 5),
                            d.Z.getFacilityFields(t)
                          );
                        case 5:
                          if (((n = e.sent), (a = {}), !n.data)) {
                            e.next = 32;
                            break;
                          }
                          (o = (0, l.Z)(n.data.related)), (e.prev = 9), o.s();
                        case 11:
                          if ((s = o.n()).done) {
                            e.next = 20;
                            break;
                          }
                          if ("name" !== (u = s.value).stateName) {
                            e.next = 15;
                            break;
                          }
                          return e.abrupt("continue", 18);
                        case 15:
                          (m =
                            null !== (c = a[u.topic]) && void 0 !== c
                              ? c
                              : []).push(u),
                            (a[u.topic] = m);
                        case 18:
                          e.next = 11;
                          break;
                        case 20:
                          e.next = 25;
                          break;
                        case 22:
                          (e.prev = 22), (e.t0 = e.catch(9)), o.e(e.t0);
                        case 25:
                          return (e.prev = 25), o.f(), e.finish(25);
                        case 28:
                          (p = Object.keys(a)[0]),
                            R(
                              n.data.levels.map(function (e) {
                                return {
                                  id: e.id,
                                  name: "".concat(e.id, " - ").concat(e.name),
                                  order: 1,
                                  enabled: !0,
                                  paramid: e.id,
                                  minpop: e.minpop,
                                  maxpop: e.maxpop,
                                };
                              })
                            ),
                            a[p].unshift({
                              id: "code",
                              name: "Facility code:",
                              topic: p,
                              type: "text",
                              active: !1,
                              disabled: !0,
                              required: !1,
                              stateName: "code",
                              params: [],
                            }),
                            H(function (e) {
                              var t;
                              return (0,
                              r.Z)((0, r.Z)({}, e), {}, { completerstaffname: null !== (t = null === e || void 0 === e ? void 0 : e.completerstaffname) && void 0 !== t ? t : n.data.user.username, parentName: n.data.facility.name });
                            });
                        case 32:
                          return e.abrupt("return", a);
                        case 33:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[9, 22, 25, 28]]
                );
              })
            ),
            { refetchOnMount: !0 }
          ),
          he = fe.data,
          xe = fe.isLoading;
        if (ve || xe) return (0, _.jsx)(p.Z, {});
        var ge = {
            id: "name",
            type: "text",
            active: 0 === k,
            required: !0,
            disabled: 0 !== k,
            stateName: "name",
          },
          je = {
            id: "level",
            type: "select",
            active: 0 === k && "new" === $,
            required: !0,
            disabled: 0 !== k || "new" != $,
            stateName: "level",
            params: W,
          },
          be = function () {
            var e = (0, r.Z)({}, M),
              t = (0, a.Z)(Object.values(he)[k]);
            for (var n in (0 === k && (t.push(je), t.push(ge)),
            t.forEach(function (t) {
              console.log(G[t.stateName]),
                !t.required ||
                  G[t.stateName] ||
                  (function (e, t) {
                    for (var n in y)
                      if (y[n].indexOf(e) >= 0)
                        return (
                          console.log(t[n]),
                          void 0 === t[n] ||
                            null === t[n] ||
                            ("is_suitable" === n ? t[n] : !t[n])
                        );
                    return !1;
                  })(t.stateName, G) ||
                  0 === G[t.stateName] ||
                  ("bool" === t.type &&
                    void 0 !== G[t.stateName] &&
                    null !== G[t.stateName]) ||
                  (e[t.stateName] = "this field is required!");
            }),
            b)) {
              var l = b[n];
              console.log(typeof G[n]),
                "is_suitable" === n
                  ? !0 === G[n] &&
                    l.forEach(function (t) {
                      console.log(t), delete e[t];
                    })
                  : !1 === G[n] &&
                    l.forEach(function (t) {
                      console.log(t), delete e[t];
                    });
            }
            return q(e), Object.keys(e).length > 0;
          },
          ye = function () {
            be() ||
              J(function (e) {
                return e + 1;
              });
          },
          Ne = function () {
            J(function (e) {
              return e - 1;
            }),
              q({});
          },
          Ze = function (e, t) {
            var n,
              a,
              l,
              i = null === (n = t.validation) || void 0 === n ? void 0 : n[0];
            "General population" ===
              JSON.parse(localStorage.getItem("country")).poptarget &&
              "populationnumber" === t.stateName &&
              ((i.min = +(null === ke || void 0 === ke ? void 0 : ke.minpop)),
              (i.max = +(null === ke || void 0 === ke ? void 0 : ke.maxpop))),
              "Under-1 Population" ===
                JSON.parse(localStorage.getItem("country")).poptarget &&
                "childrennumber" === t.stateName &&
                ((i.min = +(null === ke || void 0 === ke ? void 0 : ke.minpop)),
                (i.max = +(null === ke || void 0 === ke ? void 0 : ke.maxpop))),
              (l =
                null !== (a = t.name) && void 0 !== a && a.includes("hh:mm")
                  ? (0, j.q)(e)
                  : (0, j.D)(e, i));
            var o = (0, r.Z)({}, G);
            (o[t.stateName] = e),
              "level" === t.stateName && (o[t.stateName] = parseInt(e)),
              H(o);
            var s = (0, r.Z)({}, M);
            for (var c in (l ? (s[t.stateName] = l) : delete s[t.stateName],
            b)) {
              var u = b[c];
              !0 === G[c] &&
                u.forEach(function (e) {
                  delete s[e];
                });
            }
            q(s);
          },
          Se = (function () {
            var e = (0, o.Z)(
              (0, i.Z)().mark(function e(t) {
                var n, a, l, o, s, c, u, m, p;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((t.preventDefault(), !be())) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        for (a in ((n = (0, r.Z)({}, G)), b))
                          (l = b[a]),
                            "is_suitable" === a
                              ? !0 === G[a] &&
                                l.forEach(function (e) {
                                  delete n[e];
                                })
                              : !1 === G[a] &&
                                l.forEach(function (e) {
                                  delete n[e];
                                });
                        n.childrennumber &&
                          ((o = n.childrennumber.replaceAll(" ", "")),
                          (n.childrennumber = +o)),
                          n.populationnumber &&
                            ((s = n.populationnumber.replaceAll(" ", "")),
                            (n.populationnumber = +s)),
                          n.loverlevelfac &&
                            ((c = n.loverlevelfac.replaceAll(" ", "")),
                            (n.loverlevelfac = +c)),
                          (u = function (e) {
                            var t = Object.values(he)
                              .flat()
                              .find(function (t) {
                                return t.stateName === e;
                              });
                            if (void 0 === t) return "continue";
                            "" === n[e] && delete n[e],
                              "string" === typeof n[e] &&
                                "number" === t.type &&
                                (n[e] = parseFloat(n[e].replace(",", ".")));
                          }),
                          (e.t0 = (0, i.Z)().keys(n));
                      case 10:
                        if ((e.t1 = e.t0()).done) {
                          e.next = 17;
                          break;
                        }
                        if (((m = e.t1.value), "continue" !== u(m))) {
                          e.next = 15;
                          break;
                        }
                        return e.abrupt("continue", 10);
                      case 15:
                        e.next = 10;
                        break;
                      case 17:
                        return (
                          (p =
                            "saveNew" === window.event.submitter.name
                              ? "new"
                              : "edit"),
                          (e.next = 20),
                          "new" === $ ? d.Z.postFacility(n) : d.Z.putFacility(n)
                        );
                      case 20:
                        e.sent,
                          "new" === p
                            ? window.location.reload()
                            : T.push("/facilities/list");
                      case 22:
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
          we = (function () {
            var e = (0, o.Z)(
              (0, i.Z)().mark(function e(t) {
                var n, a;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        te(t.latlng),
                          (n = (0, r.Z)({}, G)),
                          (a =
                            "LatLng(" +
                            t.latlng.lat +
                            "," +
                            t.latlng.lng +
                            ")"),
                          (n.gpsCordinate = a),
                          H(n);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        window.handleMapClick = we;
        var ke = W.find(function (e) {
          return e.id === G.level;
        });
        return (0, _.jsxs)("form", {
          onSubmit: Se,
          children: [
            (0, _.jsx)("h3", {
              className: "page-title mb-3",
              children: (0, _.jsx)(N.c, { children: "Facility information" }),
            }),
            (0, _.jsx)("div", {
              className: "mt-3",
              children: (0, _.jsx)("div", {
                className: "card",
                children: (0, _.jsxs)("div", {
                  className: "card-body pb-3",
                  children: [
                    (0, _.jsx)("div", {
                      className: "row pb-4",
                      style: { overflow: "auto" },
                      children: (0, _.jsx)(v.Z, {
                        activeStep: k,
                        children: Object.keys(he).map(function (e, t) {
                          return (0,
                          _.jsx)(f.Z, { children: (0, _.jsx)(h.Z, { style: { width: "max-content" }, children: (0, _.jsx)(N.c, { children: e }) }) }, e);
                        }),
                      }),
                    }),
                    (0, _.jsx)(S.Z, {
                      handleBack: Ne,
                      handleNext: ye,
                      activeStep: k,
                      id: $,
                      stepsLength: Object.keys(he).length - 1,
                      isNextDisabled: Object.keys(M).length > 0,
                    }),
                  ],
                }),
              }),
            }),
            (0, _.jsx)("div", {
              className: "mt-3",
              children: (0, _.jsx)("div", {
                className: "card",
                children: (0, _.jsxs)("div", {
                  className: "card-body pb-3",
                  children: [
                    (0, _.jsx)("div", {
                      className: "row ",
                      children: (0, _.jsxs)(x.Z.Group, {
                        className: "row mb-0",
                        children: [
                          (0, _.jsxs)("label", {
                            className: "col-sm-4 text-right",
                            style: {
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              lineHeight: "1.4",
                              textAlign: "right",
                            },
                            children: [
                              (0, _.jsx)(N.c, { children: "Parent facility" }),
                              ":",
                            ],
                          }),
                          (0, _.jsx)("div", {
                            className: "col-sm-8",
                            children: (0, _.jsx)(g.Z, {
                              field: D,
                              defaultValue: G.parentName,
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: "row",
                      children: (0, _.jsxs)(x.Z.Group, {
                        className: "row mb-0 mt-3",
                        children: [
                          (0, _.jsxs)("label", {
                            className: "col-sm-4 text-right control-label",
                            style: {
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              lineHeight: "1.4",
                              textAlign: "right",
                            },
                            children: [
                              (0, _.jsx)(N.c, { children: "Facility Name" }),
                              ":",
                            ],
                          }),
                          (0, _.jsx)("div", {
                            className: "col-sm-8",
                            children: (0, _.jsx)(g.Z, {
                              field: ge,
                              defaultValue: G.name,
                              onChangeHandler: Ze,
                            }),
                          }),
                          M.name &&
                            (0, _.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, _.jsx)("div", { className: "col-sm-4" }),
                                (0, _.jsx)("div", {
                                  className: "col-sm-8",
                                  children: (0, _.jsx)("p", {
                                    className: "my-1 ml-2 text-danger",
                                    children: M.name,
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: "row mt-3",
                      children: (0, _.jsxs)(x.Z.Group, {
                        className: "row mb-0",
                        children: [
                          (0, _.jsxs)("label", {
                            className: "col-sm-4 text-right control-label",
                            style: {
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              lineHeight: "1.4",
                              textAlign: "right",
                            },
                            children: [
                              (0, _.jsx)(N.c, { children: "Levels" }),
                              ":",
                            ],
                          }),
                          (0, _.jsx)("div", {
                            className: "col-sm-8",
                            children: (0, _.jsx)(g.Z, {
                              field: je,
                              defaultValue: G.level,
                              onChangeHandler: Ze,
                            }),
                          }),
                          M.level &&
                            (0, _.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, _.jsx)("div", { className: "col-sm-4" }),
                                (0, _.jsx)("div", {
                                  className: "col-sm-8",
                                  children: (0, _.jsx)("p", {
                                    className: "my-1 ml-2 text-danger",
                                    children: M.level,
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, _.jsx)("div", {
              className: "mt-3",
              children: (0, _.jsx)("div", {
                className: "card",
                children: (0, _.jsx)("div", {
                  className: "card-body",
                  children:
                    null === (e = Object.values(he)[k]) || void 0 === e
                      ? void 0
                      : e.map(function (e) {
                          if (
                            !(function (e, t) {
                              for (var n in b)
                                if (b[n].indexOf(e) >= 0)
                                  return (
                                    console.log(t[n]),
                                    void 0 !== t[n] &&
                                      null !== t[n] &&
                                      ("is_suitable" === n ? !t[n] : t[n])
                                  );
                              return !0;
                            })(e.stateName, G)
                          )
                            return null;
                          var t = !!M[e.stateName];
                          return (0, _.jsxs)(
                            x.Z.Group,
                            {
                              className: "row mb-0",
                              children: [
                                (0, _.jsx)("label", {
                                  className: "col-sm-4  ".concat(
                                    e.required ? "control-label" : ""
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
                                (0, _.jsxs)("div", {
                                  className: "col-sm-8",
                                  children: [
                                    "gpsCordinate" === e.stateName
                                      ? (0, _.jsxs)("div", {
                                          className: "map  ",
                                          children: [
                                            (0, _.jsx)("div", {
                                              className: "mb-2",
                                              children: (0, _.jsx)(
                                                x.Z.Control,
                                                {
                                                  type: "text",
                                                  disabled: !0,
                                                  value: G[e.stateName],
                                                }
                                              ),
                                            }),
                                            (0, _.jsx)("div", {
                                              className: "map",
                                              children:
                                                null !== le &&
                                                oe &&
                                                de &&
                                                (0, _.jsxs)(I.h, {
                                                  center: [oe, de],
                                                  zoom: 10,
                                                  scrollWheelZoom: !0,
                                                  style: {
                                                    width: "100%",
                                                    height: "450px",
                                                    zIndex: "1",
                                                  },
                                                  children: [
                                                    (0, _.jsx)(F.I, {
                                                      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                                                      width: 500,
                                                    }),
                                                    (0, _.jsx)(X, {
                                                      change: we,
                                                      fields: G,
                                                      setFields: H,
                                                      map: ee,
                                                      setMap: te,
                                                    }),
                                                    (0, _.jsx)(_.Fragment, {
                                                      children:
                                                        ee &&
                                                        (0, _.jsx)(O.J, {
                                                          position: ee,
                                                          draggable: !0,
                                                          children: (0, _.jsxs)(
                                                            C.G,
                                                            {
                                                              position: ee,
                                                              children: [
                                                                "Current location:",
                                                                " ",
                                                                (0, _.jsx)(
                                                                  "pre",
                                                                  {
                                                                    children:
                                                                      JSON.stringify(
                                                                        ee,
                                                                        null,
                                                                        2
                                                                      ),
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                        }),
                                                    }),
                                                    (0, _.jsx)(U, {}),
                                                  ],
                                                }),
                                            }),
                                            (0, _.jsx)("button", {
                                              className:
                                                "btn btn-primary mt-2 w-50",
                                              onClick: function (e) {
                                                e.preventDefault(),
                                                  navigator.geolocation.getCurrentPosition(
                                                    function (e) {
                                                      var t = e.coords,
                                                        n = t.latitude,
                                                        a = t.longitude;
                                                      console.log(e);
                                                      var l = {
                                                        latlng: {
                                                          lat: n,
                                                          lng: a,
                                                        },
                                                      };
                                                      te(l.latlng), we(l);
                                                    },
                                                    function () {},
                                                    { enableHighAccuracy: !0 }
                                                  );
                                              },
                                              children: "Get current location",
                                            }),
                                          ],
                                        })
                                      : (0, _.jsx)(g.Z, {
                                          field: e,
                                          onChangeHandler: Ze,
                                          defaultValue: G[e.stateName],
                                          separator:
                                            "childrennumber" === e.stateName ||
                                            "loverlevelfac" === e.stateName ||
                                            "populationnumber" === e.stateName,
                                        }),
                                    (0, _.jsx)("br", {}),
                                    "General population" ===
                                      JSON.parse(
                                        localStorage.getItem("country")
                                      ).poptarget &&
                                      "populationnumber" === e.stateName &&
                                      ke &&
                                      (0, _.jsxs)("p", {
                                        children: [
                                          "range: ",
                                          (0, Z.k)(
                                            null === ke || void 0 === ke
                                              ? void 0
                                              : ke.minpop
                                          ),
                                          " -",
                                          " ",
                                          (0, Z.k)(
                                            null === ke || void 0 === ke
                                              ? void 0
                                              : ke.maxpop
                                          ),
                                        ],
                                      }),
                                    "Under-1 Population" ===
                                      JSON.parse(
                                        localStorage.getItem("country")
                                      ).poptarget &&
                                      "childrennumber" === e.stateName &&
                                      ke &&
                                      (0, _.jsxs)("p", {
                                        children: [
                                          "range: ",
                                          (0, Z.k)(
                                            null === ke || void 0 === ke
                                              ? void 0
                                              : ke.minpop
                                          ),
                                          " -",
                                          " ",
                                          (0, Z.k)(
                                            null === ke || void 0 === ke
                                              ? void 0
                                              : ke.maxpop
                                          ),
                                        ],
                                      }),
                                  ],
                                }),
                                t &&
                                  (0, _.jsxs)("div", {
                                    className: "row",
                                    children: [
                                      (0, _.jsx)("div", {
                                        className: "col-sm-4",
                                      }),
                                      (0, _.jsx)("div", {
                                        className: "col-sm-8",
                                        children: (0, _.jsx)("p", {
                                          className: "my-1 ml-2 text-danger",
                                          children: (0, _.jsx)(N.c, {
                                            children: M[e.stateName],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                (0, _.jsx)("hr", { className: "my-3" }),
                              ],
                            },
                            e.name
                          );
                        }),
                }),
              }),
            }),
            (0, _.jsx)("div", {
              className: "mt-3 mb-3",
              children: (0, _.jsx)("div", {
                className: "card",
                children: (0, _.jsx)("div", {
                  className: "card-body py-2",
                  children: (0, _.jsx)(S.Z, {
                    handleBack: Ne,
                    handleNext: ye,
                    activeStep: k,
                    id: $,
                    stepsLength: Object.keys(he).length - 1,
                    isNextDisabled: Object.keys(M).length > 0,
                  }),
                }),
              }),
            }),
          ],
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
    67116: function (e, t, n) {
      n.d(t, {
        p: function () {
          return i;
        },
      });
      var a = n(60324),
        l = function () {
          return a.Z.language;
        },
        i = function () {
          return "ar" === l() || "en" === l() ? "." : ",";
        };
    },
    95804: function (e, t, n) {
      n.d(t, {
        D: function () {
          return i;
        },
        q: function () {
          return r;
        },
      });
      var a = n(78083),
        l = n(67116),
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
                  n.includes((0, l.p)()) &&
                  n.split((0, l.p)())[1].length > t.floating
                ) && "value must has ".concat(t.floating, " decimals")))
          );
        },
        r = function (e) {
          return (
            !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(e) &&
            "value must be in (hh:mm) format!"
          );
        };
    },
    87681: function (e, t, n) {
      var a = n(15671),
        l = n(43144),
        i = n(39877),
        r = n(54318),
        o = (n(74569), "https://ukrapi.invgap.org/facilities/"),
        s = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, l.Z)(e, [
              {
                key: "getFacilities",
                value: function (e) {
                  return i.Z.get(o, {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacilities",
                value: function (e) {
                  var t = { id: e };
                  return i.Z.get(o + "parent", {
                    headers: { Authorization: (0, r.Z)() },
                    params: t,
                  });
                },
              },
              {
                key: "getFacilityFields",
                value: function (e) {
                  return i.Z.get(o + "facility-field", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacilityFields1",
                value: function (e) {
                  return i.Z.get(o + "print", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postFacility",
                value: function (e) {
                  return i.Z.post(o, e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "putFacility",
                value: function (e) {
                  return i.Z.put(o, e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "importFacilities",
                value: function (e) {
                  return i.Z.post(
                    "https://ukrapi.invgap.org/facilities/import",
                    e,
                    { headers: { Authorization: (0, r.Z)() } }
                  );
                },
              },
              {
                key: "deletefacilityparam",
                value: function () {
                  return i.Z.get(o + "delete", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "deleteFacility",
                value: function (e) {
                  return i.Z.post(o + "delete", e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new s();
    },
    87649: function (e, t, n) {
      var a = n(29439),
        l = n(72791),
        i = n(12902),
        r = n(30606),
        o = n(46293),
        s = n(6042),
        c = n(59500),
        u = n(69961),
        d = n(17626),
        m = n(78559),
        p = n.n(m),
        v = (n(23666), n(80184));
      function f() {
        var e = (0, l.useState)(null),
          t = (0, a.Z)(e, 2),
          n = t[0],
          i = t[1],
          r = (0, o.zV)({
            click: function () {
              r.locate(), r.invalidateSize();
            },
            locationfound: function (e) {
              i(e.latlng), r.flyTo(e.latlng, r.getZoom());
            },
          });
        return null === n
          ? null
          : (0, v.jsx)(s.J, {
              position: n,
              children: (0, v.jsx)(c.G, { children: "You are here" }),
            });
      }
      delete p().Icon.Default.prototype._getIconUrl,
        p().Icon.Default.mergeOptions({
          iconRetinaUrl: n(6431),
          iconUrl: n(37093),
          shadowUrl: n(68858),
        });
      var h = function (e) {
        var t = (0, o.Sx)();
        return (
          (0, l.useEffect)(
            function () {
              if (t) {
                var n = p().DomUtil.create("div", "legend"),
                  a = p().Control.extend({
                    options: { position: "bottomleft" },
                    onAdd: function () {
                      return i.W, n;
                    },
                  });
                t.on("load", function (e) {
                  console.log("salam");
                }),
                  t.on("click", function (t) {
                    window.navigator.geolocation.getCurrentPosition(
                      console.log,
                      console.log
                    ),
                      (n.textContent = t.latlng),
                      (function (t) {
                        e.change(t);
                      })(t);
                  }),
                  t.addControl(new a());
              }
            },
            [t]
          ),
          null
        );
      };
      t.Z = function (e) {
        var t,
          n,
          i,
          o,
          m = (0, l.useState)(null),
          p = (0, a.Z)(m, 2),
          x = p[0],
          g = p[1],
          j = (0, l.useState)([]),
          b = (0, a.Z)(j, 2),
          y = b[0],
          N = b[1],
          Z = (0, l.useState)(
            null === JSON.parse(localStorage.getItem("country")) ||
              void 0 ===
                JSON.parse(localStorage.getItem("country")).mainlocation
              ? 35
              : null ===
                  (t = JSON.parse(
                    localStorage.getItem("country")
                  ).mainlocation) ||
                void 0 === t ||
                null === (n = t.split("(")[1]) ||
                void 0 === n
              ? void 0
              : n.split(",")[0]
          ),
          S = (0, a.Z)(Z, 2),
          w = S[0],
          k = S[1],
          O = (0, l.useState)(
            null === JSON.parse(localStorage.getItem("country")) ||
              void 0 ===
                JSON.parse(localStorage.getItem("country")).mainlocation
              ? 51
              : null ===
                  (i = JSON.parse(
                    localStorage.getItem("country")
                  ).mainlocation) ||
                void 0 === i ||
                null === (o = i.split(",")[1]) ||
                void 0 === o
              ? void 0
              : o.split(")")[0]
          ),
          C = (0, a.Z)(O, 2),
          I = C[0],
          F = C[1],
          J = function (t) {
            e.handleChange(t), g(t.latlng);
          };
        return (
          (0, l.useEffect)(function () {
            var e =
              null === JSON.parse(localStorage.getItem("country"))
                ? void 0
                : JSON.parse(localStorage.getItem("country")).mainlocation;
            console.log(e);
            var t = [];
            if (void 0 === e) t = [50, 50];
            else {
              var n, a, l;
              console.log(e);
              var i =
                  null === e ||
                  void 0 === e ||
                  null === (n = e.split("(")[1]) ||
                  void 0 === n
                    ? void 0
                    : n.split(",")[0],
                r =
                  null === e ||
                  void 0 === e ||
                  null === (a = e.split("(")[1]) ||
                  void 0 === a ||
                  null === (l = a.split(",")[1]) ||
                  void 0 === l
                    ? void 0
                    : l.split(")")[0];
              void 0 === i || void 0 === r
                ? (k(35), F(51))
                : (k(parseFloat(i)),
                  F(parseFloat(r)),
                  g([parseFloat(i), parseFloat(r)]));
            }
            console.log(t), N(t);
          }, []),
          (0, v.jsxs)("div", {
            className: "map",
            children: [
              null !== y &&
                w &&
                I &&
                (0, v.jsxs)(u.h, {
                  center: [w, I],
                  zoom: 5,
                  scrollWheelZoom: !0,
                  style: { width: "100%", height: "450px", zIndex: "1" },
                  children: [
                    (0, v.jsx)(d.I, {
                      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                      width: 500,
                    }),
                    (0, v.jsx)(h, { change: J }),
                    (0, v.jsx)(v.Fragment, {
                      children:
                        x &&
                        (0, v.jsx)(s.J, {
                          position: x,
                          draggable: !0,
                          children: (0, v.jsxs)(c.G, {
                            position: x,
                            children: [
                              "Current location: ",
                              (0, v.jsx)("pre", {
                                children: JSON.stringify(x, null, 2),
                              }),
                            ],
                          }),
                        }),
                    }),
                    (0, v.jsx)(f, {
                      className: "salam",
                      style: { width: "100px !important", zIndex: "2" },
                    }),
                  ],
                }),
              (0, v.jsx)("button", {
                className: "btn btn-primary mt-2 w-50",
                onClick: function (e) {
                  e.preventDefault(),
                    navigator.geolocation.getCurrentPosition(
                      function (e) {
                        var t = e.coords,
                          n = t.latitude,
                          a = t.longitude;
                        console.log(e);
                        var l = { latlng: { lat: n, lng: a } };
                        g(l.latlng), J(l);
                      },
                      function () {},
                      { enableHighAccuracy: !0 }
                    );
                },
                children: (0, v.jsx)(r.c, { children: "Get current location" }),
              }),
            ],
          })
        );
      };
    },
    2997: function (e, t, n) {
      var a = n(80184);
      t.Z = function () {
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("svg", {
            version: "1.1",
            id: "Capa_1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 400 400",
            style: { marginRight: "5px" },
            children: (0, a.jsx)("path", {
              fill: "currentColor",
              d: "M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z",
            }),
          }),
        });
      };
    },
    80906: function (e, t, n) {
      var a = n(80184);
      t.Z = function () {
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("svg", {
            version: "1.1",
            id: "Capa_1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 1024 1024",
            children: (0, a.jsx)("path", {
              fill: "currentColor",
              d: "M754.752 480H160a32 32 0 100 64h594.752L521.344 777.344a32 32 0 0045.312 45.312l288-288a32 32 0 000-45.312l-288-288a32 32 0 10-45.312 45.312L754.752 480z",
            }),
          }),
        });
      };
    },
    12902: function (e, t, n) {
      n.d(t, {
        W: function () {
          return o;
        },
      });
      var a = n(29439),
        l = n(45987),
        i = n(22020),
        r = ["ns", "children"];
      function o(e) {
        var t = e.ns,
          n = e.children,
          o = (0, l.Z)(e, r),
          s = (0, i.$)(t, o),
          c = (0, a.Z)(s, 3),
          u = c[0],
          d = c[1],
          m = c[2];
        return n(u, { i18n: d, lng: d.language }, m);
      }
    },
  },
]);
//# sourceMappingURL=1612.dcce15ec.chunk.js.map
