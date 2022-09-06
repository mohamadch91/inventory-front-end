/*! For license information please see 8674.7cffb277.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [8674],
  {
    98674: function (t, e, r) {
      r.r(e),
        r.d(e, {
          default: function () {
            return g;
          },
        });
      var n = r(74165),
        o = r(15861),
        i = r(29439),
        a = r(72791),
        c = r(93433),
        s = r(30606),
        u = r(80184),
        l = function (t) {
          return (0, u.jsx)("div", {
            className: "form-check pl-2 ",
            children: (0, u.jsxs)("label", {
              className: "form-check-label",
              children: [
                (0, u.jsx)("input", {
                  onChange: function (e) {
                    return t.onChange(e);
                  },
                  type: "checkbox",
                  className: "form-check-input",
                  value: t.value,
                }),
                (0, u.jsx)("i", { className: "input-helper" }),
                (0, u.jsx)(s.c, { children: t.label }),
              ],
            }),
          });
        },
        h = function (t) {
          var e = t.data,
            r = t.setState,
            n = t.state,
            o = function (t) {
              var e = t.target.value;
              n.includes(e)
                ? r(function (t) {
                    return t.filter(function (t) {
                      return t !== e;
                    });
                  })
                : r(function (t) {
                    return [].concat((0, c.Z)(t), [e]);
                  });
            };
          return (0, u.jsx)("div", {
            className: "col-lg-12 stretch-card",
            children: (0, u.jsx)("div", {
              className: "card",
              children: (0, u.jsxs)("div", {
                className: "card-body",
                children: [
                  (0, u.jsx)("h4", {
                    className: "card-title",
                    children: "Warnings Info",
                  }),
                  (0, u.jsxs)("div", {
                    className: "table-responsive",
                    children: [
                      (0, u.jsxs)("table", {
                        className: "table table-bordered",
                        children: [
                          (0, u.jsx)("thead", {
                            children: (0, u.jsxs)("tr", {
                              children: [
                                (0, u.jsxs)("th", {
                                  children: [
                                    (0, u.jsx)(s.c, { children: "#" }),
                                    " ",
                                  ],
                                }),
                                (0, u.jsxs)("th", {
                                  children: [
                                    " ",
                                    (0, u.jsx)(s.c, { children: "Item Type" }),
                                    " ",
                                  ],
                                }),
                                (0, u.jsxs)("th", {
                                  children: [
                                    " ",
                                    (0, u.jsx)(s.c, { children: "Code" }),
                                    " ",
                                  ],
                                }),
                                (0, u.jsxs)("th", {
                                  children: [
                                    " ",
                                    (0, u.jsx)(s.c, { children: "Deadline" }),
                                    " ",
                                  ],
                                }),
                                (0, u.jsxs)("th", {
                                  children: [
                                    " ",
                                    (0, u.jsx)(s.c, {
                                      children: "Service interval",
                                    }),
                                    " ",
                                  ],
                                }),
                                (0, u.jsxs)("th", {
                                  children: [
                                    " ",
                                    (0, u.jsx)(s.c, { children: "Done" }),
                                    " ",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, u.jsx)("tbody", {
                            children: e.map(function (t, e) {
                              return (0,
                              u.jsxs)("tr", { className: "table-danger", children: [(0, u.jsxs)("td", { children: [" ", e + 1, " "] }, t.id + e), (0, u.jsxs)("td", { children: [" ", t.name, " "] }, e + t.name), (0, u.jsxs)("td", { children: [" ", t.code, " "] }, e + t.code), (0, u.jsxs)("td", { children: [" ", t.deadline, " "] }, e + t.deadline), (0, u.jsxs)("td", { children: [" ", t.interval, " "] }, e + t.interval), (0, u.jsx)("td", { children: (0, u.jsx)(l, { onChange: o, value: t.id }) }, e + "A")] }, t.id);
                            }),
                          }),
                        ],
                      }),
                      (0, u.jsx)("button", {
                        type: "button",
                        className: " mt-3 btn btn-primary btn-fw",
                        onClick: t.onSubmit,
                        children: (0, u.jsx)(s.c, { children: "Mark as done" }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        f = r(79271),
        d = r(91933),
        p = r(59909),
        v = r(10140),
        y = r(65218),
        g = function () {
          var t = a.useState([]),
            e = (0, i.Z)(t, 2),
            r = e[0],
            c = e[1],
            s = a.useState(!1),
            l = (0, i.Z)(s, 2),
            g = l[0],
            m = l[1],
            x = (0, f.UO)(),
            w = (0, f.k6)(),
            b = (0, d.useQuery)(
              [],
              (0, o.Z)(
                (0, n.Z)().mark(function t() {
                  var e;
                  return (0, n.Z)().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2), v.Z.getWarningsInfo("?" + x.wType)
                          );
                        case 2:
                          return (e = t.sent), t.abrupt("return", e.data);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              { refetchOnMount: !0 }
            ),
            j = b.data,
            Z = b.isLoading,
            k = (function () {
              var t = (0, o.Z)(
                (0, n.Z)().mark(function t() {
                  var e;
                  return (0, n.Z)().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e = []),
                              r.map(function (t) {
                                e.push({ id: t, done: !0 });
                              }),
                              (t.prev = 2),
                              m(!0),
                              (t.next = 6),
                              v.Z.postWarningsAsDone(e)
                            );
                          case 6:
                            200 === t.sent.status &&
                              (m(!1),
                              y.ZP.success(
                                "Done like a charm Boss! \ud83d\ude09"
                              ),
                              w.push("/dashboard")),
                              (t.next = 13);
                            break;
                          case 10:
                            (t.prev = 10),
                              (t.t0 = t.catch(2)),
                              y.ZP.error(
                                "There was a problem reaching server, try again in a moment pls"
                              );
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[2, 10]]
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return Z || 0 === j.length || g
            ? (0, u.jsx)(p.Z, {})
            : (0, u.jsx)(a.Fragment, {
                children:
                  j &&
                  (0, u.jsx)(h, {
                    data: j,
                    setState: c,
                    state: r,
                    onSubmit: k,
                  }),
              });
        };
    },
    10140: function (t, e, r) {
      var n = r(15671),
        o = r(43144),
        i = r(39877),
        a = r(54318),
        c = "http://127.0.0.1:8000/dashboard",
        s = (function () {
          function t() {
            (0, n.Z)(this, t);
          }
          return (
            (0, o.Z)(t, [
              {
                key: "getAllDashboardItems",
                value: function () {
                  return i.Z.get(c + "/item", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getAllFacilities",
                value: function () {
                  return i.Z.get(c + "/facility", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getAllTablesData",
                value: function () {
                  return i.Z.get(c + "/table", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getAllWarningsData",
                value: function () {
                  return i.Z.get(c + "/maintenance", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getWarningsInfo",
                value: function (t) {
                  return i.Z.get(c + "/todo" + t, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceLog",
                value: function () {
                  return i.Z.get(c + "/maintenancelog", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "postWarningsAsDone",
                value: function (t) {
                  return i.Z.post(c + "/todo", t, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getLogDetails",
                value: function (t) {
                  return (
                    console.log(c + "/maintenancelog" + t),
                    i.Z.get(c + "/maintenancelog" + t, {
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
    15861: function (t, e, r) {
      function n(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            s = c.value;
        } catch (u) {
          return void r(u);
        }
        c.done ? e(s) : Promise.resolve(s).then(n, o);
      }
      function o(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (o, i) {
            var a = t.apply(e, r);
            function c(t) {
              n(a, o, i, c, s, "next", t);
            }
            function s(t) {
              n(a, o, i, c, s, "throw", t);
            }
            c(void 0);
          });
        };
      }
      r.d(e, {
        Z: function () {
          return o;
        },
      });
    },
    74165: function (t, e, r) {
      r.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = r(71002);
      function o() {
        o = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          s = i.toStringTag || "@@toStringTag";
        function u(t, e, r) {
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
          u({}, "");
        } catch (A) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, n) {
          var o = e && e.prototype instanceof d ? e : d,
            i = Object.create(o.prototype),
            a = new L(n || []);
          return (
            (i._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (o, i) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw i;
                  return N();
                }
                for (r.method = o, r.arg = i; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var c = j(a, r);
                    if (c) {
                      if (c === f) continue;
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
                      s.arg === f)
                    )
                      continue;
                    return { value: s.arg, done: r.done };
                  }
                  "throw" === s.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = s.arg));
                }
              };
            })(t, r, a)),
            i
          );
        }
        function h(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (A) {
            return { type: "throw", arg: A };
          }
        }
        t.wrap = l;
        var f = {};
        function d() {}
        function p() {}
        function v() {}
        var y = {};
        u(y, a, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          m = g && g(g(E([])));
        m && m !== e && r.call(m, a) && (y = m);
        var x = (v.prototype = d.prototype = Object.create(y));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          function o(i, a, c, s) {
            var u = h(t[i], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                f = l.value;
              return f && "object" == (0, n.Z)(f) && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      o("next", t, c, s);
                    },
                    function (t) {
                      o("throw", t, c, s);
                    }
                  )
                : e.resolve(f).then(
                    function (t) {
                      (l.value = t), c(l);
                    },
                    function (t) {
                      return o("throw", t, c, s);
                    }
                  );
            }
            s(u.arg);
          }
          var i;
          this._invoke = function (t, r) {
            function n() {
              return new e(function (e, n) {
                o(t, r, e, n);
              });
            }
            return (i = i ? i.then(n, n) : n());
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
                return f;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var n = h(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), f
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function Z(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function k(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function L(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(Z, this),
            this.reset(!0);
        }
        function E(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = v),
          u(x, "constructor", v),
          u(v, "constructor", p),
          (p.displayName = u(v, s, "GeneratorFunction")),
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
                : ((t.__proto__ = v), u(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(x)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          u(b.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(l(e, r, n, o), i);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(x),
          u(x, s, "Generator"),
          u(x, a, function () {
            return this;
          }),
          u(x, "toString", function () {
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
          (t.values = E),
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
                this.tryEntries.forEach(k),
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
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = r.call(i, "catchLoc"),
                    s = r.call(i, "finallyLoc");
                  if (c && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), f)
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
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), k(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    k(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: E(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
    },
  },
]);
//# sourceMappingURL=8674.7cffb277.chunk.js.map
