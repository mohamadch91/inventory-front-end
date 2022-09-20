"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [3990],
  {
    30027: function (e, t, a) {
      var n = a(29439),
        l = a(1413),
        i = a(16149),
        r = a(78083),
        s = a(85109),
        o = a(97915),
        c = a(72791),
        d = a(80184),
        u = function (e) {
          return (0, d.jsx)("div", {
            children: (0, d.jsxs)(
              s.F.Option,
              (0, l.Z)(
                (0, l.Z)({}, e),
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
          a = e.field,
          l = e.onChangeHandler,
          s = e.defaultValue,
          m = e.separator,
          p = (0, c.useState)([]),
          v = (0, n.Z)(p, 2),
          h = v[0],
          f = v[1];
        if ("select" === a.type) {
          if ("other_services" !== a.stateName)
            return (0, d.jsxs)(i.Z.Control, {
              onChange: function (e) {
                return l(e.target.value, a);
              },
              className: "form-control form-select",
              multiple: "other_services" === a.stateName,
              as: "select",
              disabled: a.active ? !a.active : a.disabled,
              id: "field-".concat(a.id),
              children: [
                (0, d.jsx)("option", { value: "", children: "Please select" }),
                a.params.map(function (e) {
                  return (0,
                  d.jsx)("option", { disabled: e.enabled ? !e.enabled : e.active ? !e.active : !e.enable, value: e.id, selected: parseInt(s) === e.id, children: e.name || e.describe });
                }),
              ],
            });
          var x = [],
            g = [];
          console.log(g);
          for (var b = 0; b < a.params.length; b++) {
            var j = a.params[b].enabled
                ? !a.params[b].enabled
                : a.params[b].active
                ? !a.params[b].active
                : !a.params[b].enable,
              y = !(void 0 === s || null === s || !s.includes(a.params[b].id));
            j ||
              x.push({
                label: a.params[b].name || a.params[b].describe,
                value: a.params[b].id,
              }),
              y &&
                g.push({
                  label: a.params[b].name || a.params[b].describe,
                  value: a.params[b].id,
                });
          }
          return (0, d.jsx)(o.ZP, {
            options: x,
            isMulti: !0,
            closeMenuOnSelect: !1,
            hideSelectedOptions: !1,
            components: { Option: u },
            onChange: function (e) {
              console.log(e);
              var t = [],
                n = "";
              if (null !== e) {
                for (var i = 0; i < e.length; i++)
                  t.push(e[i].value), (n += e[i].value);
                f(e), (g = e), l(n, a);
              } else l("", a), f([]), (g = []);
            },
            allowSelectAll: !0,
            value: h.length > 0 ? h : g,
          });
        }
        if ("bool" === a.type)
          return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsxs)(i.Z.Control, {
              onChange: function (e) {
                return l("true" === e.target.value, a);
              },
              className: "form-control",
              as: "select",
              disabled: a.active ? !a.active : a.disabled,
              id: "field-".concat(a.id),
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
        var N = null === (t = a.validation) || void 0 === t ? void 0 : t[0];
        return (0, d.jsx)(i.Z.Control, {
          onKeyPress: function (e) {
            if ((e.persist(), "number" === a.type))
              if (N && null !== N && void 0 !== N && N.float) {
                if (-1 === "0123456789.:".indexOf(e.key))
                  return void e.preventDefault();
              } else if (
                N &&
                !1 === (null === N || void 0 === N ? void 0 : N.float) &&
                -1 === "0123456789".indexOf(e.key)
              )
                return void e.preventDefault();
            l(e.target.value, a);
          },
          onChange: function (e) {
            return l(e.target.value, a);
          },
          value: s,
          className: "form-control",
          id: "field-".concat(a.id),
          disabled: a.active ? !a.active : a.disabled,
          min:
            N && -1 !== (null === N || void 0 === N ? void 0 : N.min)
              ? N.min
              : void 0,
          max:
            N && -1 !== (null === N || void 0 === N ? void 0 : N.max)
              ? N.max
              : void 0,
          step:
            N && null !== N && void 0 !== N && N.float
              ? Math.pow(0.1, N.floating).toFixed(N.floating)
              : void 0,
          maxLength:
            N && -1 !== (null === N || void 0 === N ? void 0 : N.digits)
              ? N.digits
              : void 0,
          onBlur: function (e) {
            if ((e.persist(), m)) {
              var t = (0, r.k)(e.target.value);
              l(t, a);
            }
          },
        });
      };
    },
    38275: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return c;
        },
      });
      a(72791);
      var n = a(64554),
        l = a(36151),
        i = a(30606),
        r = a(80184);
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
      var o = function () {
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
      var c = function (e) {
        var t = e.activeStep,
          a = e.handleBack,
          c = e.handleNext,
          d = e.stepsLength,
          u = e.isNextDisabled,
          m = e.id;
        return (0, r.jsx)("div", {
          className: "row mt-2",
          children: (0, r.jsxs)(n.Z, {
            sx: { display: "flex", flexDirection: "row", pt: 2 },
            children: [
              (0, r.jsxs)(l.Z, {
                color: "inherit",
                disabled: 0 === t,
                onClick: a,
                sx: { mr: 1 },
                type: "button",
                children: [
                  (0, r.jsx)(s, { sx: { mr: 2 } }),
                  (0, r.jsx)(i.c, { children: "Back" }),
                ],
              }),
              (0, r.jsx)(n.Z, { sx: { flex: "1 1 auto" } }),
              (0, r.jsxs)(r.Fragment, {
                children: [
                  "new" !== m &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("button", {
                          className: "btn btn-primary w-25 ",
                          children: "SAVE ALL",
                        }),
                        (0, r.jsxs)(l.Z, {
                          disabled: u,
                          onClick: c,
                          type: "button",
                          sx: { mr: 1 },
                          children: [
                            (0, r.jsx)(i.c, { children: "Next" }),
                            (0, r.jsx)(o, {}),
                          ],
                        }),
                      ],
                    }),
                  "new" === m &&
                    t !== d &&
                    (0, r.jsxs)(l.Z, {
                      disabled: u,
                      onClick: c,
                      type: "button",
                      sx: { mr: 1 },
                      children: [
                        (0, r.jsx)(i.c, { children: "Next" }),
                        (0, r.jsx)(o, {}),
                      ],
                    }),
                  "new" === m &&
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
    63990: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return X;
          },
        });
      var n = a(93433),
        l = a(37762),
        i = a(74165),
        r = a(1413),
        s = a(15861),
        o = a(29439),
        c = a(72791),
        d = a(91933),
        u = a(87681),
        m = a(79271),
        p = a(59909),
        v = a(70242),
        h = a(74512),
        f = a(15825),
        x = a(16149),
        g = a(30027),
        b = a(95804),
        j = {
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
        N = (a(67844), a(30606)),
        Z = a(78083),
        S = a(38275),
        k = a(46293),
        w = a(69961),
        C = a(17626),
        O = a(6042),
        I = a(59500),
        F = a(78559),
        A = a.n(F),
        _ = (a(23666), a(80184)),
        J = {
          id: "parent-facility",
          type: "text",
          active: !1,
          disabled: !0,
          stateName: "parentName",
        };
      function L() {
        var e = (0, c.useState)(null),
          t = (0, o.Z)(e, 2),
          a = t[0],
          n = t[1],
          l = (0, k.zV)({
            click: function () {
              l.locate(), l.invalidateSize();
            },
            locationfound: function (e) {
              n(e.latlng), l.flyTo(e.latlng, l.getZoom());
            },
          });
        return null === a ? null : (0, _.jsx)(_.Fragment, {});
      }
      delete A().Icon.Default.prototype._getIconUrl,
        A().Icon.Default.mergeOptions({
          iconRetinaUrl: a(6431),
          iconUrl: a(37093),
          shadowUrl: a(68858),
        });
      var z = function (e) {
        var t = (0, k.Sx)(),
          a = function (e) {
            window.handleMapClick(e);
          };
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
                    window.navigator.geolocation.getCurrentPosition(function (
                      e
                    ) {
                      var t = e.coords,
                        n = t.latitude,
                        l = t.longitude;
                      a({ latlang: { lat: n, lng: l } });
                    },
                    console.log),
                      (e.textContent = t.latlng),
                      console.log(t),
                      a(t);
                  }),
                  t.addControl(new n());
              }
            },
            [t]
          ),
          null
        );
      };
      var X = function () {
        var e,
          t = (0, c.useState)(0),
          a = (0, o.Z)(t, 2),
          k = a[0],
          F = a[1],
          A = (0, c.useState)({}),
          X = (0, o.Z)(A, 2),
          D = X[0],
          H = X[1],
          M = (0, c.useState)({}),
          U = (0, o.Z)(M, 2),
          q = U[0],
          E = U[1],
          P = (0, c.useState)([]),
          V = (0, o.Z)(P, 2),
          B = V[0],
          G = V[1],
          $ = (0, m.UO)().id,
          Q = (0, m.k6)(),
          R = new URLSearchParams(Q.location.search).get("pid"),
          T = (0, c.useState)(null),
          K = (0, o.Z)(T, 2),
          W = K[0],
          Y = K[1],
          ee = (0, c.useState)([]),
          te = (0, o.Z)(ee, 2),
          ae = te[0],
          ne = (te[1], (0, c.useState)(null)),
          le = (0, o.Z)(ne, 2),
          ie = le[0],
          re = le[1],
          se = (0, c.useState)(null),
          oe = (0, o.Z)(se, 2),
          ce = oe[0],
          de = oe[1],
          ue = (0, d.useQuery)(
            ["facility-default-value", $],
            (0, s.Z)(
              (0, i.Z)().mark(function e() {
                var t, a, n, l, s, o, c, d, m, p, v, h, f, x, g, b, j;
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
                          e.next = 5;
                          break;
                        }
                        return (
                          re(
                            null ===
                              JSON.parse(localStorage.getItem("country")) ||
                              void 0 ===
                                JSON.parse(localStorage.getItem("country"))
                                  .mainlocation
                              ? 35
                              : null ===
                                  (a = JSON.parse(
                                    localStorage.getItem("country")
                                  ).mainlocation) ||
                                void 0 === a ||
                                null === (n = a.split("(")[1]) ||
                                void 0 === n
                              ? void 0
                              : n.split(",")[0]
                          ),
                          de(
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
                                null === (s = l.split(",")[1]) ||
                                void 0 === s
                              ? void 0
                              : s.split(")")[0]
                          ),
                          e.abrupt("return", t)
                        );
                      case 5:
                        return (
                          (o = { id: $ }), (e.next = 8), u.Z.getFacilities(o)
                        );
                      case 8:
                        return (
                          (c = e.sent),
                          ((d = (0, r.Z)(
                            (0, r.Z)({}, c.data),
                            {},
                            { defaultData: t }
                          )).populationnumber = (0, Z.k)(d.populationnumber)),
                          (d.loverlevelfac = (0, Z.k)(d.loverlevelfac)),
                          (d.childrennumber = (0, Z.k)(d.childrennumber)),
                          (m = d.gpsCordinate)
                            ? ((h =
                                null === (p = m.split("(")[1]) || void 0 === p
                                  ? void 0
                                  : p.split(",")[0]),
                              (f =
                                null === (v = m.split(",")[1]) || void 0 === v
                                  ? void 0
                                  : v.split(")")[0]),
                              re(h),
                              de(f),
                              Y([h, f]))
                            : (re(
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
                              de(
                                null ===
                                  JSON.parse(localStorage.getItem("country")) ||
                                  void 0 ===
                                    JSON.parse(localStorage.getItem("country"))
                                      .mainlocation
                                  ? 51
                                  : null ===
                                      (b = JSON.parse(
                                        localStorage.getItem("country")
                                      ).mainlocation) ||
                                    void 0 === b ||
                                    null === (j = b.split(",")[1]) ||
                                    void 0 === j
                                  ? void 0
                                  : j.split(")")[0]
                              )),
                          e.abrupt("return", d)
                        );
                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            {
              refetchOnMount: !0,
              onSuccess: function (e) {
                console.log(e), H(e);
              },
            }
          ),
          me = ue.isLoading,
          pe = (0, d.useQuery)(
            ["facility-fields"],
            (0, s.Z)(
              (0, i.Z)().mark(function e() {
                var t, a, n, s, o, c, d, m, p;
                return (0, i.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            ((t = {}).id = $),
                            R && (t.parent = R),
                            (e.next = 5),
                            u.Z.getFacilityFields(t)
                          );
                        case 5:
                          if (((a = e.sent), (n = {}), !a.data)) {
                            e.next = 32;
                            break;
                          }
                          (s = (0, l.Z)(a.data.related)), (e.prev = 9), s.s();
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
                            null !== (c = n[d.topic]) && void 0 !== c
                              ? c
                              : []).push(d),
                            (n[d.topic] = m);
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
                          (p = Object.keys(n)[0]),
                            G(
                              a.data.levels.map(function (e) {
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
                            n[p].unshift({
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
                              r.Z)((0, r.Z)({}, e), {}, { completerstaffname: null !== (t = null === e || void 0 === e ? void 0 : e.completerstaffname) && void 0 !== t ? t : a.data.user.username, parentName: a.data.facility.name });
                            });
                        case 32:
                          return e.abrupt("return", n);
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
          ve = pe.data,
          he = pe.isLoading;
        if (me || he) return (0, _.jsx)(p.Z, {});
        var fe = {
            id: "name",
            type: "text",
            active: 0 === k,
            required: !0,
            disabled: 0 !== k,
            stateName: "name",
          },
          xe = {
            id: "level",
            type: "select",
            active: 0 === k && "new" === $,
            required: !0,
            disabled: 0 !== k || "new" != $,
            stateName: "level",
            params: B,
          },
          ge = function () {
            var e = (0, r.Z)({}, q),
              t = (0, n.Z)(Object.values(ve)[k]);
            for (var a in (0 === k && (t.push(xe), t.push(fe)),
            t.forEach(function (t) {
              !t.required ||
                D[t.stateName] ||
                (function (e, t) {
                  for (var a in y)
                    if (y[a].indexOf(e) >= 0)
                      return (
                        console.log(t[a]),
                        void 0 === t[a] ||
                          null === t[a] ||
                          ("is_suitable" === a ? t[a] : !t[a])
                      );
                  return !1;
                })(t.stateName, D) ||
                ("bool" === t.type &&
                  void 0 !== D[t.stateName] &&
                  null !== D[t.stateName]) ||
                (e[t.stateName] = "this field is required!");
            }),
            j)) {
              var l = j[a];
              console.log(typeof D[a]),
                "is_suitable" === a
                  ? !0 === D[a] &&
                    l.forEach(function (t) {
                      console.log(t), delete e[t];
                    })
                  : !1 === D[a] &&
                    l.forEach(function (t) {
                      console.log(t), delete e[t];
                    });
            }
            return E(e), Object.keys(e).length > 0;
          },
          be = function () {
            ge() ||
              F(function (e) {
                return e + 1;
              });
          },
          je = function () {
            F(function (e) {
              return e - 1;
            });
          },
          ye = function (e, t) {
            var a,
              n,
              l,
              i = null === (a = t.validation) || void 0 === a ? void 0 : a[0];
            "General population" ===
              JSON.parse(localStorage.getItem("country")).poptarget &&
              "populationnumber" === t.stateName &&
              ((i.min = +(null === Se || void 0 === Se ? void 0 : Se.minpop)),
              (i.max = +(null === Se || void 0 === Se ? void 0 : Se.maxpop))),
              "Under-1 Population" ===
                JSON.parse(localStorage.getItem("country")).poptarget &&
                "childrennumber" === t.stateName &&
                ((i.min = +(null === Se || void 0 === Se ? void 0 : Se.minpop)),
                (i.max = +(null === Se || void 0 === Se ? void 0 : Se.maxpop))),
              (l =
                null !== (n = t.name) && void 0 !== n && n.includes("hh:mm")
                  ? (0, b.q)(e)
                  : (0, b.D)(e, i));
            var s = (0, r.Z)({}, D);
            (s[t.stateName] = e),
              "level" === t.stateName && (s[t.stateName] = parseInt(e)),
              H(s);
            var o = (0, r.Z)({}, q);
            for (var c in (l ? (o[t.stateName] = l) : delete o[t.stateName],
            j)) {
              var d = j[c];
              !0 === D[c] &&
                d.forEach(function (e) {
                  delete o[e];
                });
            }
            E(o);
          },
          Ne = (function () {
            var e = (0, s.Z)(
              (0, i.Z)().mark(function e(t) {
                var a, n, l, s, o, c, d;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((t.preventDefault(), !ge())) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        for (n in ((a = (0, r.Z)({}, D)), j))
                          (l = j[n]),
                            "is_suitable" === n
                              ? !0 === D[n] &&
                                l.forEach(function (e) {
                                  delete a[e];
                                })
                              : !1 === D[n] &&
                                l.forEach(function (e) {
                                  delete a[e];
                                });
                        for (d in (a.childrennumber &&
                          ((s = a.childrennumber.replaceAll(" ", "")),
                          (a.childrennumber = +s)),
                        a.populationnumber &&
                          ((o = a.populationnumber.replaceAll(" ", "")),
                          (a.populationnumber = +o)),
                        a.loverlevelfac &&
                          ((c = a.loverlevelfac.replaceAll(" ", "")),
                          (a.loverlevelfac = +c)),
                        a))
                          "" === a[d] && delete a[d];
                        return (
                          (e.next = 11),
                          "new" === $ ? u.Z.postFacility(a) : u.Z.putFacility(a)
                        );
                      case 11:
                        e.sent, Q.push("/facilities/list");
                      case 13:
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
          Ze = (function () {
            var e = (0, s.Z)(
              (0, i.Z)().mark(function e(t) {
                var a, n;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        Y(t.latlng),
                          (a = (0, r.Z)({}, D)),
                          (n =
                            "LatLng(" +
                            t.latlng.lat +
                            "," +
                            t.latlng.lng +
                            ")"),
                          (a.gpsCordinate = n),
                          H(a);
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
        window.handleMapClick = Ze;
        var Se = B[D.level - 2];
        return (0, _.jsxs)("form", {
          onSubmit: Ne,
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
                        children: Object.keys(ve).map(function (e, t) {
                          return (0,
                          _.jsx)(h.Z, { children: (0, _.jsx)(f.Z, { style: { width: "max-content" }, children: e }) }, e);
                        }),
                      }),
                    }),
                    (0, _.jsx)(S.Z, {
                      handleBack: je,
                      handleNext: be,
                      activeStep: k,
                      id: $,
                      stepsLength: Object.keys(ve).length - 1,
                      isNextDisabled: Object.keys(q).length > 0,
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
                          (0, _.jsx)("label", {
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
                          (0, _.jsx)("div", {
                            className: "col-sm-8",
                            children: (0, _.jsx)(g.Z, {
                              field: J,
                              defaultValue: D.parentName,
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
                          (0, _.jsx)("label", {
                            className: "col-sm-4 text-right control-label",
                            style: {
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              lineHeight: "1.4",
                              textAlign: "right",
                            },
                            children: "Facility name:",
                          }),
                          (0, _.jsx)("div", {
                            className: "col-sm-8",
                            children: (0, _.jsx)(g.Z, {
                              field: fe,
                              defaultValue: D.name,
                              onChangeHandler: ye,
                            }),
                          }),
                          q.name &&
                            (0, _.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, _.jsx)("div", { className: "col-sm-4" }),
                                (0, _.jsx)("div", {
                                  className: "col-sm-8",
                                  children: (0, _.jsx)("p", {
                                    className: "my-1 ml-2 text-danger",
                                    children: q.name,
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
                          (0, _.jsx)("label", {
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
                          (0, _.jsx)("div", {
                            className: "col-sm-8",
                            children: (0, _.jsx)(g.Z, {
                              field: xe,
                              defaultValue: D.level,
                              onChangeHandler: ye,
                            }),
                          }),
                          q.level &&
                            (0, _.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, _.jsx)("div", { className: "col-sm-4" }),
                                (0, _.jsx)("div", {
                                  className: "col-sm-8",
                                  children: (0, _.jsx)("p", {
                                    className: "my-1 ml-2 text-danger",
                                    children: q.level,
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
                    null === (e = Object.values(ve)[k]) || void 0 === e
                      ? void 0
                      : e.map(function (e) {
                          if (
                            !(function (e, t) {
                              for (var a in j)
                                if (j[a].indexOf(e) >= 0)
                                  return (
                                    console.log(t[a]),
                                    void 0 !== t[a] &&
                                      null !== t[a] &&
                                      ("is_suitable" === a ? !t[a] : t[a])
                                  );
                              return !0;
                            })(e.stateName, D)
                          )
                            return null;
                          var t = !!q[e.stateName];
                          return (0,
                          _.jsxs)(x.Z.Group, { className: "row mb-0", children: [(0, _.jsx)("label", { className: "col-sm-4  ".concat(e.required ? "control-label" : ""), style: { display: "flex", justifyContent: "flex-end", alignItems: "center", lineHeight: "1.4", textAlign: "right" }, children: e.name }), (0, _.jsxs)("div", { className: "col-sm-8", children: ["gpsCordinate" === e.stateName ? (0, _.jsxs)("div", { className: "map  ", children: [(0, _.jsx)("div", { className: "mb-2", children: (0, _.jsx)(x.Z.Control, { type: "text", disabled: !0, value: D[e.stateName] }) }), (0, _.jsx)("div", { className: "map", children: null !== ae && ie && ce && (0, _.jsxs)(w.h, { center: [ie, ce], zoom: 10, scrollWheelZoom: !0, style: { width: "100%", height: "450px", zIndex: "1" }, children: [(0, _.jsx)(C.I, { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", width: 500 }), (0, _.jsx)(z, { change: Ze, fields: D, setFields: H, map: W, setMap: Y }), (0, _.jsx)(_.Fragment, { children: W && (0, _.jsx)(O.J, { position: W, draggable: !0, children: (0, _.jsxs)(I.G, { position: W, children: ["Current location:", " ", (0, _.jsx)("pre", { children: JSON.stringify(W, null, 2) })] }) }) }), (0, _.jsx)(L, {})] }) })] }) : (0, _.jsx)(g.Z, { field: e, onChangeHandler: ye, defaultValue: D[e.stateName], separator: "childrennumber" === e.stateName || "loverlevelfac" === e.stateName || "populationnumber" === e.stateName }), (0, _.jsx)("br", {}), "General population" === JSON.parse(localStorage.getItem("country")).poptarget && "populationnumber" === e.stateName && Se && (0, _.jsxs)("p", { children: ["range: ", (0, Z.k)(null === Se || void 0 === Se ? void 0 : Se.minpop), " -", " ", (0, Z.k)(null === Se || void 0 === Se ? void 0 : Se.maxpop)] }), "Under-1 Population" === JSON.parse(localStorage.getItem("country")).poptarget && "childrennumber" === e.stateName && Se && (0, _.jsxs)("p", { children: ["range: ", (0, Z.k)(null === Se || void 0 === Se ? void 0 : Se.minpop), " -", " ", (0, Z.k)(null === Se || void 0 === Se ? void 0 : Se.maxpop)] })] }), t && (0, _.jsxs)("div", { className: "row", children: [(0, _.jsx)("div", { className: "col-sm-4" }), (0, _.jsx)("div", { className: "col-sm-8", children: (0, _.jsx)("p", { className: "my-1 ml-2 text-danger", children: q[e.stateName] }) })] }), (0, _.jsx)("hr", { className: "my-3" })] }, e.name);
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
                    handleBack: je,
                    handleNext: be,
                    activeStep: k,
                    id: $,
                    stepsLength: Object.keys(ve).length - 1,
                    isNextDisabled: Object.keys(q).length > 0,
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
    78083: function (e, t, a) {
      a.d(t, {
        k: function () {
          return n;
        },
      });
      var n = function (e) {
        if (void 0 !== e && null !== e && "" !== e)
          return (function (e, t) {
            function a(e) {
              return e.split("").reverse().join("");
            }
            var n = /(\d{3}(?!.*\.|$))/g;
            t || (t = " ");
            return a(a(e.toString()).replace(n, "$1" + t));
          })((e = parseInt(e)));
      };
    },
    95804: function (e, t, a) {
      a.d(t, {
        D: function () {
          return l;
        },
        q: function () {
          return i;
        },
      });
      var n = a(78083),
        l = function (e, t) {
          if ("string" !== typeof e && "number" !== typeof e) return !1;
          var a = e.replaceAll(" ", "");
          return (
            !(void 0 === t || !a) &&
            (-1 !== t.min && t.min > a
              ? "value must greater than ".concat((0, n.k)(t.min))
              : -1 !== t.max && t.max < a
              ? "value must less than ".concat((0, n.k)(t.max))
              : (console.log(a.split(".")),
                !!(
                  t.float &&
                  a.includes(".") &&
                  a.split(".")[1].length > t.floating
                ) && "value must has ".concat(t.floating, " decimals")))
          );
        },
        i = function (e) {
          return (
            !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(e) &&
            "value must be in (hh:mm) format!"
          );
        };
    },
    87681: function (e, t, a) {
      var n = a(15671),
        l = a(43144),
        i = a(39877),
        r = a(54318),
        s = (a(74569), "https://inventory.runflare.run/facilities/"),
        o = (function () {
          function e() {
            (0, n.Z)(this, e);
          }
          return (
            (0, l.Z)(e, [
              {
                key: "getFacilities",
                value: function (e) {
                  return i.Z.get(s, {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacilities",
                value: function (e) {
                  var t = { id: e };
                  return i.Z.get(s + "parent", {
                    headers: { Authorization: (0, r.Z)() },
                    params: t,
                  });
                },
              },
              {
                key: "getFacilityFields",
                value: function (e) {
                  return i.Z.get(s + "facility-field", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacilityFields1",
                value: function (e) {
                  return i.Z.get(s + "print", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postFacility",
                value: function (e) {
                  return i.Z.post(s, e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "putFacility",
                value: function (e) {
                  return i.Z.put(s, e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "importFacilities",
                value: function (e) {
                  return i.Z.post(
                    "https://inventory.runflare.run/facilities/import",
                    e,
                    { headers: { Authorization: (0, r.Z)() } }
                  );
                },
              },
              {
                key: "deletefacilityparam",
                value: function () {
                  return i.Z.get(s + "delete", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "deleteFacility",
                value: function (e) {
                  return i.Z.post(s + "delete", e, {
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
  },
]);
//# sourceMappingURL=3990.113a5742.chunk.js.map
