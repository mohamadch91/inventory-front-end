"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [8122],
  {
    48122: function (e, n, t) {
      t.r(n);
      var s = t(4942),
        a = t(1413),
        r = t(29439),
        i = t(72791),
        u = t(53596),
        c = t(57641),
        l = t(65218),
        o = t(59909),
        d = t(36167),
        h = (t(2423), t(98163), t(5227), t(30606)),
        f = t(80184);
      n.default = function () {
        var e = (0, i.useState)(!0),
          n = (0, r.Z)(e, 2),
          t = n[0],
          v = n[1],
          g = (0, i.useState)([]),
          m = (0, r.Z)(g, 2),
          p = m[0],
          x = m[1],
          Z = (0, i.useState)(),
          j = (0, r.Z)(Z, 2),
          b = j[0],
          y = j[1],
          k = (0, i.useState)([]),
          S = (0, r.Z)(k, 2),
          z = S[0],
          A = S[1];
        function N(e) {
          var n = e.target,
            t = n.name,
            r = n.value;
          y((0, a.Z)((0, a.Z)({}, b), {}, (0, s.Z)({}, t, r)));
        }
        return (
          (0, i.useEffect)(function () {
            u.Z.getFacilities()
              .then(function (e) {
                var n = e.data;
                x(n), v(!1);
              })
              .catch(function (e) {
                l.ZP.error(
                  (0, f.jsx)(h.c, {
                    children: "There is a problem loading data",
                  })
                ),
                  v(!1);
              });
          }, []),
          (0, f.jsx)("div", {
            className: "new-message-page",
            children: t
              ? (0, f.jsx)(o.Z, {})
              : (0, f.jsx)("div", {
                  className: "container",
                  children: (0, f.jsxs)("form", {
                    onSubmit: function (e) {
                      if ((e.preventDefault(), 0 === z.length))
                        l.ZP.error("Please select at least one facility");
                      else {
                        var n = {
                          subject: b.subject,
                          body: b.body,
                          reciever: z.map(function (e) {
                            return e.value;
                          }),
                        };
                        c.Z.sendMessage(n)
                          .then(function (e) {
                            l.ZP.success("Message sent successfully"),
                              y({}),
                              A([]);
                          })
                          .catch(function (e) {
                            l.ZP.error("There is a problem sending message");
                          });
                      }
                    },
                    children: [
                      (0, f.jsx)("h3", {
                        className: "mb-1 page-title",
                        children: (0, f.jsx)(h.c, { children: "Send message" }),
                      }),
                      (0, f.jsxs)("div", {
                        className: "d-flex flex-column",
                        children: [
                          (0, f.jsx)("label", {
                            children: (0, f.jsx)(h.c, {
                              children: "Receivers",
                            }),
                          }),
                          (0, f.jsx)(d.NU, {
                            options: p.map(function (e) {
                              return { label: e.name, value: e.id };
                            }),
                            value: z,
                            onChange: A,
                            labelledBy: "Select",
                            className: "multi-select",
                          }),
                        ],
                      }),
                      (0, f.jsxs)("div", {
                        className: "d-flex flex-column",
                        children: [
                          (0, f.jsx)("label", {
                            children: (0, f.jsx)(h.c, { children: "Subject" }),
                          }),
                          (0, f.jsx)("input", {
                            onChange: N,
                            type: "text",
                            name: "subject",
                            required: !0,
                          }),
                        ],
                      }),
                      (0, f.jsxs)("div", {
                        className: "d-flex flex-column",
                        children: [
                          (0, f.jsx)("label", {
                            children: (0, f.jsx)(h.c, {
                              children: "Message body",
                            }),
                          }),
                          (0, f.jsx)("textarea", {
                            onChange: N,
                            name: "body",
                            required: !0,
                          }),
                        ],
                      }),
                      (0, f.jsx)("button", {
                        type: "submit",
                        className: "w-100 save-btn mt-4",
                        children: (0, f.jsx)(h.c, { children: "Send" }),
                      }),
                    ],
                  }),
                }),
          })
        );
      };
    },
    53596: function (e, n, t) {
      var s = t(15671),
        a = t(43144),
        r = t(74569),
        i = t.n(r),
        u = t(54318),
        c = "https://demoapi1.invgap.org/hr/",
        l = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, a.Z)(e, [
              {
                key: "getFacilities",
                value: function () {
                  return i().get(c + "hr-helper/", {
                    headers: { Authorization: (0, u.Z)() },
                  });
                },
              },
              {
                key: "getHRList",
                value: function (e) {
                  return i().get(c + "?id=" + e, {
                    headers: { Authorization: (0, u.Z)() },
                  });
                },
              },
              {
                key: "putHR",
                value: function (e) {
                  return i().put(c, e, {
                    headers: { Authorization: (0, u.Z)() },
                  });
                },
              },
              {
                key: "postHR",
                value: function (e) {
                  return i().post(c, e, {
                    headers: { Authorization: (0, u.Z)() },
                  });
                },
              },
              {
                key: "deleteHR",
                value: function (e) {
                  return i().delete(c, e, {
                    headers: { Authorization: (0, u.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new l();
    },
    57641: function (e, n, t) {
      var s = t(15671),
        a = t(43144),
        r = t(74569),
        i = t.n(r),
        u = t(54318),
        c = "https://demoapi1.invgap.org/message/",
        l = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, a.Z)(e, [
              {
                key: "getReceivedMessages",
                value: function () {
                  return i().get(c, { headers: { Authorization: (0, u.Z)() } });
                },
              },
              {
                key: "getSentMessages",
                value: function () {
                  return i().get(c + "?type=sender", {
                    headers: { Authorization: (0, u.Z)() },
                  });
                },
              },
              {
                key: "sendMessage",
                value: function (e) {
                  return i().post(c, e, {
                    headers: { Authorization: (0, u.Z)() },
                  });
                },
              },
              {
                key: "putMessage",
                value: function (e) {
                  return i().put(c, e, {
                    headers: { Authorization: (0, u.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new l();
    },
    98163: function () {},
  },
]);
//# sourceMappingURL=8122.571320d7.chunk.js.map
