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
    h = "days",
    l = [u, c, a, f, h],
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
      b,
      g,
      w,
      O,
      j,
      A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      T = new i(),
      P = new i(),
      S = new s(),
      E = !1,
      D = !1,
      L = {},
      V = { detail: { timer: this } };
    function M(t, e) {
      var n = P[e];
      return (
        (function (t, e) {
          var n = v[t];
          (P[t] = e), (T[t] = t === h ? Math.abs(e) : p(e >= 0 ? e : n - p(e, n), n));
        })(e, B(t, d[e])),
        P[e] !== n
      );
    }
    function U() {
      k(), T.reset(), P.reset();
    }
    function k() {
      clearInterval(t), (t = void 0), (E = !1), (D = !1);
    }
    function x(n) {
      var r;
      X() ? ((O = I()), (b = F(m.target))) : R(n),
        (r = d[e]),
        N(C(Date.now())) || ((t = setInterval(_, r)), (E = !0), (D = !1));
    }
    function I() {
      return C(Date.now()) - P.secondTenths * d[u] * o;
    }
    function _() {
      var t,
        e = C(Date.now());
      (t = z())[u] && Q("secondTenthsUpdated", V),
        t[c] && Q("secondsUpdated", V),
        t[a] && Q("minutesUpdated", V),
        t[f] && Q("hoursUpdated", V),
        t[h] && Q("daysUpdated", V),
        y(V.detail.timer),
        N(e) && (H(), Q("targetAchieved", V));
    }
    function z() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C(Date.now()),
        e = o > 0 ? t - O : O - t,
        n = {};
      return (
        (n[u] = M(e, u)),
        (n[c] = (function (t) {
          return M(t, c);
        })(e)),
        (n[a] = (function (t) {
          return M(t, a);
        })(e)),
        (n[f] = (function (t) {
          return M(t, f);
        })(e)),
        (n[h] = (function (t) {
          return M(t, h);
        })(e)),
        n
      );
    }
    function C(t) {
      return Math.floor(t / d[e]) * d[e];
    }
    function N(t) {
      return b instanceof Array && t >= j;
    }
    function R(t) {
      var n;
      (e = (function (t) {
        if (((e = t = "string" == typeof t ? t : c), !(l.indexOf(e) >= 0)))
          throw new Error("Error in precision parameter: ".concat(t, " is not a valid value"));
        var e;
        return t;
      })((t = t || {}).precision)),
        (y = "function" == typeof t.callback ? t.callback : function () {}),
        (w = !0 === t.countdown),
        (o = !0 === w ? -1 : 1),
        "object" === r(t.startValues)
          ? ((n = t.startValues),
            (g = q(n)),
            (T.secondTenths = g[0]),
            (T.seconds = g[1]),
            (T.minutes = g[2]),
            (T.hours = g[3]),
            (T.days = g[4]),
            (P = G(g, P)))
          : (g = null),
        (O = I()),
        z(),
        "object" === r(t.target)
          ? (b = F(t.target))
          : w
          ? ((t.target = { seconds: 0 }), (b = F(t.target)))
          : (b = null),
        (L = {
          precision: e,
          callback: y,
          countdown: "object" === r(t) && !0 === t.countdown,
          target: b,
          startValues: g,
        }),
        (m = t);
    }
    function q(t) {
      var e;
      if ("object" === r(t))
        if (t instanceof Array) {
          if (5 !== t.length) throw new Error("Array size not valid");
          e = t;
        } else {
          for (var n in t)
            if (l.indexOf(n) < 0)
              throw new Error("Error in startValues or target parameter: ".concat(n, " is not a valid input value"));
          e = [t.secondTenths || 0, t.seconds || 0, t.minutes || 0, t.hours || 0, t.days || 0];
        }
      e = e.map(function (t) {
        return parseInt(t, 10);
      });
      var o = e[0],
        i = e[1] + B(o, 10),
        s = e[2] + B(i, 60),
        u = e[3] + B(s, 60),
        c = e[4] + B(u, 24);
      return (e[0] = o % 10), (e[1] = i % 60), (e[2] = s % 60), (e[3] = u % 24), (e[4] = c), e;
    }
    function B(t, e) {
      var n = t / e;
      return n < 0 ? Math.ceil(n) : Math.floor(n);
    }
    function F(t) {
      if (t) {
        var e = G((b = q(t)));
        return (j = O + e.secondTenths * d[u] * o), b;
      }
    }
    function G(t, e) {
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
    function H() {
      U(), Q("stopped", V);
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
    R(A),
      void 0 !== this &&
        ((this.start = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (t = n(n({}, A), t)), W() || (x(t), Q("started", V));
        }),
        (this.pause = function () {
          k(), (D = !0), Q("paused", V);
        }),
        (this.stop = H),
        (this.reset = function () {
          U(), x(m), Q("reset", V);
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
          return L;
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
})({});
