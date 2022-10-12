"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [6547],
  {
    6547: function (e, n, t) {
      t.r(n);
      var s = t(4942),
        r = t(1413),
        i = t(29439),
        c = t(56890),
        a = t(35855),
        l = t(53994),
        d = t(53382),
        u = t(16536),
        h = t(72791),
        o = t(95907),
        x = t(23821),
        j = t(65218),
        f = (t(53596), t(59909)),
        Z = t(57641),
        g =
          (t(36167),
          t(93650),
          t(2423),
          t(65487),
          t(5227),
          t(87004),
          t(98163),
          t(91523)),
        m = t(30606),
        v = t(12902),
        b = t(80184);
      n.default = function () {
        var e = (0, h.useState)([]),
          n = (0, i.Z)(e, 2),
          t = n[0],
          p = n[1],
          y = (0, h.useState)({}),
          w = (0, i.Z)(y, 2),
          k = w[0],
          S = w[1],
          z = (0, h.useState)(!0),
          M = (0, i.Z)(z, 2),
          N = M[0],
          A = M[1],
          R = (0, h.useState)(null),
          C = (0, i.Z)(R, 2),
          P = (C[0], C[1], (0, h.useState)(!1)),
          F = (0, i.Z)(P, 2),
          H = F[0],
          D = F[1],
          E = (0, h.useState)([]),
          T = (0, i.Z)(E, 2),
          q = (T[0], T[1]),
          B = (0, h.useState)("r"),
          L = (0, i.Z)(B, 2),
          O = L[0],
          W = L[1];
        function U() {
          "s" === O
            ? Z.Z.getReceivedMessages()
                .then(function (e) {
                  p(e.data), A(!1);
                })
                .catch(function (e) {
                  j.ZP.error(
                    (0, b.jsx)(m.c, {
                      children: "There is a problem loading data",
                    })
                  ),
                    A(!1);
                })
            : Z.Z.getSentMessages()
                .then(function (e) {
                  p(e.data), A(!1);
                })
                .catch(function (e) {
                  j.ZP.error(
                    (0, b.jsx)(m.c, {
                      children: "There is a problem loading data",
                    })
                  ),
                    A(!1);
                });
        }
        function X(e) {
          var n = e.target,
            t = n.name,
            i = n.value;
          S((0, r.Z)((0, r.Z)({}, k), {}, (0, s.Z)({}, t, i)));
        }
        return (
          (0, h.useEffect)(function () {
            U();
          }, []),
          (0, b.jsxs)("div", {
            className: "item-class-page hr-page message-page",
            children: [
              (0, b.jsx)("h3", {
                className: "page-title mb-3",
                children: (0, b.jsx)(m.c, { children: "Messages list" }),
              }),
              N
                ? (0, b.jsx)(f.Z, {})
                : (0, b.jsxs)(b.Fragment, {
                    children: [
                      (0, b.jsxs)("div", {
                        className: "row mb-4 mt-4",
                        children: [
                          (0, b.jsx)("div", {
                            className: "col-md-3 d-flex align-items-center",
                            children: (0, b.jsx)("h4", {
                              children: (0, b.jsx)(m.c, {
                                children: "Received or sent messages",
                              }),
                            }),
                          }),
                          (0, b.jsx)("div", {
                            className: "col-md-9 d-flex",
                            children: (0, b.jsxs)("select", {
                              name: "receivedOrSent",
                              onChange: function (e) {
                                W(e.target.value), A(!0), U();
                              },
                              value: O,
                              children: [
                                (0, b.jsx)(v.W, {
                                  children: function (e, n) {
                                    n.i18n;
                                    return (0, b.jsx)("option", {
                                      value: "s",
                                      children: e("Sent"),
                                    });
                                  },
                                }),
                                (0, b.jsx)(v.W, {
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
                      t &&
                        t.length > 0 &&
                        (0, b.jsx)("div", {
                          children: (0, b.jsxs)(x.Z, {
                            children: [
                              (0, b.jsx)(c.Z, {
                                children: (0, b.jsxs)(a.Z, {
                                  children: [
                                    (0, b.jsx)(l.Z, {}),
                                    (0, b.jsx)(l.Z, {
                                      children:
                                        "s" === O
                                          ? (0, b.jsx)(m.c, {
                                              children: "Receiver",
                                            })
                                          : (0, b.jsx)(m.c, {
                                              children: "Sender",
                                            }),
                                    }),
                                    (0, b.jsx)(l.Z, {
                                      children: (0, b.jsx)(m.c, {
                                        children: "Subject",
                                      }),
                                    }),
                                    (0, b.jsx)(l.Z, {
                                      children: (0, b.jsx)(m.c, {
                                        children: "Body",
                                      }),
                                    }),
                                    (0, b.jsx)(l.Z, {
                                      children: (0, b.jsx)(m.c, {
                                        children: "Date",
                                      }),
                                    }),
                                    (0, b.jsx)(l.Z, {
                                      children: (0, b.jsx)(m.c, {
                                        children: "Edit",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, b.jsx)(d.Z, {
                                children:
                                  t &&
                                  t.map(function (e, n) {
                                    return (0, b.jsx)(b.Fragment, {
                                      children: (0, b.jsxs)(a.Z, {
                                        children: [
                                          (0, b.jsx)(l.Z, { children: n + 1 }),
                                          (0, b.jsx)(l.Z, {
                                            children:
                                              "s" === O
                                                ? e.reciever.name
                                                : e.sender.name,
                                          }),
                                          (0, b.jsx)(l.Z, {
                                            children: e.subject,
                                          }),
                                          (0, b.jsx)(l.Z, { children: e.body }),
                                          (0, b.jsx)(l.Z, {
                                            children: new Date(
                                              e.created_at
                                            ).toLocaleDateString("en"),
                                          }),
                                          (0, b.jsx)(l.Z, {
                                            children: (0, b.jsx)("button", {
                                              className: "edit-btn",
                                              onClick: function (n) {
                                                return (function (e) {
                                                  var n = t.find(function (n) {
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
                                    });
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
                              Object.keys(k).every(function (e) {
                                return "" !== k[e];
                              }))
                            ) {
                              var n = k.subject,
                                t = k.body,
                                s = k.id,
                                r = k.sender,
                                i = k.reciever,
                                c = { subject: n, body: t, id: s };
                              (c.sender = r.id),
                                (c.reciever = i.id),
                                Z.Z.putMessage(c)
                                  .then(function (e) {
                                    j.ZP.success("Message sent successfully"),
                                      U(),
                                      S({}),
                                      q([]),
                                      D(!1);
                                  })
                                  .catch(function (e) {
                                    j.ZP.error(
                                      "There is a problem sending message"
                                    );
                                  });
                            } else
                              j.ZP.error(
                                (0, b.jsx)(m.c, {
                                  children: "Please fill all the fields",
                                })
                              );
                          },
                          children: [
                            (0, b.jsx)("h3", {
                              className: "mb-1",
                              children: (0, b.jsx)(m.c, {
                                children: "Edit Message",
                              }),
                            }),
                            (0, b.jsxs)("div", {
                              className: "d-flex flex-column",
                              children: [
                                (0, b.jsx)("label", {
                                  children: (0, b.jsx)(m.c, {
                                    children: "Subject",
                                  }),
                                }),
                                (0, b.jsx)("input", {
                                  onChange: X,
                                  type: "text",
                                  name: "subject",
                                  value: k.subject,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, b.jsxs)("div", {
                              className: "d-flex flex-column",
                              children: [
                                (0, b.jsx)("label", {
                                  children: (0, b.jsx)(m.c, {
                                    children: "Message body",
                                  }),
                                }),
                                (0, b.jsx)("textarea", {
                                  onChange: X,
                                  value: k.body,
                                  name: "body",
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, b.jsx)("button", {
                              type: "submit",
                              className: "w-100 save-btn mt-4",
                              children: (0, b.jsx)(m.c, { children: "Send" }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
              (0, b.jsx)(g.rU, {
                to: "/message/new",
                children: (0, b.jsx)("button", {
                  className: "save-btn mt-4",
                  children: (0, b.jsx)(m.c, { children: "Send message" }),
                }),
              }),
            ],
          })
        );
      };
    },
    53596: function (e, n, t) {
      var s = t(15671),
        r = t(43144),
        i = t(74569),
        c = t.n(i),
        a = t(54318),
        l = "https://demoapi1.invgap.org/hr/",
        d = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getFacilities",
                value: function () {
                  return c().get(l + "hr-helper/", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getHRList",
                value: function (e) {
                  return c().get(l + "?id=" + e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putHR",
                value: function (e) {
                  return c().put(l, e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "postHR",
                value: function (e) {
                  return c().post(l, e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "deleteHR",
                value: function (e) {
                  return c().delete(l, e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new d();
    },
    57641: function (e, n, t) {
      var s = t(15671),
        r = t(43144),
        i = t(74569),
        c = t.n(i),
        a = t(54318),
        l = "https://demoapi1.invgap.org/message/",
        d = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getReceivedMessages",
                value: function () {
                  return c().get(l, { headers: { Authorization: (0, a.Z)() } });
                },
              },
              {
                key: "getSentMessages",
                value: function () {
                  return c().get(l + "?type=sender", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "sendMessage",
                value: function (e) {
                  return c().post(l, e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putMessage",
                value: function (e) {
                  return c().put(l, e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new d();
    },
    95907: function (e, n, t) {
      var s = t(80184);
      n.Z = function () {
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            width: "20",
            height: "20",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, s.jsx)("path", {
              d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
            }),
          }),
        });
      };
    },
    23821: function (e, n, t) {
      var s = t(39281),
        r = t(79836),
        i = t(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(s.Z, {
            children: (0, i.jsx)(r.Z, { children: n }),
          }),
        });
      };
    },
    98163: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=6547.5d0bf255.chunk.js.map
