"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [8122],
  {
    48122: function (e, t, n) {
      n.r(t);
      var s = n(4942),
        a = n(1413),
        r = n(29439),
        i = n(72791),
        u = n(53596),
        c = n(57641),
        l = n(65218),
        o = n(59909),
        d = n(36167),
        h = (n(2423), n(98163), n(5227), n(30606)),
        f = n(80184);
      t.default = function () {
        var e = (0, i.useState)(!0),
          t = (0, r.Z)(e, 2),
          n = t[0],
          v = t[1],
          g = (0, i.useState)([]),
          m = (0, r.Z)(g, 2),
          x = m[0],
          Z = m[1],
          j = (0, i.useState)(),
          p = (0, r.Z)(j, 2),
          b = p[0],
          y = p[1],
          k = (0, i.useState)([]),
          S = (0, r.Z)(k, 2),
          z = S[0],
          A = S[1];
        function N(e) {
          var t = e.target,
            n = t.name,
            r = t.value;
          y((0, a.Z)((0, a.Z)({}, b), {}, (0, s.Z)({}, n, r)));
        }
        return (
          (0, i.useEffect)(function () {
            u.Z.getFacilities()
              .then(function (e) {
                var t = e.data;
                Z(t), v(!1);
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
            children: n
              ? (0, f.jsx)(o.Z, {})
              : (0, f.jsx)("div", {
                  className: "container",
                  children: (0, f.jsxs)("form", {
                    onSubmit: function (e) {
                      if ((e.preventDefault(), 0 === z.length))
                        l.ZP.error("Please select at least one facility");
                      else {
                        var t = {
                          subject: b.subject,
                          body: b.body,
                          reciever: z.map(function (e) {
                            return e.value;
                          }),
                        };
                        c.Z.sendMessage(t)
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
                            options: x.map(function (e) {
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
    53596: function (e, t, n) {
      var s = n(15671),
        a = n(43144),
        r = n(74569),
        i = n.n(r),
        u = n(54318),
        c = "http://46.105.58.235:8000/hr/",
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
      t.Z = new l();
    },
    57641: function (e, t, n) {
      var s = n(15671),
        a = n(43144),
        r = n(74569),
        i = n.n(r),
        u = n(54318),
        c = "http://46.105.58.235:8000/message/",
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
      t.Z = new l();
    },
    98163: function () {},
  },
]);
//# sourceMappingURL=8122.6185371b.chunk.js.map