"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [8122],
  {
    48122: function (e, n, s) {
      s.r(n);
      var t = s(4942),
        a = s(1413),
        i = s(29439),
        c = s(72791),
        r = s(57641),
        l = s(65218),
        u = s(59909),
        o = s(36167),
        d = (s(2423), s(98163), s(5227), s(30606)),
        h = s(80184);
      n.default = function () {
        var e = (0, c.useState)(!0),
          n = (0, i.Z)(e, 2),
          s = n[0],
          f = n[1],
          x = (0, c.useState)([]),
          m = (0, i.Z)(x, 2),
          g = m[0],
          j = m[1],
          v = (0, c.useState)(),
          Z = (0, i.Z)(v, 2),
          b = Z[0],
          p = Z[1],
          y = (0, c.useState)([]),
          S = (0, i.Z)(y, 2),
          k = S[0],
          N = S[1];
        function M(e) {
          var n = e.target,
            s = n.name,
            i = n.value;
          p((0, a.Z)((0, a.Z)({}, b), {}, (0, t.Z)({}, s, i)));
        }
        return (
          (0, c.useEffect)(function () {
            r.Z.getfacilities()
              .then(function (e) {
                var n = e.data;
                j(n), f(!1);
              })
              .catch(function (e) {
                l.ZP.error(
                  (0, h.jsx)(d.c, {
                    children: "There is a problem loading data",
                  })
                ),
                  f(!1);
              });
          }, []),
          (0, h.jsx)("div", {
            className: "new-message-page",
            children: s
              ? (0, h.jsx)(u.Z, {})
              : (0, h.jsx)("div", {
                  className: "container",
                  children: (0, h.jsxs)("form", {
                    onSubmit: function (e) {
                      if ((e.preventDefault(), 0 === k.length))
                        l.ZP.error(
                          (0, h.jsx)(d.c, {
                            children: "Please select at least one facility",
                          })
                        );
                      else {
                        var n = {
                          subject: b.subject,
                          body: b.body,
                          reciever: k.map(function (e) {
                            return e.value;
                          }),
                        };
                        r.Z.sendMessage(n)
                          .then(function (e) {
                            l.ZP.success(
                              (0, h.jsx)(d.c, {
                                children: "Message sent successfully",
                              })
                            ),
                              p({}),
                              N([]);
                          })
                          .catch(function (e) {
                            l.ZP.error(
                              (0, h.jsx)(d.c, {
                                children: "There is a problem sending message",
                              })
                            );
                          });
                      }
                    },
                    children: [
                      (0, h.jsx)("h3", {
                        className: "mb-1 page-title",
                        children: (0, h.jsx)(d.c, { children: "Send message" }),
                      }),
                      (0, h.jsxs)("div", {
                        className: "d-flex flex-column",
                        children: [
                          (0, h.jsx)("label", {
                            children: (0, h.jsx)(d.c, {
                              children: "Receivers",
                            }),
                          }),
                          (0, h.jsx)(o.NU, {
                            options: g.map(function (e) {
                              return { label: e.name, value: e.id };
                            }),
                            value: k,
                            onChange: N,
                            labelledBy: "Select",
                            className: "multi-select",
                          }),
                        ],
                      }),
                      (0, h.jsxs)("div", {
                        className: "d-flex flex-column",
                        children: [
                          (0, h.jsx)("label", {
                            children: (0, h.jsx)(d.c, { children: "Subject" }),
                          }),
                          (0, h.jsx)("input", {
                            onChange: M,
                            type: "text",
                            name: "subject",
                            required: !0,
                          }),
                        ],
                      }),
                      (0, h.jsxs)("div", {
                        className: "d-flex flex-column",
                        children: [
                          (0, h.jsx)("label", {
                            children: (0, h.jsx)(d.c, {
                              children: "Message body",
                            }),
                          }),
                          (0, h.jsx)("textarea", {
                            onChange: M,
                            name: "body",
                            required: !0,
                          }),
                        ],
                      }),
                      (0, h.jsx)("button", {
                        type: "submit",
                        className: "w-100 save-btn mt-4",
                        children: (0, h.jsx)(d.c, { children: "Send" }),
                      }),
                    ],
                  }),
                }),
          })
        );
      };
    },
    57641: function (e, n, s) {
      var t = s(15671),
        a = s(43144),
        i = (s(74569), s(39877)),
        c = s(54318),
        r = "https://demoapi2.invgap.org/message/",
        l = (function () {
          function e() {
            (0, t.Z)(this, e);
          }
          return (
            (0, a.Z)(e, [
              {
                key: "getReceivedMessages",
                value: function () {
                  return i.Z.get(r, { headers: { Authorization: (0, c.Z)() } });
                },
              },
              {
                key: "getSentMessages",
                value: function () {
                  return i.Z.get(r + "?type=sender", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "sendMessage",
                value: function (e) {
                  return i.Z.post(r, e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putMessage",
                value: function (e) {
                  return i.Z.put(r, e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getfacilities",
                value: function () {
                  return i.Z.get(r + "helper", {
                    headers: { Authorization: (0, c.Z)() },
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
//# sourceMappingURL=8122.220f9ae8.chunk.js.map
