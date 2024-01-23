(() => {
  var t = {
      677: function (t, e, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          new (r(n(543)).default)(),
          console.log("Hello world"),
          console.log("Hello world");
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
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                          }
                          return ("string" === e ? String : Number)(t);
                        })(t, "string");
                        return "symbol" == typeof e ? e : String(e);
                      })(o)) in n
                        ? Object.defineProperty(n, o, { value: i, enumerable: !0, configurable: !0, writable: !0 })
                        : (n[o] = i);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : e(Object(r)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  });
            }
            return t;
          }
          function r(t) {
            return (
              (r =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
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
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["hours", "minutes", "seconds"],
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ":",
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
            (t = t || ["hours", "minutes", "seconds"]), (e = e || ":"), (n = n || 2);
            var r,
              i = [];
            for (r = 0; r < t.length; r += 1)
              void 0 !== this[t[r]] && ("secondTenths" === t[r] ? i.push(this[t[r]]) : i.push(o(this[t[r]], n, "0")));
            return i.join(e);
          }),
            (i.prototype.reset = function () {
              (this.secondTenths = 0), (this.seconds = 0), (this.minutes = 0), (this.hours = 0), (this.days = 0);
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
              t ? Array.isArray(this.events[t]) && (this.events[t] = []) : (this.events = {});
            }),
            (s.prototype.emit = function (t) {
              for (var e = this, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
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
            h = [u, c, a, f, l],
            d = { secondTenths: 100, seconds: 1e3, minutes: 6e4, hours: 36e5, days: 864e5 },
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
              A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              T = new i(),
              P = new i(),
              S = new s(),
              E = !1,
              D = !1,
              x = {},
              L = { detail: { timer: this } };
            function _(t, e) {
              var n = P[e];
              return (
                (function (t, e) {
                  var n = v[t];
                  (P[t] = e), (T[t] = t === l ? Math.abs(e) : p(e >= 0 ? e : n - p(e, n), n));
                })(e, q(t, d[e])),
                P[e] !== n
              );
            }
            function M() {
              V(), T.reset(), P.reset();
            }
            function V() {
              clearInterval(t), (t = void 0), (E = !1), (D = !1);
            }
            function U(n) {
              var r;
              X() ? ((O = k()), (g = B(m.target))) : N(n),
                (r = d[e]),
                C(z(Date.now())) || ((t = setInterval(I, r)), (E = !0), (D = !1));
            }
            function k() {
              return z(Date.now()) - P.secondTenths * d[u] * o;
            }
            function I() {
              var t,
                e = z(Date.now());
              (t = H())[u] && Q("secondTenthsUpdated", L),
                t[c] && Q("secondsUpdated", L),
                t[a] && Q("minutesUpdated", L),
                t[f] && Q("hoursUpdated", L),
                t[l] && Q("daysUpdated", L),
                y(L.detail.timer),
                C(e) && (G(), Q("targetAchieved", L));
            }
            function H() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z(Date.now()),
                e = o > 0 ? t - O : O - t,
                n = {};
              return (
                (n[u] = _(e, u)),
                (n[c] = (function (t) {
                  return _(t, c);
                })(e)),
                (n[a] = (function (t) {
                  return _(t, a);
                })(e)),
                (n[f] = (function (t) {
                  return _(t, f);
                })(e)),
                (n[l] = (function (t) {
                  return _(t, l);
                })(e)),
                n
              );
            }
            function z(t) {
              return Math.floor(t / d[e]) * d[e];
            }
            function C(t) {
              return g instanceof Array && t >= j;
            }
            function N(t) {
              var n;
              (e = (function (t) {
                if (((e = t = "string" == typeof t ? t : c), !(h.indexOf(e) >= 0)))
                  throw new Error("Error in precision parameter: ".concat(t, " is not a valid value"));
                var e;
                return t;
              })((t = t || {}).precision)),
                (y = "function" == typeof t.callback ? t.callback : function () {}),
                (w = !0 === t.countdown),
                (o = !0 === w ? -1 : 1),
                "object" === r(t.startValues)
                  ? ((n = t.startValues),
                    (b = R(n)),
                    (T.secondTenths = b[0]),
                    (T.seconds = b[1]),
                    (T.minutes = b[2]),
                    (T.hours = b[3]),
                    (T.days = b[4]),
                    (P = F(b, P)))
                  : (b = null),
                (O = k()),
                H(),
                "object" === r(t.target)
                  ? (g = B(t.target))
                  : w
                  ? ((t.target = { seconds: 0 }), (g = B(t.target)))
                  : (g = null),
                (x = {
                  precision: e,
                  callback: y,
                  countdown: "object" === r(t) && !0 === t.countdown,
                  target: g,
                  startValues: b,
                }),
                (m = t);
            }
            function R(t) {
              var e;
              if ("object" === r(t))
                if (t instanceof Array) {
                  if (5 !== t.length) throw new Error("Array size not valid");
                  e = t;
                } else {
                  for (var n in t)
                    if (h.indexOf(n) < 0)
                      throw new Error(
                        "Error in startValues or target parameter: ".concat(n, " is not a valid input value")
                      );
                  e = [t.secondTenths || 0, t.seconds || 0, t.minutes || 0, t.hours || 0, t.days || 0];
                }
              e = e.map(function (t) {
                return parseInt(t, 10);
              });
              var o = e[0],
                i = e[1] + q(o, 10),
                s = e[2] + q(i, 60),
                u = e[3] + q(s, 60),
                c = e[4] + q(u, 24);
              return (e[0] = o % 10), (e[1] = i % 60), (e[2] = s % 60), (e[3] = u % 24), (e[4] = c), e;
            }
            function q(t, e) {
              var n = t / e;
              return n < 0 ? Math.ceil(n) : Math.floor(n);
            }
            function B(t) {
              if (t) {
                var e = F((g = R(t)));
                return (j = O + e.secondTenths * d[u] * o), g;
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
              M(), Q("stopped", L);
            }
            function J(t, e) {
              S.on(t, e);
            }
            function K(t, e) {
              S.removeListener(t, e);
            }
            function Q(t, e) {
              S.emit(t, e);
            }
            function W() {
              return E;
            }
            function X() {
              return D;
            }
            N(A),
              void 0 !== this &&
                ((this.start = function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (t = n(n({}, A), t)), W() || (U(t), Q("started", L));
                }),
                (this.pause = function () {
                  V(), (D = !0), Q("paused", L);
                }),
                (this.stop = G),
                (this.reset = function () {
                  M(), U(m), Q("reset", L);
                }),
                (this.isRunning = W),
                (this.isPaused = X),
                (this.getTimeValues = function () {
                  return T;
                }),
                (this.getTotalTimeValues = function () {
                  return P;
                }),
                (this.getConfig = function () {
                  return x;
                }),
                (this.addEventListener = J),
                (this.on = J),
                (this.removeEventListener = K),
                (this.removeAllEventListeners = function (t) {
                  S.removeAllListeners(t);
                }),
                (this.off = K));
          }
          (t.Timer = y), (t.default = y), Object.defineProperty(t, "__esModule", { value: !0 });
        })(e);
      },
    },
    e = {};
  !(function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { exports: {} });
    return t[r].call(i.exports, i, i.exports, n), i.exports;
  })(677);
})();
