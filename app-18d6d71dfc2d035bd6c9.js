/*! For license information please see app-18d6d71dfc2d035bd6c9.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "+IEj": function (t, e, n) {
      var r = n("lSNA");
      function o(t, e) {
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
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(n), !0).forEach(function (e) {
                r(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      t.exports = {
        defaultLang: "en",
        withDefaults: function (t) {
          return i(
            i({}, t),
            {},
            {
              configPath: t.configPath,
              defaultLang: t.defaultLang || "en",
              prefixDefault: !!t.prefixDefault && t.prefixDefault,
              locales: t.locales || null,
            }
          );
        },
      };
    },
    "+ZDr": function (t, e, n) {
      "use strict";
      var r = n("TqRt");
      (e.__esModule = !0),
        (e.withPrefix = d),
        (e.withAssetPrefix = function (t) {
          return d(t, m());
        }),
        (e.navigateTo = e.replace = e.push = e.navigate = e.default = void 0);
      var o = r(n("8OQS")),
        i = r(n("PJYZ")),
        a = r(n("VbXa")),
        u = r(n("pVnL")),
        c = r(n("17x9")),
        s = r(n("q1tI")),
        l = n("YwZP"),
        f = n("LYrO"),
        p = n("cu4x");
      e.parsePath = p.parsePath;
      var h = function (t) {
        return null == t ? void 0 : t.startsWith("/");
      };
      function d(t, e) {
        var n, r;
        if ((void 0 === e && (e = g()), !v(t))) return t;
        if (t.startsWith("./") || t.startsWith("../")) return t;
        var o =
          null !== (n = null !== (r = e) && void 0 !== r ? r : m()) &&
          void 0 !== n
            ? n
            : "/";
        return (
          "" +
          ((null == o ? void 0 : o.endsWith("/")) ? o.slice(0, -1) : o) +
          (t.startsWith("/") ? t : "/" + t)
        );
      }
      var m = function () {
          return "";
        },
        g = function () {
          return "";
        },
        v = function (t) {
          return (
            t &&
            !t.startsWith("http://") &&
            !t.startsWith("https://") &&
            !t.startsWith("//")
          );
        };
      var y = function (t, e) {
          return "number" == typeof t
            ? t
            : v(t)
            ? h(t)
              ? d(t)
              : (function (t, e) {
                  return h(t) ? t : (0, f.resolve)(t, e);
                })(t, e)
            : t;
        },
        b = {
          activeClassName: c.default.string,
          activeStyle: c.default.object,
          partiallyActive: c.default.bool,
        };
      function E(t) {
        return s.default.createElement(l.Location, null, function (e) {
          var n = e.location;
          return s.default.createElement(
            O,
            (0, u.default)({}, t, { _location: n })
          );
        });
      }
      var O = (function (t) {
        function e(e) {
          var n;
          (n = t.call(this, e) || this).defaultGetProps = function (t) {
            var e = t.isPartiallyCurrent,
              r = t.isCurrent;
            return (n.props.partiallyActive ? e : r)
              ? {
                  className: [n.props.className, n.props.activeClassName]
                    .filter(Boolean)
                    .join(" "),
                  style: (0, u.default)({}, n.props.style, n.props.activeStyle),
                }
              : null;
          };
          var r = !1;
          return (
            "undefined" != typeof window &&
              window.IntersectionObserver &&
              (r = !0),
            (n.state = { IOSupported: r }),
            (n.handleRef = n.handleRef.bind((0, i.default)(n))),
            n
          );
        }
        (0, a.default)(e, t);
        var n = e.prototype;
        return (
          (n._prefetch = function () {
            var t = window.location.pathname;
            this.props._location &&
              this.props._location.pathname &&
              (t = this.props._location.pathname);
            var e = y(this.props.to, t),
              n = (0, p.parsePath)(e).pathname;
            t !== n && ___loader.enqueue(n);
          }),
          (n.componentDidUpdate = function (t, e) {
            this.props.to === t.to ||
              this.state.IOSupported ||
              this._prefetch();
          }),
          (n.componentDidMount = function () {
            this.state.IOSupported || this._prefetch();
          }),
          (n.componentWillUnmount = function () {
            if (this.io) {
              var t = this.io,
                e = t.instance,
                n = t.el;
              e.unobserve(n), e.disconnect();
            }
          }),
          (n.handleRef = function (t) {
            var e,
              n,
              r,
              o = this;
            this.props.innerRef && this.props.innerRef.hasOwnProperty("current")
              ? (this.props.innerRef.current = t)
              : this.props.innerRef && this.props.innerRef(t),
              this.state.IOSupported &&
                t &&
                (this.io =
                  ((e = t),
                  (n = function () {
                    o._prefetch();
                  }),
                  (r = new window.IntersectionObserver(function (t) {
                    t.forEach(function (t) {
                      e === t.target &&
                        (t.isIntersecting || t.intersectionRatio > 0) &&
                        (r.unobserve(e), r.disconnect(), n());
                    });
                  })).observe(e),
                  { instance: r, el: e }));
          }),
          (n.render = function () {
            var t = this,
              e = this.props,
              n = e.to,
              r = e.getProps,
              i = void 0 === r ? this.defaultGetProps : r,
              a = e.onClick,
              c = e.onMouseEnter,
              f =
                (e.activeClassName,
                e.activeStyle,
                e.innerRef,
                e.partiallyActive,
                e.state),
              h = e.replace,
              d = e._location,
              m = (0, o.default)(e, [
                "to",
                "getProps",
                "onClick",
                "onMouseEnter",
                "activeClassName",
                "activeStyle",
                "innerRef",
                "partiallyActive",
                "state",
                "replace",
                "_location",
              ]);
            var g = y(n, d.pathname);
            return v(g)
              ? s.default.createElement(
                  l.Link,
                  (0, u.default)(
                    {
                      to: g,
                      state: f,
                      getProps: i,
                      innerRef: this.handleRef,
                      onMouseEnter: function (t) {
                        c && c(t),
                          ___loader.hovering((0, p.parsePath)(g).pathname);
                      },
                      onClick: function (e) {
                        if (
                          (a && a(e),
                          !(
                            0 !== e.button ||
                            t.props.target ||
                            e.defaultPrevented ||
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          ))
                        ) {
                          e.preventDefault();
                          var n = h,
                            r = encodeURI(g) === d.pathname;
                          "boolean" != typeof h && r && (n = !0),
                            window.___navigate(g, { state: f, replace: n });
                        }
                        return !0;
                      },
                    },
                    m
                  )
                )
              : s.default.createElement("a", (0, u.default)({ href: g }, m));
          }),
          e
        );
      })(s.default.Component);
      O.propTypes = (0, u.default)({}, b, {
        onClick: c.default.func,
        to: c.default.string.isRequired,
        replace: c.default.bool,
        state: c.default.object,
      });
      var w = function (t, e, n) {
          return console.warn(
            'The "' +
              t +
              '" method is now deprecated and will be removed in Gatsby v' +
              n +
              '. Please use "' +
              e +
              '" instead.'
          );
        },
        T = s.default.forwardRef(function (t, e) {
          return s.default.createElement(E, (0, u.default)({ innerRef: e }, t));
        });
      e.default = T;
      e.navigate = function (t, e) {
        window.___navigate(y(t, window.location.pathname), e);
      };
      var P = function (t) {
        w("push", "navigate", 3),
          window.___push(y(t, window.location.pathname));
      };
      e.push = P;
      e.replace = function (t) {
        w("replace", "navigate", 3),
          window.___replace(y(t, window.location.pathname));
      };
      e.navigateTo = function (t) {
        return w("navigateTo", "navigate", 3), P(t);
      };
    },
    "/GqU": function (t, e, n) {
      var r = n("RK3t"),
        o = n("HYAF");
      t.exports = function (t) {
        return r(o(t));
      };
    },
    "/b8u": function (t, e, n) {
      var r = n("STAE");
      t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    "/d+U": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "b", function () {
          return u;
        });
      n("E9XD");
      var r,
        o = n("KuiD"),
        i = n("BqEn");
      function a(t) {
        return "function" == typeof t;
      }
      function u(t, e, n, c, s, l, f) {
        if (1 === t.length && Object(o.e)(t[0]))
          return [{ type: r.literal, value: t[0].value }];
        for (var p = [], h = 0, d = t; h < d.length; h++) {
          var m = d[h];
          if (Object(o.e)(m)) p.push({ type: r.literal, value: m.value });
          else if (Object(o.i)(m))
            "number" == typeof l &&
              p.push({
                type: r.literal,
                value: n.getNumberFormat(e).format(l),
              });
          else {
            var g = m.value;
            if (!s || !(g in s)) throw new i.e(g, f);
            var v = s[g];
            if (Object(o.b)(m))
              (v && "string" != typeof v && "number" != typeof v) ||
                (v =
                  "string" == typeof v || "number" == typeof v
                    ? String(v)
                    : ""),
                p.push({
                  type: "string" == typeof v ? r.literal : r.object,
                  value: v,
                });
            else if (Object(o.c)(m)) {
              var y =
                "string" == typeof m.style
                  ? c.date[m.style]
                  : Object(o.d)(m.style)
                  ? m.style.parsedOptions
                  : void 0;
              p.push({
                type: r.literal,
                value: n.getDateTimeFormat(e, y).format(v),
              });
            } else if (Object(o.l)(m)) {
              y =
                "string" == typeof m.style
                  ? c.time[m.style]
                  : Object(o.d)(m.style)
                  ? m.style.parsedOptions
                  : void 0;
              p.push({
                type: r.literal,
                value: n.getDateTimeFormat(e, y).format(v),
              });
            } else if (Object(o.f)(m)) {
              (y =
                "string" == typeof m.style
                  ? c.number[m.style]
                  : Object(o.g)(m.style)
                  ? m.style.parsedOptions
                  : void 0) &&
                y.scale &&
                (v *= y.scale || 1),
                p.push({
                  type: r.literal,
                  value: n.getNumberFormat(e, y).format(v),
                });
            } else {
              if (Object(o.k)(m)) {
                var b = m.children,
                  E = m.value,
                  O = s[E];
                if (!a(O)) throw new i.d(E, "function", f);
                var w = O(
                  u(b, e, n, c, s, l).map(function (t) {
                    return t.value;
                  })
                );
                Array.isArray(w) || (w = [w]),
                  p.push.apply(
                    p,
                    w.map(function (t) {
                      return {
                        type: "string" == typeof t ? r.literal : r.object,
                        value: t,
                      };
                    })
                  );
              }
              if (Object(o.j)(m)) {
                if (!(T = m.options[v] || m.options.other))
                  throw new i.c(m.value, v, Object.keys(m.options), f);
                p.push.apply(p, u(T.value, e, n, c, s));
              } else if (Object(o.h)(m)) {
                var T;
                if (!(T = m.options["=" + v])) {
                  if (!Intl.PluralRules)
                    throw new i.b(
                      'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                      i.a.MISSING_INTL_API,
                      f
                    );
                  var P = n
                    .getPluralRules(e, { type: m.pluralType })
                    .select(v - (m.offset || 0));
                  T = m.options[P] || m.options.other;
                }
                if (!T) throw new i.c(m.value, v, Object.keys(m.options), f);
                p.push.apply(p, u(T.value, e, n, c, s, v - (m.offset || 0)));
              } else;
            }
          }
        }
        return (function (t) {
          return t.length < 2
            ? t
            : t.reduce(function (t, e) {
                var n = t[t.length - 1];
                return (
                  n && n.type === r.literal && e.type === r.literal
                    ? (n.value += e.value)
                    : t.push(e),
                  t
                );
              }, []);
        })(p);
      }
      !(function (t) {
        (t[(t.literal = 0)] = "literal"), (t[(t.object = 1)] = "object");
      })(r || (r = {}));
    },
    "/hTd": function (t, e, n) {
      "use strict";
      (e.__esModule = !0), (e.SessionStorage = void 0);
      var r = (function () {
        function t() {}
        var e = t.prototype;
        return (
          (e.read = function (t, e) {
            var n = this.getStateKey(t, e);
            try {
              var r = window.sessionStorage.getItem(n);
              return r ? JSON.parse(r) : 0;
            } catch (o) {
              return window &&
                window.___GATSBY_REACT_ROUTER_SCROLL &&
                window.___GATSBY_REACT_ROUTER_SCROLL[n]
                ? window.___GATSBY_REACT_ROUTER_SCROLL[n]
                : 0;
            }
          }),
          (e.save = function (t, e, n) {
            var r = this.getStateKey(t, e),
              o = JSON.stringify(n);
            try {
              window.sessionStorage.setItem(r, o);
            } catch (i) {
              (window && window.___GATSBY_REACT_ROUTER_SCROLL) ||
                (window.___GATSBY_REACT_ROUTER_SCROLL = {}),
                (window.___GATSBY_REACT_ROUTER_SCROLL[r] = JSON.parse(o));
            }
          }),
          (e.getStateKey = function (t, e) {
            var n = "@@scroll|" + t.pathname;
            return null == e ? n : n + "|" + e;
          }),
          t
        );
      })();
      e.SessionStorage = r;
    },
    "/m/s": function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "wrapPageElement", function () {
          return s;
        });
      var r = n("q1tI"),
        o = n("eq4K"),
        i = n("qhky"),
        a = n("Wbzz"),
        u = n("yAkg"),
        c = function (t) {
          var e = t.location,
            n = t.pageContext,
            o = Object(u.a)(),
            c = o.locale,
            s = o.config,
            l = o.defaultLang,
            f = Object(a.useStaticQuery)("1239077767").site.siteMetadata
              .siteUrl,
            p = e.pathname;
          return r.createElement(
            i.a,
            null,
            r.createElement("html", { lang: n.hrefLang }),
            r.createElement("link", {
              rel: "alternate",
              hrefLang: "x-default",
              href: f,
            }),
            r.createElement("link", {
              rel: "alternate",
              hrefLang: n.hrefLang,
              href: "" + f + (p === Object(a.withPrefix)("/") ? "" : p),
            }),
            s.map(function (t) {
              var e;
              return t.code === c
                ? null
                : ((e =
                    t.code === l
                      ? "" +
                        f +
                        (n.originalPath === Object(a.withPrefix)("/")
                          ? ""
                          : n.originalPath)
                      : "" +
                        f +
                        Object(a.withPrefix)("/" + t.code + n.originalPath)),
                  r.createElement("link", {
                    key: t.code,
                    rel: "alternate",
                    hrefLang: t.hrefLang,
                    href: e,
                  }));
            }),
            r.createElement("meta", {
              property: "og:locale",
              content: n.hrefLang.replace("-", "_"),
            }),
            s.map(function (t) {
              return t.code === c
                ? null
                : r.createElement("meta", {
                    key: t.code,
                    property: "og:locale:alternate",
                    content: t.hrefLang.replace("-", "_"),
                  });
            })
          );
        },
        s = function (t) {
          var e = t.element,
            n = t.props;
          return r.createElement(
            o.b,
            { pageContext: n.pageContext },
            r.createElement(c, {
              location: n.location,
              pageContext: n.pageContext,
            }),
            e
          );
        };
    },
    "0BK2": function (t, e) {
      t.exports = {};
    },
    "0Dky": function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (e) {
          return !0;
        }
      };
    },
    "0GbY": function (t, e, n) {
      var r = n("2oRo"),
        o = function (t) {
          return "function" == typeof t ? t : void 0;
        };
      t.exports = function (t, e) {
        return arguments.length < 2 ? o(r[t]) : r[t] && r[t][e];
      };
    },
    "0eef": function (t, e, n) {
      "use strict";
      var r = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        i = o && !r.call({ 1: 2 }, 1);
      e.f = i
        ? function (t) {
            var e = o(this, t);
            return !!e && e.enumerable;
          }
        : r;
    },
    "1VXf": function (t, e, n) {
      "use strict";
      n.d(e, "d", function () {
        return u;
      }),
        n.d(e, "a", function () {
          return c;
        }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return f;
        }),
        n.d(e, "e", function () {
          return p;
        });
      n("E9XD");
      var r = n("siyQ"),
        o = n("Mu++"),
        i = n("cmTm"),
        a = n("EuEu");
      function u(t, e, n) {
        return (
          void 0 === n && (n = {}),
          e.reduce(function (e, r) {
            return r in t ? (e[r] = t[r]) : r in n && (e[r] = n[r]), e;
          }, {})
        );
      }
      var c = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        onError: function (t) {
          0;
        },
      };
      function s() {
        return {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {},
        };
      }
      function l(t) {
        return {
          create: function () {
            return {
              has: function (e) {
                return e in t;
              },
              get: function (e) {
                return t[e];
              },
              set: function (e, n) {
                t[e] = n;
              },
            };
          },
        };
      }
      function f(t) {
        void 0 === t &&
          (t = {
            dateTime: {},
            number: {},
            message: {},
            relativeTime: {},
            pluralRules: {},
            list: {},
            displayNames: {},
          });
        var e = Intl.RelativeTimeFormat,
          n = Intl.ListFormat,
          a = Intl.DisplayNames,
          u = Object(i.a)(
            function () {
              for (var t, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return new ((t = Intl.DateTimeFormat).bind.apply(
                t,
                Object(r.c)([void 0], e)
              ))();
            },
            { cache: l(t.dateTime), strategy: i.b.variadic }
          ),
          c = Object(i.a)(
            function () {
              for (var t, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return new ((t = Intl.NumberFormat).bind.apply(
                t,
                Object(r.c)([void 0], e)
              ))();
            },
            { cache: l(t.number), strategy: i.b.variadic }
          ),
          s = Object(i.a)(
            function () {
              for (var t, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return new ((t = Intl.PluralRules).bind.apply(
                t,
                Object(r.c)([void 0], e)
              ))();
            },
            { cache: l(t.pluralRules), strategy: i.b.variadic }
          );
        return {
          getDateTimeFormat: u,
          getNumberFormat: c,
          getMessageFormat: Object(i.a)(
            function (t, e, n, i) {
              return new o.a(
                t,
                e,
                n,
                Object(r.a)(
                  {
                    formatters: {
                      getNumberFormat: c,
                      getDateTimeFormat: u,
                      getPluralRules: s,
                    },
                  },
                  i || {}
                )
              );
            },
            { cache: l(t.message), strategy: i.b.variadic }
          ),
          getRelativeTimeFormat: Object(i.a)(
            function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return new (e.bind.apply(e, Object(r.c)([void 0], t)))();
            },
            { cache: l(t.relativeTime), strategy: i.b.variadic }
          ),
          getPluralRules: s,
          getListFormat: Object(i.a)(
            function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return new (n.bind.apply(n, Object(r.c)([void 0], t)))();
            },
            { cache: l(t.list), strategy: i.b.variadic }
          ),
          getDisplayNames: Object(i.a)(
            function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return new (a.bind.apply(a, Object(r.c)([void 0], t)))();
            },
            { cache: l(t.displayNames), strategy: i.b.variadic }
          ),
        };
      }
      function p(t, e, n, r) {
        var o,
          i = t && t[e];
        if ((i && (o = i[n]), o)) return o;
        r(new a.g("No " + e + " format named: " + n));
      }
    },
    "1Y/n": function (t, e, n) {
      var r = n("HAuM"),
        o = n("ewvW"),
        i = n("RK3t"),
        a = n("UMSQ"),
        u = function (t) {
          return function (e, n, u, c) {
            r(n);
            var s = o(e),
              l = i(s),
              f = a(s.length),
              p = t ? f - 1 : 0,
              h = t ? -1 : 1;
            if (u < 2)
              for (;;) {
                if (p in l) {
                  (c = l[p]), (p += h);
                  break;
                }
                if (((p += h), t ? p < 0 : f <= p))
                  throw TypeError(
                    "Reduce of empty array with no initial value"
                  );
              }
            for (; t ? p >= 0 : f > p; p += h) p in l && (c = n(c, l[p], p, s));
            return c;
          };
        };
      t.exports = { left: u(!1), right: u(!0) };
    },
    "284h": function (t, e, n) {
      var r = n("cDf5").default;
      function o(t) {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap(),
          n = new WeakMap();
        return (o = function (t) {
          return t ? n : e;
        })(t);
      }
      (t.exports = function (t, e) {
        if (!e && t && t.__esModule) return t;
        if (null === t || ("object" !== r(t) && "function" != typeof t))
          return { default: t };
        var n = o(e);
        if (n && n.has(t)) return n.get(t);
        var i = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in t)
          if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) {
            var c = a ? Object.getOwnPropertyDescriptor(t, u) : null;
            c && (c.get || c.set)
              ? Object.defineProperty(i, u, c)
              : (i[u] = t[u]);
          }
        return (i.default = t), n && n.set(t, i), i;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    "2OET": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return a;
        });
      n("X52I");
      var r = n("q1tI");
      n("2mql"), n("N3fz");
      var o = r.createContext(null),
        i = (o.Consumer, o.Provider),
        a = o;
    },
    "2bX/": function (t, e, n) {
      var r = n("0GbY"),
        o = n("/b8u");
      t.exports = o
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            var e = r("Symbol");
            return "function" == typeof e && Object(t) instanceof e;
          };
    },
    "2mql": function (t, e, n) {
      "use strict";
      var r = n("TOwV"),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        u = {};
      function c(t) {
        return r.isMemo(t) ? a : u[t.$$typeof] || o;
      }
      (u[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (u[r.Memo] = a);
      var s = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        d = Object.prototype;
      t.exports = function t(e, n, r) {
        if ("string" != typeof n) {
          if (d) {
            var o = h(n);
            o && o !== d && t(e, o, r);
          }
          var a = l(n);
          f && (a = a.concat(f(n)));
          for (var u = c(e), m = c(n), g = 0; g < a.length; ++g) {
            var v = a[g];
            if (!(i[v] || (r && r[v]) || (m && m[v]) || (u && u[v]))) {
              var y = p(n, v);
              try {
                s(e, v, y);
              } catch (b) {}
            }
          }
        }
        return e;
      };
    },
    "2oRo": function (t, e, n) {
      (function (e) {
        var n = function (t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          n("object" == typeof globalThis && globalThis) ||
          n("object" == typeof window && window) ||
          n("object" == typeof self && self) ||
          n("object" == typeof e && e) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      }.call(this, n("yLpj")));
    },
    "30RF": function (t, e, n) {
      "use strict";
      n.d(e, "d", function () {
        return l;
      }),
        n.d(e, "a", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return p;
        }),
        n.d(e, "b", function () {
          return h;
        });
      var r = n("LYrO"),
        o = n("cSJ8"),
        i = function (t) {
          return void 0 === t
            ? t
            : "/" === t
            ? "/"
            : "/" === t.charAt(t.length - 1)
            ? t.slice(0, -1)
            : t;
        },
        a = new Map(),
        u = [],
        c = function (t) {
          var e = decodeURIComponent(t);
          return Object(o.a)(e, "").split("#")[0].split("?")[0];
        };
      function s(t) {
        return t.startsWith("/") ||
          t.startsWith("https://") ||
          t.startsWith("http://")
          ? t
          : new URL(
              t,
              window.location.href +
                (window.location.href.endsWith("/") ? "" : "/")
            ).pathname;
      }
      var l = function (t) {
          u = t;
        },
        f = function (t) {
          var e = d(t),
            n = u.map(function (t) {
              var e = t.path;
              return { path: t.matchPath, originalPath: e };
            }),
            o = Object(r.pick)(n, e);
          return o ? i(o.route.originalPath) : null;
        },
        p = function (t) {
          var e = d(t),
            n = u.map(function (t) {
              var e = t.path;
              return { path: t.matchPath, originalPath: e };
            }),
            o = Object(r.pick)(n, e);
          return o ? o.params : {};
        },
        h = function (t) {
          var e = c(s(t));
          if (a.has(e)) return a.get(e);
          var n = f(e);
          return n || (n = d(t)), a.set(e, n), n;
        },
        d = function (t) {
          var e = c(s(t));
          return "/index.html" === e && (e = "/"), (e = i(e));
        };
    },
    "3uz+": function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.useScrollRestoration = function (t) {
          var e = (0, i.useLocation)(),
            n = (0, o.useContext)(r.ScrollContext),
            a = (0, o.useRef)();
          return (
            (0, o.useLayoutEffect)(function () {
              if (a.current) {
                var r = n.read(e, t);
                a.current.scrollTo(0, r || 0);
              }
            }, []),
            {
              ref: a,
              onScroll: function () {
                a.current && n.save(e, t, a.current.scrollTop);
              },
            }
          );
        });
      var r = n("Enzk"),
        o = n("q1tI"),
        i = n("YwZP");
    },
    "5yr3": function (t, e, n) {
      "use strict";
      var r = (function (t) {
        return (
          (t = t || Object.create(null)),
          {
            on: function (e, n) {
              (t[e] || (t[e] = [])).push(n);
            },
            off: function (e, n) {
              t[e] && t[e].splice(t[e].indexOf(n) >>> 0, 1);
            },
            emit: function (e, n) {
              (t[e] || []).slice().map(function (t) {
                t(n);
              }),
                (t["*"] || []).slice().map(function (t) {
                  t(e, n);
                });
            },
          }
        );
      })();
      e.a = r;
    },
    "6JNq": function (t, e, n) {
      var r = n("UTVS"),
        o = n("Vu81"),
        i = n("Bs8V"),
        a = n("m/L8");
      t.exports = function (t, e) {
        for (var n = o(e), u = a.f, c = i.f, s = 0; s < n.length; s++) {
          var l = n[s];
          r(t, l) || u(t, l, c(e, l));
        }
      };
    },
    "6VoE": function (t, e, n) {
      var r = n("tiKp"),
        o = n("P4y1"),
        i = r("iterator"),
        a = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (o.Array === t || a[i] === t);
      };
    },
    "7LaZ": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      n("E9XD");
      function r(t, e, n) {
        if ((void 0 === n && (n = Error), !t)) throw new n(e);
      }
    },
    "7hJ6": function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.useScrollRestoration = e.ScrollContainer = e.ScrollContext = void 0);
      var r = n("Enzk");
      e.ScrollContext = r.ScrollHandler;
      var o = n("hd9s");
      e.ScrollContainer = o.ScrollContainer;
      var i = n("3uz+");
      e.useScrollRestoration = i.useScrollRestoration;
    },
    "7ljp": function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "MDXContext", function () {
          return l;
        }),
        n.d(e, "MDXProvider", function () {
          return h;
        }),
        n.d(e, "mdx", function () {
          return g;
        }),
        n.d(e, "useMDXComponents", function () {
          return p;
        }),
        n.d(e, "withMDXComponents", function () {
          return f;
        });
      var r = n("q1tI"),
        o = n.n(r);
      function i(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function a() {
        return (a =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function u(t, e) {
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
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                i(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function s(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      var l = o.a.createContext({}),
        f = function (t) {
          return function (e) {
            var n = p(e.components);
            return o.a.createElement(t, a({}, e, { components: n }));
          };
        },
        p = function (t) {
          var e = o.a.useContext(l),
            n = e;
          return t && (n = "function" == typeof t ? t(e) : c(c({}, e), t)), n;
        },
        h = function (t) {
          var e = p(t.components);
          return o.a.createElement(l.Provider, { value: e }, t.children);
        },
        d = {
          inlineCode: "code",
          wrapper: function (t) {
            var e = t.children;
            return o.a.createElement(o.a.Fragment, {}, e);
          },
        },
        m = o.a.forwardRef(function (t, e) {
          var n = t.components,
            r = t.mdxType,
            i = t.originalType,
            a = t.parentName,
            u = s(t, ["components", "mdxType", "originalType", "parentName"]),
            l = p(n),
            f = r,
            h = l["".concat(a, ".").concat(f)] || l[f] || d[f] || i;
          return n
            ? o.a.createElement(h, c(c({ ref: e }, u), {}, { components: n }))
            : o.a.createElement(h, c({ ref: e }, u));
        });
      function g(t, e) {
        var n = arguments,
          r = e && e.mdxType;
        if ("string" == typeof t || r) {
          var i = n.length,
            a = new Array(i);
          a[0] = m;
          var u = {};
          for (var c in e) hasOwnProperty.call(e, c) && (u[c] = e[c]);
          (u.originalType = t),
            (u.mdxType = "string" == typeof t ? t : r),
            (a[1] = u);
          for (var s = 2; s < i; s++) a[s] = n[s];
          return o.a.createElement.apply(null, a);
        }
        return o.a.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    "7ueG": function (t, e, n) {
      "use strict";
      var r = n("I+eb"),
        o = n("WKiH").start,
        i = n("yNLB")("trimStart"),
        a = i
          ? function () {
              return o(this);
            }
          : "".trimStart;
      r(
        { target: "String", proto: !0, forced: i },
        { trimStart: a, trimLeft: a }
      );
    },
    "8+s/": function (t, e, n) {
      "use strict";
      var r,
        o = n("q1tI"),
        i = (r = o) && "object" == typeof r && "default" in r ? r.default : r;
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var u = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      t.exports = function (t, e, n) {
        if ("function" != typeof t)
          throw new Error("Expected reducePropsToState to be a function.");
        if ("function" != typeof e)
          throw new Error(
            "Expected handleStateChangeOnClient to be a function."
          );
        if (void 0 !== n && "function" != typeof n)
          throw new Error(
            "Expected mapStateOnServer to either be undefined or a function."
          );
        return function (r) {
          if ("function" != typeof r)
            throw new Error(
              "Expected WrappedComponent to be a React component."
            );
          var c,
            s = [];
          function l() {
            (c = t(
              s.map(function (t) {
                return t.props;
              })
            )),
              f.canUseDOM ? e(c) : n && (c = n(c));
          }
          var f = (function (t) {
            var e, n;
            function o() {
              return t.apply(this, arguments) || this;
            }
            (n = t),
              ((e = o).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = n),
              (o.peek = function () {
                return c;
              }),
              (o.rewind = function () {
                if (o.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var t = c;
                return (c = void 0), (s = []), t;
              });
            var a = o.prototype;
            return (
              (a.UNSAFE_componentWillMount = function () {
                s.push(this), l();
              }),
              (a.componentDidUpdate = function () {
                l();
              }),
              (a.componentWillUnmount = function () {
                var t = s.indexOf(this);
                s.splice(t, 1), l();
              }),
              (a.render = function () {
                return i.createElement(r, this.props);
              }),
              o
            );
          })(o.PureComponent);
          return (
            a(
              f,
              "displayName",
              "SideEffect(" +
                (function (t) {
                  return t.displayName || t.name || "Component";
                })(r) +
                ")"
            ),
            a(f, "canUseDOM", u),
            f
          );
        };
      };
    },
    "8OQS": function (t, e) {
      (t.exports = function (t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          i = Object.keys(t);
        for (r = 0; r < i.length; r++)
          (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    "93I0": function (t, e, n) {
      var r = n("VpIT"),
        o = n("kOOl"),
        i = r("keys");
      t.exports = function (t) {
        return i[t] || (i[t] = o(t));
      };
    },
    "94VI": function (t, e) {
      e.polyfill = function (t) {
        return t;
      };
    },
    "9Xx/": function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return c;
      }),
        n.d(e, "d", function () {
          return s;
        }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return a;
        });
      var r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        o = function (t) {
          var e = t.location,
            n = e.search,
            r = e.hash,
            o = e.href,
            i = e.origin,
            a = e.protocol,
            c = e.host,
            s = e.hostname,
            l = e.port,
            f = t.location.pathname;
          !f && o && u && (f = new URL(o).pathname);
          return {
            pathname: encodeURI(decodeURI(f)),
            search: n,
            hash: r,
            href: o,
            origin: i,
            protocol: a,
            host: c,
            hostname: s,
            port: l,
            state: t.history.state,
            key: (t.history.state && t.history.state.key) || "initial",
          };
        },
        i = function (t, e) {
          var n = [],
            i = o(t),
            a = !1,
            u = function () {};
          return {
            get location() {
              return i;
            },
            get transitioning() {
              return a;
            },
            _onTransitionComplete: function () {
              (a = !1), u();
            },
            listen: function (e) {
              n.push(e);
              var r = function () {
                (i = o(t)), e({ location: i, action: "POP" });
              };
              return (
                t.addEventListener("popstate", r),
                function () {
                  t.removeEventListener("popstate", r),
                    (n = n.filter(function (t) {
                      return t !== e;
                    }));
                }
              );
            },
            navigate: function (e) {
              var c =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                s = c.state,
                l = c.replace,
                f = void 0 !== l && l;
              if ("number" == typeof e) t.history.go(e);
              else {
                s = r({}, s, { key: Date.now() + "" });
                try {
                  a || f
                    ? t.history.replaceState(s, null, e)
                    : t.history.pushState(s, null, e);
                } catch (h) {
                  t.location[f ? "replace" : "assign"](e);
                }
              }
              (i = o(t)), (a = !0);
              var p = new Promise(function (t) {
                return (u = t);
              });
              return (
                n.forEach(function (t) {
                  return t({ location: i, action: "PUSH" });
                }),
                p
              );
            },
          };
        },
        a = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            e = t.indexOf("?"),
            n = {
              pathname: e > -1 ? t.substr(0, e) : t,
              search: e > -1 ? t.substr(e) : "",
            },
            r = 0,
            o = [n],
            i = [null];
          return {
            get location() {
              return o[r];
            },
            addEventListener: function (t, e) {},
            removeEventListener: function (t, e) {},
            history: {
              get entries() {
                return o;
              },
              get index() {
                return r;
              },
              get state() {
                return i[r];
              },
              pushState: function (t, e, n) {
                var a = n.split("?"),
                  u = a[0],
                  c = a[1],
                  s = void 0 === c ? "" : c;
                r++,
                  o.push({ pathname: u, search: s.length ? "?" + s : s }),
                  i.push(t);
              },
              replaceState: function (t, e, n) {
                var a = n.split("?"),
                  u = a[0],
                  c = a[1],
                  s = void 0 === c ? "" : c;
                (o[r] = { pathname: u, search: s }), (i[r] = t);
              },
              go: function (t) {
                var e = r + t;
                e < 0 || e > i.length - 1 || (r = e);
              },
            },
          };
        },
        u = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        c = i(u ? window : a()),
        s = c.navigate;
    },
    "9d/t": function (t, e, n) {
      var r = n("AO7/"),
        o = n("xrYK"),
        i = n("tiKp")("toStringTag"),
        a =
          "Arguments" ==
          o(
            (function () {
              return arguments;
            })()
          );
      t.exports = r
        ? o
        : function (t) {
            var e, n, r;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" ==
                typeof (n = (function (t, e) {
                  try {
                    return t[e];
                  } catch (n) {}
                })((e = Object(t)), i))
              ? n
              : a
              ? o(e)
              : "Object" == (r = o(e)) && "function" == typeof e.callee
              ? "Arguments"
              : r;
          };
    },
    "9hXx": function (t, e, n) {
      "use strict";
      (e.__esModule = !0), (e.default = void 0);
      e.default = function (t, e) {
        if (!Array.isArray(e)) return "manifest.webmanifest";
        var n = e.find(function (e) {
          return t.startsWith(e.start_url);
        });
        return n
          ? "manifest_" + n.lang + ".webmanifest"
          : "manifest.webmanifest";
      };
    },
    A2ZE: function (t, e, n) {
      var r = n("HAuM");
      t.exports = function (t, e, n) {
        if ((r(t), void 0 === e)) return t;
        switch (n) {
          case 0:
            return function () {
              return t.call(e);
            };
          case 1:
            return function (n) {
              return t.call(e, n);
            };
          case 2:
            return function (n, r) {
              return t.call(e, n, r);
            };
          case 3:
            return function (n, r, o) {
              return t.call(e, n, r, o);
            };
        }
        return function () {
          return t.apply(e, arguments);
        };
      };
    },
    "AO7/": function (t, e, n) {
      var r = {};
      (r[n("tiKp")("toStringTag")] = "z"),
        (t.exports = "[object z]" === String(r));
    },
    "B+z7": function (t, e) {
      function n(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (n) return (n = n.call(t)).next.bind(n);
        if (
          Array.isArray(t) ||
          (n = (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return r(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return r(t, e);
          })(t)) ||
          (e && t && "number" == typeof t.length)
        ) {
          n && (t = n);
          var o = 0;
          return function () {
            return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      t.exports = {
        localizedPath: function (t) {
          var e = t.defaultLang,
            n = t.prefixDefault,
            r = t.locale,
            o = t.path;
          return ((function (t, e) {
            return t === e;
          })(r, e) &&
            !n) ||
            o.split("/")[1] === r
            ? o
            : "/" + r + o;
        },
        getLanguages: function (t) {
          var e = t.locales,
            r = t.localeStr;
          if (!r) return e;
          for (
            var o,
              i = r.split(" "),
              a = [],
              u = function () {
                var t = o.value,
                  n = e.find(function (e) {
                    return e.code === t;
                  });
                if (!n)
                  throw new Error(
                    "Invalid localed provided: " +
                      t +
                      ". See your i18n config file for a list of available locales."
                  );
                a.push(n);
              },
              c = n(i);
            !(o = c()).done;

          )
            u();
          return a;
        },
        getDefaultLanguage: function (t) {
          var e = t.locales,
            n = t.defaultLang;
          return e.find(function (t) {
            return t.code === n;
          });
        },
      };
    },
    BfwJ: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "useMDXScope", function () {
          return a;
        }),
        n.d(e, "MDXScopeProvider", function () {
          return u;
        });
      var r = n("q1tI"),
        o = n.n(r),
        i = Object(r.createContext)({}),
        a = function (t) {
          var e = Object(r.useContext)(i);
          return t || e;
        },
        u = function (t) {
          var e = t.__mdxScope,
            n = t.children;
          return o.a.createElement(i.Provider, { value: e }, n);
        };
    },
    BqEn: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "d", function () {
          return u;
        }),
        n.d(e, "e", function () {
          return c;
        });
      var r,
        o = n("MGrk");
      !(function (t) {
        (t.MISSING_VALUE = "MISSING_VALUE"),
          (t.INVALID_VALUE = "INVALID_VALUE"),
          (t.MISSING_INTL_API = "MISSING_INTL_API");
      })(r || (r = {}));
      var i = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return (o.code = n), (o.originalMessage = r), o;
          }
          return (
            Object(o.b)(e, t),
            (e.prototype.toString = function () {
              return "[formatjs Error: " + this.code + "] " + this.message;
            }),
            e
          );
        })(Error),
        a = (function (t) {
          function e(e, n, o, i) {
            return (
              t.call(
                this,
                'Invalid values for "' +
                  e +
                  '": "' +
                  n +
                  '". Options are "' +
                  Object.keys(o).join('", "') +
                  '"',
                r.INVALID_VALUE,
                i
              ) || this
            );
          }
          return Object(o.b)(e, t), e;
        })(i),
        u = (function (t) {
          function e(e, n, o) {
            return (
              t.call(
                this,
                'Value for "' + e + '" must be of type ' + n,
                r.INVALID_VALUE,
                o
              ) || this
            );
          }
          return Object(o.b)(e, t), e;
        })(i),
        c = (function (t) {
          function e(e, n) {
            return (
              t.call(
                this,
                'The intl string context variable "' +
                  e +
                  '" was not provided to the string "' +
                  n +
                  '"',
                r.MISSING_VALUE,
                n
              ) || this
            );
          }
          return Object(o.b)(e, t), e;
        })(i);
    },
    Bs8V: function (t, e, n) {
      var r = n("g6v/"),
        o = n("0eef"),
        i = n("XGwC"),
        a = n("/GqU"),
        u = n("oEtG"),
        c = n("UTVS"),
        s = n("DPsx"),
        l = Object.getOwnPropertyDescriptor;
      e.f = r
        ? l
        : function (t, e) {
            if (((t = a(t)), (e = u(e)), s))
              try {
                return l(t, e);
              } catch (n) {}
            if (c(t, e)) return i(!o.f.call(t, e), t[e]);
          };
    },
    DPsx: function (t, e, n) {
      var r = n("g6v/"),
        o = n("0Dky"),
        i = n("zBJ4");
      t.exports =
        !r &&
        !o(function () {
          return (
            7 !=
            Object.defineProperty(i("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    E9XD: function (t, e, n) {
      "use strict";
      var r = n("I+eb"),
        o = n("1Y/n").left,
        i = n("pkCn"),
        a = n("LQDL"),
        u = n("YF1G");
      r(
        {
          target: "Array",
          proto: !0,
          forced: !i("reduce") || (!u && a > 79 && a < 83),
        },
        {
          reduce: function (t) {
            return o(
              this,
              t,
              arguments.length,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    Enzk: function (t, e, n) {
      "use strict";
      var r = n("284h"),
        o = n("TqRt");
      (e.__esModule = !0), (e.ScrollHandler = e.ScrollContext = void 0);
      var i = o(n("PJYZ")),
        a = o(n("VbXa")),
        u = r(n("q1tI")),
        c = o(n("17x9")),
        s = n("/hTd"),
        l = u.createContext(new s.SessionStorage());
      (e.ScrollContext = l), (l.displayName = "GatsbyScrollContext");
      var f = (function (t) {
        function e() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((e =
              t.call.apply(t, [this].concat(r)) ||
              this)._stateStorage = new s.SessionStorage()),
            (e.scrollListener = function () {
              var t = e.props.location.key;
              t && e._stateStorage.save(e.props.location, t, window.scrollY);
            }),
            (e.windowScroll = function (t, n) {
              e.shouldUpdateScroll(n, e.props) && window.scrollTo(0, t);
            }),
            (e.scrollToHash = function (t, n) {
              var r = document.getElementById(t.substring(1));
              r && e.shouldUpdateScroll(n, e.props) && r.scrollIntoView();
            }),
            (e.shouldUpdateScroll = function (t, n) {
              var r = e.props.shouldUpdateScroll;
              return !r || r.call((0, i.default)(e), t, n);
            }),
            e
          );
        }
        (0, a.default)(e, t);
        var n = e.prototype;
        return (
          (n.componentDidMount = function () {
            var t;
            window.addEventListener("scroll", this.scrollListener);
            var e = this.props.location,
              n = e.key,
              r = e.hash;
            n && (t = this._stateStorage.read(this.props.location, n)),
              t
                ? this.windowScroll(t, void 0)
                : r && this.scrollToHash(decodeURI(r), void 0);
          }),
          (n.componentWillUnmount = function () {
            window.removeEventListener("scroll", this.scrollListener);
          }),
          (n.componentDidUpdate = function (t) {
            var e,
              n = this.props.location,
              r = n.hash,
              o = n.key;
            o && (e = this._stateStorage.read(this.props.location, o)),
              r ? this.scrollToHash(decodeURI(r), t) : this.windowScroll(e, t);
          }),
          (n.render = function () {
            return u.createElement(
              l.Provider,
              { value: this._stateStorage },
              this.props.children
            );
          }),
          e
        );
      })(u.Component);
      (e.ScrollHandler = f),
        (f.propTypes = {
          shouldUpdateScroll: c.default.func,
          children: c.default.element.isRequired,
          location: c.default.object.isRequired,
        });
    },
    EuEu: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "g", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return u;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "d", function () {
          return s;
        }),
        n.d(e, "f", function () {
          return l;
        });
      var r,
        o = n("siyQ");
      !(function (t) {
        (t.FORMAT_ERROR = "FORMAT_ERROR"),
          (t.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER"),
          (t.INVALID_CONFIG = "INVALID_CONFIG"),
          (t.MISSING_DATA = "MISSING_DATA"),
          (t.MISSING_TRANSLATION = "MISSING_TRANSLATION");
      })(r || (r = {}));
      var i = (function (t) {
          function e(n, r, o) {
            var i =
              t.call(
                this,
                "[@formatjs/intl Error " +
                  n +
                  "] " +
                  r +
                  " \n" +
                  (o ? "\n" + o.message + "\n" + o.stack : "")
              ) || this;
            return (
              (i.code = n),
              "function" == typeof Error.captureStackTrace &&
                Error.captureStackTrace(i, e),
              i
            );
          }
          return Object(o.b)(e, t), e;
        })(Error),
        a = (function (t) {
          function e(e, n) {
            return t.call(this, r.UNSUPPORTED_FORMATTER, e, n) || this;
          }
          return Object(o.b)(e, t), e;
        })(i),
        u = (function (t) {
          function e(e, n) {
            return t.call(this, r.INVALID_CONFIG, e, n) || this;
          }
          return Object(o.b)(e, t), e;
        })(i),
        c = (function (t) {
          function e(e, n) {
            return t.call(this, r.MISSING_DATA, e, n) || this;
          }
          return Object(o.b)(e, t), e;
        })(i),
        s = (function (t) {
          function e(e, n, o, i) {
            var a =
              t.call(
                this,
                r.FORMAT_ERROR,
                e +
                  " \nLocale: " +
                  n +
                  "\nMessageID: " +
                  (null == o ? void 0 : o.id) +
                  "\nDefault Message: " +
                  (null == o ? void 0 : o.defaultMessage) +
                  "\nDescription: " +
                  (null == o ? void 0 : o.description) +
                  " \n",
                i
              ) || this;
            return (a.descriptor = o), a;
          }
          return Object(o.b)(e, t), e;
        })(i),
        l = (function (t) {
          function e(e, n) {
            var o =
              t.call(
                this,
                r.MISSING_TRANSLATION,
                'Missing message: "' +
                  e.id +
                  '" for locale "' +
                  n +
                  '", using ' +
                  (e.defaultMessage ? "default message" : "id") +
                  " as fallback."
              ) || this;
            return (o.descriptor = e), o;
          }
          return Object(o.b)(e, t), e;
        })(i);
    },
    HAuM: function (t, e) {
      t.exports = function (t) {
        if ("function" != typeof t)
          throw TypeError(String(t) + " is not a function");
        return t;
      };
    },
    HYAF: function (t, e) {
      t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    },
    HiXI: function (t, e, n) {
      "use strict";
      var r = n("I+eb"),
        o = n("WKiH").end,
        i = n("yNLB")("trimEnd"),
        a = i
          ? function () {
              return o(this);
            }
          : "".trimEnd;
      r(
        { target: "String", proto: !0, forced: i },
        { trimEnd: a, trimRight: a }
      );
    },
    "I+eb": function (t, e, n) {
      var r = n("2oRo"),
        o = n("Bs8V").f,
        i = n("kRJp"),
        a = n("busE"),
        u = n("zk60"),
        c = n("6JNq"),
        s = n("lMq5");
      t.exports = function (t, e) {
        var n,
          l,
          f,
          p,
          h,
          d = t.target,
          m = t.global,
          g = t.stat;
        if ((n = m ? r : g ? r[d] || u(d, {}) : (r[d] || {}).prototype))
          for (l in e) {
            if (
              ((p = e[l]),
              (f = t.noTargetGet ? (h = o(n, l)) && h.value : n[l]),
              !s(m ? l : d + (g ? "." : "#") + l, t.forced) && void 0 !== f)
            ) {
              if (typeof p == typeof f) continue;
              c(p, f);
            }
            (t.sham || (f && f.sham)) && i(p, "sham", !0), a(n, l, p, t);
          }
      };
    },
    I8vh: function (t, e, n) {
      var r = n("ppGB"),
        o = Math.max,
        i = Math.min;
      t.exports = function (t, e) {
        var n = r(t);
        return n < 0 ? o(n + e, 0) : i(n, e);
      };
    },
    IOVJ: function (t, e, n) {
      "use strict";
      var r = n("rePB"),
        o = n("dI71"),
        i = n("q1tI"),
        a = n.n(i),
        u = n("emEt"),
        c = n("xtsi"),
        s = n("30RF");
      function l(t, e) {
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
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var p = (function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }
        return (
          Object(o.a)(e, t),
          (e.prototype.render = function () {
            var t = f(
                f({}, this.props),
                {},
                {
                  params: f(
                    f({}, Object(s.c)(this.props.location.pathname)),
                    this.props.pageResources.json.pageContext.__params
                  ),
                  pathContext: this.props.pageContext,
                }
              ),
              e =
                Object(c.apiRunner)("replaceComponentRenderer", {
                  props: this.props,
                  loader: u.publicLoader,
                })[0] ||
                Object(i.createElement)(
                  this.props.pageResources.component,
                  f(
                    f({}, t),
                    {},
                    {
                      key:
                        this.props.path || this.props.pageResources.page.path,
                    }
                  )
                );
            return Object(c.apiRunner)(
              "wrapPageElement",
              { element: e, props: t },
              e,
              function (e) {
                return { element: e.result, props: t };
              }
            ).pop();
          }),
          e
        );
      })(a.a.Component);
      e.a = p;
    },
    ImZN: function (t, e, n) {
      var r = n("glrk"),
        o = n("6VoE"),
        i = n("UMSQ"),
        a = n("A2ZE"),
        u = n("NaFW"),
        c = n("KmKo"),
        s = function (t, e) {
          (this.stopped = t), (this.result = e);
        };
      t.exports = function (t, e, n) {
        var l,
          f,
          p,
          h,
          d,
          m,
          g,
          v = n && n.that,
          y = !(!n || !n.AS_ENTRIES),
          b = !(!n || !n.IS_ITERATOR),
          E = !(!n || !n.INTERRUPTED),
          O = a(e, v, 1 + y + E),
          w = function (t) {
            return l && c(l), new s(!0, t);
          },
          T = function (t) {
            return y
              ? (r(t), E ? O(t[0], t[1], w) : O(t[0], t[1]))
              : E
              ? O(t, w)
              : O(t);
          };
        if (b) l = t;
        else {
          if ("function" != typeof (f = u(t)))
            throw TypeError("Target is not iterable");
          if (o(f)) {
            for (p = 0, h = i(t.length); h > p; p++)
              if ((d = T(t[p])) && d instanceof s) return d;
            return new s(!1);
          }
          l = f.call(t);
        }
        for (m = l.next; !(g = m.call(l)).done; ) {
          try {
            d = T(g.value);
          } catch (P) {
            throw (c(l), P);
          }
          if ("object" == typeof d && d && d instanceof s) return d;
        }
        return new s(!1);
      };
    },
    JBy8: function (t, e, n) {
      var r = n("yoRg"),
        o = n("eDl+").concat("length", "prototype");
      e.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return r(t, o);
        };
    },
    JTKy: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("q1tI");
      e.default = { React: r };
    },
    JeVI: function (t) {
      t.exports = JSON.parse(
        '[{"path":"/en/ethereum2.0/eth2-1","matchPath":"/en/ethereum2.0/eth2-1"},{"path":"/en/ethereum2.0/eth2-2","matchPath":"/en/ethereum2.0/eth2-2"},{"path":"/en/ethereum2.0/eth2-3","matchPath":"/en/ethereum2.0/eth2-3"},{"path":"/en/id-voting/id-blockchain","matchPath":"/en/id-voting/id-blockchain"},{"path":"/en/id-voting/id-blockchain-last","matchPath":"/en/id-voting/id-blockchain-last"},{"path":"/en/id-voting/id-blockchain3","matchPath":"/en/id-voting/id-blockchain3"},{"path":"/en/id-voting/id-blockchain4","matchPath":"/en/id-voting/id-blockchain4"},{"path":"/en/id-voting/id-blockchain5","matchPath":"/en/id-voting/id-blockchain5"},{"path":"/en/id-voting/id-blockchain6","matchPath":"/en/id-voting/id-blockchain6"},{"path":"/en/id-voting/id-blockchain7","matchPath":"/en/id-voting/id-blockchain7"},{"path":"/en/id-voting/id-blockchain8","matchPath":"/en/id-voting/id-blockchain8"},{"path":"/en/id-voting/kickoff-meeting","matchPath":"/en/id-voting/kickoff-meeting"},{"path":"/en/scaling/scaling1","matchPath":"/en/scaling/scaling1"},{"path":"/en/students/students1","matchPath":"/en/students/students1"},{"path":"/en/students/students2","matchPath":"/en/students/students2"},{"path":"/en/students/zero-knowledge-proof","matchPath":"/en/students/zero-knowledge-proof"},{"path":"/en/ethereum2.0","matchPath":"/en/ethereum2.0"},{"path":"/en/id-voting","matchPath":"/en/id-voting"},{"path":"/en/news/","matchPath":"/en/news/"},{"path":"/en/scaling","matchPath":"/en/scaling"},{"path":"/en/students","matchPath":"/en/students"},{"path":"/en/","matchPath":"/en/"},{"path":"/en/404/","matchPath":"/en/*"}]'
      );
    },
    KmKo: function (t, e, n) {
      var r = n("glrk");
      t.exports = function (t) {
        var e = t.return;
        if (void 0 !== e) return r(e.call(t)).value;
      };
    },
    KuiD: function (t, e, n) {
      "use strict";
      n.d(e, "m", function () {
        return rt;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "f", function () {
          return s;
        }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "l", function () {
          return f;
        }),
        n.d(e, "j", function () {
          return p;
        }),
        n.d(e, "h", function () {
          return h;
        }),
        n.d(e, "i", function () {
          return d;
        }),
        n.d(e, "k", function () {
          return m;
        }),
        n.d(e, "g", function () {
          return g;
        }),
        n.d(e, "d", function () {
          return v;
        });
      var r = function () {
        return (r =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var o in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      Object.create;
      var o;
      Object.create;
      !(function (t) {
        (t[(t.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] =
          "EXPECT_ARGUMENT_CLOSING_BRACE"),
          (t[(t.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT"),
          (t[(t.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT"),
          (t[(t.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE"),
          (t[(t.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE"),
          (t[(t.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE"),
          (t[(t.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON"),
          (t[(t.INVALID_DATE_TIME_SKELETON = 8)] =
            "INVALID_DATE_TIME_SKELETON"),
          (t[(t.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON"),
          (t[(t.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON"),
          (t[(t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
            "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"),
          (t[(t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
            "EXPECT_SELECT_ARGUMENT_OPTIONS"),
          (t[(t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
            "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"),
          (t[(t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
            "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"),
          (t[(t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
            "EXPECT_SELECT_ARGUMENT_SELECTOR"),
          (t[(t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
            "EXPECT_PLURAL_ARGUMENT_SELECTOR"),
          (t[(t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
            "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"),
          (t[(t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
            "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"),
          (t[(t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
            "INVALID_PLURAL_ARGUMENT_SELECTOR"),
          (t[(t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
            "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"),
          (t[(t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
            "DUPLICATE_SELECT_ARGUMENT_SELECTOR"),
          (t[(t.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE"),
          (t[(t.INVALID_TAG = 23)] = "INVALID_TAG"),
          (t[(t.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME"),
          (t[(t.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG"),
          (t[(t.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG");
      })(o || (o = {}));
      var i, a;
      n("wfmh"), n("7ueG"), n("HiXI");
      function u(t) {
        return t.type === i.literal;
      }
      function c(t) {
        return t.type === i.argument;
      }
      function s(t) {
        return t.type === i.number;
      }
      function l(t) {
        return t.type === i.date;
      }
      function f(t) {
        return t.type === i.time;
      }
      function p(t) {
        return t.type === i.select;
      }
      function h(t) {
        return t.type === i.plural;
      }
      function d(t) {
        return t.type === i.pound;
      }
      function m(t) {
        return t.type === i.tag;
      }
      function g(t) {
        return !(!t || "object" != typeof t || t.type !== a.number);
      }
      function v(t) {
        return !(!t || "object" != typeof t || t.type !== a.dateTime);
      }
      !(function (t) {
        (t[(t.literal = 0)] = "literal"),
          (t[(t.argument = 1)] = "argument"),
          (t[(t.number = 2)] = "number"),
          (t[(t.date = 3)] = "date"),
          (t[(t.time = 4)] = "time"),
          (t[(t.select = 5)] = "select"),
          (t[(t.plural = 6)] = "plural"),
          (t[(t.pound = 7)] = "pound"),
          (t[(t.tag = 8)] = "tag");
      })(i || (i = {})),
        (function (t) {
          (t[(t.number = 0)] = "number"), (t[(t.dateTime = 1)] = "dateTime");
        })(a || (a = {}));
      var y = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        b = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
      function E(t) {
        var e = {};
        return (
          t.replace(b, function (t) {
            var n = t.length;
            switch (t[0]) {
              case "G":
                e.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
                break;
              case "y":
                e.year = 2 === n ? "2-digit" : "numeric";
                break;
              case "Y":
              case "u":
              case "U":
              case "r":
                throw new RangeError(
                  "`Y/u/U/r` (year) patterns are not supported, use `y` instead"
                );
              case "q":
              case "Q":
                throw new RangeError(
                  "`q/Q` (quarter) patterns are not supported"
                );
              case "M":
              case "L":
                e.month = ["numeric", "2-digit", "short", "long", "narrow"][
                  n - 1
                ];
                break;
              case "w":
              case "W":
                throw new RangeError("`w/W` (week) patterns are not supported");
              case "d":
                e.day = ["numeric", "2-digit"][n - 1];
                break;
              case "D":
              case "F":
              case "g":
                throw new RangeError(
                  "`D/F/g` (day) patterns are not supported, use `d` instead"
                );
              case "E":
                e.weekday = 4 === n ? "short" : 5 === n ? "narrow" : "short";
                break;
              case "e":
                if (n < 4)
                  throw new RangeError(
                    "`e..eee` (weekday) patterns are not supported"
                  );
                e.weekday = ["short", "long", "narrow", "short"][n - 4];
                break;
              case "c":
                if (n < 4)
                  throw new RangeError(
                    "`c..ccc` (weekday) patterns are not supported"
                  );
                e.weekday = ["short", "long", "narrow", "short"][n - 4];
                break;
              case "a":
                e.hour12 = !0;
                break;
              case "b":
              case "B":
                throw new RangeError(
                  "`b/B` (period) patterns are not supported, use `a` instead"
                );
              case "h":
                (e.hourCycle = "h12"), (e.hour = ["numeric", "2-digit"][n - 1]);
                break;
              case "H":
                (e.hourCycle = "h23"), (e.hour = ["numeric", "2-digit"][n - 1]);
                break;
              case "K":
                (e.hourCycle = "h11"), (e.hour = ["numeric", "2-digit"][n - 1]);
                break;
              case "k":
                (e.hourCycle = "h24"), (e.hour = ["numeric", "2-digit"][n - 1]);
                break;
              case "j":
              case "J":
              case "C":
                throw new RangeError(
                  "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead"
                );
              case "m":
                e.minute = ["numeric", "2-digit"][n - 1];
                break;
              case "s":
                e.second = ["numeric", "2-digit"][n - 1];
                break;
              case "S":
              case "A":
                throw new RangeError(
                  "`S/A` (second) patterns are not supported, use `s` instead"
                );
              case "z":
                e.timeZoneName = n < 4 ? "short" : "long";
                break;
              case "Z":
              case "O":
              case "v":
              case "V":
              case "X":
              case "x":
                throw new RangeError(
                  "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead"
                );
            }
            return "";
          }),
          e
        );
      }
      n("E9XD");
      var O = function () {
        return (O =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var o in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      Object.create;
      Object.create;
      var w = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
      var T,
        P = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        S = /^(@+)?(\+|#+)?$/g,
        _ = /(\*)(0+)|(#+)(0+)|(0+)/g,
        j = /^(0+)$/;
      function R(t) {
        var e = {};
        return (
          t.replace(S, function (t, n, r) {
            return (
              "string" != typeof r
                ? ((e.minimumSignificantDigits = n.length),
                  (e.maximumSignificantDigits = n.length))
                : "+" === r
                ? (e.minimumSignificantDigits = n.length)
                : "#" === n[0]
                ? (e.maximumSignificantDigits = n.length)
                : ((e.minimumSignificantDigits = n.length),
                  (e.maximumSignificantDigits =
                    n.length + ("string" == typeof r ? r.length : 0))),
              ""
            );
          }),
          e
        );
      }
      function A(t) {
        switch (t) {
          case "sign-auto":
            return { signDisplay: "auto" };
          case "sign-accounting":
          case "()":
            return { currencySign: "accounting" };
          case "sign-always":
          case "+!":
            return { signDisplay: "always" };
          case "sign-accounting-always":
          case "()!":
            return { signDisplay: "always", currencySign: "accounting" };
          case "sign-except-zero":
          case "+?":
            return { signDisplay: "exceptZero" };
          case "sign-accounting-except-zero":
          case "()?":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
          case "sign-never":
          case "+_":
            return { signDisplay: "never" };
        }
      }
      function C(t) {
        var e;
        if (
          ("E" === t[0] && "E" === t[1]
            ? ((e = { notation: "engineering" }), (t = t.slice(2)))
            : "E" === t[0] &&
              ((e = { notation: "scientific" }), (t = t.slice(1))),
          e)
        ) {
          var n = t.slice(0, 2);
          if (
            ("+!" === n
              ? ((e.signDisplay = "always"), (t = t.slice(2)))
              : "+?" === n &&
                ((e.signDisplay = "exceptZero"), (t = t.slice(2))),
            !j.test(t))
          )
            throw new Error("Malformed concise eng/scientific notation");
          e.minimumIntegerDigits = t.length;
        }
        return e;
      }
      function L(t) {
        var e = A(t);
        return e || {};
      }
      function x(t) {
        for (var e = {}, n = 0, r = t; n < r.length; n++) {
          var o = r[n];
          switch (o.stem) {
            case "percent":
            case "%":
              e.style = "percent";
              continue;
            case "%x100":
              (e.style = "percent"), (e.scale = 100);
              continue;
            case "currency":
              (e.style = "currency"), (e.currency = o.options[0]);
              continue;
            case "group-off":
            case ",_":
              e.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              e.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              (e.style = "unit"),
                (e.unit = o.options[0].replace(/^(.*?)-/, ""));
              continue;
            case "compact-short":
            case "K":
              (e.notation = "compact"), (e.compactDisplay = "short");
              continue;
            case "compact-long":
            case "KK":
              (e.notation = "compact"), (e.compactDisplay = "long");
              continue;
            case "scientific":
              e = O(
                O(O({}, e), { notation: "scientific" }),
                o.options.reduce(function (t, e) {
                  return O(O({}, t), L(e));
                }, {})
              );
              continue;
            case "engineering":
              e = O(
                O(O({}, e), { notation: "engineering" }),
                o.options.reduce(function (t, e) {
                  return O(O({}, t), L(e));
                }, {})
              );
              continue;
            case "notation-simple":
              e.notation = "standard";
              continue;
            case "unit-width-narrow":
              (e.currencyDisplay = "narrowSymbol"), (e.unitDisplay = "narrow");
              continue;
            case "unit-width-short":
              (e.currencyDisplay = "code"), (e.unitDisplay = "short");
              continue;
            case "unit-width-full-name":
              (e.currencyDisplay = "name"), (e.unitDisplay = "long");
              continue;
            case "unit-width-iso-code":
              e.currencyDisplay = "symbol";
              continue;
            case "scale":
              e.scale = parseFloat(o.options[0]);
              continue;
            case "integer-width":
              if (o.options.length > 1)
                throw new RangeError(
                  "integer-width stems only accept a single optional option"
                );
              o.options[0].replace(_, function (t, n, r, o, i, a) {
                if (n) e.minimumIntegerDigits = r.length;
                else {
                  if (o && i)
                    throw new Error(
                      "We currently do not support maximum integer digits"
                    );
                  if (a)
                    throw new Error(
                      "We currently do not support exact integer digits"
                    );
                }
                return "";
              });
              continue;
          }
          if (j.test(o.stem)) e.minimumIntegerDigits = o.stem.length;
          else if (P.test(o.stem)) {
            if (o.options.length > 1)
              throw new RangeError(
                "Fraction-precision stems only accept a single optional option"
              );
            o.stem.replace(P, function (t, n, r, o, i, a) {
              return (
                "*" === r
                  ? (e.minimumFractionDigits = n.length)
                  : o && "#" === o[0]
                  ? (e.maximumFractionDigits = o.length)
                  : i && a
                  ? ((e.minimumFractionDigits = i.length),
                    (e.maximumFractionDigits = i.length + a.length))
                  : ((e.minimumFractionDigits = n.length),
                    (e.maximumFractionDigits = n.length)),
                ""
              );
            }),
              o.options.length && (e = O(O({}, e), R(o.options[0])));
          } else if (S.test(o.stem)) e = O(O({}, e), R(o.stem));
          else {
            var i = A(o.stem);
            i && (e = O(O({}, e), i));
            var a = C(o.stem);
            a && (e = O(O({}, e), a));
          }
        }
        return e;
      }
      var k = new RegExp("^" + y.source + "*"),
        I = new RegExp(y.source + "*$");
      function D(t, e) {
        return { start: t, end: e };
      }
      var N = !!String.prototype.startsWith,
        M = !!String.fromCodePoint,
        F = !!Object.fromEntries,
        U = !!String.prototype.codePointAt,
        G = !!String.prototype.trimStart,
        q = !!String.prototype.trimEnd,
        V = !!Number.isSafeInteger
          ? Number.isSafeInteger
          : function (t) {
              return (
                "number" == typeof t &&
                isFinite(t) &&
                Math.floor(t) === t &&
                Math.abs(t) <= 9007199254740991
              );
            },
        X = !0;
      try {
        X =
          "a" ===
          (null ===
            (T = Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec(
              "a"
            )) || void 0 === T
            ? void 0
            : T[0]);
      } catch (ot) {
        X = !1;
      }
      var W,
        B = N
          ? function (t, e, n) {
              return t.startsWith(e, n);
            }
          : function (t, e, n) {
              return t.slice(n, n + e.length) === e;
            },
        z = M
          ? String.fromCodePoint
          : function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              for (var n, r = "", o = t.length, i = 0; o > i; ) {
                if ((n = t[i++]) > 1114111)
                  throw RangeError(n + " is not a valid code point");
                r +=
                  n < 65536
                    ? String.fromCharCode(n)
                    : String.fromCharCode(
                        55296 + ((n -= 65536) >> 10),
                        (n % 1024) + 56320
                      );
              }
              return r;
            },
        Y = F
          ? Object.fromEntries
          : function (t) {
              for (var e = {}, n = 0, r = t; n < r.length; n++) {
                var o = r[n],
                  i = o[0],
                  a = o[1];
                e[i] = a;
              }
              return e;
            },
        K = U
          ? function (t, e) {
              return t.codePointAt(e);
            }
          : function (t, e) {
              var n = t.length;
              if (!(e < 0 || e >= n)) {
                var r,
                  o = t.charCodeAt(e);
                return o < 55296 ||
                  o > 56319 ||
                  e + 1 === n ||
                  (r = t.charCodeAt(e + 1)) < 56320 ||
                  r > 57343
                  ? o
                  : r - 56320 + ((o - 55296) << 10) + 65536;
              }
            },
        H = G
          ? function (t) {
              return t.trimStart();
            }
          : function (t) {
              return t.replace(k, "");
            },
        J = q
          ? function (t) {
              return t.trimEnd();
            }
          : function (t) {
              return t.replace(I, "");
            };
      function Q(t, e) {
        return new RegExp(t, e);
      }
      if (X) {
        var $ = Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        W = function (t, e) {
          var n;
          return (
            ($.lastIndex = e),
            null !== (n = $.exec(t)[1]) && void 0 !== n ? n : ""
          );
        };
      } else
        W = function (t, e) {
          for (var n = []; ; ) {
            var r = K(t, e);
            if (void 0 === r || et(r) || nt(r)) break;
            n.push(r), (e += r >= 65536 ? 2 : 1);
          }
          return z.apply(void 0, n);
        };
      var Z = (function () {
        function t(t, e) {
          void 0 === e && (e = {}),
            (this.message = t),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!e.ignoreTag),
            (this.requiresOtherClause = !!e.requiresOtherClause),
            (this.shouldParseSkeletons = !!e.shouldParseSkeletons);
        }
        return (
          (t.prototype.parse = function () {
            if (0 !== this.offset())
              throw Error("parser can only be used once");
            return this.parseMessage(0, "", !1);
          }),
          (t.prototype.parseMessage = function (t, e, n) {
            for (var r = []; !this.isEOF(); ) {
              var a = this.char();
              if (123 === a) {
                if ((u = this.parseArgument(t, n)).err) return u;
                r.push(u.val);
              } else {
                if (125 === a && t > 0) break;
                if (35 !== a || ("plural" !== e && "selectordinal" !== e)) {
                  if (60 === a && !this.ignoreTag && 47 === this.peek()) {
                    if (n) break;
                    return this.error(
                      o.UNMATCHED_CLOSING_TAG,
                      D(this.clonePosition(), this.clonePosition())
                    );
                  }
                  if (60 === a && !this.ignoreTag && tt(this.peek() || 0)) {
                    if ((u = this.parseTag(t, e)).err) return u;
                    r.push(u.val);
                  } else {
                    var u;
                    if ((u = this.parseLiteral(t, e)).err) return u;
                    r.push(u.val);
                  }
                } else {
                  var c = this.clonePosition();
                  this.bump(),
                    r.push({
                      type: i.pound,
                      location: D(c, this.clonePosition()),
                    });
                }
              }
            }
            return { val: r, err: null };
          }),
          (t.prototype.parseTag = function (t, e) {
            var n = this.clonePosition();
            this.bump();
            var r = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf("/>")))
              return {
                val: {
                  type: i.literal,
                  value: "<" + r + "/>",
                  location: D(n, this.clonePosition()),
                },
                err: null,
              };
            if (this.bumpIf(">")) {
              var a = this.parseMessage(t + 1, e, !0);
              if (a.err) return a;
              var u = a.val,
                c = this.clonePosition();
              if (this.bumpIf("</")) {
                if (this.isEOF() || !tt(this.char()))
                  return this.error(o.INVALID_TAG, D(c, this.clonePosition()));
                var s = this.clonePosition();
                return r !== this.parseTagName()
                  ? this.error(
                      o.UNMATCHED_CLOSING_TAG,
                      D(s, this.clonePosition())
                    )
                  : (this.bumpSpace(),
                    this.bumpIf(">")
                      ? {
                          val: {
                            type: i.tag,
                            value: r,
                            children: u,
                            location: D(n, this.clonePosition()),
                          },
                          err: null,
                        }
                      : this.error(o.INVALID_TAG, D(c, this.clonePosition())));
              }
              return this.error(o.UNCLOSED_TAG, D(n, this.clonePosition()));
            }
            return this.error(o.INVALID_TAG, D(n, this.clonePosition()));
          }),
          (t.prototype.parseTagName = function () {
            var t,
              e = this.offset();
            for (
              this.bump();
              !this.isEOF() &&
              (45 === (t = this.char()) ||
                46 === t ||
                (t >= 48 && t <= 57) ||
                95 === t ||
                (t >= 97 && t <= 122) ||
                (t >= 65 && t <= 90) ||
                183 == t ||
                (t >= 192 && t <= 214) ||
                (t >= 216 && t <= 246) ||
                (t >= 248 && t <= 893) ||
                (t >= 895 && t <= 8191) ||
                (t >= 8204 && t <= 8205) ||
                (t >= 8255 && t <= 8256) ||
                (t >= 8304 && t <= 8591) ||
                (t >= 11264 && t <= 12271) ||
                (t >= 12289 && t <= 55295) ||
                (t >= 63744 && t <= 64975) ||
                (t >= 65008 && t <= 65533) ||
                (t >= 65536 && t <= 983039));

            )
              this.bump();
            return this.message.slice(e, this.offset());
          }),
          (t.prototype.parseLiteral = function (t, e) {
            for (var n = this.clonePosition(), r = ""; ; ) {
              var o = this.tryParseQuote(e);
              if (o) r += o;
              else {
                var a = this.tryParseUnquoted(t, e);
                if (a) r += a;
                else {
                  var u = this.tryParseLeftAngleBracket();
                  if (!u) break;
                  r += u;
                }
              }
            }
            var c = D(n, this.clonePosition());
            return {
              val: { type: i.literal, value: r, location: c },
              err: null,
            };
          }),
          (t.prototype.tryParseLeftAngleBracket = function () {
            return this.isEOF() ||
              60 !== this.char() ||
              (!this.ignoreTag && (tt((t = this.peek() || 0)) || 47 === t))
              ? null
              : (this.bump(), "<");
            var t;
          }),
          (t.prototype.tryParseQuote = function (t) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
              case 39:
                return this.bump(), this.bump(), "'";
              case 123:
              case 60:
              case 62:
              case 125:
                break;
              case 35:
                if ("plural" === t || "selectordinal" === t) break;
                return null;
              default:
                return null;
            }
            this.bump();
            var e = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
              var n = this.char();
              if (39 === n) {
                if (39 !== this.peek()) {
                  this.bump();
                  break;
                }
                e.push(39), this.bump();
              } else e.push(n);
              this.bump();
            }
            return z.apply(void 0, e);
          }),
          (t.prototype.tryParseUnquoted = function (t, e) {
            if (this.isEOF()) return null;
            var n = this.char();
            return 60 === n ||
              123 === n ||
              (35 === n && ("plural" === e || "selectordinal" === e)) ||
              (125 === n && t > 0)
              ? null
              : (this.bump(), z(n));
          }),
          (t.prototype.parseArgument = function (t, e) {
            var n = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(
                o.EXPECT_ARGUMENT_CLOSING_BRACE,
                D(n, this.clonePosition())
              );
            if (125 === this.char())
              return (
                this.bump(),
                this.error(o.EMPTY_ARGUMENT, D(n, this.clonePosition()))
              );
            var r = this.parseIdentifierIfPossible().value;
            if (!r)
              return this.error(
                o.MALFORMED_ARGUMENT,
                D(n, this.clonePosition())
              );
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(
                o.EXPECT_ARGUMENT_CLOSING_BRACE,
                D(n, this.clonePosition())
              );
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: {
                      type: i.argument,
                      value: r,
                      location: D(n, this.clonePosition()),
                    },
                    err: null,
                  }
                );
              case 44:
                return (
                  this.bump(),
                  this.bumpSpace(),
                  this.isEOF()
                    ? this.error(
                        o.EXPECT_ARGUMENT_CLOSING_BRACE,
                        D(n, this.clonePosition())
                      )
                    : this.parseArgumentOptions(t, e, r, n)
                );
              default:
                return this.error(
                  o.MALFORMED_ARGUMENT,
                  D(n, this.clonePosition())
                );
            }
          }),
          (t.prototype.parseIdentifierIfPossible = function () {
            var t = this.clonePosition(),
              e = this.offset(),
              n = W(this.message, e),
              r = e + n.length;
            return (
              this.bumpTo(r), { value: n, location: D(t, this.clonePosition()) }
            );
          }),
          (t.prototype.parseArgumentOptions = function (t, e, n, u) {
            var c,
              s = this.clonePosition(),
              l = this.parseIdentifierIfPossible().value,
              f = this.clonePosition();
            switch (l) {
              case "":
                return this.error(o.EXPECT_ARGUMENT_TYPE, D(s, f));
              case "number":
              case "date":
              case "time":
                this.bumpSpace();
                var p = null;
                if (this.bumpIf(",")) {
                  this.bumpSpace();
                  var h = this.clonePosition();
                  if ((O = this.parseSimpleArgStyleIfPossible()).err) return O;
                  if (0 === (g = J(O.val)).length)
                    return this.error(
                      o.EXPECT_ARGUMENT_STYLE,
                      D(this.clonePosition(), this.clonePosition())
                    );
                  p = { style: g, styleLocation: D(h, this.clonePosition()) };
                }
                if ((w = this.tryParseArgumentClose(u)).err) return w;
                var d = D(u, this.clonePosition());
                if (p && B(null == p ? void 0 : p.style, "::", 0)) {
                  var m = H(p.style.slice(2));
                  if ("number" === l)
                    return (O = this.parseNumberSkeletonFromString(
                      m,
                      p.styleLocation
                    )).err
                      ? O
                      : {
                          val: {
                            type: i.number,
                            value: n,
                            location: d,
                            style: O.val,
                          },
                          err: null,
                        };
                  if (0 === m.length)
                    return this.error(o.EXPECT_DATE_TIME_SKELETON, d);
                  var g = {
                    type: a.dateTime,
                    pattern: m,
                    location: p.styleLocation,
                    parsedOptions: this.shouldParseSkeletons ? E(m) : {},
                  };
                  return {
                    val: {
                      type: "date" === l ? i.date : i.time,
                      value: n,
                      location: d,
                      style: g,
                    },
                    err: null,
                  };
                }
                return {
                  val: {
                    type:
                      "number" === l
                        ? i.number
                        : "date" === l
                        ? i.date
                        : i.time,
                    value: n,
                    location: d,
                    style:
                      null !== (c = null == p ? void 0 : p.style) &&
                      void 0 !== c
                        ? c
                        : null,
                  },
                  err: null,
                };
              case "plural":
              case "selectordinal":
              case "select":
                var v = this.clonePosition();
                if ((this.bumpSpace(), !this.bumpIf(",")))
                  return this.error(
                    o.EXPECT_SELECT_ARGUMENT_OPTIONS,
                    D(v, r({}, v))
                  );
                this.bumpSpace();
                var y = this.parseIdentifierIfPossible(),
                  b = 0;
                if ("select" !== l && "offset" === y.value) {
                  if (!this.bumpIf(":"))
                    return this.error(
                      o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      D(this.clonePosition(), this.clonePosition())
                    );
                  var O;
                  if (
                    (this.bumpSpace(),
                    (O = this.tryParseDecimalInteger(
                      o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      o.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
                    )).err)
                  )
                    return O;
                  this.bumpSpace(),
                    (y = this.parseIdentifierIfPossible()),
                    (b = O.val);
                }
                var w,
                  T = this.tryParsePluralOrSelectOptions(t, l, e, y);
                if (T.err) return T;
                if ((w = this.tryParseArgumentClose(u)).err) return w;
                var P = D(u, this.clonePosition());
                return "select" === l
                  ? {
                      val: {
                        type: i.select,
                        value: n,
                        options: Y(T.val),
                        location: P,
                      },
                      err: null,
                    }
                  : {
                      val: {
                        type: i.plural,
                        value: n,
                        options: Y(T.val),
                        offset: b,
                        pluralType: "plural" === l ? "cardinal" : "ordinal",
                        location: P,
                      },
                      err: null,
                    };
              default:
                return this.error(o.INVALID_ARGUMENT_TYPE, D(s, f));
            }
          }),
          (t.prototype.tryParseArgumentClose = function (t) {
            return this.isEOF() || 125 !== this.char()
              ? this.error(
                  o.EXPECT_ARGUMENT_CLOSING_BRACE,
                  D(t, this.clonePosition())
                )
              : (this.bump(), { val: !0, err: null });
          }),
          (t.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var t = 0, e = this.clonePosition(); !this.isEOF(); ) {
              switch (this.char()) {
                case 39:
                  this.bump();
                  var n = this.clonePosition();
                  if (!this.bumpUntil("'"))
                    return this.error(
                      o.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      D(n, this.clonePosition())
                    );
                  this.bump();
                  break;
                case 123:
                  (t += 1), this.bump();
                  break;
                case 125:
                  if (!(t > 0))
                    return {
                      val: this.message.slice(e.offset, this.offset()),
                      err: null,
                    };
                  t -= 1;
                  break;
                default:
                  this.bump();
              }
            }
            return {
              val: this.message.slice(e.offset, this.offset()),
              err: null,
            };
          }),
          (t.prototype.parseNumberSkeletonFromString = function (t, e) {
            var n = [];
            try {
              n = (function (t) {
                if (0 === t.length)
                  throw new Error("Number skeleton cannot be empty");
                for (
                  var e = [],
                    n = 0,
                    r = t.split(w).filter(function (t) {
                      return t.length > 0;
                    });
                  n < r.length;
                  n++
                ) {
                  var o = r[n].split("/");
                  if (0 === o.length)
                    throw new Error("Invalid number skeleton");
                  for (
                    var i = o[0], a = o.slice(1), u = 0, c = a;
                    u < c.length;
                    u++
                  ) {
                    if (0 === c[u].length)
                      throw new Error("Invalid number skeleton");
                  }
                  e.push({ stem: i, options: a });
                }
                return e;
              })(t);
            } catch (r) {
              return this.error(o.INVALID_NUMBER_SKELETON, e);
            }
            return {
              val: {
                type: a.number,
                tokens: n,
                location: e,
                parsedOptions: this.shouldParseSkeletons ? x(n) : {},
              },
              err: null,
            };
          }),
          (t.prototype.tryParsePluralOrSelectOptions = function (t, e, n, r) {
            for (
              var i, a = !1, u = [], c = new Set(), s = r.value, l = r.location;
              ;

            ) {
              if (0 === s.length) {
                var f = this.clonePosition();
                if ("select" === e || !this.bumpIf("=")) break;
                var p = this.tryParseDecimalInteger(
                  o.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  o.INVALID_PLURAL_ARGUMENT_SELECTOR
                );
                if (p.err) return p;
                (l = D(f, this.clonePosition())),
                  (s = this.message.slice(f.offset, this.offset()));
              }
              if (c.has(s))
                return this.error(
                  "select" === e
                    ? o.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : o.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  l
                );
              "other" === s && (a = !0), this.bumpSpace();
              var h = this.clonePosition();
              if (!this.bumpIf("{"))
                return this.error(
                  "select" === e
                    ? o.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : o.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  D(this.clonePosition(), this.clonePosition())
                );
              var d = this.parseMessage(t + 1, e, n);
              if (d.err) return d;
              var m = this.tryParseArgumentClose(h);
              if (m.err) return m;
              u.push([
                s,
                { value: d.val, location: D(h, this.clonePosition()) },
              ]),
                c.add(s),
                this.bumpSpace(),
                (s = (i = this.parseIdentifierIfPossible()).value),
                (l = i.location);
            }
            return 0 === u.length
              ? this.error(
                  "select" === e
                    ? o.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : o.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  D(this.clonePosition(), this.clonePosition())
                )
              : this.requiresOtherClause && !a
              ? this.error(
                  o.MISSING_OTHER_CLAUSE,
                  D(this.clonePosition(), this.clonePosition())
                )
              : { val: u, err: null };
          }),
          (t.prototype.tryParseDecimalInteger = function (t, e) {
            var n = 1,
              r = this.clonePosition();
            this.bumpIf("+") || (this.bumpIf("-") && (n = -1));
            for (var o = !1, i = 0; !this.isEOF(); ) {
              var a = this.char();
              if (!(a >= 48 && a <= 57)) break;
              (o = !0), (i = 10 * i + (a - 48)), this.bump();
            }
            var u = D(r, this.clonePosition());
            return o
              ? V((i *= n))
                ? { val: i, err: null }
                : this.error(e, u)
              : this.error(t, u);
          }),
          (t.prototype.offset = function () {
            return this.position.offset;
          }),
          (t.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (t.prototype.clonePosition = function () {
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          }),
          (t.prototype.char = function () {
            var t = this.position.offset;
            if (t >= this.message.length) throw Error("out of bound");
            var e = K(this.message, t);
            if (void 0 === e)
              throw Error(
                "Offset " + t + " is at invalid UTF-16 code unit boundary"
              );
            return e;
          }),
          (t.prototype.error = function (t, e) {
            return {
              val: null,
              err: { kind: t, message: this.message, location: e },
            };
          }),
          (t.prototype.bump = function () {
            if (!this.isEOF()) {
              var t = this.char();
              10 === t
                ? ((this.position.line += 1),
                  (this.position.column = 1),
                  (this.position.offset += 1))
                : ((this.position.column += 1),
                  (this.position.offset += t < 65536 ? 1 : 2));
            }
          }),
          (t.prototype.bumpIf = function (t) {
            if (B(this.message, t, this.offset())) {
              for (var e = 0; e < t.length; e++) this.bump();
              return !0;
            }
            return !1;
          }),
          (t.prototype.bumpUntil = function (t) {
            var e = this.offset(),
              n = this.message.indexOf(t, e);
            return n >= 0
              ? (this.bumpTo(n), !0)
              : (this.bumpTo(this.message.length), !1);
          }),
          (t.prototype.bumpTo = function (t) {
            if (this.offset() > t)
              throw Error(
                "targetOffset " +
                  t +
                  " must be greater than or equal to the current offset " +
                  this.offset()
              );
            for (t = Math.min(t, this.message.length); ; ) {
              var e = this.offset();
              if (e === t) break;
              if (e > t)
                throw Error(
                  "targetOffset " +
                    t +
                    " is at invalid UTF-16 code unit boundary"
                );
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (t.prototype.bumpSpace = function () {
            for (; !this.isEOF() && et(this.char()); ) this.bump();
          }),
          (t.prototype.peek = function () {
            if (this.isEOF()) return null;
            var t = this.char(),
              e = this.offset(),
              n = this.message.charCodeAt(e + (t >= 65536 ? 2 : 1));
            return null != n ? n : null;
          }),
          t
        );
      })();
      function tt(t) {
        return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
      }
      function et(t) {
        return (
          (t >= 9 && t <= 13) ||
          32 === t ||
          133 === t ||
          (t >= 8206 && t <= 8207) ||
          8232 === t ||
          8233 === t
        );
      }
      function nt(t) {
        return (
          (t >= 33 && t <= 35) ||
          36 === t ||
          (t >= 37 && t <= 39) ||
          40 === t ||
          41 === t ||
          42 === t ||
          43 === t ||
          44 === t ||
          45 === t ||
          (t >= 46 && t <= 47) ||
          (t >= 58 && t <= 59) ||
          (t >= 60 && t <= 62) ||
          (t >= 63 && t <= 64) ||
          91 === t ||
          92 === t ||
          93 === t ||
          94 === t ||
          96 === t ||
          123 === t ||
          124 === t ||
          125 === t ||
          126 === t ||
          161 === t ||
          (t >= 162 && t <= 165) ||
          166 === t ||
          167 === t ||
          169 === t ||
          171 === t ||
          172 === t ||
          174 === t ||
          176 === t ||
          177 === t ||
          182 === t ||
          187 === t ||
          191 === t ||
          215 === t ||
          247 === t ||
          (t >= 8208 && t <= 8213) ||
          (t >= 8214 && t <= 8215) ||
          8216 === t ||
          8217 === t ||
          8218 === t ||
          (t >= 8219 && t <= 8220) ||
          8221 === t ||
          8222 === t ||
          8223 === t ||
          (t >= 8224 && t <= 8231) ||
          (t >= 8240 && t <= 8248) ||
          8249 === t ||
          8250 === t ||
          (t >= 8251 && t <= 8254) ||
          (t >= 8257 && t <= 8259) ||
          8260 === t ||
          8261 === t ||
          8262 === t ||
          (t >= 8263 && t <= 8273) ||
          8274 === t ||
          8275 === t ||
          (t >= 8277 && t <= 8286) ||
          (t >= 8592 && t <= 8596) ||
          (t >= 8597 && t <= 8601) ||
          (t >= 8602 && t <= 8603) ||
          (t >= 8604 && t <= 8607) ||
          8608 === t ||
          (t >= 8609 && t <= 8610) ||
          8611 === t ||
          (t >= 8612 && t <= 8613) ||
          8614 === t ||
          (t >= 8615 && t <= 8621) ||
          8622 === t ||
          (t >= 8623 && t <= 8653) ||
          (t >= 8654 && t <= 8655) ||
          (t >= 8656 && t <= 8657) ||
          8658 === t ||
          8659 === t ||
          8660 === t ||
          (t >= 8661 && t <= 8691) ||
          (t >= 8692 && t <= 8959) ||
          (t >= 8960 && t <= 8967) ||
          8968 === t ||
          8969 === t ||
          8970 === t ||
          8971 === t ||
          (t >= 8972 && t <= 8991) ||
          (t >= 8992 && t <= 8993) ||
          (t >= 8994 && t <= 9e3) ||
          9001 === t ||
          9002 === t ||
          (t >= 9003 && t <= 9083) ||
          9084 === t ||
          (t >= 9085 && t <= 9114) ||
          (t >= 9115 && t <= 9139) ||
          (t >= 9140 && t <= 9179) ||
          (t >= 9180 && t <= 9185) ||
          (t >= 9186 && t <= 9254) ||
          (t >= 9255 && t <= 9279) ||
          (t >= 9280 && t <= 9290) ||
          (t >= 9291 && t <= 9311) ||
          (t >= 9472 && t <= 9654) ||
          9655 === t ||
          (t >= 9656 && t <= 9664) ||
          9665 === t ||
          (t >= 9666 && t <= 9719) ||
          (t >= 9720 && t <= 9727) ||
          (t >= 9728 && t <= 9838) ||
          9839 === t ||
          (t >= 9840 && t <= 10087) ||
          10088 === t ||
          10089 === t ||
          10090 === t ||
          10091 === t ||
          10092 === t ||
          10093 === t ||
          10094 === t ||
          10095 === t ||
          10096 === t ||
          10097 === t ||
          10098 === t ||
          10099 === t ||
          10100 === t ||
          10101 === t ||
          (t >= 10132 && t <= 10175) ||
          (t >= 10176 && t <= 10180) ||
          10181 === t ||
          10182 === t ||
          (t >= 10183 && t <= 10213) ||
          10214 === t ||
          10215 === t ||
          10216 === t ||
          10217 === t ||
          10218 === t ||
          10219 === t ||
          10220 === t ||
          10221 === t ||
          10222 === t ||
          10223 === t ||
          (t >= 10224 && t <= 10239) ||
          (t >= 10240 && t <= 10495) ||
          (t >= 10496 && t <= 10626) ||
          10627 === t ||
          10628 === t ||
          10629 === t ||
          10630 === t ||
          10631 === t ||
          10632 === t ||
          10633 === t ||
          10634 === t ||
          10635 === t ||
          10636 === t ||
          10637 === t ||
          10638 === t ||
          10639 === t ||
          10640 === t ||
          10641 === t ||
          10642 === t ||
          10643 === t ||
          10644 === t ||
          10645 === t ||
          10646 === t ||
          10647 === t ||
          10648 === t ||
          (t >= 10649 && t <= 10711) ||
          10712 === t ||
          10713 === t ||
          10714 === t ||
          10715 === t ||
          (t >= 10716 && t <= 10747) ||
          10748 === t ||
          10749 === t ||
          (t >= 10750 && t <= 11007) ||
          (t >= 11008 && t <= 11055) ||
          (t >= 11056 && t <= 11076) ||
          (t >= 11077 && t <= 11078) ||
          (t >= 11079 && t <= 11084) ||
          (t >= 11085 && t <= 11123) ||
          (t >= 11124 && t <= 11125) ||
          (t >= 11126 && t <= 11157) ||
          11158 === t ||
          (t >= 11159 && t <= 11263) ||
          (t >= 11776 && t <= 11777) ||
          11778 === t ||
          11779 === t ||
          11780 === t ||
          11781 === t ||
          (t >= 11782 && t <= 11784) ||
          11785 === t ||
          11786 === t ||
          11787 === t ||
          11788 === t ||
          11789 === t ||
          (t >= 11790 && t <= 11798) ||
          11799 === t ||
          (t >= 11800 && t <= 11801) ||
          11802 === t ||
          11803 === t ||
          11804 === t ||
          11805 === t ||
          (t >= 11806 && t <= 11807) ||
          11808 === t ||
          11809 === t ||
          11810 === t ||
          11811 === t ||
          11812 === t ||
          11813 === t ||
          11814 === t ||
          11815 === t ||
          11816 === t ||
          11817 === t ||
          (t >= 11818 && t <= 11822) ||
          11823 === t ||
          (t >= 11824 && t <= 11833) ||
          (t >= 11834 && t <= 11835) ||
          (t >= 11836 && t <= 11839) ||
          11840 === t ||
          11841 === t ||
          11842 === t ||
          (t >= 11843 && t <= 11855) ||
          (t >= 11856 && t <= 11857) ||
          11858 === t ||
          (t >= 11859 && t <= 11903) ||
          (t >= 12289 && t <= 12291) ||
          12296 === t ||
          12297 === t ||
          12298 === t ||
          12299 === t ||
          12300 === t ||
          12301 === t ||
          12302 === t ||
          12303 === t ||
          12304 === t ||
          12305 === t ||
          (t >= 12306 && t <= 12307) ||
          12308 === t ||
          12309 === t ||
          12310 === t ||
          12311 === t ||
          12312 === t ||
          12313 === t ||
          12314 === t ||
          12315 === t ||
          12316 === t ||
          12317 === t ||
          (t >= 12318 && t <= 12319) ||
          12320 === t ||
          12336 === t ||
          64830 === t ||
          64831 === t ||
          (t >= 65093 && t <= 65094)
        );
      }
      function rt(t, e) {
        void 0 === e && (e = {}),
          (e = r({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e));
        var n = new Z(t, e).parse();
        if (n.err) {
          var i = SyntaxError(o[n.err.kind]);
          throw (
            ((i.location = n.err.location),
            (i.originalMessage = n.err.message),
            i)
          );
        }
        return (
          (null == e ? void 0 : e.captureLocation) ||
            (function t(e) {
              e.forEach(function (e) {
                if ((delete e.location, p(e) || h(e)))
                  for (var n in e.options)
                    delete e.options[n].location, t(e.options[n].value);
                else
                  (s(e) && g(e.style)) || ((l(e) || f(e)) && v(e.style))
                    ? delete e.style.location
                    : m(e) && t(e.children);
              });
            })(n.val),
          n.val
        );
      }
    },
    LQDL: function (t, e, n) {
      var r,
        o,
        i = n("2oRo"),
        a = n("NC/Y"),
        u = i.process,
        c = i.Deno,
        s = (u && u.versions) || (c && c.version),
        l = s && s.v8;
      l
        ? (o = (r = l.split("."))[0] < 4 ? 1 : r[0] + r[1])
        : a &&
          (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
          (r = a.match(/Chrome\/(\d+)/)) &&
          (o = r[1]),
        (t.exports = o && +o);
    },
    LYrO: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "startsWith", function () {
          return i;
        }),
        n.d(e, "pick", function () {
          return a;
        }),
        n.d(e, "match", function () {
          return u;
        }),
        n.d(e, "resolve", function () {
          return c;
        }),
        n.d(e, "insertParams", function () {
          return s;
        }),
        n.d(e, "validateRedirect", function () {
          return l;
        }),
        n.d(e, "shallowCompare", function () {
          return b;
        });
      var r = n("QLaP"),
        o = n.n(r),
        i = function (t, e) {
          return t.substr(0, e.length) === e;
        },
        a = function (t, e) {
          for (
            var n = void 0,
              r = void 0,
              i = e.split("?")[0],
              a = g(i),
              u = "" === a[0],
              c = m(t),
              s = 0,
              l = c.length;
            s < l;
            s++
          ) {
            var p = !1,
              d = c[s].route;
            if (d.default) r = { route: d, params: {}, uri: e };
            else {
              for (
                var v = g(d.path),
                  b = {},
                  E = Math.max(a.length, v.length),
                  O = 0;
                O < E;
                O++
              ) {
                var w = v[O],
                  T = a[O];
                if (h(w)) {
                  b[w.slice(1) || "*"] = a
                    .slice(O)
                    .map(decodeURIComponent)
                    .join("/");
                  break;
                }
                if (void 0 === T) {
                  p = !0;
                  break;
                }
                var P = f.exec(w);
                if (P && !u) {
                  -1 === y.indexOf(P[1]) || o()(!1);
                  var S = decodeURIComponent(T);
                  b[P[1]] = S;
                } else if (w !== T) {
                  p = !0;
                  break;
                }
              }
              if (!p) {
                n = { route: d, params: b, uri: "/" + a.slice(0, O).join("/") };
                break;
              }
            }
          }
          return n || r || null;
        },
        u = function (t, e) {
          return a([{ path: t }], e);
        },
        c = function (t, e) {
          if (i(t, "/")) return t;
          var n = t.split("?"),
            r = n[0],
            o = n[1],
            a = e.split("?")[0],
            u = g(r),
            c = g(a);
          if ("" === u[0]) return v(a, o);
          if (!i(u[0], ".")) {
            var s = c.concat(u).join("/");
            return v(("/" === a ? "" : "/") + s, o);
          }
          for (var l = c.concat(u), f = [], p = 0, h = l.length; p < h; p++) {
            var d = l[p];
            ".." === d ? f.pop() : "." !== d && f.push(d);
          }
          return v("/" + f.join("/"), o);
        },
        s = function (t, e) {
          var n = t.split("?"),
            r = n[0],
            o = n[1],
            i = void 0 === o ? "" : o,
            a =
              "/" +
              g(r)
                .map(function (t) {
                  var n = f.exec(t);
                  return n ? e[n[1]] : t;
                })
                .join("/"),
            u = e.location,
            c = (u = void 0 === u ? {} : u).search,
            s = (void 0 === c ? "" : c).split("?")[1] || "";
          return (a = v(a, i, s));
        },
        l = function (t, e) {
          var n = function (t) {
            return p(t);
          };
          return (
            g(t).filter(n).sort().join("/") === g(e).filter(n).sort().join("/")
          );
        },
        f = /^:(.+)/,
        p = function (t) {
          return f.test(t);
        },
        h = function (t) {
          return t && "*" === t[0];
        },
        d = function (t, e) {
          return {
            route: t,
            score: t.default
              ? 0
              : g(t.path).reduce(function (t, e) {
                  return (
                    (t += 4),
                    !(function (t) {
                      return "" === t;
                    })(e)
                      ? p(e)
                        ? (t += 2)
                        : h(e)
                        ? (t -= 5)
                        : (t += 3)
                      : (t += 1),
                    t
                  );
                }, 0),
            index: e,
          };
        },
        m = function (t) {
          return t.map(d).sort(function (t, e) {
            return t.score < e.score
              ? 1
              : t.score > e.score
              ? -1
              : t.index - e.index;
          });
        },
        g = function (t) {
          return t.replace(/(^\/+|\/+$)/g, "").split("/");
        },
        v = function (t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          return (
            t +
            ((n = n.filter(function (t) {
              return t && t.length > 0;
            })) && n.length > 0
              ? "?" + n.join("&")
              : "")
          );
        },
        y = ["uri", "path"],
        b = function (t, e) {
          var n = Object.keys(t);
          return (
            n.length === Object.keys(e).length &&
            n.every(function (n) {
              return e.hasOwnProperty(n) && t[n] === e[n];
            })
          );
        };
    },
    LeKB: function (t, e, n) {
      t.exports = [
        {
          plugin: n("/m/s"),
          options: {
            plugins: [],
            defaultLang: "ja",
            configPath:
              "D:\\Nova\\n.Freelance\\E\\ethereum-terakoya.github.io\\i18n\\config.json",
          },
        },
        {
          plugin: n("k7kT"),
          options: { plugins: [], defaultLocale: "./i18n/react-intl/ja.json" },
        },
        {
          plugin: n("flL/"),
          options: {
            plugins: [],
            extensions: [".mdx", ".md"],
            defaultLayouts: {
              default:
                "D:\\Nova\\n.Freelance\\E\\ethereum-terakoya.github.io\\src\\components\\layout.js",
            },
            gatsbyRemarkPlugins: [
              {
                resolve: "gatsby-remark-autolink-headers",
                options: {
                  enableCustomId: !0,
                  elements: ["h1", "h2", "h3", "h4"],
                  className: "header-anchor",
                },
              },
              { resolve: "gatsby-remark-images", options: { maxWidth: 1200 } },
            ],
            lessBabel: !1,
            remarkPlugins: [],
            rehypePlugins: [],
            mediaTypes: ["text/markdown", "text/x-markdown"],
            root: "D:\\Nova\\n.Freelance\\E\\ethereum-terakoya.github.io",
          },
        },
        {
          plugin: n("npZl"),
          options: {
            plugins: [],
            name: "Ethereum Terakoya",
            short_name: "ETHTerakoya",
            start_url: "/",
            display: "standalone",
            icon: "src/images/icon.png",
            legacy: !0,
            theme_color_in_head: !0,
            cache_busting_mode: "query",
            crossOrigin: "anonymous",
            include_favicon: !0,
            cacheDigest: "66a158ae31173cf0d8182261ff709b9c",
          },
        },
      ];
    },
    MGrk: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return a;
        });
      var r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(t, e);
      };
      function o(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var o in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      Object.create;
      function a(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++)
            (!r && o in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
        return t.concat(r || e);
      }
      Object.create;
    },
    MMVs: function (t, e, n) {
      t.exports = (function () {
        var t = !1;
        -1 !== navigator.appVersion.indexOf("MSIE 10") && (t = !0);
        var e,
          n = [],
          r = "object" == typeof document && document,
          o = t
            ? r.documentElement.doScroll("left")
            : r.documentElement.doScroll,
          i = r && (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);
        return (
          !i &&
            r &&
            r.addEventListener(
              "DOMContentLoaded",
              (e = function () {
                for (
                  r.removeEventListener("DOMContentLoaded", e), i = 1;
                  (e = n.shift());

                )
                  e();
              })
            ),
          function (t) {
            i ? setTimeout(t, 0) : n.push(t);
          }
        );
      })();
    },
    "Mu++": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      n("E9XD");
      var r = n("MGrk"),
        o = n("KuiD"),
        i = n("cmTm"),
        a = n("/d+U");
      function u(t, e) {
        return e
          ? Object.keys(t).reduce(function (n, o) {
              var i, a;
              return (
                (n[o] =
                  ((i = t[o]),
                  (a = e[o])
                    ? Object(r.a)(
                        Object(r.a)(Object(r.a)({}, i || {}), a || {}),
                        Object.keys(i).reduce(function (t, e) {
                          return (
                            (t[e] = Object(r.a)(
                              Object(r.a)({}, i[e]),
                              a[e] || {}
                            )),
                            t
                          );
                        }, {})
                      )
                    : i)),
                n
              );
            }, Object(r.a)({}, t))
          : t;
      }
      function c(t) {
        return {
          create: function () {
            return {
              has: function (e) {
                return e in t;
              },
              get: function (e) {
                return t[e];
              },
              set: function (e, n) {
                t[e] = n;
              },
            };
          },
        };
      }
      var s = (function () {
        function t(e, n, o, s) {
          var l,
            f = this;
          if (
            (void 0 === n && (n = t.defaultLocale),
            (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {},
            }),
            (this.format = function (t) {
              var e = f.formatToParts(t);
              if (1 === e.length) return e[0].value;
              var n = e.reduce(function (t, e) {
                return (
                  t.length &&
                  e.type === a.a.literal &&
                  "string" == typeof t[t.length - 1]
                    ? (t[t.length - 1] += e.value)
                    : t.push(e.value),
                  t
                );
              }, []);
              return n.length <= 1 ? n[0] || "" : n;
            }),
            (this.formatToParts = function (t) {
              return Object(a.b)(
                f.ast,
                f.locales,
                f.formatters,
                f.formats,
                t,
                void 0,
                f.message
              );
            }),
            (this.resolvedOptions = function () {
              return {
                locale: Intl.NumberFormat.supportedLocalesOf(f.locales)[0],
              };
            }),
            (this.getAst = function () {
              return f.ast;
            }),
            "string" == typeof e)
          ) {
            if (((this.message = e), !t.__parse))
              throw new TypeError(
                "IntlMessageFormat.__parse must be set to process `message` of type `string`"
              );
            this.ast = t.__parse(e, {
              ignoreTag: null == s ? void 0 : s.ignoreTag,
            });
          } else this.ast = e;
          if (!Array.isArray(this.ast))
            throw new TypeError(
              "A message must be provided as a String or AST."
            );
          (this.formats = u(t.formats, o)),
            (this.locales = n),
            (this.formatters =
              (s && s.formatters) ||
              (void 0 === (l = this.formatterCache) &&
                (l = { number: {}, dateTime: {}, pluralRules: {} }),
              {
                getNumberFormat: Object(i.a)(
                  function () {
                    for (var t, e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    return new ((t = Intl.NumberFormat).bind.apply(
                      t,
                      Object(r.c)([void 0], e)
                    ))();
                  },
                  { cache: c(l.number), strategy: i.b.variadic }
                ),
                getDateTimeFormat: Object(i.a)(
                  function () {
                    for (var t, e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    return new ((t = Intl.DateTimeFormat).bind.apply(
                      t,
                      Object(r.c)([void 0], e)
                    ))();
                  },
                  { cache: c(l.dateTime), strategy: i.b.variadic }
                ),
                getPluralRules: Object(i.a)(
                  function () {
                    for (var t, e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    return new ((t = Intl.PluralRules).bind.apply(
                      t,
                      Object(r.c)([void 0], e)
                    ))();
                  },
                  { cache: c(l.pluralRules), strategy: i.b.variadic }
                ),
              }));
        }
        return (
          Object.defineProperty(t, "defaultLocale", {
            get: function () {
              return (
                t.memoizedDefaultLocale ||
                  (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale),
                t.memoizedDefaultLocale
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.memoizedDefaultLocale = null),
          (t.__parse = o.m),
          (t.formats = {
            number: {
              integer: { maximumFractionDigits: 0 },
              currency: { style: "currency" },
              percent: { style: "percent" },
            },
            date: {
              short: { month: "numeric", day: "numeric", year: "2-digit" },
              medium: { month: "short", day: "numeric", year: "numeric" },
              long: { month: "long", day: "numeric", year: "numeric" },
              full: {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              },
            },
            time: {
              short: { hour: "numeric", minute: "numeric" },
              medium: { hour: "numeric", minute: "numeric", second: "numeric" },
              long: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short",
              },
              full: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short",
              },
            },
          }),
          t
        );
      })();
    },
    N3fz: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return u;
      }),
        n.d(e, "a", function () {
          return c;
        }),
        n.d(e, "b", function () {
          return s;
        }),
        n.d(e, "d", function () {
          return l;
        });
      var r = n("X52I"),
        o = n("q1tI"),
        i = n("7LaZ"),
        a = n("1VXf");
      function u(t) {
        Object(i.a)(
          t,
          "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry."
        );
      }
      var c = Object(r.a)(Object(r.a)({}, a.a), { textComponent: o.Fragment });
      function s(t) {
        return function (e) {
          return t(o.Children.toArray(e));
        };
      }
      function l(t, e) {
        if (t === e) return !0;
        if (!t || !e) return !1;
        var n = Object.keys(t),
          r = Object.keys(e),
          o = n.length;
        if (r.length !== o) return !1;
        for (var i = 0; i < o; i++) {
          var a = n[i];
          if (t[a] !== e[a] || !Object.prototype.hasOwnProperty.call(e, a))
            return !1;
        }
        return !0;
      }
    },
    "NC/Y": function (t, e, n) {
      var r = n("0GbY");
      t.exports = r("navigator", "userAgent") || "";
    },
    NSX3: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("xtsi");
      "https:" !== window.location.protocol &&
      "localhost" !== window.location.hostname
        ? console.error(
            "Service workers can only be used over HTTPS, or on localhost for development"
          )
        : "serviceWorker" in navigator &&
          navigator.serviceWorker
            .register("/sw.js")
            .then(function (t) {
              t.addEventListener("updatefound", function () {
                Object(r.apiRunner)("onServiceWorkerUpdateFound", {
                  serviceWorker: t,
                });
                var e = t.installing;
                console.log("installingWorker", e),
                  e.addEventListener("statechange", function () {
                    switch (e.state) {
                      case "installed":
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            Object(r.apiRunner)("onServiceWorkerUpdateReady", {
                              serviceWorker: t,
                            }),
                            window.___failedResources &&
                              (console.log(
                                "resources failed, SW updated - reloading"
                              ),
                              window.location.reload()))
                          : (console.log("Content is now available offline!"),
                            Object(r.apiRunner)("onServiceWorkerInstalled", {
                              serviceWorker: t,
                            }));
                        break;
                      case "redundant":
                        console.error(
                          "The installing service worker became redundant."
                        ),
                          Object(r.apiRunner)("onServiceWorkerRedundant", {
                            serviceWorker: t,
                          });
                        break;
                      case "activated":
                        Object(r.apiRunner)("onServiceWorkerActive", {
                          serviceWorker: t,
                        });
                    }
                  });
              });
            })
            .catch(function (t) {
              console.error("Error during service worker registration:", t);
            });
    },
    NaFW: function (t, e, n) {
      var r = n("9d/t"),
        o = n("P4y1"),
        i = n("tiKp")("iterator");
      t.exports = function (t) {
        if (null != t) return t[i] || t["@@iterator"] || o[r(t)];
      };
    },
    NsGk: function (t, e, n) {
      e.components = {
        "component---src-pages-404-js": function () {
          return Promise.all([n.e(1), n.e(0), n.e(5)]).then(
            n.bind(null, "w2l6")
          );
        },
        "component---src-pages-index-js": function () {
          return Promise.all([n.e(1), n.e(3), n.e(0), n.e(6)]).then(
            n.bind(null, "RXBc")
          );
        },
        "component---src-pages-news-js": function () {
          return Promise.all([n.e(1), n.e(0), n.e(7)]).then(
            n.bind(null, "FJi0")
          );
        },
        "component---src-templates-group-js": function () {
          return Promise.all([n.e(1), n.e(0), n.e(8)]).then(
            n.bind(null, "rV4e")
          );
        },
        "component---src-templates-post-js": function () {
          return Promise.all([n.e(1), n.e(0), n.e(9)]).then(
            n.bind(null, "6qSS")
          );
        },
      };
    },
    OjiQ: function (t) {
      t.exports = JSON.parse(
        '{"description":"EthTerakoya(イーサテラコヤ)はブロックチェーンの応用領域について、技術・ビジネス・法律の観点から課題を深掘りし、企業が事業の自走力をつける場となるコミュニティです","contact":"お問い合わせ","slogan":"技術・ビジネス・法律の観点から課題を協議し、企業のブロックチェーン活用における標準化策定を目指すコミュニティ","what":"ETHTerakoya（イーサテラコヤ）とは","whatDetail":"ブロックチェーン事業を進める中で、技術や法律などあらゆる判断軸が必要とされます。しかし、技術視点とビジネス視点の隔たりから、課題解決に対して十分なリソースを生かし切れていないといった課題があります。その隔たりを埋めるために、それぞれの業界エキスパートが課題を深掘りし、多くの事業者が自走するためのアウトプットを作り出すためのコミュニティが「ETHTerakoya」です。","wg":"ワーキンググループ","wgList1":"法律・技術・ビジネスなどの複数観点から課題を深掘り","wgList2":"課題からこれからの必要なアクションプランを明確化","wgList3":"Ethereum Foundationのスポンサーシップのもと海外からの知見をフィードバック","ws":"ワークショップ","wsList1":"実践型のワークショップを通じて、ブロックチェーン事業を自走するための力を身に着ける","wsList2":"テーマ深掘り型から、事業に対する適応を実現する","target":"参加対象","target1":"技術者","target1-desc":"課題解決に必要な仕様の提案や技術的アプローチの深掘りなどをビジネスや法律などの文脈を理解しながら提案したい","target2":"事業者","target2-desc":"ブロックチェーン事業を進めていく上で必要な判断軸を知りたい、実際に進めていきたいという意思がある","target3":"法律家","target3-desc":"技術的文脈、ビジネス的な文脈を読み取りながら規制を理解し、現在の最適解や必要な解決策を提案していきたい方","organize":"主催","support":"後援","contributor":"参加企業","date":"投稿日","group":"ワーキンググループ","groupName_id-voting":"ID x 投票","groupName_ethereum2.0":"イーサリアム2.0","groupName_students":"学生研究","groupName_scaling":"スケーリング","groupName_zero-knowledge-proof":"ゼロ知識証明","posts":"記事一覧","news":"お知らせ","activity":"アクティビティ","activityWorkingGroupSubtitle":"ブロックチェーンの活用によるインターネット投票の実現性検討","activityCreamSubtitle":"秘匿化プロトコルC.R.E.A.Mの開発","contributor.hitachi":" ","contributor.fujitsu":" ","contributor.act":" ","contributor.collabo_gate":" ","contributor.comps":" ","contributor.cryptel":" ","contributor.layerx":" ","contributor.waseda":" "}'
      );
    },
    P4y1: function (t, e) {
      t.exports = {};
    },
    PJYZ: function (t, e) {
      (t.exports = function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    QLaP: function (t, e, n) {
      "use strict";
      t.exports = function (t, e, n, r, o, i, a, u) {
        if (!t) {
          var c;
          if (void 0 === e)
            c = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var s = [n, r, o, i, a, u],
              l = 0;
            (c = new Error(
              e.replace(/%s/g, function () {
                return s[l++];
              })
            )).name = "Invariant Violation";
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    RK3t: function (t, e, n) {
      var r = n("0Dky"),
        o = n("xrYK"),
        i = "".split;
      t.exports = r(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (t) {
            return "String" == o(t) ? i.call(t, "") : Object(t);
          }
        : Object;
    },
    SFrS: function (t, e, n) {
      var r = n("hh1v");
      t.exports = function (t, e) {
        var n, o;
        if (
          "string" === e &&
          "function" == typeof (n = t.toString) &&
          !r((o = n.call(t)))
        )
          return o;
        if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t))))
          return o;
        if (
          "string" !== e &&
          "function" == typeof (n = t.toString) &&
          !r((o = n.call(t)))
        )
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    STAE: function (t, e, n) {
      var r = n("LQDL"),
        o = n("0Dky");
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !o(function () {
          var t = Symbol();
          return (
            !String(t) ||
            !(Object(t) instanceof Symbol) ||
            (!Symbol.sham && r && r < 41)
          );
        });
    },
    SksO: function (t, e) {
      function n(e, r) {
        return (
          (t.exports = n =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          n(e, r)
        );
      }
      (t.exports = n),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    TOwV: function (t, e, n) {
      "use strict";
      t.exports = n("qT12");
    },
    TWQb: function (t, e, n) {
      var r = n("/GqU"),
        o = n("UMSQ"),
        i = n("I8vh"),
        a = function (t) {
          return function (e, n, a) {
            var u,
              c = r(e),
              s = o(c.length),
              l = i(a, s);
            if (t && n != n) {
              for (; s > l; ) if ((u = c[l++]) != u) return !0;
            } else
              for (; s > l; l++)
                if ((t || l in c) && c[l] === n) return t || l || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: a(!0), indexOf: a(!1) };
    },
    TqRt: function (t, e) {
      (t.exports = function (t) {
        return t && t.__esModule ? t : { default: t };
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    UMSQ: function (t, e, n) {
      var r = n("ppGB"),
        o = Math.min;
      t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
      };
    },
    UTVS: function (t, e, n) {
      var r = n("ewvW"),
        o = {}.hasOwnProperty;
      t.exports =
        Object.hasOwn ||
        function (t, e) {
          return o.call(r(t), e);
        };
    },
    UxWs: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("dI71"),
        o = n("xtsi"),
        i = n("q1tI"),
        a = n.n(i),
        u = n("i8i4"),
        c = n.n(u),
        s = n("YwZP"),
        l = n("7hJ6"),
        f = n("MMVs"),
        p = n.n(f),
        h = n("Wbzz"),
        d = n("emEt"),
        m = n("YLt+"),
        g = n("5yr3"),
        v = {
          id: "gatsby-announcer",
          style: {
            position: "absolute",
            top: 0,
            width: 1,
            height: 1,
            padding: 0,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0,
          },
          "aria-live": "assertive",
          "aria-atomic": "true",
        },
        y = n("9Xx/"),
        b = n("+ZDr"),
        E = new Map(),
        O = new Map();
      function w(t) {
        var e = E.get(t);
        return (
          e || (e = O.get(t.toLowerCase())),
          null != e && (window.___replace(e.toPath), !0)
        );
      }
      m.forEach(function (t) {
        t.ignoreCase ? O.set(t.fromPath, t) : E.set(t.fromPath, t);
      });
      var T = function (t, e) {
          w(t.pathname) ||
            Object(o.apiRunner)("onPreRouteUpdate", {
              location: t,
              prevLocation: e,
            });
        },
        P = function (t, e) {
          w(t.pathname) ||
            Object(o.apiRunner)("onRouteUpdate", {
              location: t,
              prevLocation: e,
            });
        },
        S = function (t, e) {
          if ((void 0 === e && (e = {}), "number" != typeof t)) {
            var n = Object(b.parsePath)(t).pathname,
              r = E.get(n);
            if (
              (r || (r = O.get(n.toLowerCase())),
              r && ((t = r.toPath), (n = Object(b.parsePath)(t).pathname)),
              window.___swUpdated)
            )
              window.location = n;
            else {
              var i = setTimeout(function () {
                g.a.emit("onDelayedLoadPageResources", { pathname: n }),
                  Object(o.apiRunner)("onRouteUpdateDelayed", {
                    location: window.location,
                  });
              }, 1e3);
              d.default.loadPage(n).then(function (r) {
                if (!r || r.status === d.PageResourceStatus.Error)
                  return (
                    window.history.replaceState({}, "", location.href),
                    (window.location = n),
                    void clearTimeout(i)
                  );
                r &&
                  r.page.webpackCompilationHash !==
                    window.___webpackCompilationHash &&
                  ("serviceWorker" in navigator &&
                    null !== navigator.serviceWorker.controller &&
                    "activated" === navigator.serviceWorker.controller.state &&
                    navigator.serviceWorker.controller.postMessage({
                      gatsbyApi: "clearPathResources",
                    }),
                  (window.location = n)),
                  Object(s.navigate)(t, e),
                  clearTimeout(i);
              });
            }
          } else y.c.navigate(t);
        };
      function _(t, e) {
        var n = this,
          r = e.location,
          i = r.pathname,
          a = r.hash,
          u = Object(o.apiRunner)("shouldUpdateScroll", {
            prevRouterProps: t,
            pathname: i,
            routerProps: { location: r },
            getSavedScrollPosition: function (t) {
              return [0, n._stateStorage.read(t, t.key)];
            },
          });
        if (u.length > 0) return u[u.length - 1];
        if (t && t.location.pathname === i)
          return a ? decodeURI(a.slice(1)) : [0, 0];
        return !0;
      }
      var j = (function (t) {
          function e(e) {
            var n;
            return (
              ((n = t.call(this, e) || this).announcementRef = a.a.createRef()),
              n
            );
          }
          Object(r.a)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidUpdate = function (t, e) {
              var n = this;
              requestAnimationFrame(function () {
                var t = "new page at " + n.props.location.pathname;
                document.title && (t = document.title);
                var e = document.querySelectorAll("#gatsby-focus-wrapper h1");
                e && e.length && (t = e[0].textContent);
                var r = "Navigated to " + t;
                n.announcementRef.current &&
                  n.announcementRef.current.innerText !== r &&
                  (n.announcementRef.current.innerText = r);
              });
            }),
            (n.render = function () {
              return a.a.createElement(
                "div",
                Object.assign({}, v, { ref: this.announcementRef })
              );
            }),
            e
          );
        })(a.a.Component),
        R = function (t, e) {
          var n, r;
          return (
            t.href !== e.href ||
            (null == t || null === (n = t.state) || void 0 === n
              ? void 0
              : n.key) !==
              (null == e || null === (r = e.state) || void 0 === r
                ? void 0
                : r.key)
          );
        },
        A = (function (t) {
          function e(e) {
            var n;
            return (n = t.call(this, e) || this), T(e.location, null), n;
          }
          Object(r.a)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              P(this.props.location, null);
            }),
            (n.shouldComponentUpdate = function (t) {
              return (
                !!R(t.location, this.props.location) &&
                (T(this.props.location, t.location), !0)
              );
            }),
            (n.componentDidUpdate = function (t) {
              R(t.location, this.props.location) &&
                P(this.props.location, t.location);
            }),
            (n.render = function () {
              return a.a.createElement(
                a.a.Fragment,
                null,
                this.props.children,
                a.a.createElement(j, { location: location })
              );
            }),
            e
          );
        })(a.a.Component),
        C = n("IOVJ"),
        L = n("NsGk"),
        x = n.n(L),
        k = n("rePB");
      function I(t, e) {
        for (var n in t) if (!(n in e)) return !0;
        for (var r in e) if (t[r] !== e[r]) return !0;
        return !1;
      }
      function D(t, e) {
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
      function N(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? D(Object(n), !0).forEach(function (e) {
                Object(k.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var M = (function (t) {
          function e(e) {
            var n;
            n = t.call(this) || this;
            var r = e.location,
              o = e.pageResources;
            return (
              (n.state = {
                location: N({}, r),
                pageResources: o || d.default.loadPageSync(r.pathname),
              }),
              n
            );
          }
          Object(r.a)(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              var n = t.location;
              return e.location.href !== n.href
                ? {
                    pageResources: d.default.loadPageSync(n.pathname),
                    location: N({}, n),
                  }
                : { location: N({}, n) };
            });
          var n = e.prototype;
          return (
            (n.loadResources = function (t) {
              var e = this;
              d.default.loadPage(t).then(function (n) {
                n && n.status !== d.PageResourceStatus.Error
                  ? e.setState({
                      location: N({}, window.location),
                      pageResources: n,
                    })
                  : (window.history.replaceState({}, "", location.href),
                    (window.location = t));
              });
            }),
            (n.shouldComponentUpdate = function (t, e) {
              return e.pageResources
                ? this.state.pageResources !== e.pageResources ||
                    this.state.pageResources.component !==
                      e.pageResources.component ||
                    this.state.pageResources.json !== e.pageResources.json ||
                    !(
                      this.state.location.key === e.location.key ||
                      !e.pageResources.page ||
                      (!e.pageResources.page.matchPath &&
                        !e.pageResources.page.path)
                    ) ||
                    (function (t, e, n) {
                      return I(t.props, e) || I(t.state, n);
                    })(this, t, e)
                : (this.loadResources(t.location.pathname), !1);
            }),
            (n.render = function () {
              return this.props.children(this.state);
            }),
            e
          );
        })(a.a.Component),
        F = n("cSJ8"),
        U = n("JeVI"),
        G = new d.ProdLoader(x.a, U);
      Object(d.setLoader)(G),
        G.setApiRunner(o.apiRunner),
        (window.asyncRequires = x.a),
        (window.___emitter = g.a),
        (window.___loader = d.publicLoader),
        y.c.listen(function (t) {
          t.location.action = t.action;
        }),
        (window.___push = function (t) {
          return S(t, { replace: !1 });
        }),
        (window.___replace = function (t) {
          return S(t, { replace: !0 });
        }),
        (window.___navigate = function (t, e) {
          return S(t, e);
        }),
        w(window.location.pathname),
        Object(o.apiRunnerAsync)("onClientEntry").then(function () {
          Object(o.apiRunner)("registerServiceWorker").length > 0 && n("NSX3");
          var t = function (t) {
              return a.a.createElement(
                s.BaseContext.Provider,
                { value: { baseuri: "/", basepath: "/" } },
                a.a.createElement(C.a, t)
              );
            },
            e = a.a.createContext({}),
            i = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              return (
                Object(r.a)(n, t),
                (n.prototype.render = function () {
                  var t = this.props.children;
                  return a.a.createElement(s.Location, null, function (n) {
                    var r = n.location;
                    return a.a.createElement(M, { location: r }, function (n) {
                      var r = n.pageResources,
                        o = n.location,
                        i = Object(d.getStaticQueryResults)();
                      return a.a.createElement(
                        h.StaticQueryContext.Provider,
                        { value: i },
                        a.a.createElement(
                          e.Provider,
                          { value: { pageResources: r, location: o } },
                          t
                        )
                      );
                    });
                  });
                }),
                n
              );
            })(a.a.Component),
            u = (function (n) {
              function o() {
                return n.apply(this, arguments) || this;
              }
              return (
                Object(r.a)(o, n),
                (o.prototype.render = function () {
                  var n = this;
                  return a.a.createElement(e.Consumer, null, function (e) {
                    var r = e.pageResources,
                      o = e.location;
                    return a.a.createElement(
                      A,
                      { location: o },
                      a.a.createElement(
                        l.ScrollContext,
                        { location: o, shouldUpdateScroll: _ },
                        a.a.createElement(
                          s.Router,
                          {
                            basepath: "",
                            location: o,
                            id: "gatsby-focus-wrapper",
                          },
                          a.a.createElement(
                            t,
                            Object.assign(
                              {
                                path:
                                  "/404.html" === r.page.path
                                    ? Object(F.a)(o.pathname, "")
                                    : encodeURI(
                                        r.page.matchPath || r.page.path
                                      ),
                              },
                              n.props,
                              { location: o, pageResources: r },
                              r.json
                            )
                          )
                        )
                      )
                    );
                  });
                }),
                o
              );
            })(a.a.Component),
            f = window,
            m = f.pagePath,
            g = f.location;
          m &&
            "" + m !== g.pathname &&
            !(
              G.findMatchPath(Object(F.a)(g.pathname, "")) ||
              "/404.html" === m ||
              m.match(/^\/404\/?$/) ||
              m.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            Object(s.navigate)("" + m + g.search + g.hash, { replace: !0 }),
            d.publicLoader.loadPage(g.pathname).then(function (t) {
              if (!t || t.status === d.PageResourceStatus.Error)
                throw new Error(
                  "page resources for " +
                    g.pathname +
                    " not found. Not rendering React"
                );
              window.___webpackCompilationHash = t.page.webpackCompilationHash;
              var e = Object(o.apiRunner)(
                  "wrapRootElement",
                  { element: a.a.createElement(u, null) },
                  a.a.createElement(u, null),
                  function (t) {
                    return { element: t.result };
                  }
                ).pop(),
                n = function () {
                  return a.a.createElement(i, null, e);
                },
                r = Object(o.apiRunner)(
                  "replaceHydrateFunction",
                  void 0,
                  c.a.hydrate
                )[0];
              p()(function () {
                r(
                  a.a.createElement(n, null),
                  "undefined" != typeof window
                    ? document.getElementById("___gatsby")
                    : void 0,
                  function () {
                    Object(o.apiRunner)("onInitialClientRender");
                  }
                );
              });
            });
        });
    },
    V37c: function (t, e, n) {
      var r = n("2bX/");
      t.exports = function (t) {
        if (r(t)) throw TypeError("Cannot convert a Symbol value to a string");
        return String(t);
      };
    },
    VbXa: function (t, e, n) {
      var r = n("SksO");
      (t.exports = function (t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          r(t, e);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    VpIT: function (t, e, n) {
      var r = n("xDBR"),
        o = n("xs3f");
      (t.exports = function (t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.16.1",
        mode: r ? "pure" : "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
      });
    },
    Vu81: function (t, e, n) {
      var r = n("0GbY"),
        o = n("JBy8"),
        i = n("dBg+"),
        a = n("glrk");
      t.exports =
        r("Reflect", "ownKeys") ||
        function (t) {
          var e = o.f(a(t)),
            n = i.f;
          return n ? e.concat(n(t)) : e;
        };
    },
    WJkJ: function (t, e) {
      t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    },
    WKiH: function (t, e, n) {
      var r = n("HYAF"),
        o = n("V37c"),
        i = "[" + n("WJkJ") + "]",
        a = RegExp("^" + i + i + "*"),
        u = RegExp(i + i + "*$"),
        c = function (t) {
          return function (e) {
            var n = o(r(e));
            return (
              1 & t && (n = n.replace(a, "")),
              2 & t && (n = n.replace(u, "")),
              n
            );
          };
        };
      t.exports = { start: c(1), end: c(2), trim: c(3) };
    },
    Wbzz: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "graphql", function () {
          return m;
        }),
        n.d(e, "StaticQueryContext", function () {
          return f;
        }),
        n.d(e, "StaticQuery", function () {
          return h;
        }),
        n.d(e, "useStaticQuery", function () {
          return d;
        }),
        n.d(e, "prefetchPathname", function () {
          return l;
        });
      var r = n("q1tI"),
        o = n.n(r),
        i = n("+ZDr"),
        a = n.n(i);
      n.d(e, "Link", function () {
        return a.a;
      }),
        n.d(e, "withAssetPrefix", function () {
          return i.withAssetPrefix;
        }),
        n.d(e, "withPrefix", function () {
          return i.withPrefix;
        }),
        n.d(e, "parsePath", function () {
          return i.parsePath;
        }),
        n.d(e, "navigate", function () {
          return i.navigate;
        }),
        n.d(e, "push", function () {
          return i.push;
        }),
        n.d(e, "replace", function () {
          return i.replace;
        }),
        n.d(e, "navigateTo", function () {
          return i.navigateTo;
        });
      var u = n("7hJ6");
      n.d(e, "useScrollRestoration", function () {
        return u.useScrollRestoration;
      });
      var c = n("lw3w"),
        s = n.n(c);
      n.d(e, "PageRenderer", function () {
        return s.a;
      });
      var l = n("emEt").default.enqueue,
        f = o.a.createContext({});
      function p(t) {
        var e = t.staticQueryData,
          n = t.data,
          r = t.query,
          i = t.render,
          a = n ? n.data : e[r] && e[r].data;
        return o.a.createElement(
          o.a.Fragment,
          null,
          a && i(a),
          !a && o.a.createElement("div", null, "Loading (StaticQuery)")
        );
      }
      var h = function (t) {
          var e = t.data,
            n = t.query,
            r = t.render,
            i = t.children;
          return o.a.createElement(f.Consumer, null, function (t) {
            return o.a.createElement(p, {
              data: e,
              query: n,
              render: r || i,
              staticQueryData: t,
            });
          });
        },
        d = function (t) {
          var e;
          o.a.useContext;
          var n = o.a.useContext(f);
          if (isNaN(Number(t)))
            throw new Error(
              "useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`" +
                t +
                "`);\n"
            );
          if (null !== (e = n[t]) && void 0 !== e && e.data) return n[t].data;
          throw new Error(
            "The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues"
          );
        };
      function m() {
        throw new Error(
          "It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby."
        );
      }
    },
    X52I: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "d", function () {
          return u;
        });
      var r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(t, e);
      };
      function o(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var o in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      function a(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
            e.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
              (n[r[o]] = t[r[o]]);
        }
        return n;
      }
      Object.create;
      function u(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++)
            (!r && o in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
        return t.concat(r || e);
      }
      Object.create;
    },
    XGwC: function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    YF1G: function (t, e, n) {
      var r = n("xrYK"),
        o = n("2oRo");
      t.exports = "process" == r(o.process);
    },
    "YLt+": function (t) {
      t.exports = JSON.parse("[]");
    },
    YVoz: function (t, e, n) {
      "use strict";
      t.exports = Object.assign;
    },
    YwZP: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "Link", function () {
          return x;
        }),
        n.d(e, "Location", function () {
          return b;
        }),
        n.d(e, "LocationProvider", function () {
          return E;
        }),
        n.d(e, "Match", function () {
          return F;
        }),
        n.d(e, "Redirect", function () {
          return M;
        }),
        n.d(e, "Router", function () {
          return T;
        }),
        n.d(e, "ServerLocation", function () {
          return O;
        }),
        n.d(e, "isRedirect", function () {
          return I;
        }),
        n.d(e, "redirectTo", function () {
          return D;
        }),
        n.d(e, "useLocation", function () {
          return U;
        }),
        n.d(e, "useNavigate", function () {
          return G;
        }),
        n.d(e, "useParams", function () {
          return q;
        }),
        n.d(e, "useMatch", function () {
          return V;
        }),
        n.d(e, "BaseContext", function () {
          return w;
        });
      var r = n("q1tI"),
        o = n.n(r),
        i = (n("17x9"), n("QLaP")),
        a = n.n(i),
        u = n("nqlD"),
        c = n.n(u),
        s = n("94VI"),
        l = n("LYrO");
      n.d(e, "matchPath", function () {
        return l.match;
      });
      var f = n("9Xx/");
      n.d(e, "createHistory", function () {
        return f.a;
      }),
        n.d(e, "createMemorySource", function () {
          return f.b;
        }),
        n.d(e, "navigate", function () {
          return f.d;
        }),
        n.d(e, "globalHistory", function () {
          return f.c;
        });
      var p =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
      function h(t, e) {
        var n = {};
        for (var r in t)
          e.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
        return n;
      }
      function d(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function m(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function g(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      var v = function (t, e) {
          var n = c()(e);
          return (n.displayName = t), n;
        },
        y = v("Location"),
        b = function (t) {
          var e = t.children;
          return o.a.createElement(y.Consumer, null, function (t) {
            return t ? e(t) : o.a.createElement(E, null, e);
          });
        },
        E = (function (t) {
          function e() {
            var n, r;
            d(this, e);
            for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
              i[a] = arguments[a];
            return (
              (n = r = m(this, t.call.apply(t, [this].concat(i)))),
              (r.state = { context: r.getContext(), refs: { unlisten: null } }),
              m(r, n)
            );
          }
          return (
            g(e, t),
            (e.prototype.getContext = function () {
              var t = this.props.history;
              return { navigate: t.navigate, location: t.location };
            }),
            (e.prototype.componentDidCatch = function (t, e) {
              if (!I(t)) throw t;
              (0, this.props.history.navigate)(t.uri, { replace: !0 });
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              e.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete();
            }),
            (e.prototype.componentDidMount = function () {
              var t = this,
                e = this.state.refs,
                n = this.props.history;
              n._onTransitionComplete(),
                (e.unlisten = n.listen(function () {
                  Promise.resolve().then(function () {
                    requestAnimationFrame(function () {
                      t.unmounted ||
                        t.setState(function () {
                          return { context: t.getContext() };
                        });
                    });
                  });
                }));
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.state.refs;
              (this.unmounted = !0), t.unlisten();
            }),
            (e.prototype.render = function () {
              var t = this.state.context,
                e = this.props.children;
              return o.a.createElement(
                y.Provider,
                { value: t },
                "function" == typeof e ? e(t) : e || null
              );
            }),
            e
          );
        })(o.a.Component);
      E.defaultProps = { history: f.c };
      var O = function (t) {
          var e = t.url,
            n = t.children,
            r = e.indexOf("?"),
            i = void 0,
            a = "";
          return (
            r > -1 ? ((i = e.substring(0, r)), (a = e.substring(r))) : (i = e),
            o.a.createElement(
              y.Provider,
              {
                value: {
                  location: { pathname: i, search: a, hash: "" },
                  navigate: function () {
                    throw new Error("You can't call navigate on the server.");
                  },
                },
              },
              n
            )
          );
        },
        w = v("Base", { baseuri: "/", basepath: "/" }),
        T = function (t) {
          return o.a.createElement(w.Consumer, null, function (e) {
            return o.a.createElement(b, null, function (n) {
              return o.a.createElement(P, p({}, e, n, t));
            });
          });
        },
        P = (function (t) {
          function e() {
            return d(this, e), m(this, t.apply(this, arguments));
          }
          return (
            g(e, t),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.location,
                n = t.navigate,
                r = t.basepath,
                i = t.primary,
                a = t.children,
                u = (t.baseuri, t.component),
                c = void 0 === u ? "div" : u,
                s = h(t, [
                  "location",
                  "navigate",
                  "basepath",
                  "primary",
                  "children",
                  "baseuri",
                  "component",
                ]),
                f = o.a.Children.toArray(a).reduce(function (t, e) {
                  var n = W(r)(e);
                  return t.concat(n);
                }, []),
                d = e.pathname,
                m = Object(l.pick)(f, d);
              if (m) {
                var g = m.params,
                  v = m.uri,
                  y = m.route,
                  b = m.route.value;
                r = y.default ? r : y.path.replace(/\*$/, "");
                var E = p({}, g, {
                    uri: v,
                    location: e,
                    navigate: function (t, e) {
                      return n(Object(l.resolve)(t, v), e);
                    },
                  }),
                  O = o.a.cloneElement(
                    b,
                    E,
                    b.props.children
                      ? o.a.createElement(
                          T,
                          { location: e, primary: i },
                          b.props.children
                        )
                      : void 0
                  ),
                  P = i ? _ : c,
                  S = i ? p({ uri: v, location: e, component: c }, s) : s;
                return o.a.createElement(
                  w.Provider,
                  { value: { baseuri: v, basepath: r } },
                  o.a.createElement(P, S, O)
                );
              }
              return null;
            }),
            e
          );
        })(o.a.PureComponent);
      P.defaultProps = { primary: !0 };
      var S = v("Focus"),
        _ = function (t) {
          var e = t.uri,
            n = t.location,
            r = t.component,
            i = h(t, ["uri", "location", "component"]);
          return o.a.createElement(S.Consumer, null, function (t) {
            return o.a.createElement(
              A,
              p({}, i, { component: r, requestFocus: t, uri: e, location: n })
            );
          });
        },
        j = !0,
        R = 0,
        A = (function (t) {
          function e() {
            var n, r;
            d(this, e);
            for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
              i[a] = arguments[a];
            return (
              (n = r = m(this, t.call.apply(t, [this].concat(i)))),
              (r.state = {}),
              (r.requestFocus = function (t) {
                !r.state.shouldFocus && t && t.focus();
              }),
              m(r, n)
            );
          }
          return (
            g(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              if (null == e.uri) return p({ shouldFocus: !0 }, t);
              var n = t.uri !== e.uri,
                r =
                  e.location.pathname !== t.location.pathname &&
                  t.location.pathname === t.uri;
              return p({ shouldFocus: n || r }, t);
            }),
            (e.prototype.componentDidMount = function () {
              R++, this.focus();
            }),
            (e.prototype.componentWillUnmount = function () {
              0 === --R && (j = !0);
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              t.location !== this.props.location &&
                this.state.shouldFocus &&
                this.focus();
            }),
            (e.prototype.focus = function () {
              var t = this.props.requestFocus;
              t
                ? t(this.node)
                : j
                ? (j = !1)
                : this.node &&
                  (this.node.contains(document.activeElement) ||
                    this.node.focus());
            }),
            (e.prototype.render = function () {
              var t = this,
                e = this.props,
                n = (e.children, e.style),
                r = (e.requestFocus, e.component),
                i = void 0 === r ? "div" : r,
                a =
                  (e.uri,
                  e.location,
                  h(e, [
                    "children",
                    "style",
                    "requestFocus",
                    "component",
                    "uri",
                    "location",
                  ]));
              return o.a.createElement(
                i,
                p(
                  {
                    style: p({ outline: "none" }, n),
                    tabIndex: "-1",
                    ref: function (e) {
                      return (t.node = e);
                    },
                  },
                  a
                ),
                o.a.createElement(
                  S.Provider,
                  { value: this.requestFocus },
                  this.props.children
                )
              );
            }),
            e
          );
        })(o.a.Component);
      Object(s.polyfill)(A);
      var C = function () {},
        L = o.a.forwardRef;
      void 0 === L &&
        (L = function (t) {
          return t;
        });
      var x = L(function (t, e) {
        var n = t.innerRef,
          r = h(t, ["innerRef"]);
        return o.a.createElement(w.Consumer, null, function (t) {
          t.basepath;
          var i = t.baseuri;
          return o.a.createElement(b, null, function (t) {
            var a = t.location,
              u = t.navigate,
              c = r.to,
              s = r.state,
              f = r.replace,
              d = r.getProps,
              m = void 0 === d ? C : d,
              g = h(r, ["to", "state", "replace", "getProps"]),
              v = Object(l.resolve)(c, i),
              y = encodeURI(v),
              b = a.pathname === y,
              E = Object(l.startsWith)(a.pathname, y);
            return o.a.createElement(
              "a",
              p(
                { ref: e || n, "aria-current": b ? "page" : void 0 },
                g,
                m({
                  isCurrent: b,
                  isPartiallyCurrent: E,
                  href: v,
                  location: a,
                }),
                {
                  href: v,
                  onClick: function (t) {
                    if ((g.onClick && g.onClick(t), B(t))) {
                      t.preventDefault();
                      var e = f;
                      if ("boolean" != typeof f && b) {
                        var n = p({}, a.state),
                          r = (n.key, h(n, ["key"]));
                        e = Object(l.shallowCompare)(p({}, s), r);
                      }
                      u(v, { state: s, replace: e });
                    }
                  },
                }
              )
            );
          });
        });
      });
      function k(t) {
        this.uri = t;
      }
      x.displayName = "Link";
      var I = function (t) {
          return t instanceof k;
        },
        D = function (t) {
          throw new k(t);
        },
        N = (function (t) {
          function e() {
            return d(this, e), m(this, t.apply(this, arguments));
          }
          return (
            g(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this.props,
                e = t.navigate,
                n = t.to,
                r = (t.from, t.replace),
                o = void 0 === r || r,
                i = t.state,
                a = (t.noThrow, t.baseuri),
                u = h(t, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ]);
              Promise.resolve().then(function () {
                var t = Object(l.resolve)(n, a);
                e(Object(l.insertParams)(t, u), { replace: o, state: i });
              });
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = (t.navigate, t.to),
                n = (t.from, t.replace, t.state, t.noThrow),
                r = t.baseuri,
                o = h(t, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ]),
                i = Object(l.resolve)(e, r);
              return n || D(Object(l.insertParams)(i, o)), null;
            }),
            e
          );
        })(o.a.Component),
        M = function (t) {
          return o.a.createElement(w.Consumer, null, function (e) {
            var n = e.baseuri;
            return o.a.createElement(b, null, function (e) {
              return o.a.createElement(N, p({}, e, { baseuri: n }, t));
            });
          });
        },
        F = function (t) {
          var e = t.path,
            n = t.children;
          return o.a.createElement(w.Consumer, null, function (t) {
            var r = t.baseuri;
            return o.a.createElement(b, null, function (t) {
              var o = t.navigate,
                i = t.location,
                a = Object(l.resolve)(e, r),
                u = Object(l.match)(a, i.pathname);
              return n({
                navigate: o,
                location: i,
                match: u ? p({}, u.params, { uri: u.uri, path: e }) : null,
              });
            });
          });
        },
        U = function () {
          var t = Object(r.useContext)(y);
          if (!t)
            throw new Error(
              "useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          return t.location;
        },
        G = function () {
          var t = Object(r.useContext)(y);
          if (!t)
            throw new Error(
              "useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          return t.navigate;
        },
        q = function () {
          var t = Object(r.useContext)(w);
          if (!t)
            throw new Error(
              "useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          var e = U(),
            n = Object(l.match)(t.basepath, e.pathname);
          return n ? n.params : null;
        },
        V = function (t) {
          if (!t)
            throw new Error(
              "useMatch(path: string) requires an argument of a string to match against"
            );
          var e = Object(r.useContext)(w);
          if (!e)
            throw new Error(
              "useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          var n = U(),
            o = Object(l.resolve)(t, e.baseuri),
            i = Object(l.match)(o, n.pathname);
          return i ? p({}, i.params, { uri: i.uri, path: t }) : null;
        },
        X = function (t) {
          return t.replace(/(^\/+|\/+$)/g, "");
        },
        W = function t(e) {
          return function (n) {
            if (!n) return null;
            if (n.type === o.a.Fragment && n.props.children)
              return o.a.Children.map(n.props.children, t(e));
            if (
              (n.props.path || n.props.default || n.type === M || a()(!1),
              n.type !== M || (n.props.from && n.props.to) || a()(!1),
              n.type !== M ||
                Object(l.validateRedirect)(n.props.from, n.props.to) ||
                a()(!1),
              n.props.default)
            )
              return { value: n, default: !0 };
            var r = n.type === M ? n.props.from : n.props.path,
              i = "/" === r ? e : X(e) + "/" + X(r);
            return {
              value: n,
              default: n.props.default,
              path: n.props.children ? X(i) + "/*" : i,
            };
          };
        },
        B = function (t) {
          return (
            !t.defaultPrevented &&
            0 === t.button &&
            !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
          );
        };
    },
    afO8: function (t, e, n) {
      var r,
        o,
        i,
        a = n("f5p1"),
        u = n("2oRo"),
        c = n("hh1v"),
        s = n("kRJp"),
        l = n("UTVS"),
        f = n("xs3f"),
        p = n("93I0"),
        h = n("0BK2"),
        d = u.WeakMap;
      if (a || f.state) {
        var m = f.state || (f.state = new d()),
          g = m.get,
          v = m.has,
          y = m.set;
        (r = function (t, e) {
          if (v.call(m, t)) throw new TypeError("Object already initialized");
          return (e.facade = t), y.call(m, t, e), e;
        }),
          (o = function (t) {
            return g.call(m, t) || {};
          }),
          (i = function (t) {
            return v.call(m, t);
          });
      } else {
        var b = p("state");
        (h[b] = !0),
          (r = function (t, e) {
            if (l(t, b)) throw new TypeError("Object already initialized");
            return (e.facade = t), s(t, b, e), e;
          }),
          (o = function (t) {
            return l(t, b) ? t[b] : {};
          }),
          (i = function (t) {
            return l(t, b);
          });
      }
      t.exports = {
        set: r,
        get: o,
        has: i,
        enforce: function (t) {
          return i(t) ? o(t) : r(t, {});
        },
        getterFor: function (t) {
          return function (e) {
            var n;
            if (!c(e) || (n = o(e)).type !== t)
              throw TypeError("Incompatible receiver, " + t + " required");
            return n;
          };
        },
      };
    },
    bmMU: function (t, e) {
      var n = "undefined" != typeof Element,
        r = "function" == typeof Map,
        o = "function" == typeof Set,
        i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      t.exports = function (t, e) {
        try {
          return (function t(e, a) {
            if (e === a) return !0;
            if (e && a && "object" == typeof e && "object" == typeof a) {
              if (e.constructor !== a.constructor) return !1;
              var u, c, s, l;
              if (Array.isArray(e)) {
                if ((u = e.length) != a.length) return !1;
                for (c = u; 0 != c--; ) if (!t(e[c], a[c])) return !1;
                return !0;
              }
              if (r && e instanceof Map && a instanceof Map) {
                if (e.size !== a.size) return !1;
                for (l = e.entries(); !(c = l.next()).done; )
                  if (!a.has(c.value[0])) return !1;
                for (l = e.entries(); !(c = l.next()).done; )
                  if (!t(c.value[1], a.get(c.value[0]))) return !1;
                return !0;
              }
              if (o && e instanceof Set && a instanceof Set) {
                if (e.size !== a.size) return !1;
                for (l = e.entries(); !(c = l.next()).done; )
                  if (!a.has(c.value[0])) return !1;
                return !0;
              }
              if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
                if ((u = e.length) != a.length) return !1;
                for (c = u; 0 != c--; ) if (e[c] !== a[c]) return !1;
                return !0;
              }
              if (e.constructor === RegExp)
                return e.source === a.source && e.flags === a.flags;
              if (e.valueOf !== Object.prototype.valueOf)
                return e.valueOf() === a.valueOf();
              if (e.toString !== Object.prototype.toString)
                return e.toString() === a.toString();
              if ((u = (s = Object.keys(e)).length) !== Object.keys(a).length)
                return !1;
              for (c = u; 0 != c--; )
                if (!Object.prototype.hasOwnProperty.call(a, s[c])) return !1;
              if (n && e instanceof Element) return !1;
              for (c = u; 0 != c--; )
                if (
                  (("_owner" !== s[c] && "__v" !== s[c] && "__o" !== s[c]) ||
                    !e.$$typeof) &&
                  !t(e[s[c]], a[s[c]])
                )
                  return !1;
              return !0;
            }
            return e != e && a != a;
          })(t, e);
        } catch (a) {
          if ((a.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw a;
        }
      };
    },
    busE: function (t, e, n) {
      var r = n("2oRo"),
        o = n("kRJp"),
        i = n("UTVS"),
        a = n("zk60"),
        u = n("iSVu"),
        c = n("afO8"),
        s = c.get,
        l = c.enforce,
        f = String(String).split("String");
      (t.exports = function (t, e, n, u) {
        var c,
          s = !!u && !!u.unsafe,
          p = !!u && !!u.enumerable,
          h = !!u && !!u.noTargetGet;
        "function" == typeof n &&
          ("string" != typeof e || i(n, "name") || o(n, "name", e),
          (c = l(n)).source ||
            (c.source = f.join("string" == typeof e ? e : ""))),
          t !== r
            ? (s ? !h && t[e] && (p = !0) : delete t[e],
              p ? (t[e] = n) : o(t, e, n))
            : p
            ? (t[e] = n)
            : a(e, n);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && s(this).source) || u(this);
      });
    },
    cDf5: function (t, e) {
      function n(e) {
        return (
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? ((t.exports = n = function (t) {
                return typeof t;
              }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0))
            : ((t.exports = n = function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0)),
          n(e)
        );
      }
      (t.exports = n),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    cSJ8: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return (
          void 0 === e && (e = ""),
          e
            ? t === e
              ? "/"
              : t.startsWith(e + "/")
              ? t.slice(e.length)
              : t
            : t
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    cmTm: function (t, e, n) {
      "use strict";
      function r(t, e) {
        var n = e && e.cache ? e.cache : l,
          r = e && e.serializer ? e.serializer : c;
        return (e && e.strategy ? e.strategy : u)(t, {
          cache: n,
          serializer: r,
        });
      }
      function o(t, e, n, r) {
        var o,
          i =
            null == (o = r) || "number" == typeof o || "boolean" == typeof o
              ? r
              : n(r),
          a = e.get(i);
        return void 0 === a && ((a = t.call(this, r)), e.set(i, a)), a;
      }
      function i(t, e, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = e.get(o);
        return void 0 === i && ((i = t.apply(this, r)), e.set(o, i)), i;
      }
      function a(t, e, n, r, o) {
        return n.bind(e, t, r, o);
      }
      function u(t, e) {
        return a(
          t,
          this,
          1 === t.length ? o : i,
          e.cache.create(),
          e.serializer
        );
      }
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return f;
        });
      var c = function () {
        return JSON.stringify(arguments);
      };
      function s() {
        this.cache = Object.create(null);
      }
      (s.prototype.has = function (t) {
        return t in this.cache;
      }),
        (s.prototype.get = function (t) {
          return this.cache[t];
        }),
        (s.prototype.set = function (t, e) {
          this.cache[t] = e;
        });
      var l = {
          create: function () {
            return new s();
          },
        },
        f = {
          variadic: function (t, e) {
            return a(t, this, i, e.cache.create(), e.serializer);
          },
          monadic: function (t, e) {
            return a(t, this, o, e.cache.create(), e.serializer);
          },
        };
    },
    cu4x: function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.parsePath = function (t) {
          var e = t || "/",
            n = "",
            r = "",
            o = e.indexOf("#");
          -1 !== o && ((r = e.substr(o)), (e = e.substr(0, o)));
          var i = e.indexOf("?");
          -1 !== i && ((n = e.substr(i)), (e = e.substr(0, i)));
          return {
            pathname: e,
            search: "?" === n ? "" : n,
            hash: "#" === r ? "" : r,
          };
        });
    },
    "dBg+": function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    dI71: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return (r =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function o(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          r(t, e);
      }
      n.d(e, "a", function () {
        return o;
      });
    },
    "eDl+": function (t, e) {
      t.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    emEt: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "PageResourceStatus", function () {
          return d;
        }),
        n.d(e, "BaseLoader", function () {
          return E;
        }),
        n.d(e, "ProdLoader", function () {
          return w;
        }),
        n.d(e, "setLoader", function () {
          return T;
        }),
        n.d(e, "publicLoader", function () {
          return P;
        }),
        n.d(e, "getStaticQueryResults", function () {
          return S;
        });
      var r = n("dI71");
      function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function i(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return o(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return o(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? o(t, e)
                  : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var a = n("rePB"),
        u = (function (t) {
          if ("undefined" == typeof document) return !1;
          var e = document.createElement("link");
          try {
            if (e.relList && "function" == typeof e.relList.supports)
              return e.relList.supports(t);
          } catch (n) {
            return !1;
          }
          return !1;
        })("prefetch")
          ? function (t, e) {
              return new Promise(function (n, r) {
                if ("undefined" != typeof document) {
                  var o = document.createElement("link");
                  o.setAttribute("rel", "prefetch"),
                    o.setAttribute("href", t),
                    Object.keys(e).forEach(function (t) {
                      o.setAttribute(t, e[t]);
                    }),
                    (o.onload = n),
                    (o.onerror = r),
                    (
                      document.getElementsByTagName("head")[0] ||
                      document.getElementsByName("script")[0].parentNode
                    ).appendChild(o);
                } else r();
              });
            }
          : function (t) {
              return new Promise(function (e, n) {
                var r = new XMLHttpRequest();
                r.open("GET", t, !0),
                  (r.onload = function () {
                    200 === r.status ? e() : n();
                  }),
                  r.send(null);
              });
            },
        c = {},
        s = function (t, e) {
          return new Promise(function (n) {
            c[t]
              ? n()
              : u(t, e)
                  .then(function () {
                    n(), (c[t] = !0);
                  })
                  .catch(function () {});
          });
        },
        l = n("5yr3"),
        f = n("30RF");
      function p(t, e) {
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
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(n), !0).forEach(function (e) {
                Object(a.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var d = { Error: "error", Success: "success" },
        m = function (t) {
          return (t && t.default) || t;
        },
        g = function (t) {
          var e;
          return (
            "/page-data/" +
            ("/" === t
              ? "index"
              : (e = (e = "/" === (e = t)[0] ? e.slice(1) : e).endsWith("/")
                  ? e.slice(0, -1)
                  : e)) +
            "/page-data.json"
          );
        };
      function v(t, e) {
        return (
          void 0 === e && (e = "GET"),
          new Promise(function (n, r) {
            var o = new XMLHttpRequest();
            o.open(e, t, !0),
              (o.onreadystatechange = function () {
                4 == o.readyState && n(o);
              }),
              o.send(null);
          })
        );
      }
      var y,
        b = function (t, e) {
          void 0 === e && (e = null);
          var n = {
            componentChunkName: t.componentChunkName,
            path: t.path,
            webpackCompilationHash: t.webpackCompilationHash,
            matchPath: t.matchPath,
            staticQueryHashes: t.staticQueryHashes,
          };
          return { component: e, json: t.result, page: n };
        },
        E = (function () {
          function t(t, e) {
            (this.inFlightNetworkRequests = new Map()),
              (this.pageDb = new Map()),
              (this.inFlightDb = new Map()),
              (this.staticQueryDb = {}),
              (this.pageDataDb = new Map()),
              (this.prefetchTriggered = new Set()),
              (this.prefetchCompleted = new Set()),
              (this.loadComponent = t),
              Object(f.d)(e);
          }
          var e = t.prototype;
          return (
            (e.memoizedGet = function (t) {
              var e = this,
                n = this.inFlightNetworkRequests.get(t);
              return (
                n ||
                  ((n = v(t, "GET")), this.inFlightNetworkRequests.set(t, n)),
                n
                  .then(function (n) {
                    return e.inFlightNetworkRequests.delete(t), n;
                  })
                  .catch(function (n) {
                    throw (e.inFlightNetworkRequests.delete(t), n);
                  })
              );
            }),
            (e.setApiRunner = function (t) {
              (this.apiRunner = t),
                (this.prefetchDisabled = t("disableCorePrefetching").some(
                  function (t) {
                    return t;
                  }
                ));
            }),
            (e.fetchPageDataJson = function (t) {
              var e = this,
                n = t.pagePath,
                r = t.retries,
                o = void 0 === r ? 0 : r,
                i = g(n);
              return this.memoizedGet(i).then(function (r) {
                var i = r.status,
                  a = r.responseText;
                if (200 === i)
                  try {
                    var u = JSON.parse(a);
                    if (void 0 === u.path)
                      throw new Error("not a valid pageData response");
                    return Object.assign(t, { status: d.Success, payload: u });
                  } catch (c) {}
                return 404 === i || 200 === i
                  ? "/404.html" === n
                    ? Object.assign(t, { status: d.Error })
                    : e.fetchPageDataJson(
                        Object.assign(t, {
                          pagePath: "/404.html",
                          notFound: !0,
                        })
                      )
                  : 500 === i
                  ? Object.assign(t, { status: d.Error })
                  : o < 3
                  ? e.fetchPageDataJson(Object.assign(t, { retries: o + 1 }))
                  : Object.assign(t, { status: d.Error });
              });
            }),
            (e.loadPageDataJson = function (t) {
              var e = this,
                n = Object(f.b)(t);
              if (this.pageDataDb.has(n)) {
                var r = this.pageDataDb.get(n);
                return Promise.resolve(r);
              }
              return this.fetchPageDataJson({ pagePath: n }).then(function (t) {
                return e.pageDataDb.set(n, t), t;
              });
            }),
            (e.findMatchPath = function (t) {
              return Object(f.a)(t);
            }),
            (e.loadPage = function (t) {
              var e = this,
                n = Object(f.b)(t);
              if (this.pageDb.has(n)) {
                var r = this.pageDb.get(n);
                return Promise.resolve(r.payload);
              }
              if (this.inFlightDb.has(n)) return this.inFlightDb.get(n);
              var o = Promise.all([
                this.loadAppData(),
                this.loadPageDataJson(n),
              ]).then(function (t) {
                var r = t[1];
                if (r.status === d.Error) return { status: d.Error };
                var o = r.payload,
                  i = o,
                  a = i.componentChunkName,
                  u = i.staticQueryHashes,
                  c = void 0 === u ? [] : u,
                  s = {},
                  f = e.loadComponent(a).then(function (e) {
                    var n;
                    return (
                      (s.createdAt = new Date()),
                      e
                        ? ((s.status = d.Success),
                          !0 === r.notFound && (s.notFound = !0),
                          (o = Object.assign(o, {
                            webpackCompilationHash: t[0]
                              ? t[0].webpackCompilationHash
                              : "",
                          })),
                          (n = b(o, e)))
                        : (s.status = d.Error),
                      n
                    );
                  }),
                  p = Promise.all(
                    c.map(function (t) {
                      if (e.staticQueryDb[t]) {
                        var n = e.staticQueryDb[t];
                        return { staticQueryHash: t, jsonPayload: n };
                      }
                      return e
                        .memoizedGet("/page-data/sq/d/" + t + ".json")
                        .then(function (e) {
                          var n = JSON.parse(e.responseText);
                          return { staticQueryHash: t, jsonPayload: n };
                        });
                    })
                  ).then(function (t) {
                    var n = {};
                    return (
                      t.forEach(function (t) {
                        var r = t.staticQueryHash,
                          o = t.jsonPayload;
                        (n[r] = o), (e.staticQueryDb[r] = o);
                      }),
                      n
                    );
                  });
                return Promise.all([f, p]).then(function (t) {
                  var r,
                    o = t[0],
                    i = t[1];
                  return (
                    o &&
                      ((r = h(h({}, o), {}, { staticQueryResults: i })),
                      (s.payload = r),
                      l.a.emit("onPostLoadPageResources", {
                        page: r,
                        pageResources: r,
                      })),
                    e.pageDb.set(n, s),
                    r
                  );
                });
              });
              return (
                o
                  .then(function (t) {
                    e.inFlightDb.delete(n);
                  })
                  .catch(function (t) {
                    throw (e.inFlightDb.delete(n), t);
                  }),
                this.inFlightDb.set(n, o),
                o
              );
            }),
            (e.loadPageSync = function (t) {
              var e = Object(f.b)(t);
              if (this.pageDb.has(e)) return this.pageDb.get(e).payload;
            }),
            (e.shouldPrefetch = function (t) {
              return (
                !!(function () {
                  if (
                    "connection" in navigator &&
                    void 0 !== navigator.connection
                  ) {
                    if (
                      (navigator.connection.effectiveType || "").includes("2g")
                    )
                      return !1;
                    if (navigator.connection.saveData) return !1;
                  }
                  return !0;
                })() && !this.pageDb.has(t)
              );
            }),
            (e.prefetch = function (t) {
              var e = this;
              if (!this.shouldPrefetch(t)) return !1;
              if (
                (this.prefetchTriggered.has(t) ||
                  (this.apiRunner("onPrefetchPathname", { pathname: t }),
                  this.prefetchTriggered.add(t)),
                this.prefetchDisabled)
              )
                return !1;
              var n = Object(f.b)(t);
              return (
                this.doPrefetch(n).then(function () {
                  e.prefetchCompleted.has(t) ||
                    (e.apiRunner("onPostPrefetchPathname", { pathname: t }),
                    e.prefetchCompleted.add(t));
                }),
                !0
              );
            }),
            (e.doPrefetch = function (t) {
              var e = this,
                n = g(t);
              return s(n, { crossOrigin: "anonymous", as: "fetch" }).then(
                function () {
                  return e.loadPageDataJson(t);
                }
              );
            }),
            (e.hovering = function (t) {
              this.loadPage(t);
            }),
            (e.getResourceURLsForPathname = function (t) {
              var e = Object(f.b)(t),
                n = this.pageDataDb.get(e);
              if (n) {
                var r = b(n.payload);
                return [].concat(i(O(r.page.componentChunkName)), [g(e)]);
              }
              return null;
            }),
            (e.isPageNotFound = function (t) {
              var e = Object(f.b)(t),
                n = this.pageDb.get(e);
              return !n || n.notFound;
            }),
            (e.loadAppData = function (t) {
              var e = this;
              return (
                void 0 === t && (t = 0),
                this.memoizedGet("/page-data/app-data.json").then(function (n) {
                  var r,
                    o = n.status,
                    i = n.responseText;
                  if (200 !== o && t < 3) return e.loadAppData(t + 1);
                  if (200 === o)
                    try {
                      var a = JSON.parse(i);
                      if (void 0 === a.webpackCompilationHash)
                        throw new Error("not a valid app-data response");
                      r = a;
                    } catch (u) {}
                  return r;
                })
              );
            }),
            t
          );
        })(),
        O = function (t) {
          return (window.___chunkMapping[t] || []).map(function (t) {
            return "" + t;
          });
        },
        w = (function (t) {
          function e(e, n) {
            return (
              t.call(
                this,
                function (t) {
                  return e.components[t]
                    ? e.components[t]()
                        .then(m)
                        .catch(function () {
                          return null;
                        })
                    : Promise.resolve();
                },
                n
              ) || this
            );
          }
          Object(r.a)(e, t);
          var n = e.prototype;
          return (
            (n.doPrefetch = function (e) {
              return t.prototype.doPrefetch.call(this, e).then(function (t) {
                if (t.status !== d.Success) return Promise.resolve();
                var e = t.payload,
                  n = e.componentChunkName,
                  r = O(n);
                return Promise.all(r.map(s)).then(function () {
                  return e;
                });
              });
            }),
            (n.loadPageDataJson = function (e) {
              return t.prototype.loadPageDataJson
                .call(this, e)
                .then(function (t) {
                  return t.notFound
                    ? v(e, "HEAD").then(function (e) {
                        return 200 === e.status ? { status: d.Error } : t;
                      })
                    : t;
                });
            }),
            e
          );
        })(E),
        T = function (t) {
          y = t;
        },
        P = {
          getResourcesForPathname: function (t) {
            return (
              console.warn(
                "Warning: getResourcesForPathname is deprecated. Use loadPage instead"
              ),
              y.i.loadPage(t)
            );
          },
          getResourcesForPathnameSync: function (t) {
            return (
              console.warn(
                "Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead"
              ),
              y.i.loadPageSync(t)
            );
          },
          enqueue: function (t) {
            return y.prefetch(t);
          },
          getResourceURLsForPathname: function (t) {
            return y.getResourceURLsForPathname(t);
          },
          loadPage: function (t) {
            return y.loadPage(t);
          },
          loadPageSync: function (t) {
            return y.loadPageSync(t);
          },
          prefetch: function (t) {
            return y.prefetch(t);
          },
          isPageNotFound: function (t) {
            return y.isPageNotFound(t);
          },
          hovering: function (t) {
            return y.hovering(t);
          },
          loadAppData: function () {
            return y.loadAppData();
          },
        };
      e.default = P;
      function S() {
        return y ? y.staticQueryDb : {};
      }
    },
    eq4K: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return a;
        });
      var r = n("q1tI"),
        o = n("+IEj"),
        i = r.createContext(o.defaultLang),
        a = function (t) {
          var e = t.children,
            n = t.pageContext.locale,
            a = void 0 === n ? o.defaultLang : n;
          return r.createElement(i.Provider, { value: a }, e);
        };
    },
    ewvW: function (t, e, n) {
      var r = n("HYAF");
      t.exports = function (t) {
        return Object(r(t));
      };
    },
    f5p1: function (t, e, n) {
      var r = n("2oRo"),
        o = n("iSVu"),
        i = r.WeakMap;
      t.exports = "function" == typeof i && /native code/.test(o(i));
    },
    fQgO: function (t, e, n) {
      var r = { "./en.json": "s+WA", "./ja.json": "OjiQ" };
      function o(t) {
        var e = i(t);
        return n(e);
      }
      function i(t) {
        if (!n.o(r, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return r[t];
      }
      (o.keys = function () {
        return Object.keys(r);
      }),
        (o.resolve = i),
        (t.exports = o),
        (o.id = "fQgO");
    },
    "flL/": function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "wrapRootElement", function () {
          return g;
        });
      n("E9XD");
      var r = n("rePB"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("7ljp"),
        u = n("BfwJ"),
        c = n("gXpC"),
        s = n("JTKy").default,
        l = Object.assign({}, s);
      function f(t, e) {
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
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var h = {};
      c.plugins.forEach(function (t) {
        var e = t.guards,
          n = void 0 === e ? {} : e,
          r = t.components;
        Object.entries(r).forEach(function (t) {
          var e = t[0],
            r = t[1];
          h[e]
            ? h.push({ guard: n[e], Component: r })
            : (h[e] = [{ guard: n[e], Component: r }]);
        });
      });
      var d = Object.entries(h)
          .map(function (t) {
            var e,
              n = t[0],
              r = t[1];
            return (
              ((e = {})[n] = (function (t) {
                return function (e) {
                  var n = t.find(function (t) {
                    var n = t.guard;
                    return !n || n(e);
                  }).Component;
                  return i.a.createElement(n, e);
                };
              })(r.concat({ guard: void 0, Component: n }))),
              e
            );
          })
          .reduce(function (t, e) {
            return p(p({}, t), e);
          }, {}),
        m = Object(a.withMDXComponents)(function (t) {
          var e = t.components,
            n = t.children;
          return i.a.createElement(
            u.MDXScopeProvider,
            { __mdxScope: l },
            i.a.createElement(a.MDXProvider, { components: p(p({}, e), d) }, n)
          );
        }),
        g = function (t) {
          var e = t.element;
          return i.a.createElement(m, null, e);
        };
    },
    "g6v/": function (t, e, n) {
      var r = n("0Dky");
      t.exports = !r(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    gXpC: function (t, e) {
      t.exports = { plugins: [] };
    },
    glrk: function (t, e, n) {
      var r = n("hh1v");
      t.exports = function (t) {
        if (!r(t)) throw TypeError(String(t) + " is not an object");
        return t;
      };
    },
    hBjN: function (t, e, n) {
      "use strict";
      var r = n("oEtG"),
        o = n("m/L8"),
        i = n("XGwC");
      t.exports = function (t, e, n) {
        var a = r(e);
        a in t ? o.f(t, a, i(0, n)) : (t[a] = n);
      };
    },
    hd9s: function (t, e, n) {
      "use strict";
      var r = n("284h"),
        o = n("TqRt");
      (e.__esModule = !0), (e.ScrollContainer = void 0);
      var i = o(n("pVnL")),
        a = o(n("VbXa")),
        u = r(n("q1tI")),
        c = o(n("i8i4")),
        s = o(n("17x9")),
        l = n("Enzk"),
        f = n("YwZP"),
        p = {
          scrollKey: s.default.string.isRequired,
          shouldUpdateScroll: s.default.func,
          children: s.default.element.isRequired,
        },
        h = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          (0, a.default)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              var t = this,
                e = c.default.findDOMNode(this),
                n = this.props,
                r = n.location,
                o = n.scrollKey;
              if (e) {
                e.addEventListener("scroll", function () {
                  t.props.context.save(r, o, e.scrollTop);
                });
                var i = this.props.context.read(r, o);
                e.scrollTo(0, i || 0);
              }
            }),
            (n.render = function () {
              return this.props.children;
            }),
            e
          );
        })(u.Component),
        d = function (t) {
          return u.createElement(f.Location, null, function (e) {
            var n = e.location;
            return u.createElement(l.ScrollContext.Consumer, null, function (
              e
            ) {
              return u.createElement(
                h,
                (0, i.default)({}, t, { context: e, location: n })
              );
            });
          });
        };
      (e.ScrollContainer = d), (d.propTypes = p);
    },
    hh1v: function (t, e) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    iSVu: function (t, e, n) {
      var r = n("xs3f"),
        o = Function.toString;
      "function" != typeof r.inspectSource &&
        (r.inspectSource = function (t) {
          return o.call(t);
        }),
        (t.exports = r.inspectSource);
    },
    k7kT: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "wrapPageElement", function () {
          return z;
        });
      var r = n("q1tI"),
        o = (n("E9XD"), n("X52I")),
        i = n("2OET"),
        a = n("N3fz"),
        u = n("siyQ"),
        c = n("7LaZ"),
        s = n("Mu++"),
        l = n("EuEu"),
        f = n("KuiD");
      function p(t, e) {
        return Object.keys(t).reduce(function (n, r) {
          return (n[r] = Object(u.a)({ timeZone: e }, t[r])), n;
        }, {});
      }
      function h(t, e) {
        return Object.keys(Object(u.a)(Object(u.a)({}, t), e)).reduce(function (
          n,
          r
        ) {
          return (
            (n[r] = Object(u.a)(Object(u.a)({}, t[r] || {}), e[r] || {})), n
          );
        },
        {});
      }
      function d(t, e) {
        if (!e) return t;
        var n = s.a.formats;
        return Object(u.a)(Object(u.a)(Object(u.a)({}, n), t), {
          date: h(p(n.date, e), p(t.date || {}, e)),
          time: h(p(n.time, e), p(t.time || {}, e)),
        });
      }
      function m(t, e, n, r, o) {
        var i = t.locale,
          a = t.formats,
          s = t.messages,
          p = t.defaultLocale,
          h = t.defaultFormats,
          m = t.onError,
          g = t.timeZone,
          v = t.defaultRichTextElements;
        void 0 === n && (n = { id: "" });
        var y = n.id,
          b = n.defaultMessage;
        Object(c.a)(
          !!y,
          "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue"
        );
        var E = String(y),
          O = s && Object.prototype.hasOwnProperty.call(s, E) && s[E];
        if (Array.isArray(O) && 1 === O.length && O[0].type === f.a.literal)
          return O[0].value;
        if (!r && O && "string" == typeof O && !v)
          return O.replace(/'\{(.*?)\}'/gi, "{$1}");
        if (
          ((r = Object(u.a)(Object(u.a)({}, v), r || {})),
          (a = d(a, g)),
          (h = d(h, g)),
          !O)
        ) {
          if (
            ((!b || (i && i.toLowerCase() !== p.toLowerCase())) &&
              m(new l.f(n, i)),
            b)
          )
            try {
              return e.getMessageFormat(b, p, h, o).format(r);
            } catch (w) {
              return (
                m(
                  new l.d(
                    'Error formatting default message for: "' +
                      E +
                      '", rendering default message verbatim',
                    i,
                    n,
                    w
                  )
                ),
                "string" == typeof b ? b : E
              );
            }
          return E;
        }
        try {
          return e
            .getMessageFormat(O, i, a, Object(u.a)({ formatters: e }, o || {}))
            .format(r);
        } catch (w) {
          m(
            new l.d(
              'Error formatting message: "' +
                E +
                '", using ' +
                (b ? "default message" : "id") +
                " as fallback.",
              i,
              n,
              w
            )
          );
        }
        if (b)
          try {
            return e.getMessageFormat(b, p, h, o).format(r);
          } catch (w) {
            m(
              new l.d(
                'Error formatting the default message for: "' +
                  E +
                  '", rendering message verbatim',
                i,
                n,
                w
              )
            );
          }
        return "string" == typeof O ? O : "string" == typeof b ? b : E;
      }
      var g = n("1VXf"),
        v = [
          "localeMatcher",
          "style",
          "currency",
          "currencyDisplay",
          "unit",
          "unitDisplay",
          "useGrouping",
          "minimumIntegerDigits",
          "minimumFractionDigits",
          "maximumFractionDigits",
          "minimumSignificantDigits",
          "maximumSignificantDigits",
          "compactDisplay",
          "currencyDisplay",
          "currencySign",
          "notation",
          "signDisplay",
          "unit",
          "unitDisplay",
          "numberingSystem",
        ];
      function y(t, e, n) {
        var r = t.locale,
          o = t.formats,
          i = t.onError;
        void 0 === n && (n = {});
        var a = n.format,
          u = (a && Object(g.e)(o, "number", a, i)) || {};
        return e(r, Object(g.d)(n, v, u));
      }
      function b(t, e, n, r) {
        void 0 === r && (r = {});
        try {
          return y(t, e, r).format(n);
        } catch (o) {
          t.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting number.", o));
        }
        return String(n);
      }
      function E(t, e, n, r) {
        void 0 === r && (r = {});
        try {
          return y(t, e, r).formatToParts(n);
        } catch (o) {
          t.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting number.", o));
        }
        return [];
      }
      var O = n("BqEn"),
        w = ["numeric", "style"];
      function T(t, e, n, r, o) {
        void 0 === o && (o = {}),
          r || (r = "second"),
          Intl.RelativeTimeFormat ||
            t.onError(
              new O.b(
                'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
                O.a.MISSING_INTL_API
              )
            );
        try {
          return (function (t, e, n) {
            var r = t.locale,
              o = t.formats,
              i = t.onError;
            void 0 === n && (n = {});
            var a = n.format,
              u = (!!a && Object(g.e)(o, "relative", a, i)) || {};
            return e(r, Object(g.d)(n, w, u));
          })(t, e, o).format(n, r);
        } catch (i) {
          t.onError(new l.d("Error formatting relative time.", i));
        }
        return String(n);
      }
      var P = [
        "localeMatcher",
        "formatMatcher",
        "timeZone",
        "hour12",
        "weekday",
        "era",
        "year",
        "month",
        "day",
        "hour",
        "minute",
        "second",
        "timeZoneName",
        "hourCycle",
        "dateStyle",
        "timeStyle",
        "calendar",
        "numberingSystem",
      ];
      function S(t, e, n, r) {
        var o = t.locale,
          i = t.formats,
          a = t.onError,
          c = t.timeZone;
        void 0 === r && (r = {});
        var s = r.format,
          l = Object(u.a)(
            Object(u.a)({}, c && { timeZone: c }),
            s && Object(g.e)(i, e, s, a)
          ),
          f = Object(g.d)(r, P, l);
        return (
          "time" !== e ||
            f.hour ||
            f.minute ||
            f.second ||
            f.timeStyle ||
            f.dateStyle ||
            (f = Object(u.a)(Object(u.a)({}, f), {
              hour: "numeric",
              minute: "numeric",
            })),
          n(o, f)
        );
      }
      function _(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          u = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return S(t, "date", e, a).format(u);
        } catch (c) {
          t.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting date.", c));
        }
        return String(u);
      }
      function j(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          u = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return S(t, "time", e, a).format(u);
        } catch (c) {
          t.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting time.", c));
        }
        return String(u);
      }
      function R(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = n[2],
          u = void 0 === a ? {} : a,
          c = t.timeZone,
          s = t.locale,
          f = t.onError,
          p = Object(g.d)(u, P, c ? { timeZone: c } : {});
        try {
          return e(s, p).formatRange(o, i);
        } catch (h) {
          f(new l.a(l.b.FORMAT_ERROR, "Error formatting date time range.", h));
        }
        return String(o);
      }
      function A(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          u = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return S(t, "date", e, a).formatToParts(u);
        } catch (c) {
          t.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting date.", c));
        }
        return [];
      }
      function C(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          u = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return S(t, "time", e, a).formatToParts(u);
        } catch (c) {
          t.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting time.", c));
        }
        return [];
      }
      var L = ["localeMatcher", "type"];
      function x(t, e, n, r) {
        var o = t.locale,
          i = t.onError;
        void 0 === r && (r = {}),
          Intl.PluralRules ||
            i(
              new O.b(
                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                O.a.MISSING_INTL_API
              )
            );
        var a = Object(g.d)(r, L);
        try {
          return e(o, a).select(n);
        } catch (u) {
          i(new l.d("Error formatting plural.", u));
        }
        return "other";
      }
      var k = ["localeMatcher", "type", "style"],
        I = Date.now();
      function D(t, e, n, r) {
        void 0 === r && (r = {});
        var o = N(t, e, n, r).reduce(function (t, e) {
          var n = e.value;
          return (
            "string" != typeof n
              ? t.push(n)
              : "string" == typeof t[t.length - 1]
              ? (t[t.length - 1] += n)
              : t.push(n),
            t
          );
        }, []);
        return 1 === o.length ? o[0] : o;
      }
      function N(t, e, n, r) {
        var o = t.locale,
          i = t.onError;
        void 0 === r && (r = {}),
          Intl.ListFormat ||
            i(
              new O.b(
                'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
                O.a.MISSING_INTL_API
              )
            );
        var a = Object(g.d)(r, k);
        try {
          var c = {},
            s = n.map(function (t, e) {
              if ("object" == typeof t) {
                var n = (function (t) {
                  return I + "_" + t + "_" + I;
                })(e);
                return (c[n] = t), n;
              }
              return String(t);
            });
          return e(o, a)
            .formatToParts(s)
            .map(function (t) {
              return "literal" === t.type
                ? t
                : Object(u.a)(Object(u.a)({}, t), {
                    value: c[t.value] || t.value,
                  });
            });
        } catch (f) {
          i(new l.a(l.b.FORMAT_ERROR, "Error formatting list.", f));
        }
        return n;
      }
      var M = ["localeMatcher", "style", "type", "fallback"];
      function F(t, e, n, r) {
        var o = t.locale,
          i = t.onError;
        Intl.DisplayNames ||
          i(
            new O.b(
              'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
              O.a.MISSING_INTL_API
            )
          );
        var a = Object(g.d)(r, M);
        try {
          return e(o, a).of(n);
        } catch (u) {
          i(new l.a(l.b.FORMAT_ERROR, "Error formatting display name.", u));
        }
      }
      function U(t) {
        var e;
        t.defaultRichTextElements &&
          "string" ==
            typeof ((e = t.messages || {}) ? e[Object.keys(e)[0]] : void 0) &&
          console.warn(
            '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution'
          );
      }
      var G = n("/d+U");
      function q(t) {
        return {
          locale: t.locale,
          timeZone: t.timeZone,
          formats: t.formats,
          textComponent: t.textComponent,
          messages: t.messages,
          defaultLocale: t.defaultLocale,
          defaultFormats: t.defaultFormats,
          onError: t.onError,
          wrapRichTextChunksInFragment: t.wrapRichTextChunksInFragment,
          defaultRichTextElements: t.defaultRichTextElements,
        };
      }
      function V(t) {
        return t
          ? Object.keys(t).reduce(function (e, n) {
              var r = t[n];
              return (e[n] = Object(G.c)(r) ? Object(a.b)(r) : r), e;
            }, {})
          : t;
      }
      var X = function (t, e, n, i) {
          for (var a = [], u = 4; u < arguments.length; u++)
            a[u - 4] = arguments[u];
          var c = V(i),
            s = m.apply(void 0, Object(o.d)([t, e, n, c], a));
          return Array.isArray(s) ? r.Children.toArray(s) : s;
        },
        W = function (t, e) {
          var n = t.defaultRichTextElements,
            r = Object(o.c)(t, ["defaultRichTextElements"]),
            i = V(n),
            c = (function (t, e) {
              var n = Object(g.b)(e),
                r = Object(u.a)(Object(u.a)({}, g.a), t),
                o = r.locale,
                i = r.defaultLocale,
                a = r.onError;
              return (
                o
                  ? !Intl.NumberFormat.supportedLocalesOf(o).length && a
                    ? a(
                        new l.e(
                          'Missing locale data for locale: "' +
                            o +
                            '" in Intl.NumberFormat. Using default locale: "' +
                            i +
                            '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'
                        )
                      )
                    : !Intl.DateTimeFormat.supportedLocalesOf(o).length &&
                      a &&
                      a(
                        new l.e(
                          'Missing locale data for locale: "' +
                            o +
                            '" in Intl.DateTimeFormat. Using default locale: "' +
                            i +
                            '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'
                        )
                      )
                  : (a &&
                      a(
                        new l.c(
                          '"locale" was not configured, using "' +
                            i +
                            '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'
                        )
                      ),
                    (r.locale = r.defaultLocale || "en")),
                U(r),
                Object(u.a)(Object(u.a)({}, r), {
                  formatters: n,
                  formatNumber: b.bind(null, r, n.getNumberFormat),
                  formatNumberToParts: E.bind(null, r, n.getNumberFormat),
                  formatRelativeTime: T.bind(null, r, n.getRelativeTimeFormat),
                  formatDate: _.bind(null, r, n.getDateTimeFormat),
                  formatDateToParts: A.bind(null, r, n.getDateTimeFormat),
                  formatTime: j.bind(null, r, n.getDateTimeFormat),
                  formatDateTimeRange: R.bind(null, r, n.getDateTimeFormat),
                  formatTimeToParts: C.bind(null, r, n.getDateTimeFormat),
                  formatPlural: x.bind(null, r, n.getPluralRules),
                  formatMessage: m.bind(null, r, n),
                  formatList: D.bind(null, r, n.getListFormat),
                  formatListToParts: N.bind(null, r, n.getListFormat),
                  formatDisplayName: F.bind(null, r, n.getDisplayNames),
                })
              );
            })(
              Object(o.a)(Object(o.a)(Object(o.a)({}, a.a), r), {
                defaultRichTextElements: i,
              }),
              e
            );
          return Object(o.a)(Object(o.a)({}, c), {
            formatMessage: X.bind(
              null,
              {
                locale: c.locale,
                timeZone: c.timeZone,
                formats: c.formats,
                defaultLocale: c.defaultLocale,
                defaultFormats: c.defaultFormats,
                messages: c.messages,
                onError: c.onError,
                defaultRichTextElements: i,
              },
              c.formatters
            ),
          });
        },
        B = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.cache = Object(g.c)()),
              (e.state = {
                cache: e.cache,
                intl: W(q(e.props), e.cache),
                prevConfig: q(e.props),
              }),
              e
            );
          }
          return (
            Object(o.b)(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              var n = e.prevConfig,
                r = e.cache,
                o = q(t);
              return Object(a.d)(n, o)
                ? null
                : { intl: W(o, r), prevConfig: o };
            }),
            (e.prototype.render = function () {
              return (
                Object(a.c)(this.state.intl),
                r.createElement(
                  i.b,
                  { value: this.state.intl },
                  this.props.children
                )
              );
            }),
            (e.displayName = "IntlProvider"),
            (e.defaultProps = a.a),
            e
          );
        })(r.PureComponent),
        z = function (t) {
          var e = t.element,
            o = t.props.pageContext.locale,
            i = n("fQgO")("./" + o + ".json");
          return r.createElement(B, { locale: o, key: o, messages: i }, e);
        };
    },
    kOOl: function (t, e) {
      var n = 0,
        r = Math.random();
      t.exports = function (t) {
        return (
          "Symbol(" +
          String(void 0 === t ? "" : t) +
          ")_" +
          (++n + r).toString(36)
        );
      };
    },
    kRJp: function (t, e, n) {
      var r = n("g6v/"),
        o = n("m/L8"),
        i = n("XGwC");
      t.exports = r
        ? function (t, e, n) {
            return o.f(t, e, i(1, n));
          }
        : function (t, e, n) {
            return (t[e] = n), t;
          };
    },
    lMq5: function (t, e, n) {
      var r = n("0Dky"),
        o = /#|\.prototype\./,
        i = function (t, e) {
          var n = u[a(t)];
          return n == s || (n != c && ("function" == typeof e ? r(e) : !!e));
        },
        a = (i.normalize = function (t) {
          return String(t).replace(o, ".").toLowerCase();
        }),
        u = (i.data = {}),
        c = (i.NATIVE = "N"),
        s = (i.POLYFILL = "P");
      t.exports = i;
    },
    lSNA: function (t, e) {
      (t.exports = function (t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    lw3w: function (t, e, n) {
      var r;
      t.exports = ((r = n("rzlk")) && r.default) || r;
    },
    "m/L8": function (t, e, n) {
      var r = n("g6v/"),
        o = n("DPsx"),
        i = n("glrk"),
        a = n("oEtG"),
        u = Object.defineProperty;
      e.f = r
        ? u
        : function (t, e, n) {
            if ((i(t), (e = a(e)), i(n), o))
              try {
                return u(t, e, n);
              } catch (r) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported");
            return "value" in n && (t[e] = n.value), t;
          };
    },
    npZl: function (t, e, n) {
      "use strict";
      var r = n("TqRt");
      n("Wbzz"), r(n("9hXx"));
    },
    nqlD: function (t, e, n) {
      var r = n("q1tI").createContext;
      (t.exports = r), (t.exports.default = r);
    },
    oEtG: function (t, e, n) {
      var r = n("wE6v"),
        o = n("2bX/");
      t.exports = function (t) {
        var e = r(t, "string");
        return o(e) ? e : String(e);
      };
    },
    pVnL: function (t, e) {
      function n() {
        return (
          (t.exports = n =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          n.apply(this, arguments)
        );
      }
      (t.exports = n),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    pkCn: function (t, e, n) {
      "use strict";
      var r = n("0Dky");
      t.exports = function (t, e) {
        var n = [][t];
        return (
          !!n &&
          r(function () {
            n.call(
              null,
              e ||
                function () {
                  throw 1;
                },
              1
            );
          })
        );
      };
    },
    ppGB: function (t, e) {
      var n = Math.ceil,
        r = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
      };
    },
    qT12: function (t, e, n) {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        u = r ? Symbol.for("react.strict_mode") : 60108,
        c = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        l = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        h = r ? Symbol.for("react.forward_ref") : 60112,
        d = r ? Symbol.for("react.suspense") : 60113,
        m = r ? Symbol.for("react.suspense_list") : 60120,
        g = r ? Symbol.for("react.memo") : 60115,
        v = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        E = r ? Symbol.for("react.responder") : 60118,
        O = r ? Symbol.for("react.scope") : 60119;
      function w(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case o:
              switch ((t = t.type)) {
                case f:
                case p:
                case a:
                case c:
                case u:
                case d:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case l:
                    case h:
                    case v:
                    case g:
                    case s:
                      return t;
                    default:
                      return e;
                  }
              }
            case i:
              return e;
          }
        }
      }
      function T(t) {
        return w(t) === p;
      }
      (e.AsyncMode = f),
        (e.ConcurrentMode = p),
        (e.ContextConsumer = l),
        (e.ContextProvider = s),
        (e.Element = o),
        (e.ForwardRef = h),
        (e.Fragment = a),
        (e.Lazy = v),
        (e.Memo = g),
        (e.Portal = i),
        (e.Profiler = c),
        (e.StrictMode = u),
        (e.Suspense = d),
        (e.isAsyncMode = function (t) {
          return T(t) || w(t) === f;
        }),
        (e.isConcurrentMode = T),
        (e.isContextConsumer = function (t) {
          return w(t) === l;
        }),
        (e.isContextProvider = function (t) {
          return w(t) === s;
        }),
        (e.isElement = function (t) {
          return "object" == typeof t && null !== t && t.$$typeof === o;
        }),
        (e.isForwardRef = function (t) {
          return w(t) === h;
        }),
        (e.isFragment = function (t) {
          return w(t) === a;
        }),
        (e.isLazy = function (t) {
          return w(t) === v;
        }),
        (e.isMemo = function (t) {
          return w(t) === g;
        }),
        (e.isPortal = function (t) {
          return w(t) === i;
        }),
        (e.isProfiler = function (t) {
          return w(t) === c;
        }),
        (e.isStrictMode = function (t) {
          return w(t) === u;
        }),
        (e.isSuspense = function (t) {
          return w(t) === d;
        }),
        (e.isValidElementType = function (t) {
          return (
            "string" == typeof t ||
            "function" == typeof t ||
            t === a ||
            t === p ||
            t === c ||
            t === u ||
            t === d ||
            t === m ||
            ("object" == typeof t &&
              null !== t &&
              (t.$$typeof === v ||
                t.$$typeof === g ||
                t.$$typeof === s ||
                t.$$typeof === l ||
                t.$$typeof === h ||
                t.$$typeof === b ||
                t.$$typeof === E ||
                t.$$typeof === O ||
                t.$$typeof === y))
          );
        }),
        (e.typeOf = w);
    },
    qhky: function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "a", function () {
          return mt;
        });
        n("E9XD");
        var r,
          o,
          i,
          a,
          u = n("17x9"),
          c = n.n(u),
          s = n("8+s/"),
          l = n.n(s),
          f = n("bmMU"),
          p = n.n(f),
          h = n("q1tI"),
          d = n.n(h),
          m = n("YVoz"),
          g = n.n(m),
          v = "bodyAttributes",
          y = "htmlAttributes",
          b = "titleAttributes",
          E = {
            BASE: "base",
            BODY: "body",
            HEAD: "head",
            HTML: "html",
            LINK: "link",
            META: "meta",
            NOSCRIPT: "noscript",
            SCRIPT: "script",
            STYLE: "style",
            TITLE: "title",
          },
          O =
            (Object.keys(E).map(function (t) {
              return E[t];
            }),
            "charset"),
          w = "cssText",
          T = "href",
          P = "http-equiv",
          S = "innerHTML",
          _ = "itemprop",
          j = "name",
          R = "property",
          A = "rel",
          C = "src",
          L = "target",
          x = {
            accesskey: "accessKey",
            charset: "charSet",
            class: "className",
            contenteditable: "contentEditable",
            contextmenu: "contextMenu",
            "http-equiv": "httpEquiv",
            itemprop: "itemProp",
            tabindex: "tabIndex",
          },
          k = "defaultTitle",
          I = "defer",
          D = "encodeSpecialCharacters",
          N = "onChangeClientState",
          M = "titleTemplate",
          F = Object.keys(x).reduce(function (t, e) {
            return (t[x[e]] = e), t;
          }, {}),
          U = [E.NOSCRIPT, E.SCRIPT, E.STYLE],
          G =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
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
                },
          q = function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          },
          V = (function () {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r);
              }
            }
            return function (e, n, r) {
              return n && t(e.prototype, n), r && t(e, r), e;
            };
          })(),
          X =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            },
          W = function (t, e) {
            var n = {};
            for (var r in t)
              e.indexOf(r) >= 0 ||
                (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
            return n;
          },
          B = function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          },
          z = function (t) {
            var e =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            return !1 === e
              ? String(t)
              : String(t)
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#x27;");
          },
          Y = function (t) {
            var e = $(t, E.TITLE),
              n = $(t, M);
            if (n && e)
              return n.replace(/%s/g, function () {
                return Array.isArray(e) ? e.join("") : e;
              });
            var r = $(t, k);
            return e || r || void 0;
          },
          K = function (t) {
            return $(t, N) || function () {};
          },
          H = function (t, e) {
            return e
              .filter(function (e) {
                return void 0 !== e[t];
              })
              .map(function (e) {
                return e[t];
              })
              .reduce(function (t, e) {
                return X({}, t, e);
              }, {});
          },
          J = function (t, e) {
            return e
              .filter(function (t) {
                return void 0 !== t[E.BASE];
              })
              .map(function (t) {
                return t[E.BASE];
              })
              .reverse()
              .reduce(function (e, n) {
                if (!e.length)
                  for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                    var i = r[o].toLowerCase();
                    if (-1 !== t.indexOf(i) && n[i]) return e.concat(n);
                  }
                return e;
              }, []);
          },
          Q = function (t, e, n) {
            var r = {};
            return n
              .filter(function (e) {
                return (
                  !!Array.isArray(e[t]) ||
                  (void 0 !== e[t] &&
                    rt(
                      "Helmet: " +
                        t +
                        ' should be of type "Array". Instead found type "' +
                        G(e[t]) +
                        '"'
                    ),
                  !1)
                );
              })
              .map(function (e) {
                return e[t];
              })
              .reverse()
              .reduce(function (t, n) {
                var o = {};
                n.filter(function (t) {
                  for (
                    var n = void 0, i = Object.keys(t), a = 0;
                    a < i.length;
                    a++
                  ) {
                    var u = i[a],
                      c = u.toLowerCase();
                    -1 === e.indexOf(c) ||
                      (n === A && "canonical" === t[n].toLowerCase()) ||
                      (c === A && "stylesheet" === t[c].toLowerCase()) ||
                      (n = c),
                      -1 === e.indexOf(u) ||
                        (u !== S && u !== w && u !== _) ||
                        (n = u);
                  }
                  if (!n || !t[n]) return !1;
                  var s = t[n].toLowerCase();
                  return (
                    r[n] || (r[n] = {}),
                    o[n] || (o[n] = {}),
                    !r[n][s] && ((o[n][s] = !0), !0)
                  );
                })
                  .reverse()
                  .forEach(function (e) {
                    return t.push(e);
                  });
                for (var i = Object.keys(o), a = 0; a < i.length; a++) {
                  var u = i[a],
                    c = g()({}, r[u], o[u]);
                  r[u] = c;
                }
                return t;
              }, [])
              .reverse();
          },
          $ = function (t, e) {
            for (var n = t.length - 1; n >= 0; n--) {
              var r = t[n];
              if (r.hasOwnProperty(e)) return r[e];
            }
            return null;
          },
          Z =
            ((r = Date.now()),
            function (t) {
              var e = Date.now();
              e - r > 16
                ? ((r = e), t(e))
                : setTimeout(function () {
                    Z(t);
                  }, 0);
            }),
          tt = function (t) {
            return clearTimeout(t);
          },
          et =
            "undefined" != typeof window
              ? (window.requestAnimationFrame &&
                  window.requestAnimationFrame.bind(window)) ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                Z
              : t.requestAnimationFrame || Z,
          nt =
            "undefined" != typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                tt
              : t.cancelAnimationFrame || tt,
          rt = function (t) {
            return (
              console && "function" == typeof console.warn && console.warn(t)
            );
          },
          ot = null,
          it = function (t, e) {
            var n = t.baseTag,
              r = t.bodyAttributes,
              o = t.htmlAttributes,
              i = t.linkTags,
              a = t.metaTags,
              u = t.noscriptTags,
              c = t.onChangeClientState,
              s = t.scriptTags,
              l = t.styleTags,
              f = t.title,
              p = t.titleAttributes;
            ct(E.BODY, r), ct(E.HTML, o), ut(f, p);
            var h = {
                baseTag: st(E.BASE, n),
                linkTags: st(E.LINK, i),
                metaTags: st(E.META, a),
                noscriptTags: st(E.NOSCRIPT, u),
                scriptTags: st(E.SCRIPT, s),
                styleTags: st(E.STYLE, l),
              },
              d = {},
              m = {};
            Object.keys(h).forEach(function (t) {
              var e = h[t],
                n = e.newTags,
                r = e.oldTags;
              n.length && (d[t] = n), r.length && (m[t] = h[t].oldTags);
            }),
              e && e(),
              c(t, d, m);
          },
          at = function (t) {
            return Array.isArray(t) ? t.join("") : t;
          },
          ut = function (t, e) {
            void 0 !== t && document.title !== t && (document.title = at(t)),
              ct(E.TITLE, e);
          },
          ct = function (t, e) {
            var n = document.getElementsByTagName(t)[0];
            if (n) {
              for (
                var r = n.getAttribute("data-react-helmet"),
                  o = r ? r.split(",") : [],
                  i = [].concat(o),
                  a = Object.keys(e),
                  u = 0;
                u < a.length;
                u++
              ) {
                var c = a[u],
                  s = e[c] || "";
                n.getAttribute(c) !== s && n.setAttribute(c, s),
                  -1 === o.indexOf(c) && o.push(c);
                var l = i.indexOf(c);
                -1 !== l && i.splice(l, 1);
              }
              for (var f = i.length - 1; f >= 0; f--) n.removeAttribute(i[f]);
              o.length === i.length
                ? n.removeAttribute("data-react-helmet")
                : n.getAttribute("data-react-helmet") !== a.join(",") &&
                  n.setAttribute("data-react-helmet", a.join(","));
            }
          },
          st = function (t, e) {
            var n = document.head || document.querySelector(E.HEAD),
              r = n.querySelectorAll(t + "[data-react-helmet]"),
              o = Array.prototype.slice.call(r),
              i = [],
              a = void 0;
            return (
              e &&
                e.length &&
                e.forEach(function (e) {
                  var n = document.createElement(t);
                  for (var r in e)
                    if (e.hasOwnProperty(r))
                      if (r === S) n.innerHTML = e.innerHTML;
                      else if (r === w)
                        n.styleSheet
                          ? (n.styleSheet.cssText = e.cssText)
                          : n.appendChild(document.createTextNode(e.cssText));
                      else {
                        var u = void 0 === e[r] ? "" : e[r];
                        n.setAttribute(r, u);
                      }
                  n.setAttribute("data-react-helmet", "true"),
                    o.some(function (t, e) {
                      return (a = e), n.isEqualNode(t);
                    })
                      ? o.splice(a, 1)
                      : i.push(n);
                }),
              o.forEach(function (t) {
                return t.parentNode.removeChild(t);
              }),
              i.forEach(function (t) {
                return n.appendChild(t);
              }),
              { oldTags: o, newTags: i }
            );
          },
          lt = function (t) {
            return Object.keys(t).reduce(function (e, n) {
              var r = void 0 !== t[n] ? n + '="' + t[n] + '"' : "" + n;
              return e ? e + " " + r : r;
            }, "");
          },
          ft = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return Object.keys(t).reduce(function (e, n) {
              return (e[x[n] || n] = t[n]), e;
            }, e);
          },
          pt = function (t, e, n) {
            switch (t) {
              case E.TITLE:
                return {
                  toComponent: function () {
                    return (
                      (t = e.title),
                      (n = e.titleAttributes),
                      ((r = { key: t })["data-react-helmet"] = !0),
                      (o = ft(n, r)),
                      [d.a.createElement(E.TITLE, o, t)]
                    );
                    var t, n, r, o;
                  },
                  toString: function () {
                    return (function (t, e, n, r) {
                      var o = lt(n),
                        i = at(e);
                      return o
                        ? "<" +
                            t +
                            ' data-react-helmet="true" ' +
                            o +
                            ">" +
                            z(i, r) +
                            "</" +
                            t +
                            ">"
                        : "<" +
                            t +
                            ' data-react-helmet="true">' +
                            z(i, r) +
                            "</" +
                            t +
                            ">";
                    })(t, e.title, e.titleAttributes, n);
                  },
                };
              case v:
              case y:
                return {
                  toComponent: function () {
                    return ft(e);
                  },
                  toString: function () {
                    return lt(e);
                  },
                };
              default:
                return {
                  toComponent: function () {
                    return (function (t, e) {
                      return e.map(function (e, n) {
                        var r,
                          o = (((r = { key: n })["data-react-helmet"] = !0), r);
                        return (
                          Object.keys(e).forEach(function (t) {
                            var n = x[t] || t;
                            if (n === S || n === w) {
                              var r = e.innerHTML || e.cssText;
                              o.dangerouslySetInnerHTML = { __html: r };
                            } else o[n] = e[t];
                          }),
                          d.a.createElement(t, o)
                        );
                      });
                    })(t, e);
                  },
                  toString: function () {
                    return (function (t, e, n) {
                      return e.reduce(function (e, r) {
                        var o = Object.keys(r)
                            .filter(function (t) {
                              return !(t === S || t === w);
                            })
                            .reduce(function (t, e) {
                              var o =
                                void 0 === r[e]
                                  ? e
                                  : e + '="' + z(r[e], n) + '"';
                              return t ? t + " " + o : o;
                            }, ""),
                          i = r.innerHTML || r.cssText || "",
                          a = -1 === U.indexOf(t);
                        return (
                          e +
                          "<" +
                          t +
                          ' data-react-helmet="true" ' +
                          o +
                          (a ? "/>" : ">" + i + "</" + t + ">")
                        );
                      }, "");
                    })(t, e, n);
                  },
                };
            }
          },
          ht = function (t) {
            var e = t.baseTag,
              n = t.bodyAttributes,
              r = t.encode,
              o = t.htmlAttributes,
              i = t.linkTags,
              a = t.metaTags,
              u = t.noscriptTags,
              c = t.scriptTags,
              s = t.styleTags,
              l = t.title,
              f = void 0 === l ? "" : l,
              p = t.titleAttributes;
            return {
              base: pt(E.BASE, e, r),
              bodyAttributes: pt(v, n, r),
              htmlAttributes: pt(y, o, r),
              link: pt(E.LINK, i, r),
              meta: pt(E.META, a, r),
              noscript: pt(E.NOSCRIPT, u, r),
              script: pt(E.SCRIPT, c, r),
              style: pt(E.STYLE, s, r),
              title: pt(E.TITLE, { title: f, titleAttributes: p }, r),
            };
          },
          dt = l()(
            function (t) {
              return {
                baseTag: J([T, L], t),
                bodyAttributes: H(v, t),
                defer: $(t, I),
                encode: $(t, D),
                htmlAttributes: H(y, t),
                linkTags: Q(E.LINK, [A, T], t),
                metaTags: Q(E.META, [j, O, P, R, _], t),
                noscriptTags: Q(E.NOSCRIPT, [S], t),
                onChangeClientState: K(t),
                scriptTags: Q(E.SCRIPT, [C, S], t),
                styleTags: Q(E.STYLE, [w], t),
                title: Y(t),
                titleAttributes: H(b, t),
              };
            },
            function (t) {
              ot && nt(ot),
                t.defer
                  ? (ot = et(function () {
                      it(t, function () {
                        ot = null;
                      });
                    }))
                  : (it(t), (ot = null));
            },
            ht
          )(function () {
            return null;
          }),
          mt =
            ((o = dt),
            (a = i = (function (t) {
              function e() {
                return q(this, e), B(this, t.apply(this, arguments));
              }
              return (
                (function (t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                (e.prototype.shouldComponentUpdate = function (t) {
                  return !p()(this.props, t);
                }),
                (e.prototype.mapNestedChildrenToProps = function (t, e) {
                  if (!e) return null;
                  switch (t.type) {
                    case E.SCRIPT:
                    case E.NOSCRIPT:
                      return { innerHTML: e };
                    case E.STYLE:
                      return { cssText: e };
                  }
                  throw new Error(
                    "<" +
                      t.type +
                      " /> elements are self-closing and can not contain children. Refer to our API for more information."
                  );
                }),
                (e.prototype.flattenArrayTypeChildren = function (t) {
                  var e,
                    n = t.child,
                    r = t.arrayTypeChildren,
                    o = t.newChildProps,
                    i = t.nestedChildren;
                  return X(
                    {},
                    r,
                    (((e = {})[n.type] = [].concat(r[n.type] || [], [
                      X({}, o, this.mapNestedChildrenToProps(n, i)),
                    ])),
                    e)
                  );
                }),
                (e.prototype.mapObjectTypeChildren = function (t) {
                  var e,
                    n,
                    r = t.child,
                    o = t.newProps,
                    i = t.newChildProps,
                    a = t.nestedChildren;
                  switch (r.type) {
                    case E.TITLE:
                      return X(
                        {},
                        o,
                        (((e = {})[r.type] = a),
                        (e.titleAttributes = X({}, i)),
                        e)
                      );
                    case E.BODY:
                      return X({}, o, { bodyAttributes: X({}, i) });
                    case E.HTML:
                      return X({}, o, { htmlAttributes: X({}, i) });
                  }
                  return X({}, o, (((n = {})[r.type] = X({}, i)), n));
                }),
                (e.prototype.mapArrayTypeChildrenToProps = function (t, e) {
                  var n = X({}, e);
                  return (
                    Object.keys(t).forEach(function (e) {
                      var r;
                      n = X({}, n, (((r = {})[e] = t[e]), r));
                    }),
                    n
                  );
                }),
                (e.prototype.warnOnInvalidChildren = function (t, e) {
                  return !0;
                }),
                (e.prototype.mapChildrenToProps = function (t, e) {
                  var n = this,
                    r = {};
                  return (
                    d.a.Children.forEach(t, function (t) {
                      if (t && t.props) {
                        var o = t.props,
                          i = o.children,
                          a = (function (t) {
                            var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                            return Object.keys(t).reduce(function (e, n) {
                              return (e[F[n] || n] = t[n]), e;
                            }, e);
                          })(W(o, ["children"]));
                        switch ((n.warnOnInvalidChildren(t, i), t.type)) {
                          case E.LINK:
                          case E.META:
                          case E.NOSCRIPT:
                          case E.SCRIPT:
                          case E.STYLE:
                            r = n.flattenArrayTypeChildren({
                              child: t,
                              arrayTypeChildren: r,
                              newChildProps: a,
                              nestedChildren: i,
                            });
                            break;
                          default:
                            e = n.mapObjectTypeChildren({
                              child: t,
                              newProps: e,
                              newChildProps: a,
                              nestedChildren: i,
                            });
                        }
                      }
                    }),
                    (e = this.mapArrayTypeChildrenToProps(r, e))
                  );
                }),
                (e.prototype.render = function () {
                  var t = this.props,
                    e = t.children,
                    n = W(t, ["children"]),
                    r = X({}, n);
                  return (
                    e && (r = this.mapChildrenToProps(e, r)),
                    d.a.createElement(o, r)
                  );
                }),
                V(e, null, [
                  {
                    key: "canUseDOM",
                    set: function (t) {
                      o.canUseDOM = t;
                    },
                  },
                ]),
                e
              );
            })(d.a.Component)),
            (i.propTypes = {
              base: c.a.object,
              bodyAttributes: c.a.object,
              children: c.a.oneOfType([c.a.arrayOf(c.a.node), c.a.node]),
              defaultTitle: c.a.string,
              defer: c.a.bool,
              encodeSpecialCharacters: c.a.bool,
              htmlAttributes: c.a.object,
              link: c.a.arrayOf(c.a.object),
              meta: c.a.arrayOf(c.a.object),
              noscript: c.a.arrayOf(c.a.object),
              onChangeClientState: c.a.func,
              script: c.a.arrayOf(c.a.object),
              style: c.a.arrayOf(c.a.object),
              title: c.a.string,
              titleAttributes: c.a.object,
              titleTemplate: c.a.string,
            }),
            (i.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
            (i.peek = o.peek),
            (i.rewind = function () {
              var t = o.rewind();
              return (
                t ||
                  (t = ht({
                    baseTag: [],
                    bodyAttributes: {},
                    encodeSpecialCharacters: !0,
                    htmlAttributes: {},
                    linkTags: [],
                    metaTags: [],
                    noscriptTags: [],
                    scriptTags: [],
                    styleTags: [],
                    title: "",
                    titleAttributes: {},
                  })),
                t
              );
            }),
            a);
        mt.renderStatic = mt.rewind;
      }.call(this, n("yLpj")));
    },
    rePB: function (t, e, n) {
      "use strict";
      function r(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    rzlk: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("rePB"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("emEt"),
        u = n("IOVJ");
      function c(t, e) {
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
      e.default = function (t) {
        var e = t.location,
          n = a.default.loadPageSync(e.pathname);
        return n
          ? i.a.createElement(
              u.a,
              (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? c(Object(n), !0).forEach(function (e) {
                        Object(r.a)(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : c(Object(n)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e)
                        );
                      });
                }
                return t;
              })({ location: e, pageResources: n }, n.json)
            )
          : null;
      };
    },
    "s+WA": function (t) {
      t.exports = JSON.parse(
        '{"description":"A community that digs deep into issues from the perspectives of technology, business, and law, and gives companies the ability to run their blockchain businesses on their own.","contact":"Contact us","slogan":"A community that digs deep into issues from the perspective of technology, business, and law, and gives companies the ability to run their blockchain businesses on their own.","what":"About ETHTerakoya","whatDetail":"As we move forward with our blockchain business, we are required to make all sorts of decisions, ranging from technology to law. However, due to the usual differences in the point of view of technical and business sides, there are times when we cannot allocate our full resources towards finding a solution. To bridge such an expertise gap, ETHTerakoya is a community where experts from various industries come together, hold workshops, and produce output that could help businesses to self-propel themselves.","wg":"Working group","wgList1":"Exploring issues from multiple perspectives, such as law, technology, and business","wgList2":"Clarifying the required action plan by looking at the issue","wgList3":"Feedback from overseas thanks to the sponsorship of the Ethereum Foundation","ws":"Workshop","wsList1":"Through practical workshops, gain the power to self-propel your blockchain business","wsList2":"Deeper topics for a workshop, with practical demonstrations on how to apply them to businesses","target":"Eligibility for participation","target1":"Engineers/Technical experts","target1-desc":"Those who want to propose technical solutions while keeping business and legal aspects into consideration.","target2":"Businesspersons","target2-desc":"Those who have a desire to pursue a business related to blockchain technology and want to gain useful knowledge.","target3":"Lawyers","target3-desc":"Those who want to understand the governing laws and regulations while knowing about the technical and business context, and those who would like to propose solutions.","organize":"Organized by","support":"Sponsored by","contributor":"Contributor","date":"Post date","group":"Working group","groupName_id-voting":"ID x Voting","groupName_ethereum2.0":"Ethereum2.0","groupName_students":"Students\' research","groupName_scaling":"Scaling","groupName_zero-knowledge-proof":"Zero Knowledge Proof","posts":"All posts","news":"News","activity":"Activity","activityWorkingGroupSubtitle":"Study on the possibility to introduce online voting by using blockchain","activityCreamSubtitle":"Development of C.R.E.A.M (Confidential Reliable Ethereum Anonymous Mixer)","contributor.hitachi":" ","contributor.fujitsu":" ","contributor.act":" ","contributor.collabo_gate":" ","contributor.comps":" ","contributor.cryptel":" ","contributor.layerx":" ","contributor.waseda":" "}'
      );
    },
    siyQ: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return a;
        });
      var r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(t, e);
      };
      function o(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var o in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      Object.create;
      function a(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++)
            (!r && o in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
        return t.concat(r || e);
      }
      Object.create;
    },
    tiKp: function (t, e, n) {
      var r = n("2oRo"),
        o = n("VpIT"),
        i = n("UTVS"),
        a = n("kOOl"),
        u = n("STAE"),
        c = n("/b8u"),
        s = o("wks"),
        l = r.Symbol,
        f = c ? l : (l && l.withoutSetter) || a;
      t.exports = function (t) {
        return (
          (i(s, t) && (u || "string" == typeof s[t])) ||
            (u && i(l, t) ? (s[t] = l[t]) : (s[t] = f("Symbol." + t))),
          s[t]
        );
      };
    },
    wE6v: function (t, e, n) {
      var r = n("hh1v"),
        o = n("2bX/"),
        i = n("SFrS"),
        a = n("tiKp")("toPrimitive");
      t.exports = function (t, e) {
        if (!r(t) || o(t)) return t;
        var n,
          u = t[a];
        if (void 0 !== u) {
          if (
            (void 0 === e && (e = "default"), (n = u.call(t, e)), !r(n) || o(n))
          )
            return n;
          throw TypeError("Can't convert object to primitive value");
        }
        return void 0 === e && (e = "number"), i(t, e);
      };
    },
    wfmh: function (t, e, n) {
      var r = n("I+eb"),
        o = n("ImZN"),
        i = n("hBjN");
      r(
        { target: "Object", stat: !0 },
        {
          fromEntries: function (t) {
            var e = {};
            return (
              o(
                t,
                function (t, n) {
                  i(e, t, n);
                },
                { AS_ENTRIES: !0 }
              ),
              e
            );
          },
        }
      );
    },
    xDBR: function (t, e) {
      t.exports = !1;
    },
    xrYK: function (t, e) {
      var n = {}.toString;
      t.exports = function (t) {
        return n.call(t).slice(8, -1);
      };
    },
    xs3f: function (t, e, n) {
      var r = n("2oRo"),
        o = n("zk60"),
        i = r["__core-js_shared__"] || o("__core-js_shared__", {});
      t.exports = i;
    },
    xtsi: function (t, e, n) {
      n("E9XD");
      var r = n("LeKB"),
        o = n("emEt").publicLoader,
        i = o.getResourcesForPathname,
        a = o.getResourcesForPathnameSync,
        u = o.getResourceURLsForPathname,
        c = o.loadPage,
        s = o.loadPageSync;
      (e.apiRunner = function (t, e, n, o) {
        void 0 === e && (e = {});
        var l = r.map(function (n) {
          if (n.plugin[t]) {
            (e.getResourcesForPathnameSync = a),
              (e.getResourcesForPathname = i),
              (e.getResourceURLsForPathname = u),
              (e.loadPage = c),
              (e.loadPageSync = s);
            var r = n.plugin[t](e, n.options);
            return r && o && (e = o({ args: e, result: r, plugin: n })), r;
          }
        });
        return (l = l.filter(function (t) {
          return void 0 !== t;
        })).length > 0
          ? l
          : n
          ? [n]
          : [];
      }),
        (e.apiRunnerAsync = function (t, e, n) {
          return r.reduce(function (n, r) {
            return r.plugin[t]
              ? n.then(function () {
                  return r.plugin[t](e, r.options);
                })
              : n;
          }, Promise.resolve());
        });
    },
    yAkg: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var r = n("q1tI"),
        o = n("eq4K"),
        i = n("Wbzz"),
        a = n("B+z7"),
        u = function () {
          var t = r.useContext(o.a),
            e = Object(i.useStaticQuery)("3280999885").themeI18N;
          return {
            locale: t,
            defaultLang: e.defaultLang,
            prefixDefault: e.prefixDefault,
            config: e.config,
            localizedPath: a.localizedPath,
          };
        };
    },
    yLpj: function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    yNLB: function (t, e, n) {
      var r = n("0Dky"),
        o = n("WJkJ");
      t.exports = function (t) {
        return r(function () {
          return !!o[t]() || "​᠎" != "​᠎"[t]() || o[t].name !== t;
        });
      };
    },
    yoRg: function (t, e, n) {
      var r = n("UTVS"),
        o = n("/GqU"),
        i = n("TWQb").indexOf,
        a = n("0BK2");
      t.exports = function (t, e) {
        var n,
          u = o(t),
          c = 0,
          s = [];
        for (n in u) !r(a, n) && r(u, n) && s.push(n);
        for (; e.length > c; ) r(u, (n = e[c++])) && (~i(s, n) || s.push(n));
        return s;
      };
    },
    zBJ4: function (t, e, n) {
      var r = n("2oRo"),
        o = n("hh1v"),
        i = r.document,
        a = o(i) && o(i.createElement);
      t.exports = function (t) {
        return a ? i.createElement(t) : {};
      };
    },
    zk60: function (t, e, n) {
      var r = n("2oRo");
      t.exports = function (t, e) {
        try {
          Object.defineProperty(r, t, {
            value: e,
            configurable: !0,
            writable: !0,
          });
        } catch (n) {
          r[t] = e;
        }
        return e;
      };
    },
  },
  [["UxWs", 2, 10]],
]);
//# sourceMappingURL=app-18d6d71dfc2d035bd6c9.js.map