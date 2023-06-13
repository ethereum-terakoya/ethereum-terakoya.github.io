/*! For license information please see app-580660ce6748c547dd52.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
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
        c = r(n("pVnL")),
        s = r(n("17x9")),
        u = r(n("q1tI")),
        l = n("YwZP"),
        h = n("LYrO"),
        f = n("cu4x");
      e.parsePath = f.parsePath;
      var p = function (t) {
        return null == t ? void 0 : t.startsWith("/");
      };
      function d(t, e) {
        var n, r;
        if ((void 0 === e && (e = g()), !b(t))) return t;
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
        b = function (t) {
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
            : b(t)
            ? p(t)
              ? d(t)
              : (function (t, e) {
                  return p(t) ? t : (0, h.resolve)(t, e);
                })(t, e)
            : t;
        },
        v = {
          activeClassName: s.default.string,
          activeStyle: s.default.object,
          partiallyActive: s.default.bool,
        };
      function E(t) {
        return u.default.createElement(l.Location, null, function (e) {
          var n = e.location;
          return u.default.createElement(
            O,
            (0, c.default)({}, t, { _location: n })
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
                  style: (0, c.default)({}, n.props.style, n.props.activeStyle),
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
              n = (0, f.parsePath)(e).pathname;
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
              s = e.onMouseEnter,
              h =
                (e.activeClassName,
                e.activeStyle,
                e.innerRef,
                e.partiallyActive,
                e.state),
              p = e.replace,
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
            return b(g)
              ? u.default.createElement(
                  l.Link,
                  (0, c.default)(
                    {
                      to: g,
                      state: h,
                      getProps: i,
                      innerRef: this.handleRef,
                      onMouseEnter: function (t) {
                        s && s(t),
                          ___loader.hovering((0, f.parsePath)(g).pathname);
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
                          var n = p,
                            r = encodeURI(g) === d.pathname;
                          "boolean" != typeof p && r && (n = !0),
                            window.___navigate(g, { state: h, replace: n });
                        }
                        return !0;
                      },
                    },
                    m
                  )
                )
              : u.default.createElement("a", (0, c.default)({ href: g }, m));
          }),
          e
        );
      })(u.default.Component);
      O.propTypes = (0, c.default)({}, v, {
        onClick: s.default.func,
        to: s.default.string.isRequired,
        replace: s.default.bool,
        state: s.default.object,
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
        P = u.default.forwardRef(function (t, e) {
          return u.default.createElement(E, (0, c.default)({ innerRef: e }, t));
        });
      e.default = P;
      e.navigate = function (t, e) {
        window.___navigate(y(t, window.location.pathname), e);
      };
      var T = function (t) {
        w("push", "navigate", 3),
          window.___push(y(t, window.location.pathname));
      };
      e.push = T;
      e.replace = function (t) {
        w("replace", "navigate", 3),
          window.___replace(y(t, window.location.pathname));
      };
      e.navigateTo = function (t) {
        return w("navigateTo", "navigate", 3), T(t);
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
          return c;
        });
      var r,
        o = n("KuiD"),
        i = n("BqEn");
      function a(t) {
        return "function" == typeof t;
      }
      function c(t, e, n, s, u, l, h) {
        if (1 === t.length && Object(o.e)(t[0]))
          return [{ type: r.literal, value: t[0].value }];
        for (var f = [], p = 0, d = t; p < d.length; p++) {
          var m = d[p];
          if (Object(o.e)(m)) f.push({ type: r.literal, value: m.value });
          else if (Object(o.i)(m))
            "number" == typeof l &&
              f.push({
                type: r.literal,
                value: n.getNumberFormat(e).format(l),
              });
          else {
            var g = m.value;
            if (!u || !(g in u)) throw new i.e(g, h);
            var b = u[g];
            if (Object(o.b)(m))
              (b && "string" != typeof b && "number" != typeof b) ||
                (b =
                  "string" == typeof b || "number" == typeof b
                    ? String(b)
                    : ""),
                f.push({
                  type: "string" == typeof b ? r.literal : r.object,
                  value: b,
                });
            else if (Object(o.c)(m)) {
              var y =
                "string" == typeof m.style
                  ? s.date[m.style]
                  : Object(o.d)(m.style)
                  ? m.style.parsedOptions
                  : void 0;
              f.push({
                type: r.literal,
                value: n.getDateTimeFormat(e, y).format(b),
              });
            } else if (Object(o.l)(m)) {
              y =
                "string" == typeof m.style
                  ? s.time[m.style]
                  : Object(o.d)(m.style)
                  ? m.style.parsedOptions
                  : s.time.medium;
              f.push({
                type: r.literal,
                value: n.getDateTimeFormat(e, y).format(b),
              });
            } else if (Object(o.f)(m)) {
              (y =
                "string" == typeof m.style
                  ? s.number[m.style]
                  : Object(o.g)(m.style)
                  ? m.style.parsedOptions
                  : void 0) &&
                y.scale &&
                (b *= y.scale || 1),
                f.push({
                  type: r.literal,
                  value: n.getNumberFormat(e, y).format(b),
                });
            } else {
              if (Object(o.k)(m)) {
                var v = m.children,
                  E = m.value,
                  O = u[E];
                if (!a(O)) throw new i.d(E, "function", h);
                var w = O(
                  c(v, e, n, s, u, l).map(function (t) {
                    return t.value;
                  })
                );
                Array.isArray(w) || (w = [w]),
                  f.push.apply(
                    f,
                    w.map(function (t) {
                      return {
                        type: "string" == typeof t ? r.literal : r.object,
                        value: t,
                      };
                    })
                  );
              }
              if (Object(o.j)(m)) {
                if (!(P = m.options[b] || m.options.other))
                  throw new i.c(m.value, b, Object.keys(m.options), h);
                f.push.apply(f, c(P.value, e, n, s, u));
              } else if (Object(o.h)(m)) {
                var P;
                if (!(P = m.options["=".concat(b)])) {
                  if (!Intl.PluralRules)
                    throw new i.b(
                      'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                      i.a.MISSING_INTL_API,
                      h
                    );
                  var T = n
                    .getPluralRules(e, { type: m.pluralType })
                    .select(b - (m.offset || 0));
                  P = m.options[T] || m.options.other;
                }
                if (!P) throw new i.c(m.value, b, Object.keys(m.options), h);
                f.push.apply(f, c(P.value, e, n, s, u, b - (m.offset || 0)));
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
        })(f);
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
          return u;
        });
      var r = n("q1tI"),
        o = n("eq4K"),
        i = n("qhky"),
        a = n("Wbzz"),
        c = n("yAkg");
      const s = (t) => {
          let { location: e, pageContext: n } = t;
          const { locale: o, config: s, defaultLang: u } = Object(c.a)(),
            l = Object(a.useStaticQuery)("1239077767").site.siteMetadata
              .siteUrl,
            { pathname: h } = e;
          return r.createElement(
            i.a,
            null,
            r.createElement("html", { lang: n.hrefLang }),
            r.createElement("link", {
              rel: "alternate",
              hrefLang: "x-default",
              href: l,
            }),
            r.createElement("link", {
              rel: "alternate",
              hrefLang: n.hrefLang,
              href: "" + l + (h === Object(a.withPrefix)("/") ? "" : h),
            }),
            s.map((t) => {
              let e;
              return t.code === o
                ? null
                : ((e =
                    t.code === u
                      ? "" +
                        l +
                        (n.originalPath === Object(a.withPrefix)("/")
                          ? ""
                          : n.originalPath)
                      : "" +
                        l +
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
            s.map((t) =>
              t.code === o
                ? null
                : r.createElement("meta", {
                    key: t.code,
                    property: "og:locale:alternate",
                    content: t.hrefLang.replace("-", "_"),
                  })
            )
          );
        },
        u = (t) => {
          let { element: e, props: n } = t;
          return r.createElement(
            o.b,
            { pageContext: n.pageContext },
            r.createElement(s, {
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
        o = n("Fib7"),
        i = function (t) {
          return o(t) ? t : void 0;
        };
      t.exports = function (t, e) {
        return arguments.length < 2 ? i(r[t]) : r[t] && r[t][e];
      };
    },
    "1VXf": function (t, e, n) {
      "use strict";
      n.d(e, "d", function () {
        return c;
      }),
        n.d(e, "a", function () {
          return s;
        }),
        n.d(e, "c", function () {
          return u;
        }),
        n.d(e, "b", function () {
          return h;
        }),
        n.d(e, "e", function () {
          return f;
        });
      var r = n("siyQ"),
        o = n("Mu++"),
        i = n("cmTm"),
        a = n("EuEu");
      function c(t, e, n) {
        return (
          void 0 === n && (n = {}),
          e.reduce(function (e, r) {
            return r in t ? (e[r] = t[r]) : r in n && (e[r] = n[r]), e;
          }, {})
        );
      }
      var s = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function (t) {
          0;
        },
        onWarn: function (t) {
          0;
        },
      };
      function u() {
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
      function h(t) {
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
          c = Object(i.a)(
            function () {
              for (var t, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return new ((t = Intl.DateTimeFormat).bind.apply(
                t,
                Object(r.c)([void 0], e, !1)
              ))();
            },
            { cache: l(t.dateTime), strategy: i.b.variadic }
          ),
          s = Object(i.a)(
            function () {
              for (var t, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return new ((t = Intl.NumberFormat).bind.apply(
                t,
                Object(r.c)([void 0], e, !1)
              ))();
            },
            { cache: l(t.number), strategy: i.b.variadic }
          ),
          u = Object(i.a)(
            function () {
              for (var t, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return new ((t = Intl.PluralRules).bind.apply(
                t,
                Object(r.c)([void 0], e, !1)
              ))();
            },
            { cache: l(t.pluralRules), strategy: i.b.variadic }
          );
        return {
          getDateTimeFormat: c,
          getNumberFormat: s,
          getMessageFormat: Object(i.a)(
            function (t, e, n, i) {
              return new o.a(
                t,
                e,
                n,
                Object(r.a)(
                  {
                    formatters: {
                      getNumberFormat: s,
                      getDateTimeFormat: c,
                      getPluralRules: u,
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
              return new (e.bind.apply(e, Object(r.c)([void 0], t, !1)))();
            },
            { cache: l(t.relativeTime), strategy: i.b.variadic }
          ),
          getPluralRules: u,
          getListFormat: Object(i.a)(
            function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return new (n.bind.apply(n, Object(r.c)([void 0], t, !1)))();
            },
            { cache: l(t.list), strategy: i.b.variadic }
          ),
          getDisplayNames: Object(i.a)(
            function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return new (a.bind.apply(a, Object(r.c)([void 0], t, !1)))();
            },
            { cache: l(t.displayNames), strategy: i.b.variadic }
          ),
        };
      }
      function f(t, e, n, r) {
        var o,
          i = t && t[e];
        if ((i && (o = i[n]), o)) return o;
        r(new a.h("No ".concat(e, " format named: ").concat(n)));
      }
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
        for (var c in t)
          if ("default" !== c && Object.prototype.hasOwnProperty.call(t, c)) {
            var s = a ? Object.getOwnPropertyDescriptor(t, c) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(i, c, s)
              : (i[c] = t[c]);
          }
        return (i.default = t), n && n.set(t, i), i;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
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
        o = n("Fib7"),
        i = n("OpvP"),
        a = n("/b8u"),
        c = Object;
      t.exports = a
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            var e = r("Symbol");
            return o(e) && i(e.prototype, c(t));
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
        c = {};
      function s(t) {
        return r.isMemo(t) ? a : c[t.$$typeof] || o;
      }
      (c[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (c[r.Memo] = a);
      var u = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        h = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        d = Object.prototype;
      t.exports = function t(e, n, r) {
        if ("string" != typeof n) {
          if (d) {
            var o = p(n);
            o && o !== d && t(e, o, r);
          }
          var a = l(n);
          h && (a = a.concat(h(n)));
          for (var c = s(e), m = s(n), g = 0; g < a.length; ++g) {
            var b = a[g];
            if (!(i[b] || (r && r[b]) || (m && m[b]) || (c && c[b]))) {
              var y = f(n, b);
              try {
                u(e, b, y);
              } catch (v) {}
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
          return h;
        }),
        n.d(e, "c", function () {
          return f;
        }),
        n.d(e, "b", function () {
          return p;
        });
      var r = n("LYrO"),
        o = n("cSJ8"),
        i = (t) =>
          void 0 === t
            ? t
            : "/" === t
            ? "/"
            : "/" === t.charAt(t.length - 1)
            ? t.slice(0, -1)
            : t;
      const a = new Map();
      let c = [];
      const s = (t) => {
        const e = decodeURIComponent(t);
        return Object(o.a)(e, "").split("#")[0].split("?")[0];
      };
      function u(t) {
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
      const l = (t) => {
          c = t;
        },
        h = (t) => {
          const e = d(t),
            n = c.map((t) => {
              let { path: e, matchPath: n } = t;
              return { path: n, originalPath: e };
            }),
            o = Object(r.pick)(n, e);
          return o ? i(o.route.originalPath) : null;
        },
        f = (t) => {
          const e = d(t),
            n = c.map((t) => {
              let { path: e, matchPath: n } = t;
              return { path: n, originalPath: e };
            }),
            o = Object(r.pick)(n, e);
          return o ? o.params : {};
        },
        p = (t) => {
          const e = s(u(t));
          if (a.has(e)) return a.get(e);
          let n = h(e);
          return n || (n = d(t)), a.set(e, n), n;
        },
        d = (t) => {
          let e = s(u(t));
          return "/index.html" === e && (e = "/"), (e = i(e)), e;
        };
    },
    "3Eq5": function (t, e, n) {
      var r = n("We1y");
      t.exports = function (t, e) {
        var n = t[e];
        return null == n ? void 0 : r(n);
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
    "4zBA": function (t, e, n) {
      var r = n("QNWe"),
        o = Function.prototype,
        i = o.bind,
        a = o.call,
        c = r && i.bind(a, a);
      t.exports = r
        ? function (t) {
            return t && c(t);
          }
        : function (t) {
            return (
              t &&
              function () {
                return a.apply(t, arguments);
              }
            );
          };
    },
    "5yr3": function (t, e, n) {
      "use strict";
      const r = (function (t) {
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
    "7LaZ": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      function r(t, e, n) {
        if ((void 0 === n && (n = Error), !t)) throw new n(e);
      }
    },
    "7dAM": function (t, e, n) {
      var r = n("E9LY"),
        o = n("m/L8");
      t.exports = function (t, e, n) {
        return (
          n.get && r(n.get, e, { getter: !0 }),
          n.set && r(n.set, e, { setter: !0 }),
          o.f(t, e, n)
        );
      };
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
          return p;
        }),
        n.d(e, "mdx", function () {
          return g;
        }),
        n.d(e, "useMDXComponents", function () {
          return f;
        }),
        n.d(e, "withMDXComponents", function () {
          return h;
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
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                i(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function u(t, e) {
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
        h = function (t) {
          return function (e) {
            var n = f(e.components);
            return o.a.createElement(t, a({}, e, { components: n }));
          };
        },
        f = function (t) {
          var e = o.a.useContext(l),
            n = e;
          return t && (n = "function" == typeof t ? t(e) : s(s({}, e), t)), n;
        },
        p = function (t) {
          var e = f(t.components);
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
            c = u(t, ["components", "mdxType", "originalType", "parentName"]),
            l = f(n),
            h = r,
            p = l["".concat(a, ".").concat(h)] || l[h] || d[h] || i;
          return n
            ? o.a.createElement(p, s(s({ ref: e }, c), {}, { components: n }))
            : o.a.createElement(p, s({ ref: e }, c));
        });
      function g(t, e) {
        var n = arguments,
          r = e && e.mdxType;
        if ("string" == typeof t || r) {
          var i = n.length,
            a = new Array(i);
          a[0] = m;
          var c = {};
          for (var s in e) hasOwnProperty.call(e, s) && (c[s] = e[s]);
          (c.originalType = t),
            (c.mdxType = "string" == typeof t ? t : r),
            (a[1] = c);
          for (var u = 2; u < i; u++) a[u] = n[u];
          return o.a.createElement.apply(null, a);
        }
        return o.a.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
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
      var c = !(
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
          var s,
            u = [];
          function l() {
            (s = t(
              u.map(function (t) {
                return t.props;
              })
            )),
              h.canUseDOM ? e(s) : n && (s = n(s));
          }
          var h = (function (t) {
            var e, n;
            function o() {
              return t.apply(this, arguments) || this;
            }
            (n = t),
              ((e = o).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = n),
              (o.peek = function () {
                return s;
              }),
              (o.rewind = function () {
                if (o.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var t = s;
                return (s = void 0), (u = []), t;
              });
            var a = o.prototype;
            return (
              (a.UNSAFE_componentWillMount = function () {
                u.push(this), l();
              }),
              (a.componentDidUpdate = function () {
                l();
              }),
              (a.componentWillUnmount = function () {
                var t = u.indexOf(this);
                u.splice(t, 1), l();
              }),
              (a.render = function () {
                return i.createElement(r, this.props);
              }),
              o
            );
          })(o.PureComponent);
          return (
            a(
              h,
              "displayName",
              "SideEffect(" +
                (function (t) {
                  return t.displayName || t.name || "Component";
                })(r) +
                ")"
            ),
            a(h, "canUseDOM", c),
            h
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
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
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
      e.polyfill = (t) => t;
    },
    "9Xx/": function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return s;
      }),
        n.d(e, "d", function () {
          return u;
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
            s = e.host,
            u = e.hostname,
            l = e.port,
            h = t.location.pathname;
          !h && o && c && (h = new URL(o).pathname);
          return {
            pathname: encodeURI(decodeURI(h)),
            search: n,
            hash: r,
            href: o,
            origin: i,
            protocol: a,
            host: s,
            hostname: u,
            port: l,
            state: t.history.state,
            key: (t.history.state && t.history.state.key) || "initial",
          };
        },
        i = function (t, e) {
          var n = [],
            i = o(t),
            a = !1,
            c = function () {};
          return {
            get location() {
              return i;
            },
            get transitioning() {
              return a;
            },
            _onTransitionComplete: function () {
              (a = !1), c();
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
              var s =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                u = s.state,
                l = s.replace,
                h = void 0 !== l && l;
              if ("number" == typeof e) t.history.go(e);
              else {
                u = r({}, u, { key: Date.now() + "" });
                try {
                  a || h
                    ? t.history.replaceState(u, null, e)
                    : t.history.pushState(u, null, e);
                } catch (p) {
                  t.location[h ? "replace" : "assign"](e);
                }
              }
              (i = o(t)), (a = !0);
              var f = new Promise(function (t) {
                return (c = t);
              });
              return (
                n.forEach(function (t) {
                  return t({ location: i, action: "PUSH" });
                }),
                f
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
                  c = a[0],
                  s = a[1],
                  u = void 0 === s ? "" : s;
                r++,
                  o.push({ pathname: c, search: u.length ? "?" + u : u }),
                  i.push(t);
              },
              replaceState: function (t, e, n) {
                var a = n.split("?"),
                  c = a[0],
                  s = a[1],
                  u = void 0 === s ? "" : s;
                (o[r] = { pathname: c, search: u }), (i[r] = t);
              },
              go: function (t) {
                var e = r + t;
                e < 0 || e > i.length - 1 || (r = e);
              },
            },
          };
        },
        c = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        s = i(c ? window : a()),
        u = s.navigate;
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
    "B+z7": function (t, e) {
      t.exports = {
        localizedPath: function (t) {
          let { defaultLang: e, prefixDefault: n, locale: r, path: o } = t;
          if (
            (function (t, e) {
              return t === e;
            })(r, e) &&
            !n
          )
            return o;
          const [, i] = o.split("/");
          return i === r ? o : "/" + r + o;
        },
        getLanguages: function (t) {
          let { locales: e, localeStr: n } = t;
          if (!n) return e;
          const r = n.split(" "),
            o = [];
          for (const i of r) {
            const t = e.find((t) => t.code === i);
            if (!t)
              throw new Error(
                "Invalid localed provided: " +
                  i +
                  ". See your i18n config file for a list of available locales."
              );
            o.push(t);
          }
          return o;
        },
        getDefaultLanguage: function (t) {
          let { locales: e, defaultLang: n } = t;
          return e.find((t) => t.code === n);
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
          return c;
        });
      var r = n("q1tI"),
        o = n.n(r);
      const i = Object(r.createContext)({}),
        a = (t) => {
          const e = Object(r.useContext)(i);
          return t || e;
        },
        c = (t) => {
          let { __mdxScope: e, children: n } = t;
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
          return c;
        }),
        n.d(e, "e", function () {
          return s;
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
              return "[formatjs Error: "
                .concat(this.code, "] ")
                .concat(this.message);
            }),
            e
          );
        })(Error),
        a = (function (t) {
          function e(e, n, o, i) {
            return (
              t.call(
                this,
                'Invalid values for "'
                  .concat(e, '": "')
                  .concat(n, '". Options are "')
                  .concat(Object.keys(o).join('", "'), '"'),
                r.INVALID_VALUE,
                i
              ) || this
            );
          }
          return Object(o.b)(e, t), e;
        })(i),
        c = (function (t) {
          function e(e, n, o) {
            return (
              t.call(
                this,
                'Value for "'.concat(e, '" must be of type ').concat(n),
                r.INVALID_VALUE,
                o
              ) || this
            );
          }
          return Object(o.b)(e, t), e;
        })(i),
        s = (function (t) {
          function e(e, n) {
            return (
              t.call(
                this,
                'The intl string context variable "'
                  .concat(e, '" was not provided to the string "')
                  .concat(n, '"'),
                r.MISSING_VALUE,
                n
              ) || this
            );
          }
          return Object(o.b)(e, t), e;
        })(i);
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
    DVFp: function (t, e) {
      var n = String;
      t.exports = function (t) {
        try {
          return n(t);
        } catch (e) {
          return "Object";
        }
      };
    },
    E9LY: function (t, e, n) {
      var r = n("0Dky"),
        o = n("Fib7"),
        i = n("Gi26"),
        a = n("g6v/"),
        c = n("Xnc8").CONFIGURABLE,
        s = n("iSVu"),
        u = n("afO8"),
        l = u.enforce,
        h = u.get,
        f = Object.defineProperty,
        p =
          a &&
          !r(function () {
            return 8 !== f(function () {}, "length", { value: 8 }).length;
          }),
        d = String(String).split("String"),
        m = (t.exports = function (t, e, n) {
          "Symbol(" === String(e).slice(0, 7) &&
            (e = "[" + String(e).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            n && n.getter && (e = "get " + e),
            n && n.setter && (e = "set " + e),
            (!i(t, "name") || (c && t.name !== e)) &&
              (a ? f(t, "name", { value: e, configurable: !0 }) : (t.name = e)),
            p &&
              n &&
              i(n, "arity") &&
              t.length !== n.arity &&
              f(t, "length", { value: n.arity });
          try {
            n && i(n, "constructor") && n.constructor
              ? a && f(t, "prototype", { writable: !1 })
              : t.prototype && (t.prototype = void 0);
          } catch (o) {}
          var r = l(t);
          return (
            i(r, "source") ||
              (r.source = d.join("string" == typeof e ? e : "")),
            t
          );
        });
      Function.prototype.toString = m(function () {
        return (o(this) && h(this).source) || s(this);
      }, "toString");
    },
    Enzk: function (t, e, n) {
      "use strict";
      var r = n("284h"),
        o = n("TqRt");
      (e.__esModule = !0), (e.ScrollHandler = e.ScrollContext = void 0);
      var i = o(n("PJYZ")),
        a = o(n("VbXa")),
        c = r(n("q1tI")),
        s = o(n("17x9")),
        u = n("/hTd"),
        l = c.createContext(new u.SessionStorage());
      (e.ScrollContext = l), (l.displayName = "GatsbyScrollContext");
      var h = (function (t) {
        function e() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((e =
              t.call.apply(t, [this].concat(r)) ||
              this)._stateStorage = new u.SessionStorage()),
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
            return c.createElement(
              l.Provider,
              { value: this._stateStorage },
              this.props.children
            );
          }),
          e
        );
      })(c.Component);
      (e.ScrollHandler = h),
        (h.propTypes = {
          shouldUpdateScroll: s.default.func,
          children: s.default.element.isRequired,
          location: s.default.object.isRequired,
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
        n.d(e, "h", function () {
          return a;
        }),
        n.d(e, "d", function () {
          return c;
        }),
        n.d(e, "f", function () {
          return s;
        }),
        n.d(e, "c", function () {
          return u;
        }),
        n.d(e, "e", function () {
          return l;
        }),
        n.d(e, "g", function () {
          return h;
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
            var i = this,
              a = o ? (o instanceof Error ? o : new Error(String(o))) : void 0;
            return (
              ((i =
                t.call(
                  this,
                  "[@formatjs/intl Error "
                    .concat(n, "] ")
                    .concat(r, " \n")
                    .concat(
                      a ? "\n".concat(a.message, "\n").concat(a.stack) : ""
                    )
                ) || this).code = n),
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
        c = (function (t) {
          function e(e, n) {
            return t.call(this, r.INVALID_CONFIG, e, n) || this;
          }
          return Object(o.b)(e, t), e;
        })(i),
        s = (function (t) {
          function e(e, n) {
            return t.call(this, r.MISSING_DATA, e, n) || this;
          }
          return Object(o.b)(e, t), e;
        })(i),
        u = (function (t) {
          function e(e, n, o) {
            return (
              t.call(
                this,
                r.FORMAT_ERROR,
                "".concat(e, " \nLocale: ").concat(n, "\n"),
                o
              ) || this
            );
          }
          return Object(o.b)(e, t), e;
        })(i),
        l = (function (t) {
          function e(e, n, r, o) {
            var i =
              t.call(
                this,
                ""
                  .concat(e, " \nMessageID: ")
                  .concat(null == r ? void 0 : r.id, "\nDefault Message: ")
                  .concat(
                    null == r ? void 0 : r.defaultMessage,
                    "\nDescription: "
                  )
                  .concat(null == r ? void 0 : r.description, " \n"),
                n,
                o
              ) || this;
            return (i.descriptor = r), i;
          }
          return Object(o.b)(e, t), e;
        })(u),
        h = (function (t) {
          function e(e, n) {
            var o =
              t.call(
                this,
                r.MISSING_TRANSLATION,
                'Missing message: "'
                  .concat(e.id, '" for locale "')
                  .concat(n, '", using ')
                  .concat(
                    e.defaultMessage ? "default message" : "id",
                    " as fallback."
                  )
              ) || this;
            return (o.descriptor = e), o;
          }
          return Object(o.b)(e, t), e;
        })(i);
    },
    Fib7: function (t, e) {
      t.exports = function (t) {
        return "function" == typeof t;
      };
    },
    Gi26: function (t, e, n) {
      var r = n("4zBA"),
        o = n("ewvW"),
        i = r({}.hasOwnProperty);
      t.exports =
        Object.hasOwn ||
        function (t, e) {
          return i(o(t), e);
        };
    },
    HYAF: function (t, e) {
      var n = TypeError;
      t.exports = function (t) {
        if (null == t) throw n("Can't call method on " + t);
        return t;
      };
    },
    IOVJ: function (t, e, n) {
      "use strict";
      var r = n("rePB"),
        o = n("dI71"),
        i = n("q1tI"),
        a = n.n(i),
        c = n("emEt"),
        s = n("xtsi"),
        u = n("30RF");
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
      function h(t) {
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
      let f = (function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }
        return (
          Object(o.a)(e, t),
          (e.prototype.render = function () {
            const t = h(
                h({}, this.props),
                {},
                {
                  params: h(
                    h({}, Object(u.c)(this.props.location.pathname)),
                    this.props.pageResources.json.pageContext.__params
                  ),
                  pathContext: this.props.pageContext,
                }
              ),
              [e] = Object(s.apiRunner)("replaceComponentRenderer", {
                props: this.props,
                loader: c.publicLoader,
              }),
              n =
                e ||
                Object(i.createElement)(
                  this.props.pageResources.component,
                  h(
                    h({}, t),
                    {},
                    {
                      key:
                        this.props.path || this.props.pageResources.page.path,
                    }
                  )
                );
            return Object(s.apiRunner)(
              "wrapPageElement",
              { element: n, props: t },
              n,
              (e) => {
                let { result: n } = e;
                return { element: n, props: t };
              }
            ).pop();
          }),
          e
        );
      })(a.a.Component);
      e.a = f;
    },
    JTKy: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("q1tI");
      e.default = { React: r };
    },
    JeVI: function (t) {
      t.exports = JSON.parse(
        '[{"path":"/en/ethereum2.0/eth2-1","matchPath":"/en/ethereum2.0/eth2-1"},{"path":"/en/ethereum2.0/eth2-2","matchPath":"/en/ethereum2.0/eth2-2"},{"path":"/en/ethereum2.0/eth2-3","matchPath":"/en/ethereum2.0/eth2-3"},{"path":"/en/events/20220713","matchPath":"/en/events/20220713"},{"path":"/en/events/20221117","matchPath":"/en/events/20221117"},{"path":"/en/events/20230412","matchPath":"/en/events/20230412"},{"path":"/en/events/20230413","matchPath":"/en/events/20230413"},{"path":"/en/id-voting/id-blockchain","matchPath":"/en/id-voting/id-blockchain"},{"path":"/en/id-voting/id-blockchain-last","matchPath":"/en/id-voting/id-blockchain-last"},{"path":"/en/id-voting/id-blockchain3","matchPath":"/en/id-voting/id-blockchain3"},{"path":"/en/id-voting/id-blockchain4","matchPath":"/en/id-voting/id-blockchain4"},{"path":"/en/id-voting/id-blockchain5","matchPath":"/en/id-voting/id-blockchain5"},{"path":"/en/id-voting/id-blockchain6","matchPath":"/en/id-voting/id-blockchain6"},{"path":"/en/id-voting/id-blockchain7","matchPath":"/en/id-voting/id-blockchain7"},{"path":"/en/id-voting/id-blockchain8","matchPath":"/en/id-voting/id-blockchain8"},{"path":"/en/id-voting/kickoff-meeting","matchPath":"/en/id-voting/kickoff-meeting"},{"path":"/en/scaling/scaling1","matchPath":"/en/scaling/scaling1"},{"path":"/en/scaling/scaling2","matchPath":"/en/scaling/scaling2"},{"path":"/en/scaling/scaling3","matchPath":"/en/scaling/scaling3"},{"path":"/en/scaling/scaling4","matchPath":"/en/scaling/scaling4"},{"path":"/en/scaling/scaling5","matchPath":"/en/scaling/scaling5"},{"path":"/en/scaling/scaling6","matchPath":"/en/scaling/scaling6"},{"path":"/en/scaling/scaling7","matchPath":"/en/scaling/scaling7"},{"path":"/en/scaling/scaling8","matchPath":"/en/scaling/scaling8"},{"path":"/en/students/students1","matchPath":"/en/students/students1"},{"path":"/en/students/students2","matchPath":"/en/students/students2"},{"path":"/en/students/zero-knowledge-proof","matchPath":"/en/students/zero-knowledge-proof"},{"path":"/en/ethereum2.0","matchPath":"/en/ethereum2.0"},{"path":"/en/events","matchPath":"/en/events"},{"path":"/en/id-voting","matchPath":"/en/id-voting"},{"path":"/en/news/","matchPath":"/en/news/"},{"path":"/en/scaling","matchPath":"/en/scaling"},{"path":"/en/students","matchPath":"/en/students"},{"path":"/en/","matchPath":"/en/"},{"path":"/en/404/","matchPath":"/en/*"}]'
      );
    },
    KuiD: function (t, e, n) {
      "use strict";
      n.d(e, "m", function () {
        return it;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "b", function () {
          return s;
        }),
        n.d(e, "f", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "l", function () {
          return h;
        }),
        n.d(e, "j", function () {
          return f;
        }),
        n.d(e, "h", function () {
          return p;
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
          return b;
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
      var o, i, a;
      Object.create;
      function c(t) {
        return t.type === i.literal;
      }
      function s(t) {
        return t.type === i.argument;
      }
      function u(t) {
        return t.type === i.number;
      }
      function l(t) {
        return t.type === i.date;
      }
      function h(t) {
        return t.type === i.time;
      }
      function f(t) {
        return t.type === i.select;
      }
      function p(t) {
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
      function b(t) {
        return !(!t || "object" != typeof t || t.type !== a.dateTime);
      }
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
      })(o || (o = {})),
        (function (t) {
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
        v = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
      function E(t) {
        var e = {};
        return (
          t.replace(v, function (t) {
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
      var P = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        T = /^(@+)?(\+|#+)?[rs]?$/g,
        S = /(\*)(0+)|(#+)(0+)|(0+)/g,
        _ = /^(0+)$/;
      function j(t) {
        var e = {};
        return (
          "r" === t[t.length - 1]
            ? (e.roundingPriority = "morePrecision")
            : "s" === t[t.length - 1] && (e.roundingPriority = "lessPrecision"),
          t.replace(T, function (t, n, r) {
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
      function R(t) {
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
      function A(t) {
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
            !_.test(t))
          )
            throw new Error("Malformed concise eng/scientific notation");
          e.minimumIntegerDigits = t.length;
        }
        return e;
      }
      function C(t) {
        var e = R(t);
        return e || {};
      }
      function L(t) {
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
                  return O(O({}, t), C(e));
                }, {})
              );
              continue;
            case "engineering":
              e = O(
                O(O({}, e), { notation: "engineering" }),
                o.options.reduce(function (t, e) {
                  return O(O({}, t), C(e));
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
              o.options[0].replace(S, function (t, n, r, o, i, a) {
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
          if (_.test(o.stem)) e.minimumIntegerDigits = o.stem.length;
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
            });
            var i = o.options[0];
            "w" === i
              ? (e = O(O({}, e), { trailingZeroDisplay: "stripIfInteger" }))
              : i && (e = O(O({}, e), j(i)));
          } else if (T.test(o.stem)) e = O(O({}, e), j(o.stem));
          else {
            var a = R(o.stem);
            a && (e = O(O({}, e), a));
            var c = A(o.stem);
            c && (e = O(O({}, e), c));
          }
        }
        return e;
      }
      var I,
        x = {
          AX: ["H"],
          BQ: ["H"],
          CP: ["H"],
          CZ: ["H"],
          DK: ["H"],
          FI: ["H"],
          ID: ["H"],
          IS: ["H"],
          ML: ["H"],
          NE: ["H"],
          RU: ["H"],
          SE: ["H"],
          SJ: ["H"],
          SK: ["H"],
          AS: ["h", "H"],
          BT: ["h", "H"],
          DJ: ["h", "H"],
          ER: ["h", "H"],
          GH: ["h", "H"],
          IN: ["h", "H"],
          LS: ["h", "H"],
          PG: ["h", "H"],
          PW: ["h", "H"],
          SO: ["h", "H"],
          TO: ["h", "H"],
          VU: ["h", "H"],
          WS: ["h", "H"],
          "001": ["H", "h"],
          AL: ["h", "H", "hB"],
          TD: ["h", "H", "hB"],
          "ca-ES": ["H", "h", "hB"],
          CF: ["H", "h", "hB"],
          CM: ["H", "h", "hB"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          LU: ["H", "h", "hB"],
          NP: ["H", "h", "hB"],
          PF: ["H", "h", "hB"],
          SC: ["H", "h", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          TF: ["H", "h", "hB"],
          VA: ["H", "h", "hB"],
          CY: ["h", "H", "hb", "hB"],
          GR: ["h", "H", "hb", "hB"],
          CO: ["h", "H", "hB", "hb"],
          DO: ["h", "H", "hB", "hb"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          NA: ["h", "H", "hB", "hb"],
          PA: ["h", "H", "hB", "hb"],
          PR: ["h", "H", "hB", "hb"],
          VE: ["h", "H", "hB", "hb"],
          AC: ["H", "h", "hb", "hB"],
          AI: ["H", "h", "hb", "hB"],
          BW: ["H", "h", "hb", "hB"],
          BZ: ["H", "h", "hb", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CX: ["H", "h", "hb", "hB"],
          DG: ["H", "h", "hb", "hB"],
          FK: ["H", "h", "hb", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GI: ["H", "h", "hb", "hB"],
          IE: ["H", "h", "hb", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IO: ["H", "h", "hb", "hB"],
          JE: ["H", "h", "hb", "hB"],
          LT: ["H", "h", "hb", "hB"],
          MK: ["H", "h", "hb", "hB"],
          MN: ["H", "h", "hb", "hB"],
          MS: ["H", "h", "hb", "hB"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          PN: ["H", "h", "hb", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SX: ["H", "h", "hb", "hB"],
          TA: ["H", "h", "hb", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          "af-ZA": ["H", "h", "hB", "hb"],
          AR: ["H", "h", "hB", "hb"],
          CL: ["H", "h", "hB", "hb"],
          CR: ["H", "h", "hB", "hb"],
          CU: ["H", "h", "hB", "hb"],
          EA: ["H", "h", "hB", "hb"],
          "es-BO": ["H", "h", "hB", "hb"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-EC": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "es-PE": ["H", "h", "hB", "hb"],
          GT: ["H", "h", "hB", "hb"],
          HN: ["H", "h", "hB", "hb"],
          IC: ["H", "h", "hB", "hb"],
          KG: ["H", "h", "hB", "hb"],
          KM: ["H", "h", "hB", "hb"],
          LK: ["H", "h", "hB", "hb"],
          MA: ["H", "h", "hB", "hb"],
          MX: ["H", "h", "hB", "hb"],
          NI: ["H", "h", "hB", "hb"],
          PY: ["H", "h", "hB", "hb"],
          SV: ["H", "h", "hB", "hb"],
          UY: ["H", "h", "hB", "hb"],
          JP: ["H", "h", "K"],
          AD: ["H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AT: ["H", "hB"],
          AW: ["H", "hB"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BR: ["H", "hB"],
          CG: ["H", "hB"],
          CI: ["H", "hB"],
          CV: ["H", "hB"],
          DE: ["H", "hB"],
          EE: ["H", "hB"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GF: ["H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GW: ["H", "hB"],
          HR: ["H", "hB"],
          IL: ["H", "hB"],
          IT: ["H", "hB"],
          KZ: ["H", "hB"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          MF: ["H", "hB"],
          MQ: ["H", "hB"],
          MZ: ["H", "hB"],
          NC: ["H", "hB"],
          NL: ["H", "hB"],
          PM: ["H", "hB"],
          PT: ["H", "hB"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          SI: ["H", "hB"],
          SR: ["H", "hB"],
          ST: ["H", "hB"],
          TG: ["H", "hB"],
          TR: ["H", "hB"],
          WF: ["H", "hB"],
          YT: ["H", "hB"],
          BD: ["h", "hB", "H"],
          PK: ["h", "hB", "H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BG: ["H", "hB", "h"],
          CH: ["H", "hB", "h"],
          GE: ["H", "hB", "h"],
          LI: ["H", "hB", "h"],
          ME: ["H", "hB", "h"],
          RS: ["H", "hB", "h"],
          UA: ["H", "hB", "h"],
          UZ: ["H", "hB", "h"],
          XK: ["H", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          BB: ["h", "hb", "H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          CA: ["h", "hb", "H", "hB"],
          DM: ["h", "hb", "H", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          FJ: ["h", "hb", "H", "hB"],
          FM: ["h", "hb", "H", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GM: ["h", "hb", "H", "hB"],
          GU: ["h", "hb", "H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          JM: ["h", "hb", "H", "hB"],
          KI: ["h", "hb", "H", "hB"],
          KN: ["h", "hb", "H", "hB"],
          KY: ["h", "hb", "H", "hB"],
          LC: ["h", "hb", "H", "hB"],
          LR: ["h", "hb", "H", "hB"],
          MH: ["h", "hb", "H", "hB"],
          MP: ["h", "hb", "H", "hB"],
          MW: ["h", "hb", "H", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          SB: ["h", "hb", "H", "hB"],
          SG: ["h", "hb", "H", "hB"],
          SL: ["h", "hb", "H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          SZ: ["h", "hb", "H", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          BO: ["H", "hB", "h", "hb"],
          EC: ["H", "hB", "h", "hb"],
          ES: ["H", "hB", "h", "hb"],
          GQ: ["H", "hB", "h", "hb"],
          PE: ["H", "hB", "h", "hb"],
          AE: ["h", "hB", "hb", "H"],
          "ar-001": ["h", "hB", "hb", "H"],
          BH: ["h", "hB", "hb", "H"],
          DZ: ["h", "hB", "hb", "H"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          HK: ["h", "hB", "hb", "H"],
          IQ: ["h", "hB", "hb", "H"],
          JO: ["h", "hB", "hb", "H"],
          KW: ["h", "hB", "hb", "H"],
          LB: ["h", "hB", "hb", "H"],
          LY: ["h", "hB", "hb", "H"],
          MO: ["h", "hB", "hb", "H"],
          MR: ["h", "hB", "hb", "H"],
          OM: ["h", "hB", "hb", "H"],
          PH: ["h", "hB", "hb", "H"],
          PS: ["h", "hB", "hb", "H"],
          QA: ["h", "hB", "hb", "H"],
          SA: ["h", "hB", "hb", "H"],
          SD: ["h", "hB", "hb", "H"],
          SY: ["h", "hB", "hb", "H"],
          TN: ["h", "hB", "hb", "H"],
          YE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          LA: ["H", "hb", "hB", "h"],
          CN: ["H", "hB", "hb", "h"],
          LV: ["H", "hB", "hb", "h"],
          TL: ["H", "hB", "hb", "h"],
          "zu-ZA": ["H", "hB", "hb", "h"],
          CD: ["hB", "H"],
          IR: ["hB", "H"],
          "hi-IN": ["hB", "h", "H"],
          "kn-IN": ["hB", "h", "H"],
          "ml-IN": ["hB", "h", "H"],
          "te-IN": ["hB", "h", "H"],
          KH: ["hB", "h", "H", "hb"],
          "ta-IN": ["hB", "h", "hb", "H"],
          BN: ["hb", "hB", "h", "H"],
          MY: ["hb", "hB", "h", "H"],
          ET: ["hB", "hb", "h", "H"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          TW: ["hB", "hb", "h", "H"],
          KE: ["hB", "hb", "H", "h"],
          MM: ["hB", "hb", "H", "h"],
          TZ: ["hB", "hb", "H", "h"],
          UG: ["hB", "hb", "H", "h"],
        };
      function k(t) {
        var e = t.hourCycle;
        if (
          (void 0 === e &&
            t.hourCycles &&
            t.hourCycles.length &&
            (e = t.hourCycles[0]),
          e)
        )
          switch (e) {
            case "h24":
              return "k";
            case "h23":
              return "H";
            case "h12":
              return "h";
            case "h11":
              return "K";
            default:
              throw new Error("Invalid hourCycle");
          }
        var n,
          r = t.language;
        return (
          "root" !== r && (n = t.maximize().region),
          (x[n || ""] || x[r || ""] || x["".concat(r, "-001")] || x["001"])[0]
        );
      }
      var N = new RegExp("^".concat(y.source, "*")),
        D = new RegExp("".concat(y.source, "*$"));
      function M(t, e) {
        return { start: t, end: e };
      }
      var B = !!String.prototype.startsWith,
        H = !!String.fromCodePoint,
        F = !!Object.fromEntries,
        U = !!String.prototype.codePointAt,
        G = !!String.prototype.trimStart,
        q = !!String.prototype.trimEnd,
        W = !!Number.isSafeInteger
          ? Number.isSafeInteger
          : function (t) {
              return (
                "number" == typeof t &&
                isFinite(t) &&
                Math.floor(t) === t &&
                Math.abs(t) <= 9007199254740991
              );
            },
        V = !0;
      try {
        V =
          "a" ===
          (null ===
            (I = $("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec(
              "a"
            )) || void 0 === I
            ? void 0
            : I[0]);
      } catch (at) {
        V = !1;
      }
      var X,
        z = B
          ? function (t, e, n) {
              return t.startsWith(e, n);
            }
          : function (t, e, n) {
              return t.slice(n, n + e.length) === e;
            },
        Y = H
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
        K = F
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
        Q = U
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
        J = G
          ? function (t) {
              return t.trimStart();
            }
          : function (t) {
              return t.replace(N, "");
            },
        Z = q
          ? function (t) {
              return t.trimEnd();
            }
          : function (t) {
              return t.replace(D, "");
            };
      function $(t, e) {
        return new RegExp(t, e);
      }
      if (V) {
        var tt = $("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        X = function (t, e) {
          var n;
          return (
            (tt.lastIndex = e),
            null !== (n = tt.exec(t)[1]) && void 0 !== n ? n : ""
          );
        };
      } else
        X = function (t, e) {
          for (var n = []; ; ) {
            var r = Q(t, e);
            if (void 0 === r || rt(r) || ot(r)) break;
            n.push(r), (e += r >= 65536 ? 2 : 1);
          }
          return Y.apply(void 0, n);
        };
      var et = (function () {
        function t(t, e) {
          void 0 === e && (e = {}),
            (this.message = t),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!e.ignoreTag),
            (this.locale = e.locale),
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
                if ((c = this.parseArgument(t, n)).err) return c;
                r.push(c.val);
              } else {
                if (125 === a && t > 0) break;
                if (35 !== a || ("plural" !== e && "selectordinal" !== e)) {
                  if (60 === a && !this.ignoreTag && 47 === this.peek()) {
                    if (n) break;
                    return this.error(
                      o.UNMATCHED_CLOSING_TAG,
                      M(this.clonePosition(), this.clonePosition())
                    );
                  }
                  if (60 === a && !this.ignoreTag && nt(this.peek() || 0)) {
                    if ((c = this.parseTag(t, e)).err) return c;
                    r.push(c.val);
                  } else {
                    var c;
                    if ((c = this.parseLiteral(t, e)).err) return c;
                    r.push(c.val);
                  }
                } else {
                  var s = this.clonePosition();
                  this.bump(),
                    r.push({
                      type: i.pound,
                      location: M(s, this.clonePosition()),
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
                  value: "<".concat(r, "/>"),
                  location: M(n, this.clonePosition()),
                },
                err: null,
              };
            if (this.bumpIf(">")) {
              var a = this.parseMessage(t + 1, e, !0);
              if (a.err) return a;
              var c = a.val,
                s = this.clonePosition();
              if (this.bumpIf("</")) {
                if (this.isEOF() || !nt(this.char()))
                  return this.error(o.INVALID_TAG, M(s, this.clonePosition()));
                var u = this.clonePosition();
                return r !== this.parseTagName()
                  ? this.error(
                      o.UNMATCHED_CLOSING_TAG,
                      M(u, this.clonePosition())
                    )
                  : (this.bumpSpace(),
                    this.bumpIf(">")
                      ? {
                          val: {
                            type: i.tag,
                            value: r,
                            children: c,
                            location: M(n, this.clonePosition()),
                          },
                          err: null,
                        }
                      : this.error(o.INVALID_TAG, M(s, this.clonePosition())));
              }
              return this.error(o.UNCLOSED_TAG, M(n, this.clonePosition()));
            }
            return this.error(o.INVALID_TAG, M(n, this.clonePosition()));
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
                  var c = this.tryParseLeftAngleBracket();
                  if (!c) break;
                  r += c;
                }
              }
            }
            var s = M(n, this.clonePosition());
            return {
              val: { type: i.literal, value: r, location: s },
              err: null,
            };
          }),
          (t.prototype.tryParseLeftAngleBracket = function () {
            return this.isEOF() ||
              60 !== this.char() ||
              (!this.ignoreTag && (nt((t = this.peek() || 0)) || 47 === t))
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
            return Y.apply(void 0, e);
          }),
          (t.prototype.tryParseUnquoted = function (t, e) {
            if (this.isEOF()) return null;
            var n = this.char();
            return 60 === n ||
              123 === n ||
              (35 === n && ("plural" === e || "selectordinal" === e)) ||
              (125 === n && t > 0)
              ? null
              : (this.bump(), Y(n));
          }),
          (t.prototype.parseArgument = function (t, e) {
            var n = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(
                o.EXPECT_ARGUMENT_CLOSING_BRACE,
                M(n, this.clonePosition())
              );
            if (125 === this.char())
              return (
                this.bump(),
                this.error(o.EMPTY_ARGUMENT, M(n, this.clonePosition()))
              );
            var r = this.parseIdentifierIfPossible().value;
            if (!r)
              return this.error(
                o.MALFORMED_ARGUMENT,
                M(n, this.clonePosition())
              );
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(
                o.EXPECT_ARGUMENT_CLOSING_BRACE,
                M(n, this.clonePosition())
              );
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: {
                      type: i.argument,
                      value: r,
                      location: M(n, this.clonePosition()),
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
                        M(n, this.clonePosition())
                      )
                    : this.parseArgumentOptions(t, e, r, n)
                );
              default:
                return this.error(
                  o.MALFORMED_ARGUMENT,
                  M(n, this.clonePosition())
                );
            }
          }),
          (t.prototype.parseIdentifierIfPossible = function () {
            var t = this.clonePosition(),
              e = this.offset(),
              n = X(this.message, e),
              r = e + n.length;
            return (
              this.bumpTo(r), { value: n, location: M(t, this.clonePosition()) }
            );
          }),
          (t.prototype.parseArgumentOptions = function (t, e, n, c) {
            var s,
              u = this.clonePosition(),
              l = this.parseIdentifierIfPossible().value,
              h = this.clonePosition();
            switch (l) {
              case "":
                return this.error(o.EXPECT_ARGUMENT_TYPE, M(u, h));
              case "number":
              case "date":
              case "time":
                this.bumpSpace();
                var f = null;
                if (this.bumpIf(",")) {
                  this.bumpSpace();
                  var p = this.clonePosition();
                  if ((w = this.parseSimpleArgStyleIfPossible()).err) return w;
                  if (0 === (b = Z(w.val)).length)
                    return this.error(
                      o.EXPECT_ARGUMENT_STYLE,
                      M(this.clonePosition(), this.clonePosition())
                    );
                  f = { style: b, styleLocation: M(p, this.clonePosition()) };
                }
                if ((P = this.tryParseArgumentClose(c)).err) return P;
                var d = M(c, this.clonePosition());
                if (f && z(null == f ? void 0 : f.style, "::", 0)) {
                  var m = J(f.style.slice(2));
                  if ("number" === l)
                    return (w = this.parseNumberSkeletonFromString(
                      m,
                      f.styleLocation
                    )).err
                      ? w
                      : {
                          val: {
                            type: i.number,
                            value: n,
                            location: d,
                            style: w.val,
                          },
                          err: null,
                        };
                  if (0 === m.length)
                    return this.error(o.EXPECT_DATE_TIME_SKELETON, d);
                  var g = m;
                  this.locale &&
                    (g = (function (t, e) {
                      for (var n = "", r = 0; r < t.length; r++) {
                        var o = t.charAt(r);
                        if ("j" === o) {
                          for (
                            var i = 0;
                            r + 1 < t.length && t.charAt(r + 1) === o;

                          )
                            i++, r++;
                          var a = 1 + (1 & i),
                            c = i < 2 ? 1 : 3 + (i >> 1),
                            s = k(e);
                          for (("H" != s && "k" != s) || (c = 0); c-- > 0; )
                            n += "a";
                          for (; a-- > 0; ) n = s + n;
                        } else n += "J" === o ? "H" : o;
                      }
                      return n;
                    })(m, this.locale));
                  var b = {
                    type: a.dateTime,
                    pattern: g,
                    location: f.styleLocation,
                    parsedOptions: this.shouldParseSkeletons ? E(g) : {},
                  };
                  return {
                    val: {
                      type: "date" === l ? i.date : i.time,
                      value: n,
                      location: d,
                      style: b,
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
                      null !== (s = null == f ? void 0 : f.style) &&
                      void 0 !== s
                        ? s
                        : null,
                  },
                  err: null,
                };
              case "plural":
              case "selectordinal":
              case "select":
                var y = this.clonePosition();
                if ((this.bumpSpace(), !this.bumpIf(",")))
                  return this.error(
                    o.EXPECT_SELECT_ARGUMENT_OPTIONS,
                    M(y, r({}, y))
                  );
                this.bumpSpace();
                var v = this.parseIdentifierIfPossible(),
                  O = 0;
                if ("select" !== l && "offset" === v.value) {
                  if (!this.bumpIf(":"))
                    return this.error(
                      o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      M(this.clonePosition(), this.clonePosition())
                    );
                  var w;
                  if (
                    (this.bumpSpace(),
                    (w = this.tryParseDecimalInteger(
                      o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      o.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
                    )).err)
                  )
                    return w;
                  this.bumpSpace(),
                    (v = this.parseIdentifierIfPossible()),
                    (O = w.val);
                }
                var P,
                  T = this.tryParsePluralOrSelectOptions(t, l, e, v);
                if (T.err) return T;
                if ((P = this.tryParseArgumentClose(c)).err) return P;
                var S = M(c, this.clonePosition());
                return "select" === l
                  ? {
                      val: {
                        type: i.select,
                        value: n,
                        options: K(T.val),
                        location: S,
                      },
                      err: null,
                    }
                  : {
                      val: {
                        type: i.plural,
                        value: n,
                        options: K(T.val),
                        offset: O,
                        pluralType: "plural" === l ? "cardinal" : "ordinal",
                        location: S,
                      },
                      err: null,
                    };
              default:
                return this.error(o.INVALID_ARGUMENT_TYPE, M(u, h));
            }
          }),
          (t.prototype.tryParseArgumentClose = function (t) {
            return this.isEOF() || 125 !== this.char()
              ? this.error(
                  o.EXPECT_ARGUMENT_CLOSING_BRACE,
                  M(t, this.clonePosition())
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
                      M(n, this.clonePosition())
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
                    var i = o[0], a = o.slice(1), c = 0, s = a;
                    c < s.length;
                    c++
                  ) {
                    if (0 === s[c].length)
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
                parsedOptions: this.shouldParseSkeletons ? L(n) : {},
              },
              err: null,
            };
          }),
          (t.prototype.tryParsePluralOrSelectOptions = function (t, e, n, r) {
            for (
              var i, a = !1, c = [], s = new Set(), u = r.value, l = r.location;
              ;

            ) {
              if (0 === u.length) {
                var h = this.clonePosition();
                if ("select" === e || !this.bumpIf("=")) break;
                var f = this.tryParseDecimalInteger(
                  o.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  o.INVALID_PLURAL_ARGUMENT_SELECTOR
                );
                if (f.err) return f;
                (l = M(h, this.clonePosition())),
                  (u = this.message.slice(h.offset, this.offset()));
              }
              if (s.has(u))
                return this.error(
                  "select" === e
                    ? o.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : o.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  l
                );
              "other" === u && (a = !0), this.bumpSpace();
              var p = this.clonePosition();
              if (!this.bumpIf("{"))
                return this.error(
                  "select" === e
                    ? o.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : o.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  M(this.clonePosition(), this.clonePosition())
                );
              var d = this.parseMessage(t + 1, e, n);
              if (d.err) return d;
              var m = this.tryParseArgumentClose(p);
              if (m.err) return m;
              c.push([
                u,
                { value: d.val, location: M(p, this.clonePosition()) },
              ]),
                s.add(u),
                this.bumpSpace(),
                (u = (i = this.parseIdentifierIfPossible()).value),
                (l = i.location);
            }
            return 0 === c.length
              ? this.error(
                  "select" === e
                    ? o.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : o.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  M(this.clonePosition(), this.clonePosition())
                )
              : this.requiresOtherClause && !a
              ? this.error(
                  o.MISSING_OTHER_CLAUSE,
                  M(this.clonePosition(), this.clonePosition())
                )
              : { val: c, err: null };
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
            var c = M(r, this.clonePosition());
            return o
              ? W((i *= n))
                ? { val: i, err: null }
                : this.error(e, c)
              : this.error(t, c);
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
            var e = Q(this.message, t);
            if (void 0 === e)
              throw Error(
                "Offset ".concat(t, " is at invalid UTF-16 code unit boundary")
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
            if (z(this.message, t, this.offset())) {
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
                "targetOffset "
                  .concat(
                    t,
                    " must be greater than or equal to the current offset "
                  )
                  .concat(this.offset())
              );
            for (t = Math.min(t, this.message.length); ; ) {
              var e = this.offset();
              if (e === t) break;
              if (e > t)
                throw Error(
                  "targetOffset ".concat(
                    t,
                    " is at invalid UTF-16 code unit boundary"
                  )
                );
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (t.prototype.bumpSpace = function () {
            for (; !this.isEOF() && rt(this.char()); ) this.bump();
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
      function nt(t) {
        return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
      }
      function rt(t) {
        return (
          (t >= 9 && t <= 13) ||
          32 === t ||
          133 === t ||
          (t >= 8206 && t <= 8207) ||
          8232 === t ||
          8233 === t
        );
      }
      function ot(t) {
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
      function it(t, e) {
        void 0 === e && (e = {}),
          (e = r({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e));
        var n = new et(t, e).parse();
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
                if ((delete e.location, f(e) || p(e)))
                  for (var n in e.options)
                    delete e.options[n].location, t(e.options[n].value);
                else
                  (u(e) && g(e.style)) || ((l(e) || h(e)) && b(e.style))
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
        c = i.process,
        s = i.Deno,
        u = (c && c.versions) || (s && s.version),
        l = u && u.v8;
      l && (o = (r = l.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
        !o &&
          a &&
          (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
          (r = a.match(/Chrome\/(\d+)/)) &&
          (o = +r[1]),
        (t.exports = o);
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
          return c;
        }),
        n.d(e, "resolve", function () {
          return s;
        }),
        n.d(e, "insertParams", function () {
          return u;
        }),
        n.d(e, "validateRedirect", function () {
          return l;
        }),
        n.d(e, "shallowCompare", function () {
          return v;
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
              c = "" === a[0],
              s = m(t),
              u = 0,
              l = s.length;
            u < l;
            u++
          ) {
            var f = !1,
              d = s[u].route;
            if (d.default) r = { route: d, params: {}, uri: e };
            else {
              for (
                var b = g(d.path),
                  v = {},
                  E = Math.max(a.length, b.length),
                  O = 0;
                O < E;
                O++
              ) {
                var w = b[O],
                  P = a[O];
                if (p(w)) {
                  v[w.slice(1) || "*"] = a
                    .slice(O)
                    .map(decodeURIComponent)
                    .join("/");
                  break;
                }
                if (void 0 === P) {
                  f = !0;
                  break;
                }
                var T = h.exec(w);
                if (T && !c) {
                  -1 === y.indexOf(T[1]) || o()(!1);
                  var S = decodeURIComponent(P);
                  v[T[1]] = S;
                } else if (w !== P) {
                  f = !0;
                  break;
                }
              }
              if (!f) {
                n = { route: d, params: v, uri: "/" + a.slice(0, O).join("/") };
                break;
              }
            }
          }
          return n || r || null;
        },
        c = function (t, e) {
          return a([{ path: t }], e);
        },
        s = function (t, e) {
          if (i(t, "/")) return t;
          var n = t.split("?"),
            r = n[0],
            o = n[1],
            a = e.split("?")[0],
            c = g(r),
            s = g(a);
          if ("" === c[0]) return b(a, o);
          if (!i(c[0], ".")) {
            var u = s.concat(c).join("/");
            return b(("/" === a ? "" : "/") + u, o);
          }
          for (var l = s.concat(c), h = [], f = 0, p = l.length; f < p; f++) {
            var d = l[f];
            ".." === d ? h.pop() : "." !== d && h.push(d);
          }
          return b("/" + h.join("/"), o);
        },
        u = function (t, e) {
          var n = t.split("?"),
            r = n[0],
            o = n[1],
            i = void 0 === o ? "" : o,
            a =
              "/" +
              g(r)
                .map(function (t) {
                  var n = h.exec(t);
                  return n ? e[n[1]] : t;
                })
                .join("/"),
            c = e.location,
            s = (c = void 0 === c ? {} : c).search,
            u = (void 0 === s ? "" : s).split("?")[1] || "";
          return (a = b(a, i, u));
        },
        l = function (t, e) {
          var n = function (t) {
            return f(t);
          };
          return (
            g(t).filter(n).sort().join("/") === g(e).filter(n).sort().join("/")
          );
        },
        h = /^:(.+)/,
        f = function (t) {
          return h.test(t);
        },
        p = function (t) {
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
                      ? f(e)
                        ? (t += 2)
                        : p(e)
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
        b = function (t) {
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
        v = function (t, e) {
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
          plugin: n("b9Nj"),
          options: { plugins: [], trackingId: "UA-107137836-4", head: !0 },
        },
        {
          plugin: n("pWkz"),
          options: {
            plugins: [],
            trackingId: "UA-107137836-4",
            head: !1,
            anonymize: !1,
            respectDNT: !1,
            exclude: [],
            pageTransitionDelay: 0,
            enableWebVitalsTracking: !1,
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
            name: "EEA Japan",
            short_name: "EEAJapan",
            start_url: "/",
            display: "standalone",
            icon: "src/images/icon.png",
            legacy: !0,
            theme_color_in_head: !0,
            cache_busting_mode: "query",
            crossOrigin: "anonymous",
            include_favicon: !0,
            cacheDigest: "5ad8205c15cb226e66da52d6a8dbb356",
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
        return t.concat(r || Array.prototype.slice.call(e));
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
        return u;
      });
      var r = n("MGrk"),
        o = n("KuiD"),
        i = n("cmTm"),
        a = n("/d+U");
      function c(t, e) {
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
      function s(t) {
        return {
          create: function () {
            return {
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
      var u = (function () {
        function t(e, n, o, u) {
          var l,
            h = this;
          if (
            (void 0 === n && (n = t.defaultLocale),
            (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {},
            }),
            (this.format = function (t) {
              var e = h.formatToParts(t);
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
                h.ast,
                h.locales,
                h.formatters,
                h.formats,
                t,
                void 0,
                h.message
              );
            }),
            (this.resolvedOptions = function () {
              return { locale: h.resolvedLocale.toString() };
            }),
            (this.getAst = function () {
              return h.ast;
            }),
            (this.locales = n),
            (this.resolvedLocale = t.resolveLocale(n)),
            "string" == typeof e)
          ) {
            if (((this.message = e), !t.__parse))
              throw new TypeError(
                "IntlMessageFormat.__parse must be set to process `message` of type `string`"
              );
            this.ast = t.__parse(e, {
              ignoreTag: null == u ? void 0 : u.ignoreTag,
              locale: this.resolvedLocale,
            });
          } else this.ast = e;
          if (!Array.isArray(this.ast))
            throw new TypeError(
              "A message must be provided as a String or AST."
            );
          (this.formats = c(t.formats, o)),
            (this.formatters =
              (u && u.formatters) ||
              (void 0 === (l = this.formatterCache) &&
                (l = { number: {}, dateTime: {}, pluralRules: {} }),
              {
                getNumberFormat: Object(i.a)(
                  function () {
                    for (var t, e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    return new ((t = Intl.NumberFormat).bind.apply(
                      t,
                      Object(r.c)([void 0], e, !1)
                    ))();
                  },
                  { cache: s(l.number), strategy: i.b.variadic }
                ),
                getDateTimeFormat: Object(i.a)(
                  function () {
                    for (var t, e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    return new ((t = Intl.DateTimeFormat).bind.apply(
                      t,
                      Object(r.c)([void 0], e, !1)
                    ))();
                  },
                  { cache: s(l.dateTime), strategy: i.b.variadic }
                ),
                getPluralRules: Object(i.a)(
                  function () {
                    for (var t, e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    return new ((t = Intl.PluralRules).bind.apply(
                      t,
                      Object(r.c)([void 0], e, !1)
                    ))();
                  },
                  { cache: s(l.pluralRules), strategy: i.b.variadic }
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
          (t.resolveLocale = function (t) {
            var e = Intl.NumberFormat.supportedLocalesOf(t);
            return e.length > 0
              ? new Intl.Locale(e[0])
              : new Intl.Locale("string" == typeof t ? t : t[0]);
          }),
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
        return c;
      }),
        n.d(e, "a", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "d", function () {
          return l;
        });
      var r = n("X52I"),
        o = n("q1tI"),
        i = n("7LaZ"),
        a = n("1VXf");
      function c(t) {
        Object(i.a)(
          t,
          "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry."
        );
      }
      var s = Object(r.a)(Object(r.a)({}, a.a), { textComponent: o.Fragment });
      function u(t) {
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
              t.addEventListener("updatefound", () => {
                Object(r.apiRunner)("onServiceWorkerUpdateFound", {
                  serviceWorker: t,
                });
                const e = t.installing;
                console.log("installingWorker", e),
                  e.addEventListener("statechange", () => {
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
    NsGk: function (t, e, n) {
      e.components = {
        "component---src-pages-404-js": () =>
          Promise.all([n.e(1), n.e(0), n.e(6)]).then(n.bind(null, "w2l6")),
        "component---src-pages-index-js": () =>
          Promise.all([n.e(1), n.e(4), n.e(0), n.e(2), n.e(7)]).then(
            n.bind(null, "RXBc")
          ),
        "component---src-pages-news-js": () =>
          Promise.all([n.e(1), n.e(0), n.e(2), n.e(8)]).then(
            n.bind(null, "FJi0")
          ),
        "component---src-templates-group-js": () =>
          Promise.all([n.e(1), n.e(0), n.e(9)]).then(n.bind(null, "rV4e")),
        "component---src-templates-post-js": () =>
          Promise.all([n.e(1), n.e(0), n.e(10)]).then(n.bind(null, "6qSS")),
      };
    },
    OjiQ: function (t) {
      t.exports = JSON.parse(
        '{"description":"技術・ビジネス・法律の観点から課題を協議し、企業のブロックチェーン活用における標準化策定を目指すコミュニティ","contact":"お問い合わせ","slogan":"技術・ビジネス・法律の観点から課題を協議し、企業のブロックチェーン活用における標準化策定を目指すコミュニティ","what":"EEA Japan とは","whatDetail":"ブロックチェーン事業を進める中で、技術や法律などあらゆる判断軸が必要とされます。しかし、それらの視点の隔たり隔たりから、課題解決が進まない場合が多々あります。その隔たりを埋めるために、それぞれの業界のプレイヤーが課題を深掘りし、多くの事業者が自走するためのアウトプットを作り出すコミュニティです。","wg":"ワーキンググループ","wgList1":"法律・技術・ビジネスなどの複数観点から課題を深掘り","wgList2":"課題からこれからの必要なアクションプランを明確化","wgList3":"Ethereum Foundationのスポンサーシップのもと海外からの知見をフィードバック","ws":"ワークショップ","wsList1":"実践型のワークショップを通じて、ブロックチェーン事業を自走するための力を身に着ける","wsList2":"テーマ深掘り型から、事業に対する適応を実現する","target":"参加対象","target1":"技術者","target1-desc":"課題解決に必要な仕様の提案や技術的アプローチの深掘りなどをビジネスや法律などの文脈を理解しながら提案したい","target2":"事業者","target2-desc":"ブロックチェーン事業を進めていく上で必要な判断軸を知りたい、実際に進めていきたいという意思がある","target3":"法律家","target3-desc":"技術的文脈、ビジネス的な文脈を読み取りながら規制を理解し、現在の最適解や必要な解決策を提案していきたい方","organize":"主催","support":"後援","contributor":"参加企業","date":"投稿日","group":"ワーキンググループ","groupName_id-voting":"ID x 投票","groupName_ethereum2.0":"イーサリアム2.0","groupName_students":"学生研究","groupName_scaling":"スケーリング","groupName_zero-knowledge-proof":"ゼロ知識証明","posts":"記事一覧","news":"お知らせ","activity":"アクティビティ","activityWorkingGroupSubtitle":"ブロックチェーンの活用によるインターネット投票の実現性検討","activityCreamSubtitle":"秘匿化プロトコルC.R.E.A.Mの開発","contributor.hitachi":" ","contributor.fujitsu":" ","contributor.act":" ","contributor.collabo_gate":" ","contributor.comps":" ","contributor.cryptel":" ","contributor.layerx":" ","contributor.waseda":" ","contributor.accenture":" ","contributor.nttdata":" ","contributor.ntt":" ","contributor.singulanet":" ","contributor.imge":" ","contributor.new":" "}'
      );
    },
    OpvP: function (t, e, n) {
      var r = n("4zBA");
      t.exports = r({}.isPrototypeOf);
    },
    PJYZ: function (t, e) {
      (t.exports = function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    QLaP: function (t, e, n) {
      "use strict";
      t.exports = function (t, e, n, r, o, i, a, c) {
        if (!t) {
          var s;
          if (void 0 === e)
            s = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var u = [n, r, o, i, a, c],
              l = 0;
            (s = new Error(
              e.replace(/%s/g, function () {
                return u[l++];
              })
            )).name = "Invariant Violation";
          }
          throw ((s.framesToPop = 1), s);
        }
      };
    },
    QNWe: function (t, e, n) {
      var r = n("0Dky");
      t.exports = !r(function () {
        var t = function () {}.bind();
        return "function" != typeof t || t.hasOwnProperty("prototype");
      });
    },
    SFrS: function (t, e, n) {
      var r = n("xluM"),
        o = n("Fib7"),
        i = n("hh1v"),
        a = TypeError;
      t.exports = function (t, e) {
        var n, c;
        if ("string" === e && o((n = t.toString)) && !i((c = r(n, t))))
          return c;
        if (o((n = t.valueOf)) && !i((c = r(n, t)))) return c;
        if ("string" !== e && o((n = t.toString)) && !i((c = r(n, t))))
          return c;
        throw a("Can't convert object to primitive value");
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
          (t.exports = n = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e, r)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    TOwV: function (t, e, n) {
      "use strict";
      t.exports = n("qT12");
    },
    TqRt: function (t, e) {
      (t.exports = function (t) {
        return t && t.__esModule ? t : { default: t };
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    U3f4: function (t, e, n) {
      var r = n("2oRo"),
        o = n("g6v/"),
        i = n("7dAM"),
        a = n("rW0t"),
        c = n("0Dky"),
        s = r.RegExp,
        u = s.prototype;
      o &&
        c(function () {
          var t = !0;
          try {
            s(".", "d");
          } catch (c) {
            t = !1;
          }
          var e = {},
            n = "",
            r = t ? "dgimsy" : "gimsy",
            o = function (t, r) {
              Object.defineProperty(e, t, {
                get: function () {
                  return (n += r), !0;
                },
              });
            },
            i = {
              dotAll: "s",
              global: "g",
              ignoreCase: "i",
              multiline: "m",
              sticky: "y",
            };
          for (var a in (t && (i.hasIndices = "d"), i)) o(a, i[a]);
          return (
            Object.getOwnPropertyDescriptor(u, "flags").get.call(e) !== r ||
            n !== r
          );
        }) &&
        i(u, "flags", { configurable: !0, get: a });
    },
    UxWs: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("dI71"),
        o = n("xtsi"),
        i = n("q1tI"),
        a = n.n(i),
        c = n("i8i4"),
        s = n.n(c),
        u = n("YwZP"),
        l = n("7hJ6"),
        h = n("MMVs"),
        f = n.n(h),
        p = n("Wbzz"),
        d = n("emEt"),
        m = n("YLt+"),
        g = n("5yr3");
      const b = {
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
      };
      var y = n("9Xx/"),
        v = n("+ZDr");
      const E = new Map(),
        O = new Map();
      function w(t) {
        let e = E.get(t);
        return (
          e || (e = O.get(t.toLowerCase())),
          null != e && (window.___replace(e.toPath), !0)
        );
      }
      m.forEach((t) => {
        t.ignoreCase ? O.set(t.fromPath, t) : E.set(t.fromPath, t);
      });
      const P = (t, e) => {
          w(t.pathname) ||
            Object(o.apiRunner)("onPreRouteUpdate", {
              location: t,
              prevLocation: e,
            });
        },
        T = (t, e) => {
          w(t.pathname) ||
            Object(o.apiRunner)("onRouteUpdate", {
              location: t,
              prevLocation: e,
            });
        },
        S = function (t, e) {
          if ((void 0 === e && (e = {}), "number" == typeof t))
            return void y.c.navigate(t);
          let { pathname: n } = Object(v.parsePath)(t),
            r = E.get(n);
          if (
            (r || (r = O.get(n.toLowerCase())),
            r && ((t = r.toPath), (n = Object(v.parsePath)(t).pathname)),
            window.___swUpdated)
          )
            return void (window.location = n);
          const i = setTimeout(() => {
            g.a.emit("onDelayedLoadPageResources", { pathname: n }),
              Object(o.apiRunner)("onRouteUpdateDelayed", {
                location: window.location,
              });
          }, 1e3);
          d.default.loadPage(n).then((r) => {
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
              Object(u.navigate)(t, e),
              clearTimeout(i);
          });
        };
      function _(t, e) {
        let { location: n } = e;
        const { pathname: r, hash: i } = n,
          a = Object(o.apiRunner)("shouldUpdateScroll", {
            prevRouterProps: t,
            pathname: r,
            routerProps: { location: n },
            getSavedScrollPosition: (t) => [
              0,
              this._stateStorage.read(t, t.key),
            ],
          });
        if (a.length > 0) return a[a.length - 1];
        if (t) {
          const {
            location: { pathname: e },
          } = t;
          if (e === r) return i ? decodeURI(i.slice(1)) : [0, 0];
        }
        return !0;
      }
      let j = (function (t) {
        function e(e) {
          var n;
          return (
            ((n = t.call(this, e) || this).announcementRef = a.a.createRef()), n
          );
        }
        Object(r.a)(e, t);
        var n = e.prototype;
        return (
          (n.componentDidUpdate = function (t, e) {
            requestAnimationFrame(() => {
              let t = "new page at " + this.props.location.pathname;
              document.title && (t = document.title);
              const e = document.querySelectorAll("#gatsby-focus-wrapper h1");
              e && e.length && (t = e[0].textContent);
              const n = "Navigated to " + t;
              if (this.announcementRef.current) {
                this.announcementRef.current.innerText !== n &&
                  (this.announcementRef.current.innerText = n);
              }
            });
          }),
          (n.render = function () {
            return a.a.createElement(
              "div",
              Object.assign({}, b, { ref: this.announcementRef })
            );
          }),
          e
        );
      })(a.a.Component);
      const R = (t, e) => {
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
      };
      let A = (function (t) {
        function e(e) {
          var n;
          return (n = t.call(this, e) || this), P(e.location, null), n;
        }
        Object(r.a)(e, t);
        var n = e.prototype;
        return (
          (n.componentDidMount = function () {
            T(this.props.location, null);
          }),
          (n.shouldComponentUpdate = function (t) {
            return (
              !!R(t.location, this.props.location) &&
              (P(this.props.location, t.location), !0)
            );
          }),
          (n.componentDidUpdate = function (t) {
            R(t.location, this.props.location) &&
              T(this.props.location, t.location);
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
      })(a.a.Component);
      var C = n("IOVJ"),
        L = n("NsGk"),
        I = n.n(L),
        x = n("rePB");
      function k(t, e) {
        for (var n in t) if (!(n in e)) return !0;
        for (var r in e) if (t[r] !== e[r]) return !0;
        return !1;
      }
      function N(t, e) {
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
      function D(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(Object(n), !0).forEach(function (e) {
                Object(x.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (e) {
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
            const { location: r, pageResources: o } = e;
            return (
              (n.state = {
                location: D({}, r),
                pageResources: o || d.default.loadPageSync(r.pathname),
              }),
              n
            );
          }
          Object(r.a)(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              let { location: n } = t;
              if (e.location.href !== n.href) {
                return {
                  pageResources: d.default.loadPageSync(n.pathname),
                  location: D({}, n),
                };
              }
              return { location: D({}, n) };
            });
          var n = e.prototype;
          return (
            (n.loadResources = function (t) {
              d.default.loadPage(t).then((e) => {
                e && e.status !== d.PageResourceStatus.Error
                  ? this.setState({
                      location: D({}, window.location),
                      pageResources: e,
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
                      return k(t.props, e) || k(t.state, n);
                    })(this, t, e)
                : (this.loadResources(t.location.pathname), !1);
            }),
            (n.render = function () {
              return this.props.children(this.state);
            }),
            e
          );
        })(a.a.Component),
        B = n("cSJ8"),
        H = n("JeVI");
      const F = new d.ProdLoader(I.a, H);
      Object(d.setLoader)(F),
        F.setApiRunner(o.apiRunner),
        (window.asyncRequires = I.a),
        (window.___emitter = g.a),
        (window.___loader = d.publicLoader),
        y.c.listen((t) => {
          t.location.action = t.action;
        }),
        (window.___push = (t) => S(t, { replace: !1 })),
        (window.___replace = (t) => S(t, { replace: !0 })),
        (window.___navigate = (t, e) => S(t, e)),
        w(window.location.pathname),
        Object(o.apiRunnerAsync)("onClientEntry").then(() => {
          Object(o.apiRunner)("registerServiceWorker").length > 0 && n("NSX3");
          const t = (t) =>
              a.a.createElement(
                u.BaseContext.Provider,
                { value: { baseuri: "/", basepath: "/" } },
                a.a.createElement(C.a, t)
              ),
            e = a.a.createContext({});
          let i = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              return (
                Object(r.a)(n, t),
                (n.prototype.render = function () {
                  const { children: t } = this.props;
                  return a.a.createElement(u.Location, null, (n) => {
                    let { location: r } = n;
                    return a.a.createElement(M, { location: r }, (n) => {
                      let { pageResources: r, location: o } = n;
                      const i = Object(d.getStaticQueryResults)();
                      return a.a.createElement(
                        p.StaticQueryContext.Provider,
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
            c = (function (n) {
              function o() {
                return n.apply(this, arguments) || this;
              }
              return (
                Object(r.a)(o, n),
                (o.prototype.render = function () {
                  return a.a.createElement(e.Consumer, null, (e) => {
                    let { pageResources: n, location: r } = e;
                    return a.a.createElement(
                      A,
                      { location: r },
                      a.a.createElement(
                        l.ScrollContext,
                        { location: r, shouldUpdateScroll: _ },
                        a.a.createElement(
                          u.Router,
                          {
                            basepath: "",
                            location: r,
                            id: "gatsby-focus-wrapper",
                          },
                          a.a.createElement(
                            t,
                            Object.assign(
                              {
                                path:
                                  "/404.html" === n.page.path
                                    ? Object(B.a)(r.pathname, "")
                                    : encodeURI(
                                        n.page.matchPath || n.page.path
                                      ),
                              },
                              this.props,
                              { location: r, pageResources: n },
                              n.json
                            )
                          )
                        )
                      )
                    );
                  });
                }),
                o
              );
            })(a.a.Component);
          const { pagePath: h, location: m } = window;
          h &&
            "" + h !== m.pathname &&
            !(
              F.findMatchPath(Object(B.a)(m.pathname, "")) ||
              "/404.html" === h ||
              h.match(/^\/404\/?$/) ||
              h.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            Object(u.navigate)("" + h + m.search + m.hash, { replace: !0 }),
            d.publicLoader.loadPage(m.pathname).then((t) => {
              if (!t || t.status === d.PageResourceStatus.Error)
                throw new Error(
                  "page resources for " +
                    m.pathname +
                    " not found. Not rendering React"
                );
              window.___webpackCompilationHash = t.page.webpackCompilationHash;
              const e = Object(o.apiRunner)(
                  "wrapRootElement",
                  { element: a.a.createElement(c, null) },
                  a.a.createElement(c, null),
                  (t) => {
                    let { result: e } = t;
                    return { element: e };
                  }
                ).pop(),
                n = () => a.a.createElement(i, null, e),
                r = Object(o.apiRunner)(
                  "replaceHydrateFunction",
                  void 0,
                  s.a.hydrate
                )[0];
              f()(() => {
                r(
                  a.a.createElement(n, null),
                  "undefined" != typeof window
                    ? document.getElementById("___gatsby")
                    : void 0,
                  () => {
                    Object(o.apiRunner)("onInitialClientRender");
                  }
                );
              });
            });
        });
    },
    VbXa: function (t, e, n) {
      var r = n("SksO");
      (t.exports = function (t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          r(t, e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    VpIT: function (t, e, n) {
      var r = n("xDBR"),
        o = n("xs3f");
      (t.exports = function (t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.24.1",
        mode: r ? "pure" : "global",
        copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",
        source: "https://github.com/zloirock/core-js",
      });
    },
    Wbzz: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "graphql", function () {
          return m;
        }),
        n.d(e, "StaticQueryContext", function () {
          return h;
        }),
        n.d(e, "StaticQuery", function () {
          return p;
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
      var c = n("7hJ6");
      n.d(e, "useScrollRestoration", function () {
        return c.useScrollRestoration;
      });
      var s = n("lw3w"),
        u = n.n(s);
      n.d(e, "PageRenderer", function () {
        return u.a;
      });
      const l = n("emEt").default.enqueue,
        h = o.a.createContext({});
      function f(t) {
        let { staticQueryData: e, data: n, query: r, render: i } = t;
        const a = n ? n.data : e[r] && e[r].data;
        return o.a.createElement(
          o.a.Fragment,
          null,
          a && i(a),
          !a && o.a.createElement("div", null, "Loading (StaticQuery)")
        );
      }
      const p = (t) => {
          const { data: e, query: n, render: r, children: i } = t;
          return o.a.createElement(h.Consumer, null, (t) =>
            o.a.createElement(f, {
              data: e,
              query: n,
              render: r || i,
              staticQueryData: t,
            })
          );
        },
        d = (t) => {
          var e;
          o.a.useContext;
          const n = o.a.useContext(h);
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
    We1y: function (t, e, n) {
      var r = n("Fib7"),
        o = n("DVFp"),
        i = TypeError;
      t.exports = function (t) {
        if (r(t)) return t;
        throw i(o(t) + " is not a function");
      };
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
          return c;
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
      function c(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++)
            (!r && o in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
        return t.concat(r || Array.prototype.slice.call(e));
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
    Xnc8: function (t, e, n) {
      var r = n("g6v/"),
        o = n("Gi26"),
        i = Function.prototype,
        a = r && Object.getOwnPropertyDescriptor,
        c = o(i, "name"),
        s = c && "something" === function () {}.name,
        u = c && (!r || (r && a(i, "name").configurable));
      t.exports = { EXISTS: c, PROPER: s, CONFIGURABLE: u };
    },
    Y3Q8: function (t, e, n) {
      var r = n("2oRo"),
        o = Object.defineProperty;
      t.exports = function (t, e) {
        try {
          o(r, t, { value: e, configurable: !0, writable: !0 });
        } catch (n) {
          r[t] = e;
        }
        return e;
      };
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
          return I;
        }),
        n.d(e, "Location", function () {
          return v;
        }),
        n.d(e, "LocationProvider", function () {
          return E;
        }),
        n.d(e, "Match", function () {
          return B;
        }),
        n.d(e, "Redirect", function () {
          return M;
        }),
        n.d(e, "Router", function () {
          return P;
        }),
        n.d(e, "ServerLocation", function () {
          return O;
        }),
        n.d(e, "isRedirect", function () {
          return k;
        }),
        n.d(e, "redirectTo", function () {
          return N;
        }),
        n.d(e, "useLocation", function () {
          return H;
        }),
        n.d(e, "useNavigate", function () {
          return F;
        }),
        n.d(e, "useParams", function () {
          return U;
        }),
        n.d(e, "useMatch", function () {
          return G;
        }),
        n.d(e, "BaseContext", function () {
          return w;
        });
      var r = n("q1tI"),
        o = n.n(r),
        i = n("QLaP"),
        a = n.n(i),
        c = n("nqlD"),
        s = n.n(c),
        u = n("94VI"),
        l = n("LYrO");
      n.d(e, "matchPath", function () {
        return l.match;
      });
      var h = n("9Xx/");
      n.d(e, "createHistory", function () {
        return h.a;
      }),
        n.d(e, "createMemorySource", function () {
          return h.b;
        }),
        n.d(e, "navigate", function () {
          return h.d;
        }),
        n.d(e, "globalHistory", function () {
          return h.c;
        });
      var f =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
      function p(t, e) {
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
      var b = function (t, e) {
          var n = s()(e);
          return (n.displayName = t), n;
        },
        y = b("Location"),
        v = function (t) {
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
              if (!k(t)) throw t;
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
      E.defaultProps = { history: h.c };
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
        w = b("Base", { baseuri: "/", basepath: "/" }),
        P = function (t) {
          return o.a.createElement(w.Consumer, null, function (e) {
            return o.a.createElement(v, null, function (n) {
              return o.a.createElement(T, f({}, e, n, t));
            });
          });
        },
        T = (function (t) {
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
                c = (t.baseuri, t.component),
                s = void 0 === c ? "div" : c,
                u = p(t, [
                  "location",
                  "navigate",
                  "basepath",
                  "primary",
                  "children",
                  "baseuri",
                  "component",
                ]),
                h = o.a.Children.toArray(a).reduce(function (t, e) {
                  var n = W(r)(e);
                  return t.concat(n);
                }, []),
                d = e.pathname,
                m = Object(l.pick)(h, d);
              if (m) {
                var g = m.params,
                  b = m.uri,
                  y = m.route,
                  v = m.route.value;
                r = y.default ? r : y.path.replace(/\*$/, "");
                var E = f({}, g, {
                    uri: b,
                    location: e,
                    navigate: function (t, e) {
                      return n(Object(l.resolve)(t, b), e);
                    },
                  }),
                  O = o.a.cloneElement(
                    v,
                    E,
                    v.props.children
                      ? o.a.createElement(
                          P,
                          { location: e, primary: i },
                          v.props.children
                        )
                      : void 0
                  ),
                  T = i ? _ : s,
                  S = i ? f({ uri: b, location: e, component: s }, u) : u;
                return o.a.createElement(
                  w.Provider,
                  { value: { baseuri: b, basepath: r } },
                  o.a.createElement(T, S, O)
                );
              }
              return null;
            }),
            e
          );
        })(o.a.PureComponent);
      T.defaultProps = { primary: !0 };
      var S = b("Focus"),
        _ = function (t) {
          var e = t.uri,
            n = t.location,
            r = t.component,
            i = p(t, ["uri", "location", "component"]);
          return o.a.createElement(S.Consumer, null, function (t) {
            return o.a.createElement(
              A,
              f({}, i, { component: r, requestFocus: t, uri: e, location: n })
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
              if (null == e.uri) return f({ shouldFocus: !0 }, t);
              var n = t.uri !== e.uri,
                r =
                  e.location.pathname !== t.location.pathname &&
                  t.location.pathname === t.uri;
              return f({ shouldFocus: n || r }, t);
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
                  p(e, [
                    "children",
                    "style",
                    "requestFocus",
                    "component",
                    "uri",
                    "location",
                  ]));
              return o.a.createElement(
                i,
                f(
                  {
                    style: f({ outline: "none" }, n),
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
      Object(u.polyfill)(A);
      var C = function () {},
        L = o.a.forwardRef;
      void 0 === L &&
        (L = function (t) {
          return t;
        });
      var I = L(function (t, e) {
        var n = t.innerRef,
          r = p(t, ["innerRef"]);
        return o.a.createElement(w.Consumer, null, function (t) {
          t.basepath;
          var i = t.baseuri;
          return o.a.createElement(v, null, function (t) {
            var a = t.location,
              c = t.navigate,
              s = r.to,
              u = r.state,
              h = r.replace,
              d = r.getProps,
              m = void 0 === d ? C : d,
              g = p(r, ["to", "state", "replace", "getProps"]),
              b = Object(l.resolve)(s, i),
              y = encodeURI(b),
              v = a.pathname === y,
              E = Object(l.startsWith)(a.pathname, y);
            return o.a.createElement(
              "a",
              f(
                { ref: e || n, "aria-current": v ? "page" : void 0 },
                g,
                m({
                  isCurrent: v,
                  isPartiallyCurrent: E,
                  href: b,
                  location: a,
                }),
                {
                  href: b,
                  onClick: function (t) {
                    if ((g.onClick && g.onClick(t), V(t))) {
                      t.preventDefault();
                      var e = h;
                      if ("boolean" != typeof h && v) {
                        var n = f({}, a.state),
                          r = (n.key, p(n, ["key"]));
                        e = Object(l.shallowCompare)(f({}, u), r);
                      }
                      c(b, { state: u, replace: e });
                    }
                  },
                }
              )
            );
          });
        });
      });
      function x(t) {
        this.uri = t;
      }
      I.displayName = "Link";
      var k = function (t) {
          return t instanceof x;
        },
        N = function (t) {
          throw new x(t);
        },
        D = (function (t) {
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
                c = p(t, [
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
                e(Object(l.insertParams)(t, c), { replace: o, state: i });
              });
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = (t.navigate, t.to),
                n = (t.from, t.replace, t.state, t.noThrow),
                r = t.baseuri,
                o = p(t, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ]),
                i = Object(l.resolve)(e, r);
              return n || N(Object(l.insertParams)(i, o)), null;
            }),
            e
          );
        })(o.a.Component),
        M = function (t) {
          return o.a.createElement(w.Consumer, null, function (e) {
            var n = e.baseuri;
            return o.a.createElement(v, null, function (e) {
              return o.a.createElement(D, f({}, e, { baseuri: n }, t));
            });
          });
        },
        B = function (t) {
          var e = t.path,
            n = t.children;
          return o.a.createElement(w.Consumer, null, function (t) {
            var r = t.baseuri;
            return o.a.createElement(v, null, function (t) {
              var o = t.navigate,
                i = t.location,
                a = Object(l.resolve)(e, r),
                c = Object(l.match)(a, i.pathname);
              return n({
                navigate: o,
                location: i,
                match: c ? f({}, c.params, { uri: c.uri, path: e }) : null,
              });
            });
          });
        },
        H = function () {
          var t = Object(r.useContext)(y);
          if (!t)
            throw new Error(
              "useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          return t.location;
        },
        F = function () {
          var t = Object(r.useContext)(y);
          if (!t)
            throw new Error(
              "useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          return t.navigate;
        },
        U = function () {
          var t = Object(r.useContext)(w);
          if (!t)
            throw new Error(
              "useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          var e = H(),
            n = Object(l.match)(t.basepath, e.pathname);
          return n ? n.params : null;
        },
        G = function (t) {
          if (!t)
            throw new Error(
              "useMatch(path: string) requires an argument of a string to match against"
            );
          var e = Object(r.useContext)(w);
          if (!e)
            throw new Error(
              "useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          var n = H(),
            o = Object(l.resolve)(t, e.baseuri),
            i = Object(l.match)(o, n.pathname);
          return i ? f({}, i.params, { uri: i.uri, path: t }) : null;
        },
        q = function (t) {
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
              i = "/" === r ? e : q(e) + "/" + q(r);
            return {
              value: n,
              default: n.props.default,
              path: n.props.children ? q(i) + "/*" : i,
            };
          };
        },
        V = function (t) {
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
        c = n("2oRo"),
        s = n("4zBA"),
        u = n("hh1v"),
        l = n("kRJp"),
        h = n("Gi26"),
        f = n("xs3f"),
        p = n("93I0"),
        d = n("0BK2"),
        m = c.TypeError,
        g = c.WeakMap;
      if (a || f.state) {
        var b = f.state || (f.state = new g()),
          y = s(b.get),
          v = s(b.has),
          E = s(b.set);
        (r = function (t, e) {
          if (v(b, t)) throw new m("Object already initialized");
          return (e.facade = t), E(b, t, e), e;
        }),
          (o = function (t) {
            return y(b, t) || {};
          }),
          (i = function (t) {
            return v(b, t);
          });
      } else {
        var O = p("state");
        (d[O] = !0),
          (r = function (t, e) {
            if (h(t, O)) throw new m("Object already initialized");
            return (e.facade = t), l(t, O, e), e;
          }),
          (o = function (t) {
            return h(t, O) ? t[O] : {};
          }),
          (i = function (t) {
            return h(t, O);
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
            if (!u(e) || (n = o(e)).type !== t)
              throw m("Incompatible receiver, " + t + " required");
            return n;
          };
        },
      };
    },
    b9Nj: function (t, e, n) {
      "use strict";
      var r =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
      e.onRouteUpdate = function (t) {
        var e = t.location,
          n = window.GATSBY_GTAG_PLUGIN_GA_TRACKING_ID,
          o = window.GATSBY_GTAG_PLUGIN_ANONYMIZE || !1;
        if (n && "function" == typeof window.gtag) {
          var i = "";
          e && (i = "" + e.pathname + e.search + e.hash);
          var a = {};
          o && (a = { anonymize_ip: !0 }),
            window.gtag("config", n, r({ page_path: i }, a));
        }
      };
    },
    bmMU: function (t, e, n) {
      n("U3f4");
      var r = "undefined" != typeof Element,
        o = "function" == typeof Map,
        i = "function" == typeof Set,
        a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      t.exports = function (t, e) {
        try {
          return (function t(e, n) {
            if (e === n) return !0;
            if (e && n && "object" == typeof e && "object" == typeof n) {
              if (e.constructor !== n.constructor) return !1;
              var c, s, u, l;
              if (Array.isArray(e)) {
                if ((c = e.length) != n.length) return !1;
                for (s = c; 0 != s--; ) if (!t(e[s], n[s])) return !1;
                return !0;
              }
              if (o && e instanceof Map && n instanceof Map) {
                if (e.size !== n.size) return !1;
                for (l = e.entries(); !(s = l.next()).done; )
                  if (!n.has(s.value[0])) return !1;
                for (l = e.entries(); !(s = l.next()).done; )
                  if (!t(s.value[1], n.get(s.value[0]))) return !1;
                return !0;
              }
              if (i && e instanceof Set && n instanceof Set) {
                if (e.size !== n.size) return !1;
                for (l = e.entries(); !(s = l.next()).done; )
                  if (!n.has(s.value[0])) return !1;
                return !0;
              }
              if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(n)) {
                if ((c = e.length) != n.length) return !1;
                for (s = c; 0 != s--; ) if (e[s] !== n[s]) return !1;
                return !0;
              }
              if (e.constructor === RegExp)
                return e.source === n.source && e.flags === n.flags;
              if (e.valueOf !== Object.prototype.valueOf)
                return e.valueOf() === n.valueOf();
              if (e.toString !== Object.prototype.toString)
                return e.toString() === n.toString();
              if ((c = (u = Object.keys(e)).length) !== Object.keys(n).length)
                return !1;
              for (s = c; 0 != s--; )
                if (!Object.prototype.hasOwnProperty.call(n, u[s])) return !1;
              if (r && e instanceof Element) return !1;
              for (s = c; 0 != s--; )
                if (
                  (("_owner" !== u[s] && "__v" !== u[s] && "__o" !== u[s]) ||
                    !e.$$typeof) &&
                  !t(e[u[s]], n[u[s]])
                )
                  return !1;
              return !0;
            }
            return e != e && n != n;
          })(t, e);
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw n;
        }
      };
    },
    cDf5: function (t, e) {
      function n(e) {
        return (
          (t.exports = n =
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
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
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
          r = e && e.serializer ? e.serializer : s;
        return (e && e.strategy ? e.strategy : c)(t, {
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
      function c(t, e) {
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
          return h;
        });
      var s = function () {
        return JSON.stringify(arguments);
      };
      function u() {
        this.cache = Object.create(null);
      }
      (u.prototype.get = function (t) {
        return this.cache[t];
      }),
        (u.prototype.set = function (t, e) {
          this.cache[t] = e;
        });
      var l = {
          create: function () {
            return new u();
          },
        },
        h = {
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
    dI71: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return (r = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
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
    emEt: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "PageResourceStatus", function () {
          return d;
        }),
        n.d(e, "BaseLoader", function () {
          return v;
        }),
        n.d(e, "ProdLoader", function () {
          return w;
        }),
        n.d(e, "setLoader", function () {
          return P;
        }),
        n.d(e, "publicLoader", function () {
          return T;
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
      var a = n("rePB");
      const c = (function (t) {
          if ("undefined" == typeof document) return !1;
          const e = document.createElement("link");
          try {
            if (e.relList && "function" == typeof e.relList.supports)
              return e.relList.supports(t);
          } catch (n) {
            return !1;
          }
          return !1;
        })("prefetch")
          ? function (t, e) {
              return new Promise((n, r) => {
                if ("undefined" == typeof document) return void r();
                const o = document.createElement("link");
                o.setAttribute("rel", "prefetch"),
                  o.setAttribute("href", t),
                  Object.keys(e).forEach((t) => {
                    o.setAttribute(t, e[t]);
                  }),
                  (o.onload = n),
                  (o.onerror = r);
                (
                  document.getElementsByTagName("head")[0] ||
                  document.getElementsByName("script")[0].parentNode
                ).appendChild(o);
              });
            }
          : function (t) {
              return new Promise((e, n) => {
                const r = new XMLHttpRequest();
                r.open("GET", t, !0),
                  (r.onload = () => {
                    200 === r.status ? e() : n();
                  }),
                  r.send(null);
              });
            },
        s = {};
      var u = function (t, e) {
          return new Promise((n) => {
            s[t]
              ? n()
              : c(t, e)
                  .then(() => {
                    n(), (s[t] = !0);
                  })
                  .catch(() => {});
          });
        },
        l = n("5yr3"),
        h = n("30RF");
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
                Object(a.a)(t, e, n[e]);
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
      const d = { Error: "error", Success: "success" },
        m = (t) => (t && t.default) || t,
        g = (t) => {
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
      function b(t, e) {
        return (
          void 0 === e && (e = "GET"),
          new Promise((n, r) => {
            const o = new XMLHttpRequest();
            o.open(e, t, !0),
              (o.onreadystatechange = () => {
                4 == o.readyState && n(o);
              }),
              o.send(null);
          })
        );
      }
      const y = function (t, e) {
        void 0 === e && (e = null);
        const n = {
          componentChunkName: t.componentChunkName,
          path: t.path,
          webpackCompilationHash: t.webpackCompilationHash,
          matchPath: t.matchPath,
          staticQueryHashes: t.staticQueryHashes,
        };
        return { component: e, json: t.result, page: n };
      };
      let v = (function () {
        function t(t, e) {
          (this.inFlightNetworkRequests = new Map()),
            (this.pageDb = new Map()),
            (this.inFlightDb = new Map()),
            (this.staticQueryDb = {}),
            (this.pageDataDb = new Map()),
            (this.prefetchTriggered = new Set()),
            (this.prefetchCompleted = new Set()),
            (this.loadComponent = t),
            Object(h.d)(e);
        }
        var e = t.prototype;
        return (
          (e.memoizedGet = function (t) {
            let e = this.inFlightNetworkRequests.get(t);
            return (
              e || ((e = b(t, "GET")), this.inFlightNetworkRequests.set(t, e)),
              e
                .then((e) => (this.inFlightNetworkRequests.delete(t), e))
                .catch((e) => {
                  throw (this.inFlightNetworkRequests.delete(t), e);
                })
            );
          }),
          (e.setApiRunner = function (t) {
            (this.apiRunner = t),
              (this.prefetchDisabled = t("disableCorePrefetching").some(
                (t) => t
              ));
          }),
          (e.fetchPageDataJson = function (t) {
            const { pagePath: e, retries: n = 0 } = t,
              r = g(e);
            return this.memoizedGet(r).then((r) => {
              const { status: o, responseText: i } = r;
              if (200 === o)
                try {
                  const e = JSON.parse(i);
                  if (void 0 === e.path)
                    throw new Error("not a valid pageData response");
                  return Object.assign(t, { status: d.Success, payload: e });
                } catch (a) {}
              return 404 === o || 200 === o
                ? "/404.html" === e
                  ? Object.assign(t, { status: d.Error })
                  : this.fetchPageDataJson(
                      Object.assign(t, { pagePath: "/404.html", notFound: !0 })
                    )
                : 500 === o
                ? Object.assign(t, { status: d.Error })
                : n < 3
                ? this.fetchPageDataJson(Object.assign(t, { retries: n + 1 }))
                : Object.assign(t, { status: d.Error });
            });
          }),
          (e.loadPageDataJson = function (t) {
            const e = Object(h.b)(t);
            if (this.pageDataDb.has(e)) {
              const t = this.pageDataDb.get(e);
              return Promise.resolve(t);
            }
            return this.fetchPageDataJson({ pagePath: e }).then(
              (t) => (this.pageDataDb.set(e, t), t)
            );
          }),
          (e.findMatchPath = function (t) {
            return Object(h.a)(t);
          }),
          (e.loadPage = function (t) {
            const e = Object(h.b)(t);
            if (this.pageDb.has(e)) {
              const t = this.pageDb.get(e);
              return Promise.resolve(t.payload);
            }
            if (this.inFlightDb.has(e)) return this.inFlightDb.get(e);
            const n = Promise.all([
              this.loadAppData(),
              this.loadPageDataJson(e),
            ]).then((t) => {
              const n = t[1];
              if (n.status === d.Error) return { status: d.Error };
              let r = n.payload;
              const { componentChunkName: o, staticQueryHashes: i = [] } = r,
                a = {},
                c = this.loadComponent(o).then((e) => {
                  let o;
                  return (
                    (a.createdAt = new Date()),
                    e
                      ? ((a.status = d.Success),
                        !0 === n.notFound && (a.notFound = !0),
                        (r = Object.assign(r, {
                          webpackCompilationHash: t[0]
                            ? t[0].webpackCompilationHash
                            : "",
                        })),
                        (o = y(r, e)))
                      : (a.status = d.Error),
                    o
                  );
                }),
                s = Promise.all(
                  i.map((t) => {
                    if (this.staticQueryDb[t]) {
                      const e = this.staticQueryDb[t];
                      return { staticQueryHash: t, jsonPayload: e };
                    }
                    return this.memoizedGet(
                      "/page-data/sq/d/" + t + ".json"
                    ).then((e) => {
                      const n = JSON.parse(e.responseText);
                      return { staticQueryHash: t, jsonPayload: n };
                    });
                  })
                ).then((t) => {
                  const e = {};
                  return (
                    t.forEach((t) => {
                      let { staticQueryHash: n, jsonPayload: r } = t;
                      (e[n] = r), (this.staticQueryDb[n] = r);
                    }),
                    e
                  );
                });
              return Promise.all([c, s]).then((t) => {
                let n,
                  [r, o] = t;
                return (
                  r &&
                    ((n = p(p({}, r), {}, { staticQueryResults: o })),
                    (a.payload = n),
                    l.a.emit("onPostLoadPageResources", {
                      page: n,
                      pageResources: n,
                    })),
                  this.pageDb.set(e, a),
                  n
                );
              });
            });
            return (
              n
                .then((t) => {
                  this.inFlightDb.delete(e);
                })
                .catch((t) => {
                  throw (this.inFlightDb.delete(e), t);
                }),
              this.inFlightDb.set(e, n),
              n
            );
          }),
          (e.loadPageSync = function (t) {
            const e = Object(h.b)(t);
            if (this.pageDb.has(e)) {
              return this.pageDb.get(e).payload;
            }
          }),
          (e.shouldPrefetch = function (t) {
            return (
              !!(() => {
                if (
                  "connection" in navigator &&
                  void 0 !== navigator.connection
                ) {
                  if ((navigator.connection.effectiveType || "").includes("2g"))
                    return !1;
                  if (navigator.connection.saveData) return !1;
                }
                return !0;
              })() && !this.pageDb.has(t)
            );
          }),
          (e.prefetch = function (t) {
            if (!this.shouldPrefetch(t)) return !1;
            if (
              (this.prefetchTriggered.has(t) ||
                (this.apiRunner("onPrefetchPathname", { pathname: t }),
                this.prefetchTriggered.add(t)),
              this.prefetchDisabled)
            )
              return !1;
            const e = Object(h.b)(t);
            return (
              this.doPrefetch(e).then(() => {
                this.prefetchCompleted.has(t) ||
                  (this.apiRunner("onPostPrefetchPathname", { pathname: t }),
                  this.prefetchCompleted.add(t));
              }),
              !0
            );
          }),
          (e.doPrefetch = function (t) {
            const e = g(t);
            return u(e, { crossOrigin: "anonymous", as: "fetch" }).then(() =>
              this.loadPageDataJson(t)
            );
          }),
          (e.hovering = function (t) {
            this.loadPage(t);
          }),
          (e.getResourceURLsForPathname = function (t) {
            const e = Object(h.b)(t),
              n = this.pageDataDb.get(e);
            if (n) {
              const t = y(n.payload);
              return [].concat(i(E(t.page.componentChunkName)), [g(e)]);
            }
            return null;
          }),
          (e.isPageNotFound = function (t) {
            const e = Object(h.b)(t),
              n = this.pageDb.get(e);
            return !n || n.notFound;
          }),
          (e.loadAppData = function (t) {
            return (
              void 0 === t && (t = 0),
              this.memoizedGet("/page-data/app-data.json").then((e) => {
                const { status: n, responseText: r } = e;
                let o;
                if (200 !== n && t < 3) return this.loadAppData(t + 1);
                if (200 === n)
                  try {
                    const t = JSON.parse(r);
                    if (void 0 === t.webpackCompilationHash)
                      throw new Error("not a valid app-data response");
                    o = t;
                  } catch (i) {}
                return o;
              })
            );
          }),
          t
        );
      })();
      const E = (t) => (window.___chunkMapping[t] || []).map((t) => "" + t);
      let O,
        w = (function (t) {
          function e(e, n) {
            return (
              t.call(
                this,
                (t) =>
                  e.components[t]
                    ? e.components[t]()
                        .then(m)
                        .catch(() => null)
                    : Promise.resolve(),
                n
              ) || this
            );
          }
          Object(r.a)(e, t);
          var n = e.prototype;
          return (
            (n.doPrefetch = function (e) {
              return t.prototype.doPrefetch.call(this, e).then((t) => {
                if (t.status !== d.Success) return Promise.resolve();
                const e = t.payload,
                  n = e.componentChunkName,
                  r = E(n);
                return Promise.all(r.map(u)).then(() => e);
              });
            }),
            (n.loadPageDataJson = function (e) {
              return t.prototype.loadPageDataJson
                .call(this, e)
                .then((t) =>
                  t.notFound
                    ? b(e, "HEAD").then((e) =>
                        200 === e.status ? { status: d.Error } : t
                      )
                    : t
                );
            }),
            e
          );
        })(v);
      const P = (t) => {
          O = t;
        },
        T = {
          getResourcesForPathname: (t) => (
            console.warn(
              "Warning: getResourcesForPathname is deprecated. Use loadPage instead"
            ),
            O.i.loadPage(t)
          ),
          getResourcesForPathnameSync: (t) => (
            console.warn(
              "Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead"
            ),
            O.i.loadPageSync(t)
          ),
          enqueue: (t) => O.prefetch(t),
          getResourceURLsForPathname: (t) => O.getResourceURLsForPathname(t),
          loadPage: (t) => O.loadPage(t),
          loadPageSync: (t) => O.loadPageSync(t),
          prefetch: (t) => O.prefetch(t),
          isPageNotFound: (t) => O.isPageNotFound(t),
          hovering: (t) => O.hovering(t),
          loadAppData: () => O.loadAppData(),
        };
      e.default = T;
      function S() {
        return O ? O.staticQueryDb : {};
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
        o = n("+IEj");
      const i = r.createContext(o.defaultLang),
        a = (t) => {
          let {
            children: e,
            pageContext: { locale: n = o.defaultLang },
          } = t;
          return r.createElement(i.Provider, { value: n }, e);
        };
    },
    ewvW: function (t, e, n) {
      var r = n("HYAF"),
        o = Object;
      t.exports = function (t) {
        return o(r(t));
      };
    },
    f5p1: function (t, e, n) {
      var r = n("2oRo"),
        o = n("Fib7"),
        i = n("iSVu"),
        a = r.WeakMap;
      t.exports = o(a) && /native code/.test(i(a));
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
          return b;
        });
      var r = n("rePB"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("7ljp"),
        c = n("BfwJ"),
        s = n("gXpC"),
        u = n("JTKy").default,
        l = Object.assign({}, u);
      function h(t, e) {
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
            ? h(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      const p = {},
        d = (t) =>
          function (e) {
            const { Component: n } = t.find((t) => {
              let { guard: n } = t;
              return !n || n(e);
            });
            return i.a.createElement(n, e);
          };
      s.plugins.forEach((t) => {
        let { guards: e = {}, components: n } = t;
        Object.entries(n).forEach((t) => {
          let [n, r] = t;
          p[n]
            ? p.push({ guard: e[n], Component: r })
            : (p[n] = [{ guard: e[n], Component: r }]);
        });
      });
      const m = Object.entries(p)
          .map((t) => {
            let [e, n] = t;
            return { [e]: d(n.concat({ guard: void 0, Component: e })) };
          })
          .reduce((t, e) => f(f({}, t), e), {}),
        g = Object(a.withMDXComponents)((t) => {
          let { components: e, children: n } = t;
          return i.a.createElement(
            c.MDXScopeProvider,
            { __mdxScope: l },
            i.a.createElement(a.MDXProvider, { components: f(f({}, e), m) }, n)
          );
        });
      const b = (t) => {
        let { element: e } = t;
        return i.a.createElement(g, null, e);
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
      var r = n("hh1v"),
        o = String,
        i = TypeError;
      t.exports = function (t) {
        if (r(t)) return t;
        throw i(o(t) + " is not an object");
      };
    },
    hd9s: function (t, e, n) {
      "use strict";
      var r = n("284h"),
        o = n("TqRt");
      (e.__esModule = !0), (e.ScrollContainer = void 0);
      var i = o(n("pVnL")),
        a = o(n("VbXa")),
        c = r(n("q1tI")),
        s = o(n("i8i4")),
        u = o(n("17x9")),
        l = n("Enzk"),
        h = n("YwZP"),
        f = {
          scrollKey: u.default.string.isRequired,
          shouldUpdateScroll: u.default.func,
          children: u.default.element.isRequired,
        },
        p = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          (0, a.default)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              var t = this,
                e = s.default.findDOMNode(this),
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
        })(c.Component),
        d = function (t) {
          return c.createElement(h.Location, null, function (e) {
            var n = e.location;
            return c.createElement(l.ScrollContext.Consumer, null, function (
              e
            ) {
              return c.createElement(
                p,
                (0, i.default)({}, t, { context: e, location: n })
              );
            });
          });
        };
      (e.ScrollContainer = d), (d.propTypes = f);
    },
    hh1v: function (t, e, n) {
      var r = n("Fib7");
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : r(t);
      };
    },
    iSVu: function (t, e, n) {
      var r = n("4zBA"),
        o = n("Fib7"),
        i = n("xs3f"),
        a = r(Function.toString);
      o(i.inspectSource) ||
        (i.inspectSource = function (t) {
          return a(t);
        }),
        (t.exports = i.inspectSource);
    },
    k7kT: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "wrapPageElement", function () {
          return X;
        });
      var r = n("q1tI"),
        o = n("X52I"),
        i = n("2OET"),
        a = n("N3fz"),
        c = n("siyQ"),
        s = n("7LaZ"),
        u = n("Mu++"),
        l = n("EuEu"),
        h = n("KuiD");
      function f(t, e) {
        return Object.keys(t).reduce(function (n, r) {
          return (n[r] = Object(c.a)({ timeZone: e }, t[r])), n;
        }, {});
      }
      function p(t, e) {
        return Object.keys(Object(c.a)(Object(c.a)({}, t), e)).reduce(function (
          n,
          r
        ) {
          return (
            (n[r] = Object(c.a)(Object(c.a)({}, t[r] || {}), e[r] || {})), n
          );
        },
        {});
      }
      function d(t, e) {
        if (!e) return t;
        var n = u.a.formats;
        return Object(c.a)(Object(c.a)(Object(c.a)({}, n), t), {
          date: p(f(n.date, e), f(t.date || {}, e)),
          time: p(f(n.time, e), f(t.time || {}, e)),
        });
      }
      function m(t, e, n, r, o) {
        var i = t.locale,
          a = t.formats,
          u = t.messages,
          f = t.defaultLocale,
          p = t.defaultFormats,
          m = t.fallbackOnEmptyString,
          g = t.onError,
          b = t.timeZone,
          y = t.defaultRichTextElements;
        void 0 === n && (n = { id: "" });
        var v = n.id,
          E = n.defaultMessage;
        Object(s.a)(
          !!v,
          "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue"
        );
        var O = String(v),
          w = u && Object.prototype.hasOwnProperty.call(u, O) && u[O];
        if (Array.isArray(w) && 1 === w.length && w[0].type === h.a.literal)
          return w[0].value;
        if (!r && w && "string" == typeof w && !y)
          return w.replace(/'\{(.*?)\}'/gi, "{$1}");
        if (
          ((r = Object(c.a)(Object(c.a)({}, y), r || {})),
          (a = d(a, b)),
          (p = d(p, b)),
          !w)
        ) {
          if (!1 === m && "" === w) return w;
          if (
            ((!E || (i && i.toLowerCase() !== f.toLowerCase())) &&
              g(new l.g(n, i)),
            E)
          )
            try {
              return e.getMessageFormat(E, f, p, o).format(r);
            } catch (P) {
              return (
                g(
                  new l.e(
                    'Error formatting default message for: "'.concat(
                      O,
                      '", rendering default message verbatim'
                    ),
                    i,
                    n,
                    P
                  )
                ),
                "string" == typeof E ? E : O
              );
            }
          return O;
        }
        try {
          return e
            .getMessageFormat(w, i, a, Object(c.a)({ formatters: e }, o || {}))
            .format(r);
        } catch (P) {
          g(
            new l.e(
              'Error formatting message: "'
                .concat(O, '", using ')
                .concat(E ? "default message" : "id", " as fallback."),
              i,
              n,
              P
            )
          );
        }
        if (E)
          try {
            return e.getMessageFormat(E, f, p, o).format(r);
          } catch (P) {
            g(
              new l.e(
                'Error formatting the default message for: "'.concat(
                  O,
                  '", rendering message verbatim'
                ),
                i,
                n,
                P
              )
            );
          }
        return "string" == typeof w ? w : "string" == typeof E ? E : O;
      }
      var g = n("1VXf"),
        b = [
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
          c = (a && Object(g.e)(o, "number", a, i)) || {};
        return e(r, Object(g.d)(n, b, c));
      }
      function v(t, e, n, r) {
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
      function P(t, e, n, r, o) {
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
              c = (!!a && Object(g.e)(o, "relative", a, i)) || {};
            return e(r, Object(g.d)(n, w, c));
          })(t, e, o).format(n, r);
        } catch (i) {
          t.onError(new l.c("Error formatting relative time.", t.locale, i));
        }
        return String(n);
      }
      var T = [
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
          s = t.timeZone;
        void 0 === r && (r = {});
        var u = r.format,
          l = Object(c.a)(
            Object(c.a)({}, s && { timeZone: s }),
            u && Object(g.e)(i, e, u, a)
          ),
          h = Object(g.d)(r, T, l);
        return (
          "time" !== e ||
            h.hour ||
            h.minute ||
            h.second ||
            h.timeStyle ||
            h.dateStyle ||
            (h = Object(c.a)(Object(c.a)({}, h), {
              hour: "numeric",
              minute: "numeric",
            })),
          n(o, h)
        );
      }
      function _(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          c = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return S(t, "date", e, a).format(c);
        } catch (s) {
          t.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting date.", s));
        }
        return String(c);
      }
      function j(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          c = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return S(t, "time", e, a).format(c);
        } catch (s) {
          t.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting time.", s));
        }
        return String(c);
      }
      function R(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = n[2],
          c = void 0 === a ? {} : a,
          s = t.timeZone,
          u = t.locale,
          h = t.onError,
          f = Object(g.d)(c, T, s ? { timeZone: s } : {});
        try {
          return e(u, f).formatRange(o, i);
        } catch (p) {
          h(new l.a(l.b.FORMAT_ERROR, "Error formatting date time range.", p));
        }
        return String(o);
      }
      function A(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          c = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return S(t, "date", e, a).formatToParts(c);
        } catch (s) {
          t.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting date.", s));
        }
        return [];
      }
      function C(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          c = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return S(t, "time", e, a).formatToParts(c);
        } catch (s) {
          t.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting time.", s));
        }
        return [];
      }
      var L = ["localeMatcher", "type"];
      function I(t, e, n, r) {
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
        } catch (c) {
          i(new l.c("Error formatting plural.", o, c));
        }
        return "other";
      }
      var x = ["localeMatcher", "type", "style"],
        k = Date.now();
      function N(t, e, n, r) {
        void 0 === r && (r = {});
        var o = D(t, e, n, r).reduce(function (t, e) {
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
      function D(t, e, n, r) {
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
        var a = Object(g.d)(r, x);
        try {
          var s = {},
            u = n.map(function (t, e) {
              if ("object" == typeof t) {
                var n = (function (t) {
                  return "".concat(k, "_").concat(t, "_").concat(k);
                })(e);
                return (s[n] = t), n;
              }
              return String(t);
            });
          return e(o, a)
            .formatToParts(u)
            .map(function (t) {
              return "literal" === t.type
                ? t
                : Object(c.a)(Object(c.a)({}, t), {
                    value: s[t.value] || t.value,
                  });
            });
        } catch (h) {
          i(new l.a(l.b.FORMAT_ERROR, "Error formatting list.", h));
        }
        return n;
      }
      var M = ["localeMatcher", "style", "type", "fallback"];
      function B(t, e, n, r) {
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
        } catch (c) {
          i(new l.a(l.b.FORMAT_ERROR, "Error formatting display name.", c));
        }
      }
      function H(t) {
        var e;
        t.onWarn &&
          t.defaultRichTextElements &&
          "string" ==
            typeof ((e = t.messages || {}) ? e[Object.keys(e)[0]] : void 0) &&
          t.onWarn(
            '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution'
          );
      }
      var F = n("/d+U");
      function U(t) {
        return {
          locale: t.locale,
          timeZone: t.timeZone,
          fallbackOnEmptyString: t.fallbackOnEmptyString,
          formats: t.formats,
          textComponent: t.textComponent,
          messages: t.messages,
          defaultLocale: t.defaultLocale,
          defaultFormats: t.defaultFormats,
          onError: t.onError,
          onWarn: t.onWarn,
          wrapRichTextChunksInFragment: t.wrapRichTextChunksInFragment,
          defaultRichTextElements: t.defaultRichTextElements,
        };
      }
      function G(t) {
        return t
          ? Object.keys(t).reduce(function (e, n) {
              var r = t[n];
              return (e[n] = Object(F.c)(r) ? Object(a.b)(r) : r), e;
            }, {})
          : t;
      }
      var q = function (t, e, n, i) {
          for (var a = [], c = 4; c < arguments.length; c++)
            a[c - 4] = arguments[c];
          var s = G(i),
            u = m.apply(void 0, Object(o.d)([t, e, n, s], a, !1));
          return Array.isArray(u) ? r.Children.toArray(u) : u;
        },
        W = function (t, e) {
          var n = t.defaultRichTextElements,
            r = Object(o.c)(t, ["defaultRichTextElements"]),
            i = G(n),
            s = (function (t, e) {
              var n = Object(g.b)(e),
                r = Object(c.a)(Object(c.a)({}, g.a), t),
                o = r.locale,
                i = r.defaultLocale,
                a = r.onError;
              return (
                o
                  ? !Intl.NumberFormat.supportedLocalesOf(o).length && a
                    ? a(
                        new l.f(
                          'Missing locale data for locale: "'
                            .concat(
                              o,
                              '" in Intl.NumberFormat. Using default locale: "'
                            )
                            .concat(
                              i,
                              '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'
                            )
                        )
                      )
                    : !Intl.DateTimeFormat.supportedLocalesOf(o).length &&
                      a &&
                      a(
                        new l.f(
                          'Missing locale data for locale: "'
                            .concat(
                              o,
                              '" in Intl.DateTimeFormat. Using default locale: "'
                            )
                            .concat(
                              i,
                              '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'
                            )
                        )
                      )
                  : (a &&
                      a(
                        new l.d(
                          '"locale" was not configured, using "'.concat(
                            i,
                            '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'
                          )
                        )
                      ),
                    (r.locale = r.defaultLocale || "en")),
                H(r),
                Object(c.a)(Object(c.a)({}, r), {
                  formatters: n,
                  formatNumber: v.bind(null, r, n.getNumberFormat),
                  formatNumberToParts: E.bind(null, r, n.getNumberFormat),
                  formatRelativeTime: P.bind(null, r, n.getRelativeTimeFormat),
                  formatDate: _.bind(null, r, n.getDateTimeFormat),
                  formatDateToParts: A.bind(null, r, n.getDateTimeFormat),
                  formatTime: j.bind(null, r, n.getDateTimeFormat),
                  formatDateTimeRange: R.bind(null, r, n.getDateTimeFormat),
                  formatTimeToParts: C.bind(null, r, n.getDateTimeFormat),
                  formatPlural: I.bind(null, r, n.getPluralRules),
                  formatMessage: m.bind(null, r, n),
                  $t: m.bind(null, r, n),
                  formatList: N.bind(null, r, n.getListFormat),
                  formatListToParts: D.bind(null, r, n.getListFormat),
                  formatDisplayName: B.bind(null, r, n.getDisplayNames),
                })
              );
            })(
              Object(o.a)(Object(o.a)(Object(o.a)({}, a.a), r), {
                defaultRichTextElements: i,
              }),
              e
            );
          return Object(o.a)(Object(o.a)({}, s), {
            formatMessage: q.bind(
              null,
              {
                locale: s.locale,
                timeZone: s.timeZone,
                fallbackOnEmptyString: s.fallbackOnEmptyString,
                formats: s.formats,
                defaultLocale: s.defaultLocale,
                defaultFormats: s.defaultFormats,
                messages: s.messages,
                onError: s.onError,
                defaultRichTextElements: i,
              },
              s.formatters
            ),
          });
        },
        V = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.cache = Object(g.c)()),
              (e.state = {
                cache: e.cache,
                intl: W(U(e.props), e.cache),
                prevConfig: U(e.props),
              }),
              e
            );
          }
          return (
            Object(o.b)(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              var n = e.prevConfig,
                r = e.cache,
                o = U(t);
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
        })(r.PureComponent);
      const X = (t) => {
        let { element: e, props: o } = t;
        const i = o.pageContext.locale,
          a = n("fQgO")("./" + i + ".json");
        return r.createElement(V, { locale: i, key: i, messages: a }, e);
      };
    },
    kOOl: function (t, e, n) {
      var r = n("4zBA"),
        o = 0,
        i = Math.random(),
        a = r((1).toString);
      t.exports = function (t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36);
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
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    lw3w: function (t, e, n) {
      var r;
      t.exports = ((r = n("rzlk")) && r.default) || r;
    },
    "m/L8": function (t, e, n) {
      var r = n("g6v/"),
        o = n("DPsx"),
        i = n("rtlb"),
        a = n("glrk"),
        c = n("oEtG"),
        s = TypeError,
        u = Object.defineProperty,
        l = Object.getOwnPropertyDescriptor;
      e.f = r
        ? i
          ? function (t, e, n) {
              if (
                (a(t),
                (e = c(e)),
                a(n),
                "function" == typeof t &&
                  "prototype" === e &&
                  "value" in n &&
                  "writable" in n &&
                  !n.writable)
              ) {
                var r = l(t, e);
                r &&
                  r.writable &&
                  ((t[e] = n.value),
                  (n = {
                    configurable:
                      "configurable" in n ? n.configurable : r.configurable,
                    enumerable: "enumerable" in n ? n.enumerable : r.enumerable,
                    writable: !1,
                  }));
              }
              return u(t, e, n);
            }
          : u
        : function (t, e, n) {
            if ((a(t), (e = c(e)), a(n), o))
              try {
                return u(t, e, n);
              } catch (r) {}
            if ("get" in n || "set" in n) throw s("Accessors not supported");
            return "value" in n && (t[e] = n.value), t;
          };
    },
    npZl: function (t, e, n) {
      "use strict";
      var r = n("TqRt");
      n("Wbzz"), r(n("9hXx"));
    },
    nqlD: function (t, e, n) {
      const { createContext: r } = n("q1tI");
      (t.exports = r), (t.exports.default = r);
    },
    oEtG: function (t, e, n) {
      var r = n("wE6v"),
        o = n("2bX/");
      t.exports = function (t) {
        var e = r(t, "string");
        return o(e) ? e : e + "";
      };
    },
    pVnL: function (t, e) {
      function n() {
        return (
          (t.exports = n = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n.apply(this, arguments)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    pWkz: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "onRouteUpdate", function () {
          return a;
        }),
        n.d(e, "onInitialClientRender", function () {
          return c;
        });
      const r = new Set();
      function o(t, e) {
        let n = null;
        return function () {
          n && clearTimeout(n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          n = setTimeout.apply(void 0, [t, e].concat(o));
        };
      }
      function i() {
        function t(t) {
          r.has(t.name) ||
            (r.add(t.name),
            (function (t) {
              let { name: e, value: n, id: r } = t;
              window.ga("send", "event", {
                eventCategory: "Web Vitals",
                eventAction: e,
                eventLabel: r,
                eventValue: Math.round("CLS" === e ? 1e3 * n : n),
                nonInteraction: !0,
                transport: "beacon",
              });
            })(t));
        }
        return n
          .e(13)
          .then(n.bind(null, "UfIE"))
          .then((e) => {
            let { getLCP: n, getFID: r, getCLS: i } = e;
            const a = o(t, 3e3),
              c = t,
              s = o(t, 3e3);
            i(a, !0), r(c, !0), n(s, !0);
          });
      }
      const a = function (t, e) {
        let { location: n } = t;
        void 0 === e && (e = {});
        const r = window.ga;
        if ("function" != typeof r) return null;
        if (
          n &&
          void 0 !== window.excludeGAPaths &&
          window.excludeGAPaths.some((t) => t.test(n.pathname))
        )
          return null;
        const o = Math.max(32, e.pageTransitionDelay || 0);
        return (
          setTimeout(() => {
            const t = n ? n.pathname + n.search + n.hash : void 0;
            r("set", "page", t), r("send", "pageview");
          }, o),
          null
        );
      };
      function c(t, e) {
        "function" == typeof ga && e.enableWebVitalsTracking && i();
      }
    },
    qT12: function (t, e, n) {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        c = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        l = r ? Symbol.for("react.context") : 60110,
        h = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        d = r ? Symbol.for("react.suspense") : 60113,
        m = r ? Symbol.for("react.suspense_list") : 60120,
        g = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        v = r ? Symbol.for("react.fundamental") : 60117,
        E = r ? Symbol.for("react.responder") : 60118,
        O = r ? Symbol.for("react.scope") : 60119;
      function w(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case o:
              switch ((t = t.type)) {
                case h:
                case f:
                case a:
                case s:
                case c:
                case d:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case l:
                    case p:
                    case b:
                    case g:
                    case u:
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
      function P(t) {
        return w(t) === f;
      }
      (e.AsyncMode = h),
        (e.ConcurrentMode = f),
        (e.ContextConsumer = l),
        (e.ContextProvider = u),
        (e.Element = o),
        (e.ForwardRef = p),
        (e.Fragment = a),
        (e.Lazy = b),
        (e.Memo = g),
        (e.Portal = i),
        (e.Profiler = s),
        (e.StrictMode = c),
        (e.Suspense = d),
        (e.isAsyncMode = function (t) {
          return P(t) || w(t) === h;
        }),
        (e.isConcurrentMode = P),
        (e.isContextConsumer = function (t) {
          return w(t) === l;
        }),
        (e.isContextProvider = function (t) {
          return w(t) === u;
        }),
        (e.isElement = function (t) {
          return "object" == typeof t && null !== t && t.$$typeof === o;
        }),
        (e.isForwardRef = function (t) {
          return w(t) === p;
        }),
        (e.isFragment = function (t) {
          return w(t) === a;
        }),
        (e.isLazy = function (t) {
          return w(t) === b;
        }),
        (e.isMemo = function (t) {
          return w(t) === g;
        }),
        (e.isPortal = function (t) {
          return w(t) === i;
        }),
        (e.isProfiler = function (t) {
          return w(t) === s;
        }),
        (e.isStrictMode = function (t) {
          return w(t) === c;
        }),
        (e.isSuspense = function (t) {
          return w(t) === d;
        }),
        (e.isValidElementType = function (t) {
          return (
            "string" == typeof t ||
            "function" == typeof t ||
            t === a ||
            t === f ||
            t === s ||
            t === c ||
            t === d ||
            t === m ||
            ("object" == typeof t &&
              null !== t &&
              (t.$$typeof === b ||
                t.$$typeof === g ||
                t.$$typeof === u ||
                t.$$typeof === l ||
                t.$$typeof === p ||
                t.$$typeof === v ||
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
        var r,
          o,
          i,
          a,
          c = n("17x9"),
          s = n.n(c),
          u = n("8+s/"),
          l = n.n(u),
          h = n("bmMU"),
          f = n.n(h),
          p = n("q1tI"),
          d = n.n(p),
          m = n("YVoz"),
          g = n.n(m),
          b = "bodyAttributes",
          y = "htmlAttributes",
          v = "titleAttributes",
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
          P = "href",
          T = "http-equiv",
          S = "innerHTML",
          _ = "itemprop",
          j = "name",
          R = "property",
          A = "rel",
          C = "src",
          L = "target",
          I = {
            accesskey: "accessKey",
            charset: "charSet",
            class: "className",
            contenteditable: "contentEditable",
            contextmenu: "contextMenu",
            "http-equiv": "httpEquiv",
            itemprop: "itemProp",
            tabindex: "tabIndex",
          },
          x = "defaultTitle",
          k = "defer",
          N = "encodeSpecialCharacters",
          D = "onChangeClientState",
          M = "titleTemplate",
          B = Object.keys(I).reduce(function (t, e) {
            return (t[I[e]] = e), t;
          }, {}),
          H = [E.NOSCRIPT, E.SCRIPT, E.STYLE],
          F =
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
          U = function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          },
          G = (function () {
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
          q =
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
          V = function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          },
          X = function (t) {
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
          z = function (t) {
            var e = Z(t, E.TITLE),
              n = Z(t, M);
            if (n && e)
              return n.replace(/%s/g, function () {
                return Array.isArray(e) ? e.join("") : e;
              });
            var r = Z(t, x);
            return e || r || void 0;
          },
          Y = function (t) {
            return Z(t, D) || function () {};
          },
          K = function (t, e) {
            return e
              .filter(function (e) {
                return void 0 !== e[t];
              })
              .map(function (e) {
                return e[t];
              })
              .reduce(function (t, e) {
                return q({}, t, e);
              }, {});
          },
          Q = function (t, e) {
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
          J = function (t, e, n) {
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
                        F(e[t]) +
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
                    var c = i[a],
                      s = c.toLowerCase();
                    -1 === e.indexOf(s) ||
                      (n === A && "canonical" === t[n].toLowerCase()) ||
                      (s === A && "stylesheet" === t[s].toLowerCase()) ||
                      (n = s),
                      -1 === e.indexOf(c) ||
                        (c !== S && c !== w && c !== _) ||
                        (n = c);
                  }
                  if (!n || !t[n]) return !1;
                  var u = t[n].toLowerCase();
                  return (
                    r[n] || (r[n] = {}),
                    o[n] || (o[n] = {}),
                    !r[n][u] && ((o[n][u] = !0), !0)
                  );
                })
                  .reverse()
                  .forEach(function (e) {
                    return t.push(e);
                  });
                for (var i = Object.keys(o), a = 0; a < i.length; a++) {
                  var c = i[a],
                    s = g()({}, r[c], o[c]);
                  r[c] = s;
                }
                return t;
              }, [])
              .reverse();
          },
          Z = function (t, e) {
            for (var n = t.length - 1; n >= 0; n--) {
              var r = t[n];
              if (r.hasOwnProperty(e)) return r[e];
            }
            return null;
          },
          $ =
            ((r = Date.now()),
            function (t) {
              var e = Date.now();
              e - r > 16
                ? ((r = e), t(e))
                : setTimeout(function () {
                    $(t);
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
                $
              : t.requestAnimationFrame || $,
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
              c = t.noscriptTags,
              s = t.onChangeClientState,
              u = t.scriptTags,
              l = t.styleTags,
              h = t.title,
              f = t.titleAttributes;
            st(E.BODY, r), st(E.HTML, o), ct(h, f);
            var p = {
                baseTag: ut(E.BASE, n),
                linkTags: ut(E.LINK, i),
                metaTags: ut(E.META, a),
                noscriptTags: ut(E.NOSCRIPT, c),
                scriptTags: ut(E.SCRIPT, u),
                styleTags: ut(E.STYLE, l),
              },
              d = {},
              m = {};
            Object.keys(p).forEach(function (t) {
              var e = p[t],
                n = e.newTags,
                r = e.oldTags;
              n.length && (d[t] = n), r.length && (m[t] = p[t].oldTags);
            }),
              e && e(),
              s(t, d, m);
          },
          at = function (t) {
            return Array.isArray(t) ? t.join("") : t;
          },
          ct = function (t, e) {
            void 0 !== t && document.title !== t && (document.title = at(t)),
              st(E.TITLE, e);
          },
          st = function (t, e) {
            var n = document.getElementsByTagName(t)[0];
            if (n) {
              for (
                var r = n.getAttribute("data-react-helmet"),
                  o = r ? r.split(",") : [],
                  i = [].concat(o),
                  a = Object.keys(e),
                  c = 0;
                c < a.length;
                c++
              ) {
                var s = a[c],
                  u = e[s] || "";
                n.getAttribute(s) !== u && n.setAttribute(s, u),
                  -1 === o.indexOf(s) && o.push(s);
                var l = i.indexOf(s);
                -1 !== l && i.splice(l, 1);
              }
              for (var h = i.length - 1; h >= 0; h--) n.removeAttribute(i[h]);
              o.length === i.length
                ? n.removeAttribute("data-react-helmet")
                : n.getAttribute("data-react-helmet") !== a.join(",") &&
                  n.setAttribute("data-react-helmet", a.join(","));
            }
          },
          ut = function (t, e) {
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
                        var c = void 0 === e[r] ? "" : e[r];
                        n.setAttribute(r, c);
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
          ht = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return Object.keys(t).reduce(function (e, n) {
              return (e[I[n] || n] = t[n]), e;
            }, e);
          },
          ft = function (t, e, n) {
            switch (t) {
              case E.TITLE:
                return {
                  toComponent: function () {
                    return (
                      (t = e.title),
                      (n = e.titleAttributes),
                      ((r = { key: t })["data-react-helmet"] = !0),
                      (o = ht(n, r)),
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
                            X(i, r) +
                            "</" +
                            t +
                            ">"
                        : "<" +
                            t +
                            ' data-react-helmet="true">' +
                            X(i, r) +
                            "</" +
                            t +
                            ">";
                    })(t, e.title, e.titleAttributes, n);
                  },
                };
              case b:
              case y:
                return {
                  toComponent: function () {
                    return ht(e);
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
                            var n = I[t] || t;
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
                                  : e + '="' + X(r[e], n) + '"';
                              return t ? t + " " + o : o;
                            }, ""),
                          i = r.innerHTML || r.cssText || "",
                          a = -1 === H.indexOf(t);
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
          pt = function (t) {
            var e = t.baseTag,
              n = t.bodyAttributes,
              r = t.encode,
              o = t.htmlAttributes,
              i = t.linkTags,
              a = t.metaTags,
              c = t.noscriptTags,
              s = t.scriptTags,
              u = t.styleTags,
              l = t.title,
              h = void 0 === l ? "" : l,
              f = t.titleAttributes;
            return {
              base: ft(E.BASE, e, r),
              bodyAttributes: ft(b, n, r),
              htmlAttributes: ft(y, o, r),
              link: ft(E.LINK, i, r),
              meta: ft(E.META, a, r),
              noscript: ft(E.NOSCRIPT, c, r),
              script: ft(E.SCRIPT, s, r),
              style: ft(E.STYLE, u, r),
              title: ft(E.TITLE, { title: h, titleAttributes: f }, r),
            };
          },
          dt = l()(
            function (t) {
              return {
                baseTag: Q([P, L], t),
                bodyAttributes: K(b, t),
                defer: Z(t, k),
                encode: Z(t, N),
                htmlAttributes: K(y, t),
                linkTags: J(E.LINK, [A, P], t),
                metaTags: J(E.META, [j, O, T, R, _], t),
                noscriptTags: J(E.NOSCRIPT, [S], t),
                onChangeClientState: Y(t),
                scriptTags: J(E.SCRIPT, [C, S], t),
                styleTags: J(E.STYLE, [w], t),
                title: z(t),
                titleAttributes: K(v, t),
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
            pt
          )(function () {
            return null;
          }),
          mt =
            ((o = dt),
            (a = i = (function (t) {
              function e() {
                return U(this, e), V(this, t.apply(this, arguments));
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
                  return !f()(this.props, t);
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
                  return q(
                    {},
                    r,
                    (((e = {})[n.type] = [].concat(r[n.type] || [], [
                      q({}, o, this.mapNestedChildrenToProps(n, i)),
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
                      return q(
                        {},
                        o,
                        (((e = {})[r.type] = a),
                        (e.titleAttributes = q({}, i)),
                        e)
                      );
                    case E.BODY:
                      return q({}, o, { bodyAttributes: q({}, i) });
                    case E.HTML:
                      return q({}, o, { htmlAttributes: q({}, i) });
                  }
                  return q({}, o, (((n = {})[r.type] = q({}, i)), n));
                }),
                (e.prototype.mapArrayTypeChildrenToProps = function (t, e) {
                  var n = q({}, e);
                  return (
                    Object.keys(t).forEach(function (e) {
                      var r;
                      n = q({}, n, (((r = {})[e] = t[e]), r));
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
                              return (e[B[n] || n] = t[n]), e;
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
                    r = q({}, n);
                  return (
                    e && (r = this.mapChildrenToProps(e, r)),
                    d.a.createElement(o, r)
                  );
                }),
                G(e, null, [
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
              base: s.a.object,
              bodyAttributes: s.a.object,
              children: s.a.oneOfType([s.a.arrayOf(s.a.node), s.a.node]),
              defaultTitle: s.a.string,
              defer: s.a.bool,
              encodeSpecialCharacters: s.a.bool,
              htmlAttributes: s.a.object,
              link: s.a.arrayOf(s.a.object),
              meta: s.a.arrayOf(s.a.object),
              noscript: s.a.arrayOf(s.a.object),
              onChangeClientState: s.a.func,
              script: s.a.arrayOf(s.a.object),
              style: s.a.arrayOf(s.a.object),
              title: s.a.string,
              titleAttributes: s.a.object,
              titleTemplate: s.a.string,
            }),
            (i.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
            (i.peek = o.peek),
            (i.rewind = function () {
              var t = o.rewind();
              return (
                t ||
                  (t = pt({
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
    rW0t: function (t, e, n) {
      "use strict";
      var r = n("glrk");
      t.exports = function () {
        var t = r(this),
          e = "";
        return (
          t.hasIndices && (e += "d"),
          t.global && (e += "g"),
          t.ignoreCase && (e += "i"),
          t.multiline && (e += "m"),
          t.dotAll && (e += "s"),
          t.unicode && (e += "u"),
          t.unicodeSets && (e += "v"),
          t.sticky && (e += "y"),
          e
        );
      };
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
    rtlb: function (t, e, n) {
      var r = n("g6v/"),
        o = n("0Dky");
      t.exports =
        r &&
        o(function () {
          return (
            42 !=
            Object.defineProperty(function () {}, "prototype", {
              value: 42,
              writable: !1,
            }).prototype
          );
        });
    },
    rzlk: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("rePB"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("emEt"),
        c = n("IOVJ");
      function s(t, e) {
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
      e.default = (t) => {
        let { location: e } = t;
        const n = a.default.loadPageSync(e.pathname);
        return n
          ? i.a.createElement(
              c.a,
              (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? s(Object(n), !0).forEach(function (e) {
                        Object(r.a)(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : s(Object(n)).forEach(function (e) {
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
        '{"description":"A community that digs deep into issues from the perspective of technology, business, and law, and gives companies the ability to run their blockchain businesses on their own.","contact":"Contact us","slogan":"A community that digs deep into issues from the perspective of technology, business, and law, and gives companies the ability to run their blockchain businesses on their own.","what":"About EEA Japan","whatDetail":"As we move forward with our blockchain business, we are required to make all sorts of decisions, ranging from technology to law. However, due to the usual differences in the point of view, there are times when we cannot find a solution. To bridge such an expertise gap, this community where players from various industries come together, hold workshops, and produce output that could help businesses to self-propel themselves.","wg":"Working group","wgList1":"Exploring issues from multiple perspectives, such as law, technology, and business","wgList2":"Clarifying the required action plan by looking at the issue","wgList3":"Feedback from overseas thanks to the sponsorship of the Ethereum Foundation","ws":"Workshop","wsList1":"Through practical workshops, gain the power to self-propel your blockchain business","wsList2":"Deeper topics for a workshop, with practical demonstrations on how to apply them to businesses","target":"Eligibility for participation","target1":"Engineers/Technical experts","target1-desc":"Those who want to propose technical solutions while keeping business and legal aspects into consideration.","target2":"Businesspersons","target2-desc":"Those who have a desire to pursue a business related to blockchain technology and want to gain useful knowledge.","target3":"Lawyers","target3-desc":"Those who want to understand the governing laws and regulations while knowing about the technical and business context, and those who would like to propose solutions.","organize":"Organized by","support":"Sponsored by","contributor":"Contributor","date":"Post date","group":"Working group","groupName_id-voting":"ID x Voting","groupName_ethereum2.0":"Ethereum2.0","groupName_students":"Students\' research","groupName_scaling":"Scaling","groupName_zero-knowledge-proof":"Zero Knowledge Proof","posts":"All posts","news":"News","activity":"Activity","activityWorkingGroupSubtitle":"Study on the possibility to introduce online voting by using blockchain","activityCreamSubtitle":"Development of C.R.E.A.M (Confidential Reliable Ethereum Anonymous Mixer)","contributor.hitachi":" ","contributor.fujitsu":" ","contributor.act":" ","contributor.collabo_gate":" ","contributor.comps":" ","contributor.cryptel":" ","contributor.layerx":" ","contributor.waseda":" ","contributor.accenture":" ","contributor.nttdata":" ","contributor.ntt":" ","contributor.singulanet":" ","contributor.imge":" ","contributor.new":" "}'
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
        return t.concat(r || Array.prototype.slice.call(e));
      }
      Object.create;
    },
    tiKp: function (t, e, n) {
      var r = n("2oRo"),
        o = n("VpIT"),
        i = n("Gi26"),
        a = n("kOOl"),
        c = n("STAE"),
        s = n("/b8u"),
        u = o("wks"),
        l = r.Symbol,
        h = l && l.for,
        f = s ? l : (l && l.withoutSetter) || a;
      t.exports = function (t) {
        if (!i(u, t) || (!c && "string" != typeof u[t])) {
          var e = "Symbol." + t;
          c && i(l, t) ? (u[t] = l[t]) : (u[t] = s && h ? h(e) : f(e));
        }
        return u[t];
      };
    },
    wE6v: function (t, e, n) {
      var r = n("xluM"),
        o = n("hh1v"),
        i = n("2bX/"),
        a = n("3Eq5"),
        c = n("SFrS"),
        s = n("tiKp"),
        u = TypeError,
        l = s("toPrimitive");
      t.exports = function (t, e) {
        if (!o(t) || i(t)) return t;
        var n,
          s = a(t, l);
        if (s) {
          if (
            (void 0 === e && (e = "default"), (n = r(s, t, e)), !o(n) || i(n))
          )
            return n;
          throw u("Can't convert object to primitive value");
        }
        return void 0 === e && (e = "number"), c(t, e);
      };
    },
    xDBR: function (t, e) {
      t.exports = !1;
    },
    xluM: function (t, e, n) {
      var r = n("QNWe"),
        o = Function.prototype.call;
      t.exports = r
        ? o.bind(o)
        : function () {
            return o.apply(o, arguments);
          };
    },
    xs3f: function (t, e, n) {
      var r = n("2oRo"),
        o = n("Y3Q8"),
        i = r["__core-js_shared__"] || o("__core-js_shared__", {});
      t.exports = i;
    },
    xtsi: function (t, e, n) {
      const r = n("LeKB"),
        {
          getResourcesForPathname: o,
          getResourcesForPathnameSync: i,
          getResourceURLsForPathname: a,
          loadPage: c,
          loadPageSync: s,
        } = n("emEt").publicLoader;
      (e.apiRunner = function (t, e, n, u) {
        void 0 === e && (e = {});
        let l = r.map((n) => {
          if (!n.plugin[t]) return;
          (e.getResourcesForPathnameSync = i),
            (e.getResourcesForPathname = o),
            (e.getResourceURLsForPathname = a),
            (e.loadPage = c),
            (e.loadPageSync = s);
          const r = n.plugin[t](e, n.options);
          return r && u && (e = u({ args: e, result: r, plugin: n })), r;
        });
        return (
          (l = l.filter((t) => void 0 !== t)), l.length > 0 ? l : n ? [n] : []
        );
      }),
        (e.apiRunnerAsync = (t, e, n) =>
          r.reduce(
            (n, r) =>
              r.plugin[t] ? n.then(() => r.plugin[t](e, r.options)) : n,
            Promise.resolve()
          ));
    },
    yAkg: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      var r = n("q1tI"),
        o = n("eq4K"),
        i = n("Wbzz"),
        a = n("B+z7");
      const c = () => {
        const t = r.useContext(o.a),
          {
            themeI18N: { defaultLang: e, prefixDefault: n, config: c },
          } = Object(i.useStaticQuery)("3280999885");
        return {
          locale: t,
          defaultLang: e,
          prefixDefault: n,
          config: c,
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
    zBJ4: function (t, e, n) {
      var r = n("2oRo"),
        o = n("hh1v"),
        i = r.document,
        a = o(i) && o(i.createElement);
      t.exports = function (t) {
        return a ? i.createElement(t) : {};
      };
    },
  },
  [["UxWs", 3, 11]],
]);
//# sourceMappingURL=app-580660ce6748c547dd52.js.map
