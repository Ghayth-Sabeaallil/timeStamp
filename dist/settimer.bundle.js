(() => {
  var t = {
      649: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = new (n(543).default)();
        e.default = r;
      },
      543: function (t, e) {
        !(function (t) {
          "use strict";
          function e(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              e &&
                (r = r.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function n(t) {
            for (var n = 1; n < arguments.length; n++) {
              var r = null != arguments[n] ? arguments[n] : {};
              n % 2
                ? e(Object(r), !0).forEach(function (e) {
                    var n, o, i;
                    (n = t),
                      (o = e),
                      (i = r[e]),
                      (o = (function (t) {
                        var e = (function (t, e) {
                          if ("object" != typeof t || null === t) return t;
                          var n = t[Symbol.toPrimitive];
                          if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError(
                              "@@toPrimitive must return a primitive value."
                            );
                          }
                          return ("string" === e ? String : Number)(t);
                        })(t, "string");
                        return "symbol" == typeof e ? e : String(e);
                      })(o)) in n
                        ? Object.defineProperty(n, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (n[o] = i);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : e(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e)
                    );
                  });
            }
            return t;
          }
          function r(t) {
            return (
              (r =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    }),
              r(t)
            );
          }
          function o(t, e, n) {
            var r,
              o = "";
            if ((t = "number" == typeof t ? String(t) : t).length > e) return t;
            for (r = 0; r < e; r += 1) o += String(n);
            return (o + t).slice(-o.length);
          }
          function i() {
            this.reset();
          }
          function s() {
            this.events = {};
          }
          (i.prototype.toString = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ["hours", "minutes", "seconds"],
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : ":",
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 2;
            (t = t || ["hours", "minutes", "seconds"]),
              (e = e || ":"),
              (n = n || 2);
            var r,
              i = [];
            for (r = 0; r < t.length; r += 1)
              void 0 !== this[t[r]] &&
                ("secondTenths" === t[r]
                  ? i.push(this[t[r]])
                  : i.push(o(this[t[r]], n, "0")));
            return i.join(e);
          }),
            (i.prototype.reset = function () {
              (this.secondTenths = 0),
                (this.seconds = 0),
                (this.minutes = 0),
                (this.hours = 0),
                (this.days = 0);
            }),
            (s.prototype.on = function (t, e) {
              var n = this;
              return (
                Array.isArray(this.events[t]) || (this.events[t] = []),
                this.events[t].push(e),
                function () {
                  return n.removeListener(t, e);
                }
              );
            }),
            (s.prototype.removeListener = function (t, e) {
              if (Array.isArray(this.events[t])) {
                var n = this.events[t].indexOf(e);
                n > -1 && this.events[t].splice(n, 1);
              }
            }),
            (s.prototype.removeAllListeners = function (t) {
              t
                ? Array.isArray(this.events[t]) && (this.events[t] = [])
                : (this.events = {});
            }),
            (s.prototype.emit = function (t) {
              for (
                var e = this,
                  n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              Array.isArray(this.events[t]) &&
                this.events[t].forEach(function (t) {
                  return t.apply(e, r);
                });
            });
          var u = "secondTenths",
            c = "seconds",
            a = "minutes",
            f = "hours",
            l = "days",
            d = [u, c, a, f, l],
            h = {
              secondTenths: 100,
              seconds: 1e3,
              minutes: 6e4,
              hours: 36e5,
              days: 864e5,
            },
            v = { secondTenths: 10, seconds: 60, minutes: 60, hours: 24 };
          function p(t, e) {
            return ((t % e) + e) % e;
          }
          function y() {
            var t,
              e,
              o,
              y,
              m,
              g,
              b,
              w,
              O,
              j,
              E =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              T = new i(),
              A = new i(),
              S = new s(),
              P = !1,
              x = !1,
              L = {},
              D = { detail: { timer: this } };
            function V(t, e) {
              var n = A[e];
              return (
                (function (t, e) {
                  var n = v[t];
                  (A[t] = e),
                    (T[t] =
                      t === l ? Math.abs(e) : p(e >= 0 ? e : n - p(e, n), n));
                })(e, B(t, h[e])),
                A[e] !== n
              );
            }
            function k() {
              I(), T.reset(), A.reset();
            }
            function I() {
              clearInterval(t), (t = void 0), (P = !1), (x = !1);
            }
            function C(n) {
              var r;
              W() ? ((O = M()), (g = N(m.target))) : R(n),
                (r = h[e]),
                q(_(Date.now())) ||
                  ((t = setInterval(U, r)), (P = !0), (x = !1));
            }
            function M() {
              return _(Date.now()) - A.secondTenths * h[u] * o;
            }
            function U() {
              var t,
                e = _(Date.now());
              (t = $())[u] && K("secondTenthsUpdated", D),
                t[c] && K("secondsUpdated", D),
                t[a] && K("minutesUpdated", D),
                t[f] && K("hoursUpdated", D),
                t[l] && K("daysUpdated", D),
                y(D.detail.timer),
                q(e) && (G(), K("targetAchieved", D));
            }
            function $() {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : _(Date.now()),
                e = o > 0 ? t - O : O - t,
                n = {};
              return (
                (n[u] = V(e, u)),
                (n[c] = (function (t) {
                  return V(t, c);
                })(e)),
                (n[a] = (function (t) {
                  return V(t, a);
                })(e)),
                (n[f] = (function (t) {
                  return V(t, f);
                })(e)),
                (n[l] = (function (t) {
                  return V(t, l);
                })(e)),
                n
              );
            }
            function _(t) {
              return Math.floor(t / h[e]) * h[e];
            }
            function q(t) {
              return g instanceof Array && t >= j;
            }
            function R(t) {
              var n;
              (e = (function (t) {
                if (
                  ((e = t = "string" == typeof t ? t : c), !(d.indexOf(e) >= 0))
                )
                  throw new Error(
                    "Error in precision parameter: ".concat(
                      t,
                      " is not a valid value"
                    )
                  );
                var e;
                return t;
              })((t = t || {}).precision)),
                (y =
                  "function" == typeof t.callback
                    ? t.callback
                    : function () {}),
                (w = !0 === t.countdown),
                (o = !0 === w ? -1 : 1),
                "object" === r(t.startValues)
                  ? ((n = t.startValues),
                    (b = z(n)),
                    (T.secondTenths = b[0]),
                    (T.seconds = b[1]),
                    (T.minutes = b[2]),
                    (T.hours = b[3]),
                    (T.days = b[4]),
                    (A = F(b, A)))
                  : (b = null),
                (O = M()),
                $(),
                "object" === r(t.target)
                  ? (g = N(t.target))
                  : w
                  ? ((t.target = { seconds: 0 }), (g = N(t.target)))
                  : (g = null),
                (L = {
                  precision: e,
                  callback: y,
                  countdown: "object" === r(t) && !0 === t.countdown,
                  target: g,
                  startValues: b,
                }),
                (m = t);
            }
            function z(t) {
              var e;
              if ("object" === r(t))
                if (t instanceof Array) {
                  if (5 !== t.length) throw new Error("Array size not valid");
                  e = t;
                } else {
                  for (var n in t)
                    if (d.indexOf(n) < 0)
                      throw new Error(
                        "Error in startValues or target parameter: ".concat(
                          n,
                          " is not a valid input value"
                        )
                      );
                  e = [
                    t.secondTenths || 0,
                    t.seconds || 0,
                    t.minutes || 0,
                    t.hours || 0,
                    t.days || 0,
                  ];
                }
              e = e.map(function (t) {
                return parseInt(t, 10);
              });
              var o = e[0],
                i = e[1] + B(o, 10),
                s = e[2] + B(i, 60),
                u = e[3] + B(s, 60),
                c = e[4] + B(u, 24);
              return (
                (e[0] = o % 10),
                (e[1] = i % 60),
                (e[2] = s % 60),
                (e[3] = u % 24),
                (e[4] = c),
                e
              );
            }
            function B(t, e) {
              var n = t / e;
              return n < 0 ? Math.ceil(n) : Math.floor(n);
            }
            function N(t) {
              if (t) {
                var e = F((g = z(t)));
                return (j = O + e.secondTenths * h[u] * o), g;
              }
            }
            function F(t, e) {
              var n = e || {};
              return (
                (n.days = t[4]),
                (n.hours = 24 * n.days + t[3]),
                (n.minutes = 60 * n.hours + t[2]),
                (n.seconds = 60 * n.minutes + t[1]),
                (n.secondTenths = 10 * n.seconds + t[[0]]),
                n
              );
            }
            function G() {
              k(), K("stopped", D);
            }
            function H(t, e) {
              S.on(t, e);
            }
            function J(t, e) {
              S.removeListener(t, e);
            }
            function K(t, e) {
              S.emit(t, e);
            }
            function Q() {
              return P;
            }
            function W() {
              return x;
            }
            R(E),
              void 0 !== this &&
                ((this.start = function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (t = n(n({}, E), t)), Q() || (C(t), K("started", D));
                }),
                (this.pause = function () {
                  I(), (x = !0), K("paused", D);
                }),
                (this.stop = G),
                (this.reset = function () {
                  k(), C(m), K("reset", D);
                }),
                (this.isRunning = Q),
                (this.isPaused = W),
                (this.getTimeValues = function () {
                  return T;
                }),
                (this.getTotalTimeValues = function () {
                  return A;
                }),
                (this.getConfig = function () {
                  return L;
                }),
                (this.addEventListener = H),
                (this.on = H),
                (this.removeEventListener = J),
                (this.removeAllEventListeners = function (t) {
                  S.removeAllListeners(t);
                }),
                (this.off = J));
          }
          (t.Timer = y),
            (t.default = y),
            Object.defineProperty(t, "__esModule", { value: !0 });
        })(e);
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { exports: {} });
    return t[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (() => {
    "use strict";
    const t = n(649),
      e = document.getElementById("time-number");
    let r = parseInt(e.textContent);
    document
      .querySelector(".increase-time")
      .addEventListener("click", function () {
        (r = parseInt(e.textContent)),
          r < 60 && ((r += 5), (e.textContent = `${r}`)),
          console.log(r);
      }),
      document
        .querySelector(".decrease-time")
        .addEventListener("click", function () {
          (r = parseInt(e.textContent)),
            r > 5 && ((r -= 5), (e.textContent = `${r}`)),
            console.log(r);
        }),
      document
        .querySelector(".start-button")
        .addEventListener("click", function () {
          t.default.start({
            countdown: !0,
            startValues: { minutes: r },
            target: { seconds: 0 },
          }),
            t.default.addEventListener("secondsUpdated", function () {
              const e = t.default.getTimeValues();
              console.log(`Remaining time: ${e.minutes}, ${e.seconds}`);
            });
        });
  })();
})();