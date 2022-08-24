"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [8122],
  {
    48122: function (e, t, n) {
      n.r(t);
      var s = n(4942),
        a = n(1413),
        r = n(70885),
        u = n(72791),
        i = n(53596),
        c = n(57641),
        o = n(65218),
        l = n(59909),
        d = n(36167),
        h = (n(2423), n(98163), n(5227), n(80184));
      t.default = function () {
        var e = (0, u.useState)(!0),
          t = (0, r.Z)(e, 2),
          n = t[0],
          f = t[1],
          v = (0, u.useState)([]),
          Z = (0, r.Z)(v, 2),
          g = Z[0],
          m = Z[1],
          p = (0, u.useState)(),
          x = (0, r.Z)(p, 2),
          b = x[0],
          y = x[1],
          j = (0, u.useState)([]),
          k = (0, r.Z)(j, 2),
          S = k[0],
          z = k[1];
        function A(e) {
          var t = e.target,
            n = t.name,
            r = t.value;
          y((0, a.Z)((0, a.Z)({}, b), {}, (0, s.Z)({}, n, r)));
        }
        return (
          (0, u.useEffect)(function () {
            i.Z.getFacilities()
              .then(function (e) {
                var t = e.data;
                m(t), f(!1);
              })
              .catch(function (e) {
                o.ZP.error("There is a problem loading data"), f(!1);
              });
          }, []),
          (0, h.jsx)("div", {
            className: "new-message-page",
            children: n
              ? (0, h.jsx)(l.Z, {})
              : (0, h.jsx)("div", {
                  className: "container",
                  children: (0, h.jsxs)("form", {
                    onSubmit: function (e) {
                      if ((e.preventDefault(), 0 === S.length))
                        o.ZP.error("Please select at least one facility");
                      else {
                        var t = {
                          subject: b.subject,
                          body: b.body,
                          reciever: S.map(function (e) {
                            return e.value;
                          }),
                        };
                        c.Z.sendMessage(t)
                          .then(function (e) {
                            o.ZP.success("Message sent successfully"),
                              y({}),
                              z([]);
                          })
                          .catch(function (e) {
                            o.ZP.error("There is a problem sending message");
                          });
                      }
                    },
                    children: [
                      (0, h.jsx)("h3", {
                        className: "mb-1",
                        children: "Send Message",
                      }),
                      (0, h.jsxs)("div", {
                        className: "d-flex flex-column",
                        children: [
                          (0, h.jsx)("label", { children: "Receivers" }),
                          (0, h.jsx)(d.NU, {
                            options: g.map(function (e) {
                              return { label: e.name, value: e.id };
                            }),
                            value: S,
                            onChange: z,
                            labelledBy: "Select",
                          }),
                        ],
                      }),
                      (0, h.jsxs)("div", {
                        className: "d-flex flex-column",
                        children: [
                          (0, h.jsx)("label", { children: "Subject" }),
                          (0, h.jsx)("input", {
                            onChange: A,
                            type: "text",
                            name: "subject",
                            required: !0,
                          }),
                        ],
                      }),
                      (0, h.jsxs)("div", {
                        className: "d-flex flex-column",
                        children: [
                          (0, h.jsx)("label", { children: "Message Body" }),
                          (0, h.jsx)("textarea", {
                            onChange: A,
                            name: "body",
                            required: !0,
                          }),
                        ],
                      }),
                      (0, h.jsx)("button", {
                        type: "submit",
                        className: "w-100 save-btn mt-4",
                        children: "Send",
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
        u = n.n(r),
        i = n(54318),
        c = "http://127.0.0.1:8000/hr/",
        o = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, a.Z)(e, [
              {
                key: "getFacilities",
                value: function () {
                  return u().get(c + "hr-helper/", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getHRList",
                value: function (e) {
                  return u().get(c + "?id=" + e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "putHR",
                value: function (e) {
                  return u().put(c, e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "postHR",
                value: function (e) {
                  return u().post(c, e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "deleteHR",
                value: function (e) {
                  return u().delete(c, e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new o();
    },
    57641: function (e, t, n) {
      var s = n(15671),
        a = n(43144),
        r = n(74569),
        u = n.n(r),
        i = n(54318),
        c = "http://127.0.0.1:8000/message/",
        o = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, a.Z)(e, [
              {
                key: "getReceivedMessages",
                value: function () {
                  return u().get(c, { headers: { Authorization: (0, i.Z)() } });
                },
              },
              {
                key: "getSentMessages",
                value: function () {
                  return u().get(c + "?type=sender", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "sendMessage",
                value: function (e) {
                  return u().post(c, e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "putMessage",
                value: function (e) {
                  return u().put(c, e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new o();
    },
    98163: function () {},
    5227: function () {},
    2423: function () {},
  },
]);
//# sourceMappingURL=8122.ec298114.chunk.js.map
