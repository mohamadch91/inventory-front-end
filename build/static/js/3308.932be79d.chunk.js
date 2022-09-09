"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [3308],
  {
    93308: function (e, l, a) {
      a.r(l);
      var n = a(1413),
        s = a(74165),
        t = a(15861),
        c = a(29439),
        i = a(72791),
        r = a(30606),
        o = a(91933),
        u = a(16149),
        d = a(51763),
        m = (a(92854), a(59909)),
        h = a(23821),
        p = a(56890),
        v = a(35855),
        x = a(53994),
        f = a(53382),
        j = (a(93650), a(80184)),
        g = {
          name: "",
          code: "",
          level: "-1",
          type: "-1",
          power: "-1",
          item_class: "-1",
          item_type: "-1",
          physical: "-1",
          financial: "-1",
          working: "-1",
          item_power: "-1",
        },
        Z = [
          {
            headTitle: "Facility name",
            group: "facility",
            valueKey: "fac_name",
          },
          {
            headTitle: "Parent facility",
            group: "facility",
            valueKey: "fac_parent",
          },
          { headTitle: "Level", group: "facility", valueKey: "fac_level" },
          { headTitle: "Type", group: "facility", valueKey: "fac_type" },
          { headTitle: "Item class", group: "item", valueKey: "item_class" },
          { headTitle: "Item type", group: "item", valueKey: "item_type" },
          { headTitle: "Item code", group: "item", valueKey: "code" },
          { headTitle: "PQS", group: "item", valueKey: "pqs" },
          { headTitle: "Model", group: "item", valueKey: "model" },
          { headTitle: "Manufacturer", group: "item", valueKey: "manufac" },
          { headTitle: "Capacity", group: "item", valueKey: "capacity" },
          { headTitle: "Year installed", group: "item", valueKey: "year" },
          { headTitle: "Power source", group: "item", valueKey: "power" },
          { headTitle: "Financial", group: "item", valueKey: "financial" },
          { headTitle: "Physical", group: "item", valueKey: "physical" },
          {
            headTitle: "Working condition",
            group: "item",
            valueKey: "working",
          },
        ];
      l.default = function () {
        var e,
          l,
          a,
          y,
          N,
          b = (0, i.useState)(g),
          w = (0, c.Z)(b, 2),
          C = w[0],
          k = w[1],
          P = (0, i.useState)(null),
          _ = (0, c.Z)(P, 2),
          T = _[0],
          G = _[1],
          K = JSON.parse(localStorage.getItem("country")) || {},
          z = (0, o.useQuery)(
            ["item-fac-helper"],
            (0, t.Z)(
              (0, s.Z)().mark(function e() {
                var l;
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), d.Z.getItemFac({ help: !0 });
                      case 2:
                        return (l = e.sent), e.abrupt("return", l.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )
          ),
          A = z.data,
          F = z.isLoading,
          I = (0, o.useQuery)(
            ["item-fac-report"],
            (0, t.Z)(
              (0, s.Z)().mark(function e() {
                var l, a, n, t;
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((l = { help: !1 }), C))
                          (n = C[a]).length > 0 && "-1" !== n && (l[a] = n);
                        return (e.next = 4), d.Z.getItemFac(l);
                      case 4:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !1, enabled: !1 }
          ),
          S = I.data,
          E = I.isLoading,
          L = I.refetch;
        return F || E
          ? (0, j.jsx)(m.Z, {})
          : (0, j.jsxs)("div", {
              children: [
                (0, j.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, j.jsx)(r.c, {
                    children: "Item Report By Facility",
                  }),
                }),
                (0, j.jsx)("div", {
                  className: "mt-3",
                  children: (0, j.jsx)("div", {
                    className: "card",
                    children: (0, j.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, j.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), L();
                        },
                        children: [
                          (0, j.jsx)("h4", {
                            children: (0, j.jsx)(r.c, { children: "Filters" }),
                          }),
                          (0, j.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(r.c, {
                                        children: "Facility name:",
                                      }),
                                    }),
                                    (0, j.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { name: l });
                                        });
                                      },
                                      value: C.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(r.c, {
                                        children: "Code:",
                                      }),
                                    }),
                                    (0, j.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { code: l });
                                        });
                                      },
                                      value: C.code,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, j.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(r.c, {
                                        children: "Level:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { level: l });
                                        });
                                      },
                                      value: C.level,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === A || void 0 === A
                                          ? void 0
                                          : A.level.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.id, children: "".concat(e.id, " - ").concat(e.name) }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(r.c, {
                                        children: "Type:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { type: l });
                                        });
                                      },
                                      value: C.type,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === A || void 0 === A
                                          ? void 0
                                          : A.type.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, j.jsx)("div", {
                            className: "row mt-1",
                            children: (0, j.jsx)("div", {
                              className: "col-sm-12 col-lg-6",
                              children: (0, j.jsxs)(u.Z.Group, {
                                className: "row",
                                children: [
                                  (0, j.jsx)("label", {
                                    className: "label col-sm-4",
                                    children: (0, j.jsx)(r.c, {
                                      children: "Power source:",
                                    }),
                                  }),
                                  (0, j.jsxs)(u.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var l = e.target.value;
                                      k(function (e) {
                                        return (0,
                                        n.Z)((0, n.Z)({}, e), {}, { power: l });
                                      });
                                    },
                                    value: C.power,
                                    as: "select",
                                    children: [
                                      (0, j.jsx)("option", {
                                        value: "-1",
                                        selected: !0,
                                        disabled: !0,
                                        children: "Please select",
                                      }),
                                      null === A || void 0 === A
                                        ? void 0
                                        : A.power.map(function (e) {
                                            return (0,
                                            j.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, j.jsx)("h4", {
                            className: "mt-1",
                            children: (0, j.jsx)(r.c, {
                              children: "Item Options",
                            }),
                          }),
                          (0, j.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(r.c, {
                                        children: "Item class:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { item_class: l, item_type: "-1" });
                                        }),
                                          G(
                                            A.item.find(function (e) {
                                              return e.item_class_id === +l;
                                            })
                                          );
                                      },
                                      value: C.item_class,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (e = A.item) ||
                                        void 0 === e
                                          ? void 0
                                          : e.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.item_class_id, children: e.item_class_name }, e.item_class_id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(r.c, {
                                        children: "Item type:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      disabled: !T,
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { item_type: l });
                                        });
                                      },
                                      value: C.item_type,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === T || void 0 === T
                                          ? void 0
                                          : T.item_type.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, j.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(r.c, {
                                        children: "Physical condition:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { physical: l });
                                        });
                                      },
                                      value: C.physical,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (l = A.physical) ||
                                        void 0 === l
                                          ? void 0
                                          : l.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(r.c, {
                                        children: "Working condition:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { working: l });
                                        });
                                      },
                                      value: C.working,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (a = A.working) ||
                                        void 0 === a
                                          ? void 0
                                          : a.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, j.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(r.c, {
                                        children: "Financial source:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { financial: l });
                                        });
                                      },
                                      value: C.financial,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (y = A.financial) ||
                                        void 0 === y
                                          ? void 0
                                          : y.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(r.c, {
                                        children: "Power source:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { item_power: l });
                                        });
                                      },
                                      value: C.item_power,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (N = A.item_power) ||
                                        void 0 === N
                                          ? void 0
                                          : N.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, j.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, j.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, j.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary",
                                  children: "Reports",
                                }),
                              }),
                              (0, j.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, j.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-secondary",
                                  onClick: function () {
                                    return k(g);
                                  },
                                  children: "Clear",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, j.jsx)("div", {
                  className: "mt-3",
                  children: (0, j.jsx)("div", {
                    className: "card",
                    children: (0, j.jsxs)("div", {
                      className: "card-body py-3",
                      children: [
                        (0, j.jsx)("h4", {
                          children: (0, j.jsxs)(r.c, {
                            children: [
                              "Report Number: Item Report By Facility (",
                              null === K || void 0 === K ? void 0 : K.country,
                              ")",
                            ],
                          }),
                        }),
                        (0, j.jsxs)("h6", {
                          children: [
                            "Date: ",
                            new Date().toISOString().split("T")[0],
                          ],
                        }),
                        (0, j.jsx)("div", {
                          className: "mt-3 table-container ",
                          children: (0, j.jsxs)(h.Z, {
                            stickyHeader: !0,
                            children: [
                              (0, j.jsx)(p.Z, {
                                children: (0, j.jsx)(v.Z, {
                                  children: Z.map(function (e) {
                                    return (0,
                                    j.jsx)(x.Z, { children: (0, j.jsx)(r.c, { children: e.headTitle }) }, e.headTitle);
                                  }),
                                }),
                              }),
                              (0, j.jsx)(f.Z, {
                                children:
                                  null === S || void 0 === S
                                    ? void 0
                                    : S.map(function (e, l) {
                                        return (0, j.jsx)(
                                          v.Z,
                                          {
                                            children: Z.map(function (l) {
                                              var a;
                                              return (0,
                                              j.jsx)(x.Z, { children: null !== (a = e[l.group][l.valueKey]) && void 0 !== a ? a : "-" }, l.valueKey);
                                            }),
                                          },
                                          l
                                        );
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
    51763: function (e, l, a) {
      var n = a(15671),
        s = a(43144),
        t = a(54318),
        c = a(39877),
        i = "http://127.0.0.1:8000/reports/",
        r = (function () {
          function e() {
            (0, n.Z)(this, e);
          }
          return (
            (0, s.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return c.Z.get(i + "excel", {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return c.Z.get(i + "facseg", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return c.Z.get(i + "subfacpop", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return c.Z.get(i + "facmap", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return c.Z.get(i + "gapmap", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return c.Z.get(i + "item-gp", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return c.Z.get(i + "itemfac", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return c.Z.get(i + "gapitem", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return c.Z.get(i + "facprof", {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return c.Z.get(i + "coldprof", {
                    headers: { Authorization: (0, t.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return c.Z.get(i + "planingreport", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return c.Z.get(i + "gapcce", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return c.Z.get(i + "gapccePlan", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return c.Z.post(i + "gapccePlan", e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return c.Z.delete(i + "gapccePlan", {
                    headers: { Authorization: (0, t.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return c.Z.put(i + "gapccePlan", e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      l.Z = new r();
    },
    23821: function (e, l, a) {
      var n = a(39281),
        s = a(79836),
        t = a(80184);
      l.Z = function (e) {
        var l = e.children;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(n.Z, {
            children: (0, t.jsx)(s.Z, { children: l }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=3308.932be79d.chunk.js.map