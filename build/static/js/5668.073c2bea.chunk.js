/*! For license information please see 5668.073c2bea.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [5668],
  {
    65668: function (e, t, r) {
      r.r(t);
      var n = r(74165),
        a = r(15861),
        o = (r(72791), r(30606)),
        i = r(91933),
        u = r(51763),
        l = r(59909),
        c = r(23821),
        h = r(56890),
        s = r(35855),
        f = r(53994),
        p = r(53382),
        v = (r(93650), r(80184)),
        d = {
          by_type: [
            { headTitle: "Level", valueKey: "level" },
            { headTitle: "Level Name", valueKey: "name" },
            { headTitle: "Facility type", valueKey: "type" },
            { headTitle: "Total number of facilities", valueKey: "count" },
          ],
          by_owner: [
            { headTitle: "Level", valueKey: "level" },
            { headTitle: "Level Name", valueKey: "name" },
            { headTitle: "Ownership", valueKey: "owner" },
            { headTitle: "Total number of facilities", valueKey: "count" },
          ],
          by_power: [
            { headTitle: "Level", valueKey: "level" },
            { headTitle: "Level Name", valueKey: "name" },
            { headTitle: "Power source", valueKey: "power" },
            { headTitle: "Total number of facilities", valueKey: "count" },
          ],
          general: [
            { headTitle: "Level", valueKey: "level" },
            { headTitle: "Level Name", valueKey: "name" },
            { headTitle: "Total", valueKey: "total" },
            { headTitle: "Average population", valueKey: "avg" },
            { headTitle: "Minimum population", valueKey: "min" },
            { headTitle: "Maximum population", valueKey: "max" },
          ],
          under_1: [
            { headTitle: "Level", valueKey: "level" },
            { headTitle: "Level Name", valueKey: "name" },
            { headTitle: "Total", valueKey: "total" },
            { headTitle: "Average population", valueKey: "avg" },
            { headTitle: "Minimum population", valueKey: "min" },
            { headTitle: "Maximum population", valueKey: "max" },
          ],
        },
        y = function (e) {
          var t = e.reports,
            r = e.tableData,
            n = e.title;
          return (0, v.jsx)("div", {
            className: "mt-3",
            children: (0, v.jsx)("div", {
              className: "card",
              children: (0, v.jsxs)("div", {
                className: "card-body py-3",
                children: [
                  n.length > 0 &&
                    (0, v.jsx)("h4", { className: "mt-2", children: n }),
                  (0, v.jsx)("div", {
                    className: "mt-3 table-container",
                    children: (0, v.jsxs)(c.Z, {
                      children: [
                        (0, v.jsx)(h.Z, {
                          children: (0, v.jsx)(s.Z, {
                            children: r.map(function (e) {
                              return (0,
                              v.jsx)(f.Z, { children: (0, v.jsx)(o.c, { children: e.headTitle }) }, e.headTitle);
                            }),
                          }),
                        }),
                        (0, v.jsx)(p.Z, {
                          children:
                            null === t || void 0 === t
                              ? void 0
                              : t.map(function (e, t) {
                                  return (0, v.jsx)(
                                    s.Z,
                                    {
                                      children: r.map(function (t) {
                                        var r;
                                        return (0,
                                        v.jsx)(f.Z, { children: null !== (r = e[t.valueKey]) && void 0 !== r ? r : "-" }, t.valueKey);
                                      }),
                                    },
                                    t
                                  );
                                }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        };
      t.default = function () {
        var e = (0, i.useQuery)(
            ["profile-of-facility-reports"],
            (0, a.Z)(
              (0, n.Z)().mark(function e() {
                var t;
                return (0, n.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), u.Z.getProfOfFac();
                      case 2:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )
          ),
          t = e.data;
        return e.isLoading
          ? (0, v.jsx)(l.Z, {})
          : (0, v.jsxs)("div", {
              children: [
                (0, v.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, v.jsx)(o.c, {
                    children: "Profile of facility",
                  }),
                }),
                t &&
                  Object.keys(t).map(function (e) {
                    var r =
                      "general" === e
                        ? "General population"
                        : "under_1" === e
                        ? "Under-1 Population"
                        : "";
                    return (0,
                    v.jsx)(y, { reports: t[e], tableData: d[e], title: r });
                  }),
              ],
            });
      };
    },
    51763: function (e, t, r) {
      var n = r(15671),
        a = r(43144),
        o = r(54318),
        i = r(39877),
        u = "http://127.0.0.1:8000/reports/",
        l = (function () {
          function e() {
            (0, n.Z)(this, e);
          }
          return (
            (0, a.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return i.Z.get(u + "excel", {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return i.Z.get(u + "facseg", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return i.Z.get(u + "subfacpop", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return i.Z.get(u + "facmap", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return i.Z.get(u + "gapmap", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return i.Z.get(u + "item-gp", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return i.Z.get(u + "itemfac", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return i.Z.get(u + "gapitem", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return i.Z.get(u + "facprof", {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return i.Z.get(u + "coldprof", {
                    headers: { Authorization: (0, o.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return i.Z.get(u + "planingreport", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return i.Z.get(u + "gapcce", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return i.Z.get(u + "gapccePlan", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return i.Z.post(u + "gapccePlan", e, {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return i.Z.delete(u + "gapccePlan", e, {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return i.Z.delete(u + "gapccePlan", e, {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new l();
    },
    23821: function (e, t, r) {
      var n = r(39281),
        a = r(79836),
        o = r(80184);
      t.Z = function (e) {
        var t = e.children;
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)(n.Z, {
            children: (0, o.jsx)(a.Z, { children: t }),
          }),
        });
      };
    },
    93650: function () {},
    15861: function (e, t, r) {
      function n(e, t, r, n, a, o, i) {
        try {
          var u = e[o](i),
            l = u.value;
        } catch (c) {
          return void r(c);
        }
        u.done ? t(l) : Promise.resolve(l).then(n, a);
      }
      function a(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (a, o) {
            var i = e.apply(t, r);
            function u(e) {
              n(i, a, o, u, l, "next", e);
            }
            function l(e) {
              n(i, a, o, u, l, "throw", e);
            }
            u(void 0);
          });
        };
      }
      r.d(t, {
        Z: function () {
          return a;
        },
      });
    },
    74165: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(71002);
      function a() {
        a = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          u = o.asyncIterator || "@@asyncIterator",
          l = o.toStringTag || "@@toStringTag";
        function c(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (K) {
          c = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function h(e, t, r, n) {
          var a = t && t.prototype instanceof p ? t : p,
            o = Object.create(a.prototype),
            i = new j(n || []);
          return (
            (o._invoke = (function (e, t, r) {
              var n = "suspendedStart";
              return function (a, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === a) throw o;
                  return E();
                }
                for (r.method = a, r.arg = o; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var u = L(i, r);
                    if (u) {
                      if (u === f) continue;
                      return u;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var l = s(e, t, r);
                  if ("normal" === l.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      l.arg === f)
                    )
                      continue;
                    return { value: l.arg, done: r.done };
                  }
                  "throw" === l.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
                }
              };
            })(e, r, i)),
            o
          );
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (K) {
            return { type: "throw", arg: K };
          }
        }
        e.wrap = h;
        var f = {};
        function p() {}
        function v() {}
        function d() {}
        var y = {};
        c(y, i, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          g = m && m(m(k([])));
        g && g !== t && r.call(g, i) && (y = g);
        var w = (d.prototype = p.prototype = Object.create(y));
        function x(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function Z(e, t) {
          function a(o, i, u, l) {
            var c = s(e[o], e, i);
            if ("throw" !== c.type) {
              var h = c.arg,
                f = h.value;
              return f && "object" == (0, n.Z)(f) && r.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      a("next", e, u, l);
                    },
                    function (e) {
                      a("throw", e, u, l);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (h.value = e), u(h);
                    },
                    function (e) {
                      return a("throw", e, u, l);
                    }
                  );
            }
            l(c.arg);
          }
          var o;
          this._invoke = function (e, r) {
            function n() {
              return new t(function (t, n) {
                a(e, r, t, n);
              });
            }
            return (o = o ? o.then(n, n) : n());
          };
        }
        function L(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                L(e, t),
                "throw" === t.method)
              )
                return f;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var n = s(r, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), f
            );
          var a = n.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function b(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function T(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(b, this),
            this.reset(!0);
        }
        function k(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = d),
          c(w, "constructor", d),
          c(d, "constructor", v),
          (v.displayName = c(d, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), c(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          x(Z.prototype),
          c(Z.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = Z),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new Z(h(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          x(w),
          c(w, l, "Generator"),
          c(w, i, function () {
            return this;
          }),
          c(w, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = k),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(T),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var u = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (u && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (u) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), T(r), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    T(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: k(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
    },
  },
]);
//# sourceMappingURL=5668.073c2bea.chunk.js.map
