/*! For license information please see 121.bbc7c12d.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [121],
  {
    30027: function (t, e, r) {
      var n = r(94912),
        i = r(80184);
      e.Z = function (t) {
        var e = t.field,
          r = t.onChangeHandler,
          a = t.defaultValue;
        return "select" === e.type
          ? (0, i.jsxs)(n.Z.Control, {
              onChange: function (t) {
                return r(t, e);
              },
              defaultValue: a,
              className: "form-control",
              as: "select",
              disabled: e.disabled,
              id: "field-".concat(e.id),
              children: [
                (0, i.jsx)("option", {
                  value: "",
                  selected: !0,
                  disabled: !0,
                  children: "Please select",
                }),
                e.params.map(function (t) {
                  return (0,
                  i.jsx)("option", { disabled: !t.enabled, value: t.id, children: t.name || t.describe });
                }),
              ],
            })
          : (0, i.jsx)(n.Z.Control, {
              onChange: function (t) {
                return r(t, e);
              },
              defaultValue: a,
              className: "form-control",
              id: "field-".concat(e.id),
              type: e.type,
              disabled: e.disabled,
            });
      };
    },
    10121: function (t, e, r) {
      r.r(e);
      var n = r(1413),
        i = r(37762),
        a = r(74165),
        o = r(15861),
        c = r(70885),
        u = r(72791),
        s = r(91933),
        l = r(87681),
        f = r(79271),
        d = r(59909),
        h = r(70242),
        p = r(74512),
        v = r(15825),
        y = r(64554),
        m = r(36151),
        x = r(94912),
        g = r(30027),
        b = r(80184);
      e.default = function () {
        var t,
          e = (0, u.useState)(0),
          r = (0, c.Z)(e, 2),
          w = r[0],
          j = r[1],
          Z = (0, u.useState)({}),
          N = (0, c.Z)(Z, 2),
          L = N[0],
          k = N[1],
          E = (0, u.useState)([]),
          O = (0, c.Z)(E, 2),
          S = O[0],
          F = O[1],
          _ = (0, f.UO)().id,
          C = (0, s.useQuery)(
            ["facility-default-value", _],
            (0, o.Z)(
              (0, a.Z)().mark(function t() {
                var e, r;
                return (0, a.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((e = JSON.parse(localStorage.getItem("user"))),
                          "new" !== _)
                        ) {
                          t.next = 3;
                          break;
                        }
                        return t.abrupt("return", {
                          "parent-facility":
                            null === e || void 0 === e ? void 0 : e.facility_id,
                        });
                      case 3:
                        return (t.next = 5), l.Z.getFacilities(_);
                      case 5:
                        return (
                          ((r = t.sent).data["parent-facility"] =
                            null === e || void 0 === e
                              ? void 0
                              : e.facility_id),
                          t.abrupt("return", r.data)
                        );
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            {
              staleTime: 1 / 0,
              refetchOnMount: !0,
              onSuccess: function (t) {
                k(t);
              },
            }
          ).isLoading,
          P = (0, s.useQuery)(
            ["facility-fields"],
            (0, o.Z)(
              (0, a.Z)().mark(function t() {
                var e, r, n, o, c, u, s, f;
                return (0, a.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), l.Z.getFacilityFields();
                      case 2:
                        if (((e = t.sent), (r = {}), e.data)) {
                          n = (0, i.Z)(e.data.related);
                          try {
                            for (n.s(); !(o = n.n()).done; )
                              (u = o.value),
                                (s =
                                  null !== (c = r[u.topic]) && void 0 !== c
                                    ? c
                                    : []).push(u),
                                (r[u.topic] = s);
                          } catch (a) {
                            n.e(a);
                          } finally {
                            n.f();
                          }
                          (f = Object.keys(r)[0]),
                            r[f].unshift({
                              id: "level",
                              name: "Level",
                              topic: f,
                              type: "select",
                              active: !0,
                              required: !0,
                              stateName: "level",
                              params: e.data.levels.map(function (t) {
                                return {
                                  id: t.id,
                                  name: t.name,
                                  order: 1,
                                  enabled: !0,
                                  paramid: t.id,
                                };
                              }),
                            }),
                            r[f].unshift({
                              id: "code",
                              name: "Facility code:",
                              topic: f,
                              type: "text",
                              active: !0,
                              disabled: !0,
                              required: !1,
                              stateName: "code",
                              params: [],
                            }),
                            r[f].unshift({
                              id: "parent-facility",
                              name: "Parent facility:",
                              topic: f,
                              type: "text",
                              active: !0,
                              disabled: !0,
                              required: !1,
                              stateName: "parent-facility",
                              params: [],
                            });
                        }
                        return t.abrupt("return", r);
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            { staleTime: 1 / 0, refetchOnMount: !0 }
          ),
          G = P.data,
          A = P.isLoading;
        if (C || A) return (0, b.jsx)(d.Z, {});
        var T = function () {
            var t = [];
            return (
              Object.values(G)[w].forEach(function (e) {
                e.required && !L[e.stateName] && t.push(e.id);
              }),
              F(t),
              t.length > 0
            );
          },
          I = function (t, e) {
            var r = t.target.value,
              i = (0, n.Z)({}, L);
            (i[e.stateName] = r),
              k(i),
              r &&
                S.indexOf(e.id) >= 0 &&
                F(function (t) {
                  return t.filter(function (t) {
                    return t !== e.id;
                  });
                });
          },
          q = (function () {
            var t = (0, o.Z)(
              (0, a.Z)().mark(function t(e) {
                return (0, a.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if ((e.preventDefault(), !T())) {
                          t.next = 3;
                          break;
                        }
                        return t.abrupt("return");
                      case 3:
                        return (
                          (t.next = 5),
                          "new" === _ ? l.Z.postFacility(L) : l.Z.putFacility(L)
                        );
                      case 5:
                        t.sent;
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        return (0, b.jsxs)("form", {
          onSubmit: q,
          children: [
            (0, b.jsx)("h3", {
              className: "page-title mb-3",
              children: "Facility information",
            }),
            (0, b.jsx)("div", {
              className: "mt-3",
              children: (0, b.jsx)("div", {
                className: "card",
                children: (0, b.jsxs)("div", {
                  className: "card-body pb-3",
                  children: [
                    (0, b.jsx)("div", {
                      className: "row pb-4",
                      style: { overflow: "auto" },
                      children: (0, b.jsx)(h.Z, {
                        activeStep: w,
                        children: Object.keys(G).map(function (t, e) {
                          return (0, b.jsx)(
                            p.Z,
                            {
                              onClick: function () {
                                j(e);
                              },
                              children: (0, b.jsx)(v.Z, {
                                style: { width: "max-content" },
                                children: t,
                              }),
                            },
                            t
                          );
                        }),
                      }),
                    }),
                    (0, b.jsx)("div", {
                      className: "row mt-2",
                      children: (0, b.jsxs)(y.Z, {
                        sx: { display: "flex", flexDirection: "row", pt: 2 },
                        children: [
                          (0, b.jsx)(m.Z, {
                            color: "inherit",
                            disabled: 0 === w,
                            onClick: function () {
                              j(function (t) {
                                return t - 1;
                              });
                            },
                            sx: { mr: 1 },
                            type: "button",
                            children: "Back",
                          }),
                          (0, b.jsx)(y.Z, { sx: { flex: "1 1 auto" } }),
                          w === Object.keys(G).length - 1
                            ? (0, b.jsx)("button", {
                                className: "btn btn-primary ",
                                children: "Save",
                              })
                            : (0, b.jsx)(m.Z, {
                                disabled: S.length > 0,
                                onClick: function () {
                                  T() ||
                                    j(function (t) {
                                      return t + 1;
                                    });
                                },
                                type: "button",
                                sx: { mr: 1 },
                                children: "Next",
                              }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, b.jsx)("div", {
              className: "mt-3",
              children: (0, b.jsx)("div", {
                className: "card",
                children: (0, b.jsx)("div", {
                  className: "card-body",
                  children:
                    null === (t = Object.values(G)[w]) || void 0 === t
                      ? void 0
                      : t.map(function (t) {
                          var e = S.indexOf(t.id) >= 0;
                          return (0,
                          b.jsx)("div", { className: "row", children: (0, b.jsxs)(x.Z.Group, { className: "row mb-0", children: [(0, b.jsx)("label", { className: "col-sm-4 text-right ".concat(t.required ? "control-label" : ""), style: { display: "flex", justifyContent: "flex-start", alignItems: "center", lineHeight: "1.4" }, children: t.name }), (0, b.jsx)("div", { className: "col-sm-8", children: (0, b.jsx)(g.Z, { field: t, onChangeHandler: I, defaultValue: L[t.stateName] }) }), e && (0, b.jsxs)("div", { className: "row", children: [(0, b.jsx)("div", { className: "col-sm-4" }), (0, b.jsx)("div", { className: "col-sm-8", children: (0, b.jsx)("p", { className: "my-1 ml-2 text-danger", children: "this field is required!" }) })] }), (0, b.jsx)("hr", { className: "my-3" })] }) }, t.name);
                        }),
                }),
              }),
            }),
          ],
        });
      };
    },
    87681: function (t, e, r) {
      var n = r(15671),
        i = r(43144),
        a = r(74569),
        o = r.n(a),
        c = r(54318),
        u = "http://127.0.0.1:8000/facilities/",
        s = (function () {
          function t() {
            (0, n.Z)(this, t);
          }
          return (
            (0, i.Z)(t, [
              {
                key: "getFacilities",
                value: function (t) {
                  var e = {};
                  return (
                    t && (e.id = t),
                    o().get(u, {
                      headers: { Authorization: (0, c.Z)() },
                      params: e,
                    })
                  );
                },
              },
              {
                key: "getFacilityFields",
                value: function () {
                  return o().get(u + "facility-field", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "postFacility",
                value: function (t) {
                  return o().post(u, t, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putFacility",
                value: function (t) {
                  return o().put(u, t, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
            ]),
            t
          );
        })();
      e.Z = new s();
    },
    15861: function (t, e, r) {
      function n(t, e, r, n, i, a, o) {
        try {
          var c = t[a](o),
            u = c.value;
        } catch (s) {
          return void r(s);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, i);
      }
      function i(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (i, a) {
            var o = t.apply(e, r);
            function c(t) {
              n(o, i, a, c, u, "next", t);
            }
            function u(t) {
              n(o, i, a, c, u, "throw", t);
            }
            c(void 0);
          });
        };
      }
      r.d(e, {
        Z: function () {
          return i;
        },
      });
    },
    37762: function (t, e, r) {
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      var n = r(40181);
      function i(t, e) {
        var r =
          ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!r) {
          if (
            Array.isArray(t) ||
            (r = (0, n.Z)(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            r && (t = r);
            var i = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          u = !1;
        return {
          s: function () {
            r = r.call(t);
          },
          n: function () {
            var t = r.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (u = !0), (o = t);
          },
          f: function () {
            try {
              c || null == r.return || r.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
    },
    74165: function (t, e, r) {
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      var n = r(71002);
      function i() {
        i = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function s(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, "");
        } catch (O) {
          s = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, n) {
          var i = e && e.prototype instanceof h ? e : h,
            a = Object.create(i.prototype),
            o = new L(n || []);
          return (
            (a._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (i, a) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === i) throw a;
                  return E();
                }
                for (r.method = i, r.arg = a; ; ) {
                  var o = r.delegate;
                  if (o) {
                    var c = j(o, r);
                    if (c) {
                      if (c === d) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = f(t, e, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === d)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, o)),
            a
          );
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (O) {
            return { type: "throw", arg: O };
          }
        }
        t.wrap = l;
        var d = {};
        function h() {}
        function p() {}
        function v() {}
        var y = {};
        s(y, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          x = m && m(m(k([])));
        x && x !== e && r.call(x, o) && (y = x);
        var g = (v.prototype = h.prototype = Object.create(y));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          function i(a, o, c, u) {
            var s = f(t[a], t, o);
            if ("throw" !== s.type) {
              var l = s.arg,
                d = l.value;
              return d && "object" == (0, n.Z)(d) && r.call(d, "__await")
                ? e.resolve(d.__await).then(
                    function (t) {
                      i("next", t, c, u);
                    },
                    function (t) {
                      i("throw", t, c, u);
                    }
                  )
                : e.resolve(d).then(
                    function (t) {
                      (l.value = t), c(l);
                    },
                    function (t) {
                      return i("throw", t, c, u);
                    }
                  );
            }
            u(s.arg);
          }
          var a;
          this._invoke = function (t, r) {
            function n() {
              return new e(function (e, n) {
                i(t, r, e, n);
              });
            }
            return (a = a ? a.then(n, n) : n());
          };
        }
        function j(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                j(t, e),
                "throw" === e.method)
              )
                return d;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return d;
          }
          var n = f(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), d
            );
          var i = n.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                d)
              : i
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              d);
        }
        function Z(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function N(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function L(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(Z, this),
            this.reset(!0);
        }
        function k(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                i = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (i.next = i);
            }
          }
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = v),
          s(g, "constructor", v),
          s(v, "constructor", p),
          (p.displayName = s(v, u, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, v)
                : ((t.__proto__ = v), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          s(w.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, i, a) {
            void 0 === a && (a = Promise);
            var o = new w(l(e, r, n, i), a);
            return t.isGeneratorFunction(r)
              ? o
              : o.next().then(function (t) {
                  return t.done ? t.value : o.next();
                });
          }),
          b(g),
          s(g, u, "Generator"),
          s(g, o, function () {
            return this;
          }),
          s(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = k),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(N),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (o.type = "throw"),
                  (o.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  o = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var a = i;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var o = a ? a.completion : {};
              return (
                (o.type = t),
                (o.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(o)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), N(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    N(r);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          t
        );
      }
    },
  },
]);
//# sourceMappingURL=121.bbc7c12d.chunk.js.map
