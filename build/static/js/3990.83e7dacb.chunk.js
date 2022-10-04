"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [3990],
  {
    30027: function (e, t, n) {
      var a = n(29439),
        i = n(1413),
        l = n(16149),
        r = n(78083),
        s = n(85109),
        o = n(97915),
        c = n(30606),
        d = n(12902),
        u = n(60324),
        m = n(72791),
        p = n(80184),
        v = "0123456789.:",
        f = function (e) {
          return (0, p.jsx)("div", {
            children: (0, p.jsxs)(
              s.F.Option,
              (0, i.Z)(
                (0, i.Z)({}, e),
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
          i = e.onChangeHandler,
          s = e.defaultValue,
          c = e.separator,
          h = (0, m.useState)([]),
          x = (0, a.Z)(h, 2),
          g = x[0],
          j = x[1];
        if ("select" === n.type) {
          if ("other_services" !== n.stateName)
            return (0, p.jsxs)(l.Z.Control, {
              onChange: function (e) {
                return i(e.target.value, n);
              },
              className: "form-control form-select",
              multiple: "other_services" === n.stateName,
              as: "select",
              disabled: n.active ? !n.active : n.disabled,
              id: "field-".concat(n.id),
              children: [
                (0, p.jsx)(d.W, {
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
                  p.jsx)("option", { disabled: e.enabled ? !e.enabled : e.active ? !e.active : !e.enable, value: e.id, selected: parseInt(s) === e.id, children: e.name || e.describe });
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
              k = !(void 0 === s || null === s || !s.includes(n.params[N].id));
            Z ||
              b.push({
                label: n.params[N].name || n.params[N].describe,
                value: n.params[N].id,
              }),
              k &&
                y.push({
                  label: n.params[N].name || n.params[N].describe,
                  value: n.params[N].id,
                });
          }
          return (0, p.jsx)(o.ZP, {
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
                for (var l = 0; l < e.length; l++)
                  t.push(e[l].value), (a += e[l].value);
                j(e), (y = e), i(a, n);
              } else i("", n), j([]), (y = []);
            },
            allowSelectAll: !0,
            value: g.length > 0 ? g : y,
          });
        }
        if ("bool" === n.type)
          return (0, p.jsx)(p.Fragment, {
            children: (0, p.jsxs)(l.Z.Control, {
              onChange: function (e) {
                return i("true" === e.target.value, n);
              },
              className: "form-control form-select",
              as: "select",
              disabled: n.active ? !n.active : n.disabled,
              id: "field-".concat(n.id),
              children: [
                (0, p.jsx)(d.W, {
                  children: function (e, t) {
                    t.i18n;
                    return (0, p.jsx)("option", {
                      i18n: !0,
                      value: "",
                      selected: null === s || void 0 === s,
                      disabled: !0,
                      children: e("Please select"),
                    });
                  },
                }),
                (0, p.jsx)("option", {
                  selected: null !== s && void 0 !== s && s,
                  value: !0,
                  children: "Yes",
                }),
                (0, p.jsx)("option", {
                  selected: null !== s && void 0 !== s && !s,
                  value: !1,
                  children: "No",
                }),
              ],
            }),
          });
        ("en" != u.Z.language) & ("ar" != u.Z.language) && (v = "0123456789,:");
        var w = null === (t = n.validation) || void 0 === t ? void 0 : t[0];
        return (0, p.jsx)(l.Z.Control, {
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
            i(e.target.value, n);
          },
          lang: "en-US",
          onChange: function (e) {
            return i(e.target.value, n);
          },
          value: s,
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
              i(t, n);
            }
          },
        });
      };
    },
    66437: function (e, t, n) {
      n(72791);
      var a = n(64554),
        i = n(36151),
        l = n(30606),
        r = n(2997),
        s = n(80906),
        o = n(79271),
        c = n(80184);
      t.Z = function (e) {
        var t = e.activeStep,
          n = e.handleBack,
          d = e.handleNext,
          u = e.stepsLength,
          m = e.isNextDisabled,
          p = e.id;
        return (
          (0, o.k6)(),
          (0, c.jsx)("div", {
            className: "row mt-2",
            children: (0, c.jsxs)(a.Z, {
              sx: { display: "flex", flexDirection: "row", pt: 2 },
              children: [
                (0, c.jsxs)(i.Z, {
                  disabled: 0 === t,
                  onClick: n,
                  sx: { mr: 1 },
                  type: "button",
                  children: [
                    (0, c.jsx)(r.Z, { sx: { mr: 2 } }),
                    (0, c.jsx)(l.c, { children: "Back" }),
                  ],
                }),
                (0, c.jsx)(a.Z, { sx: { flex: "0.5 0.5 auto" } }),
                (0, c.jsxs)(c.Fragment, {
                  children: [
                    "new" !== p &&
                      t !== u &&
                      (0, c.jsxs)(c.Fragment, {
                        children: [
                          (0, c.jsx)("button", {
                            className: "btn btn-primary w-10 ",
                            children: (0, c.jsx)(l.c, { children: "SAVE ALL" }),
                          }),
                          (0, c.jsx)(a.Z, { sx: { flex: "0.6 0.5 auto" } }),
                          (0, c.jsxs)(i.Z, {
                            disabled: m,
                            onClick: d,
                            type: "button",
                            sx: { mr: 1 },
                            children: [
                              (0, c.jsx)(l.c, { children: "Next" }),
                              (0, c.jsx)(s.Z, {}),
                            ],
                          }),
                        ],
                      }),
                    "new" !== p &&
                      t === u &&
                      (0, c.jsxs)(c.Fragment, {
                        children: [
                          (0, c.jsx)(a.Z, { sx: { flex: "0.48 0.5 auto" } }),
                          (0, c.jsx)("button", {
                            className: "btn btn-primary w-10 ",
                            value: "saveAll",
                            name: "saveaLL",
                            children: (0, c.jsx)(l.c, { children: "SAVE ALL" }),
                          }),
                        ],
                      }),
                    "new" === p &&
                      t !== u &&
                      (0, c.jsxs)(c.Fragment, {
                        children: [
                          (0, c.jsx)(a.Z, { sx: { flex: "0.6 0.5 auto" } }),
                          (0, c.jsxs)(i.Z, {
                            disabled: m,
                            onClick: d,
                            type: "button",
                            sx: { mr: 1 },
                            children: [
                              (0, c.jsx)(l.c, { children: "Next" }),
                              (0, c.jsx)(s.Z, {}),
                            ],
                          }),
                        ],
                      }),
                    "new" === p &&
                      t === u &&
                      (0, c.jsxs)(c.Fragment, {
                        children: [
                          (0, c.jsx)(a.Z, { sx: { flex: "0.6 0.5 auto" } }),
                          (0, c.jsx)("button", {
                            className: "btn btn-primary w-10 ",
                            name: "save",
                            value: "x",
                            children: (0, c.jsx)(l.c, { children: "SAVE ALL" }),
                          }),
                          (0, c.jsx)("button", {
                            className: "btn btn-primary w-10 ",
                            name: "saveNew",
                            value: "y",
                            children: (0, c.jsx)(l.c, {
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
            return E;
          },
        });
      var a = n(93433),
        i = n(37762),
        l = n(74165),
        r = n(1413),
        s = n(15861),
        o = n(29439),
        c = n(72791),
        d = n(91933),
        u = n(87681),
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
        k = n(66437),
        w = n(67116),
        S = n(46293),
        C = n(6042),
        O = n(59500),
        F = n(69961),
        I = n(17626),
        A = n(78559),
        L = n.n(A),
        _ = (n(23666), n(65218)),
        J = n(80184),
        z = {
          id: "parent-facility",
          type: "text",
          active: !1,
          disabled: !0,
          stateName: "parentName",
        };
      function X() {
        var e = (0, c.useState)(null),
          t = (0, o.Z)(e, 2),
          n = t[0],
          a = t[1],
          i = (0, S.zV)({
            click: function () {
              i.locate(), i.invalidateSize();
            },
            locationfound: function (e) {
              a(e.latlng), i.flyTo(e.latlng, i.getZoom());
            },
          });
        return null === n
          ? null
          : (0, J.jsx)(C.J, {
              position: n,
              children: (0, J.jsx)(O.G, { children: "You are here" }),
            });
      }
      delete L().Icon.Default.prototype._getIconUrl,
        L().Icon.Default.mergeOptions({
          iconRetinaUrl: n(6431),
          iconUrl: n(37093),
          shadowUrl: n(68858),
        });
      var D = function (e) {
        var t = (0, S.Sx)();
        return (
          (0, c.useEffect)(
            function () {
              if (t) {
                var e = L().DomUtil.create("div", "legend"),
                  n = L().Control.extend({
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
      var E = function () {
        var e,
          t = (0, c.useState)(0),
          n = (0, o.Z)(t, 2),
          S = n[0],
          A = n[1],
          L = (0, c.useState)({}),
          E = (0, o.Z)(L, 2),
          H = E[0],
          U = E[1],
          M = (0, c.useState)({}),
          P = (0, o.Z)(M, 2),
          V = P[0],
          q = P[1],
          G = (0, c.useState)([]),
          B = (0, o.Z)(G, 2),
          R = B[0],
          W = B[1],
          $ = (0, m.UO)().id,
          Q = (0, m.k6)(),
          T = new URLSearchParams(Q.location.search).get("pid"),
          Y = (0, c.useState)(null),
          K = (0, o.Z)(Y, 2),
          ee = K[0],
          te = K[1],
          ne = (0, c.useState)([]),
          ae = (0, o.Z)(ne, 2),
          ie = ae[0],
          le = (ae[1], (0, c.useState)(null)),
          re = (0, o.Z)(le, 2),
          se = re[0],
          oe = re[1],
          ce = (0, c.useState)(null),
          de = (0, o.Z)(ce, 2),
          ue = de[0],
          me = de[1],
          pe = (0, d.useQuery)(
            ["facility-default-value", $],
            (0, s.Z)(
              (0, l.Z)().mark(function e() {
                var t, n, a, i, s, o, c, d, m, p, v, f, h, x, g, j, b, y;
                return (0, l.Z)().wrap(function (e) {
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
                            _.ZP.error("cannot get location"),
                          oe(
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
                                  (i = JSON.parse(
                                    localStorage.getItem("country")
                                  ).mainlocation) ||
                                void 0 === i ||
                                null === (s = i.split(",")[1]) ||
                                void 0 === s
                              ? void 0
                              : s.split(")")[0]
                          ),
                          e.abrupt("return", t)
                        );
                      case 6:
                        return (
                          (o = { id: $ }), (e.next = 9), u.Z.getFacilities(o)
                        );
                      case 9:
                        for (y in ((c = e.sent),
                        ((d = (0, r.Z)(
                          (0, r.Z)({}, c.data),
                          {},
                          { defaultData: t }
                        )).populationnumber = (0, Z.k)(d.populationnumber)),
                        (d.loverlevelfac = (0, Z.k)(d.loverlevelfac)),
                        (d.childrennumber = (0, Z.k)(d.childrennumber)),
                        (m = d.gpsCordinate)
                          ? ((f =
                              null === (p = m.split("(")[1]) || void 0 === p
                                ? void 0
                                : p.split(",")[0]),
                            (h =
                              null === (v = m.split(",")[1]) || void 0 === v
                                ? void 0
                                : v.split(")")[0]),
                            oe(f),
                            me(h),
                            te([f, h]))
                          : (oe(
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
                        d))
                          "number" === typeof d[y] &&
                            d[y] % 1 !== 0 &&
                            (d[y] = d[y]
                              .toFixed(2)
                              .toString()
                              .replace(".", (0, w.p)()));
                        return e.abrupt("return", d);
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
                U(e);
              },
            }
          ),
          ve = pe.isLoading,
          fe = (0, d.useQuery)(
            ["facility-fields"],
            (0, s.Z)(
              (0, l.Z)().mark(function e() {
                var t, n, a, s, o, c, d, m, p;
                return (0, l.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            ((t = {}).id = $),
                            T && (t.parent = T),
                            (e.next = 5),
                            u.Z.getFacilityFields(t)
                          );
                        case 5:
                          if (((n = e.sent), (a = {}), !n.data)) {
                            e.next = 32;
                            break;
                          }
                          (s = (0, i.Z)(n.data.related)), (e.prev = 9), s.s();
                        case 11:
                          if ((o = s.n()).done) {
                            e.next = 20;
                            break;
                          }
                          if ("name" !== (d = o.value).stateName) {
                            e.next = 15;
                            break;
                          }
                          return e.abrupt("continue", 18);
                        case 15:
                          (m =
                            null !== (c = a[d.topic]) && void 0 !== c
                              ? c
                              : []).push(d),
                            (a[d.topic] = m);
                        case 18:
                          e.next = 11;
                          break;
                        case 20:
                          e.next = 25;
                          break;
                        case 22:
                          (e.prev = 22), (e.t0 = e.catch(9)), s.e(e.t0);
                        case 25:
                          return (e.prev = 25), s.f(), e.finish(25);
                        case 28:
                          (p = Object.keys(a)[0]),
                            W(
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
                            U(function (e) {
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
        if (ve || xe) return (0, J.jsx)(p.Z, {});
        var ge = {
            id: "name",
            type: "text",
            active: 0 === S,
            required: !0,
            disabled: 0 !== S,
            stateName: "name",
          },
          je = {
            id: "level",
            type: "select",
            active: 0 === S && "new" === $,
            required: !0,
            disabled: 0 !== S || "new" != $,
            stateName: "level",
            params: R,
          },
          be = function () {
            var e = (0, r.Z)({}, V),
              t = (0, a.Z)(Object.values(he)[S]);
            for (var n in (0 === S && (t.push(je), t.push(ge)),
            t.forEach(function (t) {
              !t.required ||
                H[t.stateName] ||
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
                })(t.stateName, H) ||
                ("bool" === t.type &&
                  void 0 !== H[t.stateName] &&
                  null !== H[t.stateName]) ||
                (e[t.stateName] = "this field is required!");
            }),
            b)) {
              var i = b[n];
              console.log(typeof H[n]),
                "is_suitable" === n
                  ? !0 === H[n] &&
                    i.forEach(function (t) {
                      console.log(t), delete e[t];
                    })
                  : !1 === H[n] &&
                    i.forEach(function (t) {
                      console.log(t), delete e[t];
                    });
            }
            return q(e), Object.keys(e).length > 0;
          },
          ye = function () {
            be() ||
              A(function (e) {
                return e + 1;
              });
          },
          Ne = function () {
            A(function (e) {
              return e - 1;
            });
          },
          Ze = function (e, t) {
            var n,
              a,
              i,
              l = null === (n = t.validation) || void 0 === n ? void 0 : n[0];
            "General population" ===
              JSON.parse(localStorage.getItem("country")).poptarget &&
              "populationnumber" === t.stateName &&
              ((l.min = +(null === Se || void 0 === Se ? void 0 : Se.minpop)),
              (l.max = +(null === Se || void 0 === Se ? void 0 : Se.maxpop))),
              "Under-1 Population" ===
                JSON.parse(localStorage.getItem("country")).poptarget &&
                "childrennumber" === t.stateName &&
                ((l.min = +(null === Se || void 0 === Se ? void 0 : Se.minpop)),
                (l.max = +(null === Se || void 0 === Se ? void 0 : Se.maxpop))),
              (i =
                null !== (a = t.name) && void 0 !== a && a.includes("hh:mm")
                  ? (0, j.q)(e)
                  : (0, j.D)(e, l));
            var s = (0, r.Z)({}, H);
            (s[t.stateName] = e),
              "level" === t.stateName && (s[t.stateName] = parseInt(e)),
              U(s);
            var o = (0, r.Z)({}, V);
            for (var c in (i ? (o[t.stateName] = i) : delete o[t.stateName],
            b)) {
              var d = b[c];
              !0 === H[c] &&
                d.forEach(function (e) {
                  delete o[e];
                });
            }
            q(o);
          },
          ke = (function () {
            var e = (0, s.Z)(
              (0, l.Z)().mark(function e(t) {
                var n, a, i, s, o, c, d, m, p;
                return (0, l.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((t.preventDefault(), !be())) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        for (a in ((n = (0, r.Z)({}, H)), b))
                          (i = b[a]),
                            "is_suitable" === a
                              ? !0 === H[a] &&
                                i.forEach(function (e) {
                                  delete n[e];
                                })
                              : !1 === H[a] &&
                                i.forEach(function (e) {
                                  delete n[e];
                                });
                        n.childrennumber &&
                          ((s = n.childrennumber.replaceAll(" ", "")),
                          (n.childrennumber = +s)),
                          n.populationnumber &&
                            ((o = n.populationnumber.replaceAll(" ", "")),
                            (n.populationnumber = +o)),
                          n.loverlevelfac &&
                            ((c = n.loverlevelfac.replaceAll(" ", "")),
                            (n.loverlevelfac = +c)),
                          (d = function (e) {
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
                          (e.t0 = (0, l.Z)().keys(n));
                      case 10:
                        if ((e.t1 = e.t0()).done) {
                          e.next = 17;
                          break;
                        }
                        if (((m = e.t1.value), "continue" !== d(m))) {
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
                          "new" === $ ? u.Z.postFacility(n) : u.Z.putFacility(n)
                        );
                      case 20:
                        e.sent,
                          "new" === p
                            ? window.location.reload()
                            : Q.push("/facilities/list");
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
            var e = (0, s.Z)(
              (0, l.Z)().mark(function e(t) {
                var n, a;
                return (0, l.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        te(t.latlng),
                          (n = (0, r.Z)({}, H)),
                          (a =
                            "LatLng(" +
                            t.latlng.lat +
                            "," +
                            t.latlng.lng +
                            ")"),
                          (n.gpsCordinate = a),
                          U(n);
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
        var Se = R.find(function (e) {
          return e.id === H.level;
        });
        return (0, J.jsxs)("form", {
          onSubmit: ke,
          children: [
            (0, J.jsx)("h3", {
              className: "page-title mb-3",
              children: (0, J.jsx)(N.c, { children: "Facility information" }),
            }),
            (0, J.jsx)("div", {
              className: "mt-3",
              children: (0, J.jsx)("div", {
                className: "card",
                children: (0, J.jsxs)("div", {
                  className: "card-body pb-3",
                  children: [
                    (0, J.jsx)("div", {
                      className: "row pb-4",
                      style: { overflow: "auto" },
                      children: (0, J.jsx)(v.Z, {
                        activeStep: S,
                        children: Object.keys(he).map(function (e, t) {
                          return (0,
                          J.jsx)(f.Z, { children: (0, J.jsx)(h.Z, { style: { width: "max-content" }, children: (0, J.jsx)(N.c, { children: e }) }) }, e);
                        }),
                      }),
                    }),
                    (0, J.jsx)(k.Z, {
                      handleBack: Ne,
                      handleNext: ye,
                      activeStep: S,
                      id: $,
                      stepsLength: Object.keys(he).length - 1,
                      isNextDisabled: Object.keys(V).length > 0,
                    }),
                  ],
                }),
              }),
            }),
            (0, J.jsx)("div", {
              className: "mt-3",
              children: (0, J.jsx)("div", {
                className: "card",
                children: (0, J.jsxs)("div", {
                  className: "card-body pb-3",
                  children: [
                    (0, J.jsx)("div", {
                      className: "row ",
                      children: (0, J.jsxs)(x.Z.Group, {
                        className: "row mb-0",
                        children: [
                          (0, J.jsx)("label", {
                            className: "col-sm-4 text-right",
                            style: {
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              lineHeight: "1.4",
                              textAlign: "right",
                            },
                            children: "Parent facility:",
                          }),
                          (0, J.jsx)("div", {
                            className: "col-sm-8",
                            children: (0, J.jsx)(g.Z, {
                              field: z,
                              defaultValue: H.parentName,
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, J.jsx)("div", {
                      className: "row",
                      children: (0, J.jsxs)(x.Z.Group, {
                        className: "row mb-0 mt-3",
                        children: [
                          (0, J.jsxs)("label", {
                            className: "col-sm-4 text-right control-label",
                            style: {
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              lineHeight: "1.4",
                              textAlign: "right",
                            },
                            children: [
                              (0, J.jsx)(N.c, { children: "Facility Name" }),
                              ":",
                            ],
                          }),
                          (0, J.jsx)("div", {
                            className: "col-sm-8",
                            children: (0, J.jsx)(g.Z, {
                              field: ge,
                              defaultValue: H.name,
                              onChangeHandler: Ze,
                            }),
                          }),
                          V.name &&
                            (0, J.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, J.jsx)("div", { className: "col-sm-4" }),
                                (0, J.jsx)("div", {
                                  className: "col-sm-8",
                                  children: (0, J.jsx)("p", {
                                    className: "my-1 ml-2 text-danger",
                                    children: V.name,
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    }),
                    (0, J.jsx)("div", {
                      className: "row mt-3",
                      children: (0, J.jsxs)(x.Z.Group, {
                        className: "row mb-0",
                        children: [
                          (0, J.jsx)("label", {
                            className: "col-sm-4 text-right control-label",
                            style: {
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              lineHeight: "1.4",
                              textAlign: "right",
                            },
                            children: "Level:",
                          }),
                          (0, J.jsx)("div", {
                            className: "col-sm-8",
                            children: (0, J.jsx)(g.Z, {
                              field: je,
                              defaultValue: H.level,
                              onChangeHandler: Ze,
                            }),
                          }),
                          V.level &&
                            (0, J.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, J.jsx)("div", { className: "col-sm-4" }),
                                (0, J.jsx)("div", {
                                  className: "col-sm-8",
                                  children: (0, J.jsx)("p", {
                                    className: "my-1 ml-2 text-danger",
                                    children: V.level,
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
            (0, J.jsx)("div", {
              className: "mt-3",
              children: (0, J.jsx)("div", {
                className: "card",
                children: (0, J.jsx)("div", {
                  className: "card-body",
                  children:
                    null === (e = Object.values(he)[S]) || void 0 === e
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
                            })(e.stateName, H)
                          )
                            return null;
                          var t = !!V[e.stateName];
                          return (0, J.jsxs)(
                            x.Z.Group,
                            {
                              className: "row mb-0",
                              children: [
                                (0, J.jsx)("label", {
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
                                (0, J.jsxs)("div", {
                                  className: "col-sm-8",
                                  children: [
                                    "gpsCordinate" === e.stateName
                                      ? (0, J.jsxs)("div", {
                                          className: "map  ",
                                          children: [
                                            (0, J.jsx)("div", {
                                              className: "mb-2",
                                              children: (0, J.jsx)(
                                                x.Z.Control,
                                                {
                                                  type: "text",
                                                  disabled: !0,
                                                  value: H[e.stateName],
                                                }
                                              ),
                                            }),
                                            (0, J.jsx)("div", {
                                              className: "map",
                                              children:
                                                null !== ie &&
                                                se &&
                                                ue &&
                                                (0, J.jsxs)(F.h, {
                                                  center: [se, ue],
                                                  zoom: 10,
                                                  scrollWheelZoom: !0,
                                                  style: {
                                                    width: "100%",
                                                    height: "450px",
                                                    zIndex: "1",
                                                  },
                                                  children: [
                                                    (0, J.jsx)(I.I, {
                                                      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                                                      width: 500,
                                                    }),
                                                    (0, J.jsx)(D, {
                                                      change: we,
                                                      fields: H,
                                                      setFields: U,
                                                      map: ee,
                                                      setMap: te,
                                                    }),
                                                    (0, J.jsx)(J.Fragment, {
                                                      children:
                                                        ee &&
                                                        (0, J.jsx)(C.J, {
                                                          position: ee,
                                                          draggable: !0,
                                                          children: (0, J.jsxs)(
                                                            O.G,
                                                            {
                                                              position: ee,
                                                              children: [
                                                                "Current location:",
                                                                " ",
                                                                (0, J.jsx)(
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
                                                    (0, J.jsx)(X, {}),
                                                  ],
                                                }),
                                            }),
                                            (0, J.jsx)("button", {
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
                                                      var i = {
                                                        latlang: {
                                                          lat: n,
                                                          lng: a,
                                                        },
                                                      };
                                                      te(i.latlang), we(i);
                                                    },
                                                    function () {},
                                                    { enableHighAccuracy: !0 }
                                                  );
                                              },
                                              children: "Get current location",
                                            }),
                                          ],
                                        })
                                      : (0, J.jsx)(g.Z, {
                                          field: e,
                                          onChangeHandler: Ze,
                                          defaultValue: H[e.stateName],
                                          separator:
                                            "childrennumber" === e.stateName ||
                                            "loverlevelfac" === e.stateName ||
                                            "populationnumber" === e.stateName,
                                        }),
                                    (0, J.jsx)("br", {}),
                                    "General population" ===
                                      JSON.parse(
                                        localStorage.getItem("country")
                                      ).poptarget &&
                                      "populationnumber" === e.stateName &&
                                      Se &&
                                      (0, J.jsxs)("p", {
                                        children: [
                                          "range: ",
                                          (0, Z.k)(
                                            null === Se || void 0 === Se
                                              ? void 0
                                              : Se.minpop
                                          ),
                                          " -",
                                          " ",
                                          (0, Z.k)(
                                            null === Se || void 0 === Se
                                              ? void 0
                                              : Se.maxpop
                                          ),
                                        ],
                                      }),
                                    "Under-1 Population" ===
                                      JSON.parse(
                                        localStorage.getItem("country")
                                      ).poptarget &&
                                      "childrennumber" === e.stateName &&
                                      Se &&
                                      (0, J.jsxs)("p", {
                                        children: [
                                          "range: ",
                                          (0, Z.k)(
                                            null === Se || void 0 === Se
                                              ? void 0
                                              : Se.minpop
                                          ),
                                          " -",
                                          " ",
                                          (0, Z.k)(
                                            null === Se || void 0 === Se
                                              ? void 0
                                              : Se.maxpop
                                          ),
                                        ],
                                      }),
                                  ],
                                }),
                                t &&
                                  (0, J.jsxs)("div", {
                                    className: "row",
                                    children: [
                                      (0, J.jsx)("div", {
                                        className: "col-sm-4",
                                      }),
                                      (0, J.jsx)("div", {
                                        className: "col-sm-8",
                                        children: (0, J.jsx)("p", {
                                          className: "my-1 ml-2 text-danger",
                                          children: (0, J.jsx)(N.c, {
                                            children: V[e.stateName],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                (0, J.jsx)("hr", { className: "my-3" }),
                              ],
                            },
                            e.name
                          );
                        }),
                }),
              }),
            }),
            (0, J.jsx)("div", {
              className: "mt-3 mb-3",
              children: (0, J.jsx)("div", {
                className: "card",
                children: (0, J.jsx)("div", {
                  className: "card-body py-2",
                  children: (0, J.jsx)(k.Z, {
                    handleBack: Ne,
                    handleNext: ye,
                    activeStep: S,
                    id: $,
                    stepsLength: Object.keys(he).length - 1,
                    isNextDisabled: Object.keys(V).length > 0,
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
          return l;
        },
      });
      var a = n(60324),
        i = function () {
          return a.Z.language;
        },
        l = function () {
          return "ar" === i() || "en" === i() ? "." : ",";
        };
    },
    95804: function (e, t, n) {
      n.d(t, {
        D: function () {
          return l;
        },
        q: function () {
          return r;
        },
      });
      var a = n(78083),
        i = n(67116),
        l = function (e, t) {
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
                  n.includes((0, i.p)()) &&
                  n.split((0, i.p)())[1].length > t.floating
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
        i = n(43144),
        l = n(39877),
        r = n(54318),
        s = (n(74569), "http://46.105.58.235:8000/facilities/"),
        o = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "getFacilities",
                value: function (e) {
                  return l.Z.get(s, {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacilities",
                value: function (e) {
                  var t = { id: e };
                  return l.Z.get(s + "parent", {
                    headers: { Authorization: (0, r.Z)() },
                    params: t,
                  });
                },
              },
              {
                key: "getFacilityFields",
                value: function (e) {
                  return l.Z.get(s + "facility-field", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacilityFields1",
                value: function (e) {
                  return l.Z.get(s + "print", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postFacility",
                value: function (e) {
                  return l.Z.post(s, e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "putFacility",
                value: function (e) {
                  return l.Z.put(s, e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "importFacilities",
                value: function (e) {
                  return l.Z.post(
                    "http://46.105.58.235:8000/facilities/import",
                    e,
                    { headers: { Authorization: (0, r.Z)() } }
                  );
                },
              },
              {
                key: "deletefacilityparam",
                value: function () {
                  return l.Z.get(s + "delete", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "deleteFacility",
                value: function (e) {
                  return l.Z.post(s + "delete", e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new o();
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
  },
]);
//# sourceMappingURL=3990.83e7dacb.chunk.js.map
