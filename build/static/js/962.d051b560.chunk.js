"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [962],
  {
    40962: function (e, i, s) {
      s.r(i),
        s.d(i, {
          default: function () {
            return g;
          },
        });
      var c = s(74165),
        n = s(15861),
        t = (s(72791), s(56890)),
        l = s(35855),
        a = s(53994),
        r = s(53382),
        h = s(78840),
        d = (s(93650), s(59909)),
        o = s(91933),
        m = s(23821),
        u = s(87681),
        x = s(95907),
        v = s(80184);
      var j = function () {
        return (0, v.jsx)(v.Fragment, {
          children: (0, v.jsx)("svg", {
            version: "1.1",
            id: "Capa_1",
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 281.488 281.488",
            children: (0, v.jsxs)("g", {
              children: [
                (0, v.jsx)("path", {
                  d: "M140.744,0C63.138,0,0,63.138,0,140.744s63.138,140.744,140.744,140.744s140.744-63.138,140.744-140.744 S218.351,0,140.744,0z M140.744,263.488C73.063,263.488,18,208.426,18,140.744S73.063,18,140.744,18 s122.744,55.063,122.744,122.744S208.426,263.488,140.744,263.488z",
                }),
                (0, v.jsx)("path", {
                  d: "M195.813,89.334H85.676c-4.971,0-9,4.029-9,9s4.029,9,9,9h110.137c4.971,0,9-4.029,9-9S200.783,89.334,195.813,89.334z",
                }),
                (0, v.jsx)("path", {
                  d: "M195.813,131.744H85.676c-4.971,0-9,4.029-9,9s4.029,9,9,9h110.137c4.971,0,9-4.029,9-9S200.783,131.744,195.813,131.744z",
                }),
                (0, v.jsx)("path", {
                  d: "M195.813,174.154H85.676c-4.971,0-9,4.029-9,9s4.029,9,9,9h110.137c4.971,0,9-4.029,9-9S200.783,174.154,195.813,174.154z",
                }),
              ],
            }),
          }),
        });
      };
      var p = function () {
          return (0, v.jsx)(v.Fragment, {
            children: (0, v.jsx)("svg", {
              width: "20px",
              height: "20px",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, v.jsx)("path", {
                d: "M2 2h14v4h6v16H2V2zm18 6h-4v2h2v2h-2v2h2v2h-2v2h2v2h2V8zm-6-4H4v16h2v-2h6v2h2V4zM6 6h2v2H6V6zm6 0h-2v2h2V6zm-6 4h2v2H6v-2zm6 0h-2v2h2v-2zm-6 4h2v2H6v-2zm6 0h-2v2h2v-2z",
                fill: "currentColor",
              }),
            }),
          });
        },
        Z = s(79271),
        f = s(91523),
        w = s(30606);
      var g = function () {
        var e,
          i,
          s,
          g = (0, Z.k6)(),
          N = new URLSearchParams(g.location.search).get("pid"),
          z = (0, o.useQuery)(
            ["facility-list", N],
            (0, n.Z)(
              (0, c.Z)().mark(function e() {
                var i;
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          N ? u.Z.getSubFacilities(N) : u.Z.getFacilities()
                        );
                      case 2:
                        return (i = e.sent), e.abrupt("return", i.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )
          ),
          y = z.data,
          b = z.isLoading,
          F = function (e) {
            if (e) return new Date(e).toISOString().split("T")[0];
          };
        return b
          ? (0, v.jsx)(d.Z, {})
          : (0, v.jsxs)("div", {
              children: [
                (0, v.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, v.jsx)(w.c, { children: "Facility list" }),
                }),
                (0, v.jsx)("div", {
                  className: "mt-3",
                  children: (0, v.jsx)("div", {
                    className: "card",
                    children: (0, v.jsxs)("div", {
                      className: "card-body",
                      children: [
                        N &&
                          (0, v.jsxs)("div", {
                            className: "row mt-3",
                            children: [
                              (0, v.jsx)("div", {
                                className: "col-sm-2 mt-2",
                                children: (0, v.jsx)(w.c, {
                                  children: "Parent facility:",
                                }),
                              }),
                              (0, v.jsx)("div", {
                                className: "col-sm-4 ",
                                children: (0, v.jsx)("input", {
                                  className: "w-100",
                                  disabled: !0,
                                  defaultValue:
                                    null === (e = y[0]) || void 0 === e
                                      ? void 0
                                      : e.name,
                                }),
                              }),
                              (0, v.jsx)(f.rU, {
                                to: {
                                  pathname: "/facilities/list",
                                  search: "".concat(
                                    null !== (i = y[0]) &&
                                      void 0 !== i &&
                                      i.parentid
                                      ? "?pid=".concat(
                                          null === (s = y[0]) || void 0 === s
                                            ? void 0
                                            : s.parentid
                                        )
                                      : ""
                                  ),
                                },
                                className: "col-sm-2 mt-2",
                                children: "up level",
                              }),
                            ],
                          }),
                        (0, v.jsx)("div", {
                          className: "mt-5 table-container",
                          children: (0, v.jsxs)(m.Z, {
                            children: [
                              (0, v.jsx)(t.Z, {
                                children: (0, v.jsxs)(l.Z, {
                                  children: [
                                    (0, v.jsx)(a.Z, {
                                      className: "col-sm-2",
                                      children: (0, v.jsx)(w.c, {
                                        children: "Facility name",
                                      }),
                                    }),
                                    (0, v.jsx)(a.Z, {
                                      className: "col-sm-1",
                                      children: "Level",
                                    }),
                                    (0, v.jsx)(a.Z, {
                                      className: "col-sm-2",
                                      children: (0, v.jsx)(w.c, {
                                        children:
                                          "Number of lower level facility",
                                      }),
                                    }),
                                    (0, v.jsx)(a.Z, {
                                      className: "col-sm-1",
                                      children: (0, v.jsx)(w.c, {
                                        children: "Code",
                                      }),
                                    }),
                                    (0, v.jsx)(a.Z, {
                                      className: "col-sm-2",
                                      children: (0, v.jsx)(w.c, {
                                        children: "Type",
                                      }),
                                    }),
                                    (0, v.jsx)(a.Z, {
                                      className: "col-sm-2",
                                      children: (0, v.jsx)(w.c, {
                                        children: "Last Changes On",
                                      }),
                                    }),
                                    (0, v.jsx)(a.Z, {
                                      className: "col-sm-2",
                                      children: (0, v.jsx)(w.c, {
                                        children: "Tool box",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, v.jsx)(r.Z, {
                                children: y.map(function (e, i) {
                                  var s, c, n, t, r;
                                  return (0,
                                  v.jsxs)(l.Z, { children: [(0, v.jsxs)(a.Z, { className: "col-sm-2", children: [N && i > 0 && "-- ", " ", null !== (s = e.name) && void 0 !== s ? s : "-"] }), (0, v.jsx)(a.Z, { className: "col-sm-1", children: null !== (c = e.level) && void 0 !== c ? c : "-" }), (0, v.jsx)(a.Z, { className: "col-sm-2", children: null !== (n = e.loverlevelfac) && void 0 !== n ? n : "-" }), (0, v.jsx)(a.Z, { className: "col-sm-1", children: null !== (t = e.code) && void 0 !== t ? t : "-" }), (0, v.jsx)(a.Z, { className: "col-sm-2", children: null !== (r = e.type) && void 0 !== r ? r : "-" }), (0, v.jsx)(a.Z, { className: "col-sm-2", children: F(e.updated_at) }), (0, v.jsxs)(a.Z, { className: "col-sm-2", children: [(0, v.jsx)(f.rU, { to: "/facilities/info/".concat(e.id), children: (0, v.jsx)(h.Z, { title: "edit", children: (0, v.jsx)("button", { className: "edit-btn", children: (0, v.jsx)(x.Z, {}) }) }) }), ((N && i > 0) || !N) && (0, v.jsx)(h.Z, { title: "Sub facilities", children: (0, v.jsx)(f.rU, { to: { pathname: "/facilities/list", search: "?pid=".concat(e.id) }, children: (0, v.jsx)(j, {}) }) }), (0, v.jsx)(h.Z, { title: "Add Facility", children: (0, v.jsx)(f.rU, { to: { pathname: "/facilities/info/new", search: "?pid=".concat(e.id) }, children: (0, v.jsx)(p, {}) }) }), (0, v.jsx)(h.Z, { title: "Item list", children: (0, v.jsx)(f.rU, { to: { pathname: "/items/list", search: "?facility=".concat(e.id) }, children: (0, v.jsx)(p, {}) }) }), (0, v.jsx)(h.Z, { title: "Add item", children: (0, v.jsx)(f.rU, { to: { pathname: "/items/info/new", search: "?parent=".concat(e.id) }, children: (0, v.jsx)(p, {}) }) })] })] }, i);
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            });
      };
    },
    87681: function (e, i, s) {
      var c = s(15671),
        n = s(43144),
        t = s(39877),
        l = s(54318),
        a = "http://127.0.0.1:8000/facilities/",
        r = (function () {
          function e() {
            (0, c.Z)(this, e);
          }
          return (
            (0, n.Z)(e, [
              {
                key: "getFacilities",
                value: function (e) {
                  var i = {};
                  return (
                    e && (i.id = e),
                    t.Z.get(a, {
                      headers: { Authorization: (0, l.Z)() },
                      params: i,
                    })
                  );
                },
              },
              {
                key: "getSubFacilities",
                value: function (e) {
                  var i = { id: e };
                  return t.Z.get(a + "parent", {
                    headers: { Authorization: (0, l.Z)() },
                    params: i,
                  });
                },
              },
              {
                key: "getFacilityFields",
                value: function (e) {
                  return t.Z.get(a + "facility-field", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postFacility",
                value: function (e) {
                  return t.Z.post(a, e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putFacility",
                value: function (e) {
                  return t.Z.put(a, e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "importFacilities",
                value: function (e) {
                  return t.Z.post("http://127.0.0.1:8000facilities/import", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      i.Z = new r();
    },
    95907: function (e, i, s) {
      var c = s(80184);
      i.Z = function () {
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            width: "20",
            height: "20",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, c.jsx)("path", {
              d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
            }),
          }),
        });
      };
    },
    23821: function (e, i, s) {
      var c = s(39281),
        n = s(79836),
        t = s(80184);
      i.Z = function (e) {
        var i = e.children;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(c.Z, {
            children: (0, t.jsx)(n.Z, { children: i }),
          }),
        });
      };
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=962.d051b560.chunk.js.map
