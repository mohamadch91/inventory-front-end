"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [6547],
  {
    6547: function (e, n, s) {
      s.r(n);
      var c = s(4942),
        r = s(1413),
        i = s(29439),
        t = s(56890),
        l = s(35855),
        a = s(53994),
        d = s(53382),
        u = s(38861),
        h = s(72791),
        o = s(95907),
        x = s(23821),
        j = s(65218),
        f = (s(53596), s(59909)),
        m = s(57641),
        Z =
          (s(36167),
          s(93650),
          s(2423),
          s(65487),
          s(5227),
          s(87004),
          s(98163),
          s(91523)),
        v = s(30606),
        g = s(12902),
        b = s(80184);
      n.default = function () {
        var e = (0, h.useState)([]),
          n = (0, i.Z)(e, 2),
          s = n[0],
          p = n[1],
          y = (0, h.useState)({}),
          k = (0, i.Z)(y, 2),
          w = k[0],
          S = k[1],
          N = (0, h.useState)(!0),
          R = (0, i.Z)(N, 2),
          z = R[0],
          M = R[1],
          P = (0, h.useState)(null),
          C = (0, i.Z)(P, 2),
          A = (C[0], C[1], (0, h.useState)(!1)),
          F = (0, i.Z)(A, 2),
          H = F[0],
          D = F[1],
          E = (0, h.useState)([]),
          O = (0, i.Z)(E, 2),
          T = (O[0], O[1]),
          W = (0, h.useState)("r"),
          q = (0, i.Z)(W, 2),
          B = q[0],
          L = q[1],
          U = (0, h.useState)([]),
          X = (0, i.Z)(U, 2),
          $ = X[0],
          _ = X[1];
        function G(e) {
          "r" === e
            ? m.Z.getReceivedMessages()
                .then(function (e) {
                  p(e.data), M(!1);
                })
                .catch(function (e) {
                  j.ZP.error(
                    (0, b.jsx)(v.c, {
                      children: "There is a problem loading data",
                    })
                  ),
                    M(!1);
                })
            : m.Z.getSentMessages()
                .then(function (e) {
                  p(e.data), M(!1);
                })
                .catch(function (e) {
                  j.ZP.error(
                    (0, b.jsx)(v.c, {
                      children: "There is a problem loading data",
                    })
                  ),
                    M(!1);
                });
        }
        function I(e) {
          var n = e.target,
            s = n.name,
            i = n.value;
          S((0, r.Z)((0, r.Z)({}, w), {}, (0, c.Z)({}, s, i)));
        }
        return (
          (0, h.useEffect)(function () {
            G(B);
          }, []),
          (0, b.jsxs)("div", {
            className: "item-class-page hr-page message-page",
            children: [
              (0, b.jsx)("h3", {
                className: "page-title mb-3",
                children: (0, b.jsx)(v.c, { children: "Messages list" }),
              }),
              z
                ? (0, b.jsx)(f.Z, {})
                : (0, b.jsxs)(b.Fragment, {
                    children: [
                      (0, b.jsxs)("div", {
                        className: "row mb-4 mt-4",
                        children: [
                          (0, b.jsx)("div", {
                            className: "col-md-3 d-flex align-items-center",
                            children: (0, b.jsx)("h4", {
                              children: (0, b.jsx)(v.c, {
                                children: "Received or sent messages",
                              }),
                            }),
                          }),
                          (0, b.jsx)("div", {
                            className: "col-md-9 d-flex",
                            children: (0, b.jsxs)("select", {
                              name: "receivedOrSent",
                              onChange: function (e) {
                                L(e.target.value), M(!0), G(e.target.value);
                              },
                              value: B,
                              children: [
                                (0, b.jsx)(g.W, {
                                  children: function (e, n) {
                                    n.i18n;
                                    return (0, b.jsx)("option", {
                                      value: "s",
                                      children: e("Sent"),
                                    });
                                  },
                                }),
                                (0, b.jsx)(g.W, {
                                  children: function (e, n) {
                                    n.i18n;
                                    return (0, b.jsx)("option", {
                                      value: "r",
                                      children: e("Received"),
                                    });
                                  },
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      s &&
                        s.length > 0 &&
                        (0, b.jsx)("div", {
                          children: (0, b.jsxs)(x.Z, {
                            children: [
                              (0, b.jsx)(t.Z, {
                                children: (0, b.jsxs)(l.Z, {
                                  children: [
                                    (0, b.jsx)(a.Z, {}),
                                    (0, b.jsx)(a.Z, {
                                      children:
                                        "s" === B
                                          ? (0, b.jsx)(v.c, {
                                              children: "Receiver",
                                            })
                                          : (0, b.jsx)(v.c, {
                                              children: "Sender",
                                            }),
                                    }),
                                    (0, b.jsx)(a.Z, {
                                      children: (0, b.jsx)(v.c, {
                                        children: "Subject",
                                      }),
                                    }),
                                    (0, b.jsx)(a.Z, {
                                      children: (0, b.jsx)(v.c, {
                                        children: "Body",
                                      }),
                                    }),
                                    (0, b.jsx)(a.Z, {
                                      children: (0, b.jsx)(v.c, {
                                        children: "Date",
                                      }),
                                    }),
                                    "r" === B &&
                                      (0, b.jsx)(a.Z, {
                                        children: (0, b.jsx)(v.c, {
                                          children: "Read",
                                        }),
                                      }),
                                    (0, b.jsx)(a.Z, {
                                      children: (0, b.jsx)(v.c, {
                                        children: "Edit",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, b.jsx)(d.Z, {
                                children:
                                  s &&
                                  s.map(function (e, n) {
                                    var c = e.read;
                                    return (
                                      c || (c = void 0),
                                      (0, b.jsx)(b.Fragment, {
                                        children: (0, b.jsxs)(l.Z, {
                                          children: [
                                            (0, b.jsx)(a.Z, {
                                              children: n + 1,
                                            }),
                                            (0, b.jsx)(a.Z, {
                                              children:
                                                "s" === B
                                                  ? e.reciever.name
                                                  : e.sender.name,
                                            }),
                                            (0, b.jsx)(a.Z, {
                                              children: e.subject,
                                            }),
                                            (0, b.jsx)(a.Z, {
                                              children: e.body,
                                            }),
                                            (0, b.jsx)(a.Z, {
                                              children: new Date(
                                                e.created_at
                                              ).toLocaleDateString("en"),
                                            }),
                                            "r" === B &&
                                              (0, b.jsx)(a.Z, {
                                                children: (0, b.jsx)("div", {
                                                  class:
                                                    "form-check form-check-primary mt-3",
                                                  children: (0, b.jsxs)(
                                                    "label",
                                                    {
                                                      className:
                                                        "form-check-label",
                                                      children: [
                                                        (0, b.jsx)("input", {
                                                          disabled: e.read,
                                                          checked: c,
                                                          type: "checkbox",
                                                          onChange: function (
                                                            n
                                                          ) {
                                                            !(function (e) {
                                                              var n = $;
                                                              if (
                                                                n.includes(e)
                                                              ) {
                                                                var s =
                                                                  n.indexOf(e);
                                                                s > -1 &&
                                                                  n.splice(
                                                                    s,
                                                                    1
                                                                  );
                                                              } else n.push(e);
                                                              _(n);
                                                            })(e.id);
                                                          },
                                                        }),
                                                        (0, b.jsx)("i", {
                                                          className:
                                                            "input-helper mt-3",
                                                        }),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              }),
                                            (0, b.jsx)(a.Z, {
                                              children: (0, b.jsx)("button", {
                                                className: "edit-btn",
                                                onClick: function (n) {
                                                  return (function (e) {
                                                    var n = s.find(function (
                                                      n
                                                    ) {
                                                      return n.id === e.id;
                                                    });
                                                    S(n), D(!0);
                                                  })(e);
                                                },
                                                children: (0, b.jsx)(o.Z, {}),
                                              }),
                                            }),
                                          ],
                                        }),
                                      })
                                    );
                                  }),
                              }),
                            ],
                          }),
                        }),
                      (0, b.jsx)(u.Z, {
                        show: H,
                        onHide: function () {
                          return D(!1);
                        },
                        children: (0, b.jsxs)("form", {
                          onSubmit: function (e) {
                            if (
                              (e.preventDefault(),
                              Object.keys(w).every(function (e) {
                                return "" !== w[e];
                              }))
                            ) {
                              var n = w.subject,
                                s = w.body,
                                c = w.id,
                                r = w.sender,
                                i = w.reciever,
                                t = { subject: n, body: s, id: c };
                              (t.sender = r.id),
                                (t.reciever = i.id),
                                m.Z.putMessage(t)
                                  .then(function (e) {
                                    j.ZP.success("Message sent successfully"),
                                      G(B),
                                      S({}),
                                      T([]),
                                      D(!1);
                                  })
                                  .catch(function (e) {
                                    j.ZP.error(
                                      "There is a problem sending message"
                                    );
                                  });
                            } else
                              j.ZP.error(
                                (0, b.jsx)(v.c, {
                                  children: "Please fill all the fields",
                                })
                              );
                          },
                          children: [
                            (0, b.jsx)("h3", {
                              className: "mb-1",
                              children: (0, b.jsx)(v.c, {
                                children: "Edit Message",
                              }),
                            }),
                            (0, b.jsxs)("div", {
                              className: "d-flex flex-column",
                              children: [
                                (0, b.jsx)("label", {
                                  children: (0, b.jsx)(v.c, {
                                    children: "Subject",
                                  }),
                                }),
                                (0, b.jsx)("input", {
                                  onChange: I,
                                  type: "text",
                                  name: "subject",
                                  value: w.subject,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, b.jsxs)("div", {
                              className: "d-flex flex-column",
                              children: [
                                (0, b.jsx)("label", {
                                  children: (0, b.jsx)(v.c, {
                                    children: "Message body",
                                  }),
                                }),
                                (0, b.jsx)("textarea", {
                                  onChange: I,
                                  value: w.body,
                                  name: "body",
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, b.jsx)("button", {
                              type: "submit",
                              className: "w-100 save-btn mt-4",
                              children: (0, b.jsx)(v.c, { children: "Send" }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
              (0, b.jsx)(Z.rU, {
                to: "/message/new",
                children: (0, b.jsx)("button", {
                  className: "save-btn mt-4",
                  children: (0, b.jsx)(v.c, { children: "Send message" }),
                }),
              }),
              (0, b.jsx)("button", {
                onClick: function () {
                  m.Z.readMessage($)
                    .then(function (e) {
                      j.ZP.success(
                        (0, b.jsx)(v.c, {
                          children: "Messages readed succesfully",
                        })
                      ),
                        G(B);
                    })
                    .catch(function (e) {
                      j.ZP.error(
                        (0, b.jsx)(v.c, {
                          children: "Problem in reading messages",
                        })
                      );
                    });
                },
                className: "save-btn mt-4 ml-5",
                children: (0, b.jsx)(v.c, {
                  children: "Read selected messages",
                }),
              }),
            ],
          })
        );
      };
    },
    53596: function (e, n, s) {
      var c = s(15671),
        r = s(43144),
        i = s(74569),
        t = s.n(i),
        l = s(54318),
        a = "https://ukrapi.invgap.org/hr/",
        d = (function () {
          function e() {
            (0, c.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getFacilities",
                value: function () {
                  return t().get(a + "hr-helper/", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getHRList",
                value: function (e) {
                  return t().get(a + "?id=" + e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putHR",
                value: function (e) {
                  return t().put(a, e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "postHR",
                value: function (e) {
                  return t().post(a, e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "deleteHR",
                value: function (e) {
                  return t().delete(a, e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new d();
    },
    95907: function (e, n, s) {
      var c = s(80184);
      n.Z = function () {
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
    23821: function (e, n, s) {
      var c = s(39281),
        r = s(79836),
        i = s(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(c.Z, {
            children: (0, i.jsx)(r.Z, { children: n }),
          }),
        });
      };
    },
    12902: function (e, n, s) {
      s.d(n, {
        W: function () {
          return l;
        },
      });
      var c = s(29439),
        r = s(45987),
        i = s(22020),
        t = ["ns", "children"];
      function l(e) {
        var n = e.ns,
          s = e.children,
          l = (0, r.Z)(e, t),
          a = (0, i.$)(n, l),
          d = (0, c.Z)(a, 3),
          u = d[0],
          h = d[1],
          o = d[2];
        return s(u, { i18n: h, lng: h.language }, o);
      }
    },
    98163: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=6547.37935041.chunk.js.map
