/*! For license information please see 9108.7ef7e7e6.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [9108],
  {
    9108: function (t, e, r) {
      r.r(e);
      var n = r(74165),
        i = r(15861),
        o = (r(72791), r(79271)),
        a = r(91933),
        c = r(10140),
        s = r(24849),
        l = r(30606),
        u = r(80184);
      e.default = function () {
        var t = (0, o.UO)(),
          e = (0, a.useQuery)(
            ["log-details"],
            (0, i.Z)(
              (0, n.Z)().mark(function e() {
                var r;
                return (0, n.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), c.Z.getLogDetails("?item=" + t.id);
                      case 2:
                        return (r = e.sent), e.abrupt("return", r.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !0 }
          ),
          r = e.data;
        if (e.isLoading) return (0, u.jsx)(s.Z, {});
        var h = r.maintanances;
        return (
          console.log(h),
          (0, u.jsx)("div", {
            className: "d-flex mb-3",
            children: (0, u.jsx)("div", {
              className: "col-lg-12 stretch-card",
              children: (0, u.jsx)("div", {
                className: "card",
                children: (0, u.jsxs)("div", {
                  className: "card-body",
                  children: [
                    (0, u.jsx)("h4", {
                      className: "card-title",
                      children: (0, u.jsxs)(l.c, {
                        children: [
                          "Details of ",
                          (0, u.jsx)("i", { children: "".concat(r.type) }),
                          " maintenance performed by ",
                          "".concat(r.gp),
                          ": #",
                          "".concat(r.code),
                        ],
                      }),
                    }),
                    (0, u.jsx)("div", {
                      className: "table-responsive",
                      children: (0, u.jsxs)("table", {
                        className: "table table-bordered",
                        children: [
                          (0, u.jsx)("thead", {
                            children: (0, u.jsxs)("tr", {
                              children: [
                                (0, u.jsxs)("th", {
                                  children: [
                                    " ",
                                    (0, u.jsx)(l.c, { children: "#" }),
                                    " ",
                                  ],
                                }),
                                (0, u.jsxs)("th", {
                                  children: [
                                    " ",
                                    (0, u.jsx)(l.c, { children: "Name" }),
                                    " ",
                                  ],
                                }),
                                (0, u.jsxs)("th", {
                                  children: [
                                    " ",
                                    (0, u.jsx)(l.c, { children: "Code" }),
                                    " ",
                                  ],
                                }),
                                (0, u.jsxs)("th", {
                                  children: [
                                    " ",
                                    (0, u.jsx)(l.c, { children: "interval" }),
                                    " ",
                                  ],
                                }),
                                (0, u.jsxs)("th", {
                                  children: [
                                    " ",
                                    (0, u.jsx)(l.c, {
                                      children: "interval in location",
                                    }),
                                    " ",
                                  ],
                                }),
                                (0, u.jsxs)("th", {
                                  children: [
                                    " ",
                                    (0, u.jsx)(l.c, { children: "Deadline" }),
                                    " ",
                                  ],
                                }),
                                (0, u.jsxs)("th", {
                                  children: [
                                    " ",
                                    (0, u.jsx)(l.c, {
                                      children: " Deadline in location",
                                    }),
                                    " ",
                                  ],
                                }),
                                (0, u.jsxs)("th", {
                                  children: [
                                    " ",
                                    (0, u.jsx)(l.c, { children: "Status" }),
                                    " ",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, u.jsx)("tbody", {
                            children: h.map(function (t, e) {
                              return (0,
                              u.jsxs)("tr", { className: "table-info", children: [(0, u.jsxs)("td", { children: [" ", e + 1, " "] }, t.id + e), (0, u.jsxs)("td", { children: [" ", t.name, " "] }, e + t.name), (0, u.jsxs)("td", { children: [" ", t.code, " "] }, e + t.code), (0, u.jsxs)("td", { children: [" ", t.interval, " "] }, e + t.interval), (0, u.jsxs)("td", { children: [" ", t.loc_interval, " "] }, e + t.loc_interval), (0, u.jsxs)("td", { children: [" ", t.deadline, " "] }, e + t.deadline), (0, u.jsx)("td", { children: t.deadline_in_loc }, e + t.deadline_in_loc), (0, u.jsx)("td", { children: (0, u.jsx)("label", { className: "badge badge-".concat(t.done ? "success" : "warning", "  "), style: { fontSize: "12px" }, children: t.done ? "Done" : "Pending" }) }, e + "A")] }, t.id);
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      };
    },
    10140: function (t, e, r) {
      var n = r(15671),
        i = r(43144),
        o = r(39877),
        a = r(54318),
        c = "http://127.0.0.1:8000/dashboard",
        s = (function () {
          function t() {
            (0, n.Z)(this, t);
          }
          return (
            (0, i.Z)(t, [
              {
                key: "getAllDashboardItems",
                value: function () {
                  return o.Z.get(c + "/item", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getAllFacilities",
                value: function () {
                  return o.Z.get(c + "/facility", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getAllTablesData",
                value: function () {
                  return o.Z.get(c + "/table", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getAllWarningsData",
                value: function () {
                  return o.Z.get(c + "/maintenance", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getWarningsInfo",
                value: function (t) {
                  return o.Z.get(c + "/todo" + t, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceLog",
                value: function () {
                  return o.Z.get(c + "/maintenancelog", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "postWarningsAsDone",
                value: function (t) {
                  return o.Z.post(c + "/todo", t, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getLogDetails",
                value: function (t) {
                  return (
                    console.log(c + "/maintenancelog" + t),
                    o.Z.get(c + "/maintenancelog" + t, {
                      headers: { Authorization: (0, a.Z)() },
                    })
                  );
                },
              },
            ]),
            t
          );
        })();
      e.Z = new s();
    },
    24849: function (t, e, r) {
      var n = r(87462),
        i = r(63366),
        o = r(81694),
        a = r.n(o),
        c = r(72791),
        s = r(10162),
        l = [
          "bsPrefix",
          "variant",
          "animation",
          "size",
          "children",
          "as",
          "className",
        ],
        u = c.forwardRef(function (t, e) {
          var r = t.bsPrefix,
            o = t.variant,
            u = t.animation,
            h = t.size,
            d = t.children,
            f = t.as,
            v = void 0 === f ? "div" : f,
            p = t.className,
            y = (0, i.Z)(t, l),
            g = (r = (0, s.vE)(r, "spinner")) + "-" + u;
          return c.createElement(
            v,
            (0, n.Z)({ ref: e }, y, {
              className: a()(p, g, h && g + "-" + h, o && "text-" + o),
            }),
            d
          );
        });
      (u.displayName = "Spinner"), (e.Z = u);
    },
    15861: function (t, e, r) {
      function n(t, e, r, n, i, o, a) {
        try {
          var c = t[o](a),
            s = c.value;
        } catch (l) {
          return void r(l);
        }
        c.done ? e(s) : Promise.resolve(s).then(n, i);
      }
      function i(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (i, o) {
            var a = t.apply(e, r);
            function c(t) {
              n(a, i, o, c, s, "next", t);
            }
            function s(t) {
              n(a, i, o, c, s, "throw", t);
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
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          c = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function l(t, e, r) {
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
          l({}, "");
        } catch (_) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function u(t, e, r, n) {
          var i = e && e.prototype instanceof f ? e : f,
            o = Object.create(i.prototype),
            a = new E(n || []);
          return (
            (o._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (i, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === i) throw o;
                  return k();
                }
                for (r.method = i, r.arg = o; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var c = b(a, r);
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
                  var s = h(t, e, r);
                  if ("normal" === s.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      s.arg === d)
                    )
                      continue;
                    return { value: s.arg, done: r.done };
                  }
                  "throw" === s.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = s.arg));
                }
              };
            })(t, r, a)),
            o
          );
        }
        function h(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (_) {
            return { type: "throw", arg: _ };
          }
        }
        t.wrap = u;
        var d = {};
        function f() {}
        function v() {}
        function p() {}
        var y = {};
        l(y, a, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          m = g && g(g(N([])));
        m && m !== e && r.call(m, a) && (y = m);
        var x = (p.prototype = f.prototype = Object.create(y));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function i(o, a, c, s) {
            var l = h(t[o], t, a);
            if ("throw" !== l.type) {
              var u = l.arg,
                d = u.value;
              return d && "object" == (0, n.Z)(d) && r.call(d, "__await")
                ? e.resolve(d.__await).then(
                    function (t) {
                      i("next", t, c, s);
                    },
                    function (t) {
                      i("throw", t, c, s);
                    }
                  )
                : e.resolve(d).then(
                    function (t) {
                      (u.value = t), c(u);
                    },
                    function (t) {
                      return i("throw", t, c, s);
                    }
                  );
            }
            s(l.arg);
          }
          var o;
          this._invoke = function (t, r) {
            function n() {
              return new e(function (e, n) {
                i(t, r, e, n);
              });
            }
            return (o = o ? o.then(n, n) : n());
          };
        }
        function b(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                b(t, e),
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
          var n = h(r, t.iterator, e.arg);
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
        function L(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function Z(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(L, this),
            this.reset(!0);
        }
        function N(t) {
          if (t) {
            var e = t[a];
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
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = p),
          l(x, "constructor", p),
          l(p, "constructor", v),
          (v.displayName = l(p, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === v || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, p)
                : ((t.__proto__ = p), l(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(x)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(j.prototype),
          l(j.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = j),
          (t.async = function (e, r, n, i, o) {
            void 0 === o && (o = Promise);
            var a = new j(u(e, r, n, i), o);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(x),
          l(x, s, "Generator"),
          l(x, a, function () {
            return this;
          }),
          l(x, "toString", function () {
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
          (t.values = N),
          (E.prototype = {
            constructor: E,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(Z),
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
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  a = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    s = r.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
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
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                  : this.complete(a)
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
                  return this.complete(r.completion, r.afterLoc), Z(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    Z(r);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: N(t), resultName: e, nextLoc: r }),
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
//# sourceMappingURL=9108.7ef7e7e6.chunk.js.map
