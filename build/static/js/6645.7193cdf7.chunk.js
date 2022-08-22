/*! For license information please see 6645.7193cdf7.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [6645],
  {
    76645: function (t, e, r) {
      r.r(e),
        r.d(e, {
          default: function () {
            return s;
          },
        });
      r(72791);
      var n = r(74165),
        o = r(15861),
        i = r(91933),
        a = r(63587),
        c = r(80184);
      var u = function (t) {
        var e = t.selectedLang,
          r = t.selectedPage,
          u = (0, i.useQuery)(
            ["help", e, r],
            (0, o.Z)(
              (0, n.Z)().mark(function t() {
                var o;
                return (0, n.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), a.Z.getHelpContent(e, r);
                      case 2:
                        return (
                          (o = t.sent),
                          t.abrupt("return", o.data.length > 0 ? o.data[0] : {})
                        );
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            { staleTime: 1 / 0 }
          ),
          s = u.data;
        return (
          u.isLoading,
          (0, c.jsx)("div", {
            className: "mt-3",
            children: (0, c.jsx)("div", {
              className: "card",
              children: (0, c.jsx)("div", {
                className: "card-body",
                children: (0, c.jsx)("div", {
                  className: "row",
                  children: null === s || void 0 === s ? void 0 : s.abr,
                }),
              }),
            }),
          })
        );
      };
      var s = function () {
        return (0, c.jsx)("div", {
          children: (0, c.jsx)(u, {
            selectedLang: "english",
            selectedPage: "admin_guide",
          }),
        });
      };
    },
    63587: function (t, e, r) {
      var n = r(15671),
        o = r(43144),
        i = r(74569),
        a = r.n(i),
        c = r(54318),
        u = "http://127.0.0.1:8000/help/",
        s = (function () {
          function t() {
            (0, n.Z)(this, t);
          }
          return (
            (0, o.Z)(t, [
              {
                key: "getHelpContent",
                value: function (t, e) {
                  var r = { lang: t, page: e };
                  return a().get(u, {
                    headers: { Authorization: (0, c.Z)() },
                    params: r,
                  });
                },
              },
              {
                key: "postHelpContent",
                value: function (t) {
                  return a().post(u, t, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putHelpContent",
                value: function (t) {
                  return a().put(u, t, {
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
      function n(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (s) {
          return void r(s);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o);
      }
      function o(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (o, i) {
            var a = t.apply(e, r);
            function c(t) {
              n(a, o, i, c, u, "next", t);
            }
            function u(t) {
              n(a, o, i, c, u, "throw", t);
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
          u = i.toStringTag || "@@toStringTag";
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
        } catch (N) {
          s = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function h(t, e, r, n) {
          var o = e && e.prototype instanceof d ? e : d,
            i = Object.create(o.prototype),
            a = new k(n || []);
          return (
            (i._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (o, i) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw i;
                  return Z();
                }
                for (r.method = o, r.arg = i; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var c = b(a, r);
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
                  var u = l(t, e, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === f)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, a)),
            i
          );
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = h;
        var f = {};
        function d() {}
        function p() {}
        function v() {}
        var y = {};
        s(y, a, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          m = g && g(g(_([])));
        m && m !== e && r.call(m, a) && (y = m);
        var w = (v.prototype = d.prototype = Object.create(y));
        function x(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function L(t, e) {
          function o(i, a, c, u) {
            var s = l(t[i], t, a);
            if ("throw" !== s.type) {
              var h = s.arg,
                f = h.value;
              return f && "object" == (0, n.Z)(f) && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      o("next", t, c, u);
                    },
                    function (t) {
                      o("throw", t, c, u);
                    }
                  )
                : e.resolve(f).then(
                    function (t) {
                      (h.value = t), c(h);
                    },
                    function (t) {
                      return o("throw", t, c, u);
                    }
                  );
            }
            u(s.arg);
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
                return f;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var n = l(r, t.iterator, e.arg);
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
        function E(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function j(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(E, this),
            this.reset(!0);
        }
        function _(t) {
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
          return { next: Z };
        }
        function Z() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = v),
          s(w, "constructor", v),
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
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          s(L.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(h(e, r, n, o), i);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          s(w, u, "Generator"),
          s(w, a, function () {
            return this;
          }),
          s(w, "toString", function () {
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
          (t.values = _),
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
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
                    u = r.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u)
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
                  return this.complete(r.completion, r.afterLoc), j(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: e, nextLoc: r }),
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
//# sourceMappingURL=6645.7193cdf7.chunk.js.map
