/*! For license information please see 8076.5ac4032e.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [8076],
  {
    69778: function (t, e, r) {
      var n = r(15671),
        i = r(43144),
        o = r(74569),
        a = r.n(o),
        c = r(54318),
        u = "http://127.0.0.1:8000/items/",
        s = (function () {
          function t() {
            (0, n.Z)(this, t);
          }
          return (
            (0, i.Z)(t, [
              {
                key: "getItemClasses",
                value: function () {
                  return a().get(u + "itemClass", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getActiveItemClasses",
                value: function () {
                  return a().get(u + "class-helper", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putItemClass",
                value: function (t) {
                  return a().put(u + "itemClass", t, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getItemTypes",
                value: function () {
                  return a().get(u + "itemType", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "postItemType",
                value: function (t) {
                  return a().post(u + "itemType", t, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putItemTypes",
                value: function (t) {
                  return a().put(u + "itemType", t, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getItemClassesOfAnItemType",
                value: function (t) {
                  return a().get(u + "itembyclass?id=" + t, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getActiveItemClassesWithFields",
                value: function (t) {
                  var e = {};
                  return (
                    t && (e.id = t),
                    a().get(u + "itembyclass", {
                      headers: { Authorization: (0, c.Z)() },
                      params: e,
                    })
                  );
                },
              },
              {
                key: "getItemTinLevels",
                value: function (t) {
                  var e = {};
                  return (
                    t && (e.level = t),
                    a().get(u + "itemTinLevels", {
                      headers: { Authorization: (0, c.Z)() },
                      params: e,
                    })
                  );
                },
              },
              {
                key: "putItemTypeInClass",
                value: function (t) {
                  return a().put(u + "itemTinLevels", t, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getManufacturers",
                value: function (t) {
                  return a().get(u + "manufacturer?id=" + t, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "postManufacturer",
                value: function (t) {
                  return a().post(u + "manufacturer", t, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putManufacturer",
                value: function (t) {
                  return a().put(u + "manufacturer", t, {
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
    58076: function (t, e, r) {
      r.r(e);
      var n = r(1413),
        i = r(42982),
        o = r(74165),
        a = r(15861),
        c = r(70885),
        u = r(56890),
        s = r(35855),
        l = r(53994),
        h = r(53382),
        f = r(72791),
        d = r(23821),
        v = r(94912),
        p = r(69778),
        m = r(91933),
        y = r(59909),
        g = (r(93650), r(80184));
      e.default = function () {
        var t,
          e,
          r = (0, f.useState)(),
          x = (0, c.Z)(r, 2),
          w = x[0],
          Z = x[1],
          j = (0, f.useState)(1),
          b = (0, c.Z)(j, 2),
          L = b[0],
          k = b[1],
          N = (0, f.useState)([]),
          E = (0, c.Z)(N, 2),
          I = E[0],
          T = E[1],
          A = (0, m.useQuery)(
            ["active-item-classes-with-item-type"],
            (0, a.Z)(
              (0, o.Z)().mark(function t() {
                var e;
                return (0, o.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2), p.Z.getActiveItemClassesWithFields()
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
            {
              onSuccess: function (t) {
                Z(t[0]);
              },
            }
          ),
          C = A.data,
          _ = A.isLoading,
          O = (0, m.useQuery)(
            ["itemTinLevel", L],
            (0, a.Z)(
              (0, o.Z)().mark(function t() {
                var e, r;
                return (0, o.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), p.Z.getItemTinLevels(L);
                      case 2:
                        return (
                          (e = t.sent),
                          (r = (0, i.Z)(I)),
                          e.data.forEach(function (t) {
                            I.find(function (e) {
                              return (
                                e.itemtypeid === t.itemtype.id &&
                                e.level === t.level.id
                              );
                            }) ||
                              r.push({
                                itemtypeid: t.itemtype.id,
                                level: t.level.id,
                                active: t.active,
                                id: t.id,
                              });
                          }),
                          T(r),
                          t.abrupt("return", r)
                        );
                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            { staleTime: 3e5 }
          ),
          S = O.data,
          z = O.isLoading,
          G =
            null !==
              (t =
                null === (e = JSON.parse(localStorage.getItem("country"))) ||
                void 0 === e
                  ? void 0
                  : e.levels) && void 0 !== t
              ? t
              : 1,
          F = (function () {
            var t = (0, a.Z)(
              (0, o.Z)().mark(function t() {
                var e;
                return (0, o.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = I.filter(function (t) {
                            return !(
                              null !== S &&
                              void 0 !== S &&
                              S.some(function (e) {
                                return (
                                  e.itemtypeid === t.itemtypeid &&
                                  e.level === t.level &&
                                  e.active === t.active
                                );
                              })
                            );
                          })),
                          (t.next = 3),
                          p.Z.putItemTypeInClass(e)
                        );
                      case 3:
                        t.sent;
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
        return (0, g.jsxs)("div", {
          children: [
            (0, g.jsx)("h3", {
              className: "page-title mb-3",
              children: '"item category" In different levels',
            }),
            _
              ? (0, g.jsx)(y.Z, {})
              : (0, g.jsxs)("div", {
                  className: "mt-3",
                  children: [
                    (0, g.jsx)("div", {
                      className: "card",
                      children: (0, g.jsx)("div", {
                        className: "card-body",
                        children: (0, g.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, g.jsx)("div", {
                              className: "col-sm-12 col-lg-5",
                              children: (0, g.jsxs)(v.Z.Group, {
                                className: "row",
                                children: [
                                  (0, g.jsx)("label", {
                                    className: "col-sm-12",
                                    children: "Item class",
                                  }),
                                  (0, g.jsx)("div", {
                                    className: "col-sm-12",
                                    children: (0, g.jsx)(v.Z.Control, {
                                      onChange: function (t) {
                                        Z(C[t.target.value]);
                                      },
                                      className: "form-select",
                                      as: "select",
                                      children: C.map(function (t, e) {
                                        return (0,
                                        g.jsx)("option", { value: e, children: t.item_class.title });
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, g.jsx)("div", {
                              className: "col-sm-12 col-lg-5",
                              children: (0, g.jsxs)(v.Z.Group, {
                                className: "row",
                                children: [
                                  (0, g.jsx)("label", {
                                    className: "col-sm-12",
                                    children: "Level",
                                  }),
                                  (0, g.jsx)("div", {
                                    className: "col-sm-12",
                                    children: (0, g.jsx)(v.Z.Control, {
                                      onChange: function (t) {
                                        k(+t.target.value);
                                      },
                                      value: L,
                                      className: "form-select",
                                      as: "select",
                                      children: Array.from({ length: G }).map(
                                        function (t, e) {
                                          return (0, g.jsx)("option", {
                                            value: e + 1,
                                            children: e + 1,
                                          });
                                        }
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, g.jsx)("div", {
                              className: "col-sm-12 col-lg-2",
                              children: (0, g.jsx)("button", {
                                className: "btn btn-primary w-100 mt-4",
                                onClick: F,
                                children: "Save",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (null === w || void 0 === w ? void 0 : w.item_type.length) >
                      0 &&
                      (0, g.jsx)("div", {
                        className: "mt-5 table-container",
                        children: (0, g.jsxs)(d.Z, {
                          children: [
                            (0, g.jsx)(u.Z, {
                              children: (0, g.jsxs)(s.Z, {
                                children: [
                                  (0, g.jsx)(l.Z, {
                                    className: "col-sm-10",
                                    children: "Title",
                                  }),
                                  (0, g.jsx)(l.Z, { children: "Enable" }),
                                ],
                              }),
                            }),
                            (0, g.jsx)(h.Z, {
                              children: w.item_type.map(function (t) {
                                var e,
                                  r =
                                    null ===
                                      (e = I.find(function (e) {
                                        return (
                                          e.itemtypeid === t.id && e.level === L
                                        );
                                      })) || void 0 === e
                                      ? void 0
                                      : e.active;
                                return (0, g.jsxs)(
                                  s.Z,
                                  {
                                    children: [
                                      (0, g.jsx)(l.Z, {
                                        className: "col-sm-10",
                                        children: t.title,
                                      }),
                                      (0, g.jsx)(l.Z, {
                                        children: (0, g.jsx)("input", {
                                          type: "checkbox",
                                          disabled: z,
                                          checked: !!r,
                                          onChange: function (e) {
                                            return (function (t, e) {
                                              var r = t.target.checked,
                                                o = (0, i.Z)(I),
                                                a = I.findIndex(function (t) {
                                                  return (
                                                    t.itemtypeid === e.id &&
                                                    t.level === L
                                                  );
                                                });
                                              if (-1 === a)
                                                o.push({
                                                  itemtypeid: e.id,
                                                  level: L,
                                                  active: r,
                                                });
                                              else {
                                                var c = I[a];
                                                o[a] = (0, n.Z)(
                                                  (0, n.Z)({}, c),
                                                  {},
                                                  {
                                                    active: !c.active,
                                                    level: L,
                                                  }
                                                );
                                              }
                                              T(o);
                                            })(e, t);
                                          },
                                        }),
                                      }),
                                    ],
                                  },
                                  t.id
                                );
                              }),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
          ],
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
          return new Promise(function (i, o) {
            var a = t.apply(e, r);
            function c(t) {
              n(a, i, o, c, u, "next", t);
            }
            function u(t) {
              n(a, i, o, c, u, "throw", t);
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
          u = o.toStringTag || "@@toStringTag";
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
        } catch (I) {
          s = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, n) {
          var i = e && e.prototype instanceof d ? e : d,
            o = Object.create(i.prototype),
            a = new k(n || []);
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
                  var u = h(t, e, r);
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
            o
          );
        }
        function h(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (I) {
            return { type: "throw", arg: I };
          }
        }
        t.wrap = l;
        var f = {};
        function d() {}
        function v() {}
        function p() {}
        var m = {};
        s(m, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(N([])));
        g && g !== e && r.call(g, a) && (m = g);
        var x = (p.prototype = d.prototype = Object.create(m));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function Z(t, e) {
          function i(o, a, c, u) {
            var s = h(t[o], t, a);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == (0, n.Z)(f) && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      i("next", t, c, u);
                    },
                    function (t) {
                      i("throw", t, c, u);
                    }
                  )
                : e.resolve(f).then(
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
        function b(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(b, this),
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
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = p),
          s(x, "constructor", p),
          s(p, "constructor", v),
          (v.displayName = s(p, u, "GeneratorFunction")),
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
                : ((t.__proto__ = p), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(x)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(Z.prototype),
          s(Z.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = Z),
          (t.async = function (e, r, n, i, o) {
            void 0 === o && (o = Promise);
            var a = new Z(l(e, r, n, i), o);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(x),
          s(x, u, "Generator"),
          s(x, a, function () {
            return this;
          }),
          s(x, "toString", function () {
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
                this.tryEntries.forEach(L),
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
                    u = r.call(o, "finallyLoc");
                  if (c && u) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!u)
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
                  return this.complete(r.completion, r.afterLoc), L(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    L(r);
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
//# sourceMappingURL=8076.5ac4032e.chunk.js.map
