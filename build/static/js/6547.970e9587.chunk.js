"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [6547],
  {
    6547: function (e, n, t) {
      t.r(n);
      var s = t(4942),
        r = t(1413),
        i = t(70885),
        a = t(56890),
        c = t(35855),
        l = t(53994),
        u = t(53382),
        d = t(16536),
        o = t(72791),
        h = t(95907),
        x = t(23821),
        f = t(65218),
        j = (t(53596), t(59909)),
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
        m = t(80184);
      n.default = function () {
        var e = (0, o.useState)([]),
          n = (0, i.Z)(e, 2),
          t = n[0],
          v = n[1],
          b = (0, o.useState)({}),
          p = (0, i.Z)(b, 2),
          y = p[0],
          w = p[1],
          S = (0, o.useState)(!0),
          k = (0, i.Z)(S, 2),
          z = k[0],
          M = k[1],
          N = (0, o.useState)(null),
          A = (0, i.Z)(N, 2),
          R = (A[0], A[1], (0, o.useState)(!1)),
          C = (0, i.Z)(R, 2),
          P = C[0],
          F = C[1],
          H = (0, o.useState)([]),
          D = (0, i.Z)(H, 2),
          B = (D[0], D[1]),
          E = (0, o.useState)("r"),
          L = (0, i.Z)(E, 2),
          T = L[0],
          q = L[1];
        function O() {
          "r" === T
            ? Z.Z.getReceivedMessages()
                .then(function (e) {
                  v(e.data), M(!1);
                })
                .catch(function (e) {
                  f.ZP.error("There is a problem loading data"), M(!1);
                })
            : Z.Z.getSentMessages()
                .then(function (e) {
                  v(e.data), M(!1);
                })
                .catch(function (e) {
                  f.ZP.error("There is a problem loading data"), M(!1);
                });
        }
        function U(e) {
          var n = e.target,
            t = n.name,
            i = n.value;
          w((0, r.Z)((0, r.Z)({}, y), {}, (0, s.Z)({}, t, i)));
        }
        return (
          (0, o.useEffect)(function () {
            O();
          }, []),
          (0, m.jsxs)("div", {
            className: "item-class-page hr-page message-page",
            children: [
              (0, m.jsx)("h3", {
                className: "page-title mb-3",
                children: "Messages List",
              }),
              z
                ? (0, m.jsx)(j.Z, {})
                : (0, m.jsxs)(m.Fragment, {
                    children: [
                      (0, m.jsxs)("div", {
                        className: "row mb-4 mt-4",
                        children: [
                          (0, m.jsx)("div", {
                            className: "col-md-3 d-flex align-items-center",
                            children: (0, m.jsx)("h4", {
                              className: "page-title",
                              children: "Received or Sent messages",
                            }),
                          }),
                          (0, m.jsx)("div", {
                            className: "col-md-9 d-flex",
                            children: (0, m.jsxs)("select", {
                              name: "receivedOrSent",
                              onChange: function (e) {
                                q(e.target.value), M(!0), O();
                              },
                              value: T,
                              children: [
                                (0, m.jsx)("option", {
                                  value: "s",
                                  children: "Sent",
                                }),
                                (0, m.jsx)("option", {
                                  value: "r",
                                  children: "Received",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      t &&
                        t.length > 0 &&
                        (0, m.jsx)("div", {
                          children: (0, m.jsxs)(x.Z, {
                            children: [
                              (0, m.jsx)(a.Z, {
                                children: (0, m.jsxs)(c.Z, {
                                  children: [
                                    (0, m.jsx)(l.Z, {}),
                                    (0, m.jsx)(l.Z, {
                                      children:
                                        "s" === T ? "Receiver" : "Sender",
                                    }),
                                    (0, m.jsx)(l.Z, { children: "Subject" }),
                                    (0, m.jsx)(l.Z, { children: "Body" }),
                                    (0, m.jsx)(l.Z, { children: "Date" }),
                                    (0, m.jsx)(l.Z, { children: "Edit" }),
                                  ],
                                }),
                              }),
                              (0, m.jsx)(u.Z, {
                                children:
                                  t &&
                                  t.map(function (e, n) {
                                    return (0, m.jsx)(m.Fragment, {
                                      children: (0, m.jsxs)(c.Z, {
                                        children: [
                                          (0, m.jsx)(l.Z, { children: n + 1 }),
                                          (0, m.jsx)(l.Z, {
                                            children:
                                              "s" === T
                                                ? e.reciever.name
                                                : e.sender.name,
                                          }),
                                          (0, m.jsx)(l.Z, {
                                            children: e.subject,
                                          }),
                                          (0, m.jsx)(l.Z, { children: e.body }),
                                          (0, m.jsx)(l.Z, {
                                            children: new Date(
                                              e.created_at
                                            ).toLocaleDateString("en"),
                                          }),
                                          (0, m.jsx)(l.Z, {
                                            children: (0, m.jsx)("button", {
                                              className: "edit-btn",
                                              onClick: function (n) {
                                                return (function (e) {
                                                  var n = t.find(function (n) {
                                                    return n.id === e.id;
                                                  });
                                                  w(n), F(!0);
                                                })(e);
                                              },
                                              children: (0, m.jsx)(h.Z, {}),
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
                      (0, m.jsx)(d.Z, {
                        show: P,
                        onHide: function () {
                          return F(!1);
                        },
                        children: (0, m.jsxs)("form", {
                          onSubmit: function (e) {
                            if (
                              (e.preventDefault(),
                              Object.keys(y).every(function (e) {
                                return "" !== y[e];
                              }))
                            ) {
                              var n = y.subject,
                                t = y.body,
                                s = y.id,
                                r = y.sender,
                                i = y.reciever,
                                a = { subject: n, body: t, id: s };
                              (a.sender = r.id),
                                (a.reciever = i.id),
                                Z.Z.putMessage(a)
                                  .then(function (e) {
                                    f.ZP.success("Message sent successfully"),
                                      O(),
                                      w({}),
                                      B([]),
                                      F(!1);
                                  })
                                  .catch(function (e) {
                                    f.ZP.error(
                                      "There is a problem sending message"
                                    );
                                  });
                            } else f.ZP.error("Please fill all the fields");
                          },
                          children: [
                            (0, m.jsx)("h3", {
                              className: "mb-1",
                              children: "Edit Message",
                            }),
                            (0, m.jsxs)("div", {
                              className: "d-flex flex-column",
                              children: [
                                (0, m.jsx)("label", { children: "Subject" }),
                                (0, m.jsx)("input", {
                                  onChange: U,
                                  type: "text",
                                  name: "subject",
                                  value: y.subject,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, m.jsxs)("div", {
                              className: "d-flex flex-column",
                              children: [
                                (0, m.jsx)("label", {
                                  children: "Message Body",
                                }),
                                (0, m.jsx)("textarea", {
                                  onChange: U,
                                  value: y.body,
                                  name: "body",
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, m.jsx)("button", {
                              type: "submit",
                              className: "w-100 save-btn mt-4",
                              children: "Send",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
              (0, m.jsx)(g.rU, {
                to: "/message/new",
                children: (0, m.jsx)("button", {
                  className: "save-btn mt-4",
                  children: "Send Message",
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
        a = t.n(i),
        c = t(54318),
        l = "http://127.0.0.1:8000/hr/",
        u = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getFacilities",
                value: function () {
                  return a().get(l + "hr-helper/", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getHRList",
                value: function (e) {
                  return a().get(l + "?id=" + e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putHR",
                value: function (e) {
                  return a().put(l, e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "postHR",
                value: function (e) {
                  return a().post(l, e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "deleteHR",
                value: function (e) {
                  return a().delete(l, e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new u();
    },
    57641: function (e, n, t) {
      var s = t(15671),
        r = t(43144),
        i = t(74569),
        a = t.n(i),
        c = t(54318),
        l = "http://127.0.0.1:8000/message/",
        u = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getReceivedMessages",
                value: function () {
                  return a().get(l, { headers: { Authorization: (0, c.Z)() } });
                },
              },
              {
                key: "getSentMessages",
                value: function () {
                  return a().get(l + "?type=sender", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "sendMessage",
                value: function (e) {
                  return a().post(l, e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putMessage",
                value: function (e) {
                  return a().put(l, e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new u();
    },
    95907: function (e, n, t) {
      var s = t(80184);
      n.Z = function () {
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, s.jsx)("g", {
              children: (0, s.jsx)("g", {
                children: (0, s.jsx)("path", {
                  d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
                }),
              }),
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
    5227: function () {},
    87004: function () {},
    65487: function () {},
    2423: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=6547.970e9587.chunk.js.map
