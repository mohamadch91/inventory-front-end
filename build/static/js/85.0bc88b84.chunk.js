"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [85],
  {
    69778: function (e, t, n) {
      var r = n(15671),
        a = n(43144),
        i = n(74569),
        s = n.n(i),
        l = n(54318),
        c = "http://127.0.0.1:8000/items/",
        o = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (0, a.Z)(e, [
              {
                key: "getItemClasses",
                value: function () {
                  return s().get(c + "itemClass", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getActiveItemClasses",
                value: function () {
                  return s().get(c + "class-helper", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putItemClass",
                value: function (e) {
                  return s().put(c + "itemClass", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getItemTypes",
                value: function () {
                  return s().get(c + "itemType", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "postItemType",
                value: function (e) {
                  return s().post(c + "itemType", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putItemTypes",
                value: function (e) {
                  return s().put(c + "itemType", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getItemClassesOfAnItemType",
                value: function (e) {
                  return s().get(c + "itembyclass?id=" + e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getActiveItemClassesWithFields",
                value: function (e) {
                  var t = {};
                  return (
                    e && (t.id = e),
                    s().get(c + "itembyclass", {
                      headers: { Authorization: (0, l.Z)() },
                      params: t,
                    })
                  );
                },
              },
              {
                key: "getItemTinLevels",
                value: function (e) {
                  var t = {};
                  return (
                    e && (t.level = e),
                    s().get(c + "itemTinLevels", {
                      headers: { Authorization: (0, l.Z)() },
                      params: t,
                    })
                  );
                },
              },
              {
                key: "putItemTypeInClass",
                value: function (e) {
                  return s().put(c + "itemTinLevels", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getManufacturers",
                value: function (e) {
                  return s().get(c + "manufacturer?id=" + e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "postManufacturer",
                value: function (e) {
                  return s().post(c + "manufacturer", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putManufacturer",
                value: function (e) {
                  return s().put(c + "manufacturer", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new o();
    },
    60085: function (e, t, n) {
      n.r(t);
      var r = n(70885),
        a = n(56890),
        i = n(35855),
        s = n(53994),
        l = n(53382),
        c = n(72791),
        o = (n(40277), n(95907), n(23821)),
        u = n(65218),
        d = n(59909),
        h = (n(93650), n(2423), n(9716), n(69778), n(17994)),
        x = n(34045),
        p = n(67639),
        m = n(13967),
        f = n(64554),
        g = n(13400),
        Z = n(12715),
        j = n(41133),
        v = n(5397),
        _ = n(10111),
        y = n(80184);
      function P(e) {
        var t = (0, m.Z)(),
          n = e.count,
          r = e.page,
          a = e.rowsPerPage,
          i = e.onPageChange;
        return (0, y.jsxs)(f.Z, {
          sx: { flexShrink: 0, ml: 2.5 },
          children: [
            (0, y.jsx)(g.Z, {
              onClick: function (e) {
                i(e, 0);
              },
              disabled: 0 === r,
              "aria-label": "first page",
              children:
                "rtl" === t.direction
                  ? (0, y.jsx)(_.Z, {})
                  : (0, y.jsx)(Z.Z, {}),
            }),
            (0, y.jsx)(g.Z, {
              onClick: function (e) {
                i(e, r - 1);
              },
              disabled: 0 === r,
              "aria-label": "previous page",
              children:
                "rtl" === t.direction
                  ? (0, y.jsx)(v.Z, {})
                  : (0, y.jsx)(j.Z, {}),
            }),
            (0, y.jsx)(g.Z, {
              onClick: function (e) {
                i(e, r + 1);
              },
              disabled: r >= Math.ceil(n / a) - 1,
              "aria-label": "next page",
              children:
                "rtl" === t.direction
                  ? (0, y.jsx)(j.Z, {})
                  : (0, y.jsx)(v.Z, {}),
            }),
            (0, y.jsx)(g.Z, {
              onClick: function (e) {
                i(e, Math.max(0, Math.ceil(n / a) - 1));
              },
              disabled: r >= Math.ceil(n / a) - 1,
              "aria-label": "last page",
              children:
                "rtl" === t.direction
                  ? (0, y.jsx)(Z.Z, {})
                  : (0, y.jsx)(_.Z, {}),
            }),
          ],
        });
      }
      t.default = function () {
        var e = (0, c.useState)([]),
          t = (0, r.Z)(e, 2),
          n = t[0],
          m = t[1],
          f = c.useState(0),
          g = (0, r.Z)(f, 2),
          Z = g[0],
          j = g[1],
          v = c.useState(5),
          _ = (0, r.Z)(v, 2),
          w = _[0],
          b = _[1],
          k = (0, c.useState)(!0),
          T = (0, r.Z)(k, 2),
          M = T[0],
          z = T[1],
          C = (0, c.useState)(null),
          S = (0, r.Z)(C, 2);
        function A() {
          h.Z.getpqs3()
            .then(function (e) {
              m(e.data), z(!1), j(e.data.length / 10);
            })
            .catch(function (e) {
              u.ZP.error("There is a problem loading data"), z(!1);
            });
        }
        S[0],
          S[1],
          (0, c.useEffect)(function () {
            A(), j(0), b(5);
          }, []);
        var I = Z > 0 ? Math.max(0, (1 + Z) * w - n.length) : 0,
          E = (0, c.useState)(null),
          Y = (0, r.Z)(E, 2),
          N = Y[0],
          L = Y[1];
        return (0, y.jsxs)("div", {
          className: "item-class-page",
          children: [
            (0, y.jsx)("h3", {
              className: "page-title mb-3",
              children: "Import PQS/PIS3 and view",
            }),
            M
              ? (0, y.jsx)(d.Z, {})
              : (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsxs)("div", {
                      className: "add-row mt-4 mb-4",
                      children: [
                        (0, y.jsx)("h3", {
                          className: "mb-3 mt-3",
                          children: "Insert PQS excel file",
                        }),
                        (0, y.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, y.jsxs)("div", {
                              className: "col-md-3 flex-column d-flex",
                              children: [
                                (0, y.jsx)("label", { children: "excel file" }),
                                (0, y.jsx)("input", {
                                  name: "describe",
                                  type: "file",
                                  onChange: function (e) {
                                    var t = (0, r.Z)(e.target.files, 1)[0],
                                      n = new FileReader();
                                    (n.onload = function (e) {
                                      var t = e.target.result,
                                        n = x.ij(t, { type: "binary" }),
                                        r = n.SheetNames[0],
                                        a = n.Sheets[r],
                                        i = x.P6.sheet_to_json(a);
                                      console.log(i), L(i);
                                    }),
                                      n.readAsBinaryString(t);
                                  },
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, y.jsxs)("div", {
                              className: "col-md-3 flex-column d-flex mt-2",
                              children: [
                                (0, y.jsx)("label", {
                                  children:
                                    "If you sumbit all old datas erased",
                                }),
                                (0, y.jsx)("button", {
                                  onClick: function () {
                                    var e = [];
                                    console.log(N);
                                    for (var t = 4; t < N.length; t++) {
                                      var n = 0,
                                        r = 0,
                                        a = 0;
                                      (n =
                                        "###" === N[t].__EMPTY_18 ||
                                        " " === N[t].__EMPTY_18
                                          ? 0
                                          : parseFloat(N[t].__EMPTY_18)),
                                        (r =
                                          "###" === N[t].__EMPTY_19 ||
                                          " " === N[t].__EMPTY_19
                                            ? 0
                                            : parseFloat(N[t].__EMPTY_19)),
                                        (a =
                                          "###" === N[t].__EMPTY_20 ||
                                          " " === N[t].__EMPTY_20
                                            ? 0
                                            : parseFloat(N[t].__EMPTY_20)),
                                        console.log(
                                          N[t]["Nbr. of products listed:"]
                                        );
                                      var i = {
                                        description:
                                          N[t][
                                            "http://apps.who.int/immunization_standards/vaccine_quality/pqs_catalogue/categorypage.aspx?id_cat=17"
                                          ],
                                        make: N[t].__EMPTY,
                                        model: N[t].__EMPTY_1,
                                        pqscode: N[t].__EMPTY_2,
                                        refrigerant: N[t].__EMPTY_4,
                                        refrigeratorcapacity: N[t].__EMPTY_7,
                                        freezercapacity:
                                          N[t]["Nbr. of products listed:"],
                                        kg_24_hrs:
                                          " " === N[t].__EMPTY_9
                                            ? 0
                                            : N[t].__EMPTY_9,
                                        h: n,
                                        w: r,
                                        l: a,
                                      };
                                      e.push(i);
                                    }
                                    h.Z.addpqs3(e)
                                      .then(function (e) {
                                        u.ZP.success(
                                          "Data imported successfully"
                                        ),
                                          A();
                                      })
                                      .catch(function (e) {
                                        u.ZP.error(
                                          "There is a problem importing data"
                                        );
                                      });
                                  },
                                  className: "save-btn",
                                  children: "sumbit",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, y.jsx)("div", {
                      className: "row mb-4 mt-4",
                      children: (0, y.jsx)("div", {
                        className: "col-md-2 d-flex align-items-center",
                        children: (0, y.jsx)("h4", { children: "PQS list" }),
                      }),
                    }),
                    (0, y.jsxs)("div", {
                      children: [
                        (0, y.jsxs)(o.Z, {
                          children: [
                            (0, y.jsx)(a.Z, {
                              children: (0, y.jsxs)(i.Z, {
                                children: [
                                  (0, y.jsx)(s.Z, { children: "PQS code" }),
                                  (0, y.jsx)(s.Z, { children: "PQS/PIS Type" }),
                                  (0, y.jsx)(s.Z, { children: "Manufacturer" }),
                                  (0, y.jsx)(s.Z, { children: "Model" }),
                                  (0, y.jsx)(s.Z, {
                                    children: "Refrigerant gas",
                                  }),
                                  (0, y.jsx)(s.Z, {
                                    children:
                                      "Net vaccine storage capacity (lit.)",
                                  }),
                                  (0, y.jsx)(s.Z, {
                                    children:
                                      "Net freeze capacity at -20 C (lit.)",
                                  }),
                                  (0, y.jsx)(s.Z, {
                                    children:
                                      "Coolant pack production capacity (Kg/24 hours)",
                                  }),
                                  (0, y.jsx)(s.Z, { children: "Height (cm)" }),
                                  (0, y.jsx)(s.Z, { children: "Width (cm)" }),
                                  (0, y.jsx)(s.Z, { children: "Length (cm)" }),
                                ],
                              }),
                            }),
                            (0, y.jsxs)(l.Z, {
                              children: [
                                n &&
                                  (w > 0 ? n.slice(Z * w, Z * w + w) : n).map(
                                    function (e, t) {
                                      return (0, y.jsx)(y.Fragment, {
                                        children: (0, y.jsxs)(i.Z, {
                                          children: [
                                            (0, y.jsx)(s.Z, {
                                              children: e.pqscode,
                                            }),
                                            (0, y.jsx)(s.Z, {
                                              children: e.description,
                                            }),
                                            (0, y.jsx)(s.Z, {
                                              children: e.make,
                                            }),
                                            (0, y.jsx)(s.Z, {
                                              children: e.model,
                                            }),
                                            (0, y.jsx)(s.Z, {
                                              children: e.refrigerant,
                                            }),
                                            (0, y.jsx)(s.Z, {
                                              children: e.refrigeratorcapacity,
                                            }),
                                            (0, y.jsx)(s.Z, {
                                              children: e.freezercapacity,
                                            }),
                                            (0, y.jsx)(s.Z, {
                                              children: e.kg_24_hrs,
                                            }),
                                            (0, y.jsx)(s.Z, { children: e.h }),
                                            (0, y.jsx)(s.Z, { children: e.w }),
                                            (0, y.jsx)(s.Z, { children: e.l }),
                                          ],
                                        }),
                                      });
                                    }
                                  ),
                                I > 0 &&
                                  (0, y.jsx)(i.Z, {
                                    style: { height: 53 * I },
                                    children: (0, y.jsx)(s.Z, { colSpan: 6 }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, y.jsx)(p.Z, {
                          rowsPerPageOptions: [
                            5,
                            10,
                            15,
                            25,
                            { label: "All", value: 5 },
                          ],
                          colSpan: 3,
                          count: n.length,
                          rowsPerPage: w,
                          page: Z,
                          SelectProps: {
                            inputProps: { "aria-label": "rows per page" },
                            native: !0,
                          },
                          labelDisplayedRows: function (e) {
                            var t = e.from,
                              n = e.to,
                              r = e.count;
                            return ""
                              .concat(Math.ceil(t), "\u2013")
                              .concat(n, " of ")
                              .concat(
                                -1 !== r ? Math.ceil(r) : "more than ".concat(n)
                              );
                          },
                          onPageChange: function (e, t) {
                            j(t);
                          },
                          onRowsPerPageChange: function (e) {
                            b(parseInt(e.target.value, 10)), j(0);
                          },
                          ActionsComponent: P,
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        });
      };
    },
    40277: function (e, t, n) {
      var r = n(80184);
      t.Z = function () {
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            width: "121.31px",
            height: "122.876px",
            viewBox: "0 0 121.31 122.876",
            enableBackground: "new 0 0 121.31 122.876",
            xmlSpace: "preserve",
            children: (0, r.jsx)("g", {
              children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z",
              }),
            }),
          }),
        });
      };
    },
    95907: function (e, t, n) {
      var r = n(80184);
      t.Z = function () {
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, r.jsx)("g", {
              children: (0, r.jsx)("g", {
                children: (0, r.jsx)("path", {
                  d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
                }),
              }),
            }),
          }),
        });
      };
    },
    23821: function (e, t, n) {
      var r = n(39281),
        a = n(79836),
        i = n(80184);
      t.Z = function (e) {
        var t = e.children;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(r.Z, {
            children: (0, i.jsx)(a.Z, { children: t }),
          }),
        });
      };
    },
    9716: function () {},
    2423: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=85.0bc88b84.chunk.js.map
