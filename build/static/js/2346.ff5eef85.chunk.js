/*! For license information please see 2346.ff5eef85.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [2346],
  {
    82346: function (t, e, r) {
      r.r(e);
      var n = r(74165),
        i = r(15861),
        o = (r(72791), r(56890)),
        a = r(35855),
        c = r(53994),
        s = r(53382),
        u = (r(93650), r(59909)),
        l = r(91933),
        h = r(23821),
        f = r(95907),
        d = r(91523),
        v = r(74936),
        p = r(80184);
      e.default = function () {
        var t = (0, l.useQuery)(
            ["item-default-value"],
            (0, i.Z)(
              (0, n.Z)().mark(function t() {
                var e;
                return (0, n.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), v.Z.getItems();
                      case 2:
                        return (e = t.sent), t.abrupt("return", e.data);
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            { staleTime: 1 / 0, refetchOnMount: !0 }
          ),
          e = t.data,
          r = t.isLoading,
          m = (0, l.useQuery)(
            ["item-classes-and-types"],
            (0, i.Z)(
              (0, n.Z)().mark(function t() {
                var e;
                return (0, n.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), v.Z.getItemClassesAndTypes();
                      case 2:
                        return (
                          (e = t.sent),
                          t.abrupt(
                            "return",
                            e.data.filter(function (t) {
                              return t.item_type.length > 0;
                            })
                          )
                        );
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            { staleTime: 1 / 0, refetchOnMount: !0 }
          ),
          y = m.data,
          g = m.isLoading;
        return r || g
          ? (0, p.jsx)(u.Z, {})
          : (0, p.jsxs)("div", {
              children: [
                (0, p.jsx)("h3", {
                  className: "page-title mb-3",
                  children: "Item list",
                }),
                (0, p.jsx)("div", {
                  className: "mt-3",
                  children: (0, p.jsx)("div", {
                    className: "card",
                    children: (0, p.jsx)("div", {
                      className: "card-body",
                      children: (0, p.jsx)("div", {
                        className: "mt-5 table-container",
                        children: (0, p.jsxs)(h.Z, {
                          children: [
                            (0, p.jsx)(o.Z, {
                              children: (0, p.jsxs)(a.Z, {
                                children: [
                                  (0, p.jsx)(c.Z, {
                                    className: "col-sm-2",
                                    children: "Item class",
                                  }),
                                  (0, p.jsx)(c.Z, {
                                    className: "col-sm-2",
                                    children: "Item type",
                                  }),
                                  (0, p.jsx)(c.Z, {
                                    className: "col-sm-2",
                                    children: "Code ",
                                  }),
                                  (0, p.jsx)(c.Z, {
                                    className: "col-sm-2",
                                    children: "Manufacturer",
                                  }),
                                  (0, p.jsx)(c.Z, {
                                    className: "col-sm-2",
                                    children: "Last Changes On",
                                  }),
                                  (0, p.jsx)(c.Z, {
                                    className: "col-sm-2",
                                    children: "Edit",
                                  }),
                                ],
                              }),
                            }),
                            (0, p.jsx)(s.Z, {
                              children:
                                null === e || void 0 === e
                                  ? void 0
                                  : e.map(function (t) {
                                      var e,
                                        r,
                                        n,
                                        i,
                                        o =
                                          null === y || void 0 === y
                                            ? void 0
                                            : y.find(function (e) {
                                                return (
                                                  e.item_class.id ===
                                                  t.item_class
                                                );
                                              });
                                      console.log(o, "itemClass");
                                      var s,
                                        u =
                                          null === o || void 0 === o
                                            ? void 0
                                            : o.item_type.find(function (e) {
                                                return e.id === t.item_type;
                                              });
                                      return (0,
                                      p.jsxs)(a.Z, { children: [(0, p.jsx)(c.Z, { className: "col-sm-2", children: null !== (e = null === o || void 0 === o ? void 0 : o.item_class.title) && void 0 !== e ? e : "-" }), (0, p.jsx)(c.Z, { className: "col-sm-2", children: null !== (r = null === u || void 0 === u ? void 0 : u.title) && void 0 !== r ? r : "-" }), (0, p.jsx)(c.Z, { className: "col-sm-2", children: null !== (n = t.code) && void 0 !== n ? n : "-" }), (0, p.jsx)(c.Z, { className: "col-sm-2", children: null !== (i = t.Manufacturer) && void 0 !== i ? i : "-" }), (0, p.jsx)(c.Z, { className: "col-sm-2", children: null !== t && void 0 !== t && t.updated_at ? ((s = u.updated_at), new Date(s).toISOString().split("T")[0]) : "-" }), (0, p.jsx)(c.Z, { className: "col-sm-2", children: (0, p.jsx)(d.rU, { to: "/facilities/info/".concat(t.id), children: (0, p.jsx)("div", { style: { width: "20px", height: "20px" }, children: (0, p.jsx)(f.Z, {}) }) }) })] }, t.id);
                                    }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            });
      };
    },
    74936: function (t, e, r) {
      var n = r(15671),
        i = r(43144),
        o = r(74569),
        a = r.n(o),
        c = r(54318),
        s = "http://127.0.0.1:8000/item/",
        u = (function () {
          function t() {
            (0, n.Z)(this, t);
          }
          return (
            (0, i.Z)(t, [
              {
                key: "getItems",
                value: function (t) {
                  var e = {};
                  return (
                    t && (e.id = t),
                    a().get(s, {
                      headers: { Authorization: (0, c.Z)() },
                      params: e,
                    })
                  );
                },
              },
              {
                key: "getItemClassesAndTypes",
                value: function () {
                  return a().get(s + "item-field", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getItemFields",
                value: function (t, e) {
                  var r = { class_id: t, type_id: e };
                  return a().get(s + "item-field", {
                    headers: { Authorization: (0, c.Z)() },
                    params: r,
                  });
                },
              },
              {
                key: "postItem",
                value: function (t) {
                  return a().post(s, t, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putItem",
                value: function (t) {
                  return a().put(s, t, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
            ]),
            t
          );
        })();
      e.Z = new u();
    },
    95907: function (t, e, r) {
      var n = r(80184);
      e.Z = function () {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, n.jsx)("g", {
              children: (0, n.jsx)("g", {
                children: (0, n.jsx)("path", {
                  d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
                }),
              }),
            }),
          }),
        });
      };
    },
    23821: function (t, e, r) {
      var n = r(39281),
        i = r(79836),
        o = r(80184);
      e.Z = function (t) {
        var e = t.children;
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)(n.Z, {
            children: (0, o.jsx)(i.Z, { children: e }),
          }),
        });
      };
    },
    93650: function () {},
    15861: function (t, e, r) {
      function n(t, e, r, n, i, o, a) {
        try {
          var c = t[o](a),
            s = c.value;
        } catch (u) {
          return void r(u);
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
        } catch (k) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, n) {
          var i = e && e.prototype instanceof d ? e : d,
            o = Object.create(i.prototype),
            a = new N(n || []);
          return (
            (o._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (i, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === i) throw o;
                  return E();
                }
                for (r.method = i, r.arg = o; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var c = Z(a, r);
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
            o
          );
        }
        function h(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        t.wrap = l;
        var f = {};
        function d() {}
        function v() {}
        function p() {}
        var m = {};
        u(m, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(_([])));
        g && g !== e && r.call(g, a) && (m = g);
        var x = (p.prototype = d.prototype = Object.create(m));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function i(o, a, c, s) {
            var u = h(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                f = l.value;
              return f && "object" == (0, n.Z)(f) && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      i("next", t, c, s);
                    },
                    function (t) {
                      i("throw", t, c, s);
                    }
                  )
                : e.resolve(f).then(
                    function (t) {
                      (l.value = t), c(l);
                    },
                    function (t) {
                      return i("throw", t, c, s);
                    }
                  );
            }
            s(u.arg);
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
        function Z(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                Z(t, e),
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
          var i = n.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : i
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function L(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function b(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function N(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(L, this),
            this.reset(!0);
        }
        function _(t) {
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
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = p),
          u(x, "constructor", p),
          u(p, "constructor", v),
          (v.displayName = u(p, s, "GeneratorFunction")),
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
                : ((t.__proto__ = p), u(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(x)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(j.prototype),
          u(j.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = j),
          (t.async = function (e, r, n, i, o) {
            void 0 === o && (o = Promise);
            var a = new j(l(e, r, n, i), o);
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
          (t.values = _),
          (N.prototype = {
            constructor: N,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(b),
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
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
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
                  return this.complete(r.completion, r.afterLoc), b(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    b(r);
                  }
                  return i;
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
//# sourceMappingURL=2346.ff5eef85.chunk.js.map
