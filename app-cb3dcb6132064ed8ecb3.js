(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "+IEj": function (e, t, n) {
      var r = n("lSNA");
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      e.exports = {
        defaultLang: "en",
        withDefaults: function (e) {
          return a(
            a({}, e),
            {},
            {
              configPath: e.configPath,
              defaultLang: e.defaultLang || "en",
              locales: e.locales || null,
            }
          );
        },
      };
    },
    "+ZDr": function (e, t, n) {
      "use strict";
      var r = n("TqRt");
      (t.__esModule = !0),
        (t.withPrefix = h),
        (t.withAssetPrefix = function (e) {
          return h(e, m());
        }),
        (t.navigateTo = t.replace = t.push = t.navigate = t.default = void 0);
      var o = r(n("8OQS")),
        a = r(n("pVnL")),
        i = r(n("PJYZ")),
        u = r(n("VbXa")),
        c = r(n("17x9")),
        s = r(n("q1tI")),
        l = n("YwZP"),
        f = n("LYrO"),
        p = n("cu4x");
      t.parsePath = p.parsePath;
      var d = function (e) {
        return null == e ? void 0 : e.startsWith("/");
      };
      function h(e, t) {
        var n, r;
        if ((void 0 === t && (t = g()), !v(e))) return e;
        if (e.startsWith("./") || e.startsWith("../")) return e;
        var o =
          null !== (n = null !== (r = t) && void 0 !== r ? r : m()) &&
          void 0 !== n
            ? n
            : "/";
        return (
          "" +
          ((null == o ? void 0 : o.endsWith("/")) ? o.slice(0, -1) : o) +
          (e.startsWith("/") ? e : "/" + e)
        );
      }
      var m = function () {
          return "";
        },
        g = function () {
          return "";
        },
        v = function (e) {
          return (
            e &&
            !e.startsWith("http://") &&
            !e.startsWith("https://") &&
            !e.startsWith("//")
          );
        };
      var y = function (e, t) {
          return "number" == typeof e
            ? e
            : v(e)
            ? d(e)
              ? h(e)
              : (function (e, t) {
                  return d(e) ? e : (0, f.resolve)(e, t);
                })(e, t)
            : e;
        },
        b = {
          activeClassName: c.default.string,
          activeStyle: c.default.object,
          partiallyActive: c.default.bool,
        },
        w = (function (e) {
          function t(t) {
            var n;
            (n = e.call(this, t) || this).defaultGetProps = function (e) {
              var t = e.isPartiallyCurrent,
                r = e.isCurrent;
              return (n.props.partiallyActive ? t : r)
                ? {
                    className: [n.props.className, n.props.activeClassName]
                      .filter(Boolean)
                      .join(" "),
                    style: (0, a.default)(
                      {},
                      n.props.style,
                      n.props.activeStyle
                    ),
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
          (0, u.default)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidUpdate = function (e, t) {
              this.props.to === e.to ||
                this.state.IOSupported ||
                ___loader.enqueue(
                  (0, p.parsePath)(y(this.props.to, window.location.pathname))
                    .pathname
                );
            }),
            (n.componentDidMount = function () {
              this.state.IOSupported ||
                ___loader.enqueue(
                  (0, p.parsePath)(y(this.props.to, window.location.pathname))
                    .pathname
                );
            }),
            (n.componentWillUnmount = function () {
              if (this.io) {
                var e = this.io,
                  t = e.instance,
                  n = e.el;
                t.unobserve(n), t.disconnect();
              }
            }),
            (n.handleRef = function (e) {
              var t,
                n,
                r,
                o = this;
              this.props.innerRef &&
              this.props.innerRef.hasOwnProperty("current")
                ? (this.props.innerRef.current = e)
                : this.props.innerRef && this.props.innerRef(e),
                this.state.IOSupported &&
                  e &&
                  (this.io =
                    ((t = e),
                    (n = function () {
                      ___loader.enqueue(
                        (0, p.parsePath)(
                          y(o.props.to, window.location.pathname)
                        ).pathname
                      );
                    }),
                    (r = new window.IntersectionObserver(function (e) {
                      e.forEach(function (e) {
                        t === e.target &&
                          (e.isIntersecting || e.intersectionRatio > 0) &&
                          (r.unobserve(t), r.disconnect(), n());
                      });
                    })).observe(t),
                    { instance: r, el: t }));
            }),
            (n.render = function () {
              var e = this,
                t = this.props,
                n = t.to,
                r = t.getProps,
                i = void 0 === r ? this.defaultGetProps : r,
                u = t.onClick,
                c = t.onMouseEnter,
                f =
                  (t.activeClassName,
                  t.activeStyle,
                  t.innerRef,
                  t.partiallyActive,
                  t.state),
                d = t.replace,
                h = (0, o.default)(t, [
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
                ]);
              return s.default.createElement(l.Location, null, function (t) {
                var r = t.location,
                  o = y(n, r.pathname);
                return v(o)
                  ? s.default.createElement(
                      l.Link,
                      (0, a.default)(
                        {
                          to: o,
                          state: f,
                          getProps: i,
                          innerRef: e.handleRef,
                          onMouseEnter: function (e) {
                            c && c(e),
                              ___loader.hovering((0, p.parsePath)(o).pathname);
                          },
                          onClick: function (t) {
                            if (
                              (u && u(t),
                              !(
                                0 !== t.button ||
                                e.props.target ||
                                t.defaultPrevented ||
                                t.metaKey ||
                                t.altKey ||
                                t.ctrlKey ||
                                t.shiftKey
                              ))
                            ) {
                              t.preventDefault();
                              var n = d,
                                r = encodeURI(o) === window.location.pathname;
                              "boolean" != typeof d && r && (n = !0),
                                window.___navigate(o, { state: f, replace: n });
                            }
                            return !0;
                          },
                        },
                        h
                      )
                    )
                  : s.default.createElement(
                      "a",
                      (0, a.default)({ href: o }, h)
                    );
              });
            }),
            t
          );
        })(s.default.Component);
      w.propTypes = (0, a.default)({}, b, {
        onClick: c.default.func,
        to: c.default.string.isRequired,
        replace: c.default.bool,
        state: c.default.object,
      });
      var O = function (e, t, n) {
          return console.warn(
            'The "' +
              e +
              '" method is now deprecated and will be removed in Gatsby v' +
              n +
              '. Please use "' +
              t +
              '" instead.'
          );
        },
        P = s.default.forwardRef(function (e, t) {
          return s.default.createElement(w, (0, a.default)({ innerRef: t }, e));
        });
      t.default = P;
      t.navigate = function (e, t) {
        window.___navigate(y(e, window.location.pathname), t);
      };
      var j = function (e) {
        O("push", "navigate", 3),
          window.___push(y(e, window.location.pathname));
      };
      t.push = j;
      t.replace = function (e) {
        O("replace", "navigate", 3),
          window.___replace(y(e, window.location.pathname));
      };
      t.navigateTo = function (e) {
        return O("navigateTo", "navigate", 3), j(e);
      };
    },
    "/d+U": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return c;
        });
      var r,
        o = n("cY5a"),
        a = n("vgXZ"),
        i = n("BqEn");
      function u(e) {
        return "function" == typeof e;
      }
      function c(e, t, n, r, s, l, f) {
        if (1 === e.length && Object(o.e)(e[0]))
          return [{ type: 0, value: e[0].value }];
        for (var p = [], d = 0, h = e; d < h.length; d++) {
          var m = h[d];
          if (Object(o.e)(m)) p.push({ type: 0, value: m.value });
          else if (Object(o.i)(m))
            "number" == typeof l &&
              p.push({ type: 0, value: n.getNumberFormat(t).format(l) });
          else {
            var g = m.value;
            if (!s || !(g in s)) throw new i.d(g, f);
            var v = s[g];
            if (Object(o.b)(m))
              (v && "string" != typeof v && "number" != typeof v) ||
                (v =
                  "string" == typeof v || "number" == typeof v
                    ? String(v)
                    : ""),
                p.push({ type: "string" == typeof v ? 0 : 1, value: v });
            else if (Object(o.c)(m)) {
              var y =
                "string" == typeof m.style
                  ? r.date[m.style]
                  : Object(o.d)(m.style)
                  ? Object(a.b)(m.style.pattern)
                  : void 0;
              p.push({ type: 0, value: n.getDateTimeFormat(t, y).format(v) });
            } else if (Object(o.l)(m)) {
              y =
                "string" == typeof m.style
                  ? r.time[m.style]
                  : Object(o.d)(m.style)
                  ? Object(a.b)(m.style.pattern)
                  : void 0;
              p.push({ type: 0, value: n.getDateTimeFormat(t, y).format(v) });
            } else if (Object(o.f)(m)) {
              y =
                "string" == typeof m.style
                  ? r.number[m.style]
                  : Object(o.g)(m.style)
                  ? Object(a.a)(m.style.tokens)
                  : void 0;
              p.push({ type: 0, value: n.getNumberFormat(t, y).format(v) });
            } else {
              if (Object(o.k)(m)) {
                var b = m.children,
                  w = m.value,
                  O = s[w];
                if (!u(O)) throw new i.c(w, "function", f);
                var P = O(
                  c(b, t, n, r, s, l).map(function (e) {
                    return e.value;
                  })
                );
                Array.isArray(P) || (P = [P]),
                  p.push.apply(
                    p,
                    P.map(function (e) {
                      return { type: "string" == typeof e ? 0 : 1, value: e };
                    })
                  );
              }
              if (Object(o.j)(m)) {
                if (!(j = m.options[v] || m.options.other))
                  throw new i.b(m.value, v, Object.keys(m.options), f);
                p.push.apply(p, c(j.value, t, n, r, s));
              } else if (Object(o.h)(m)) {
                var j;
                if (!(j = m.options["=" + v])) {
                  if (!Intl.PluralRules)
                    throw new i.a(
                      'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                      "MISSING_INTL_API",
                      f
                    );
                  var S = n
                    .getPluralRules(t, { type: m.pluralType })
                    .select(v - (m.offset || 0));
                  j = m.options[S] || m.options.other;
                }
                if (!j) throw new i.b(m.value, v, Object.keys(m.options), f);
                p.push.apply(p, c(j.value, t, n, r, s, v - (m.offset || 0)));
              } else;
            }
          }
        }
        return (function (e) {
          return e.length < 2
            ? e
            : e.reduce(function (e, t) {
                var n = e[e.length - 1];
                return (
                  n && 0 === n.type && 0 === t.type
                    ? (n.value += t.value)
                    : e.push(t),
                  e
                );
              }, []);
        })(p);
      }
      !(function (e) {
        (e[(e.literal = 0)] = "literal"), (e[(e.object = 1)] = "object");
      })(r || (r = {}));
    },
    "/hTd": function (e, t, n) {
      "use strict";
      (t.__esModule = !0), (t.SessionStorage = void 0);
      var r = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.read = function (e, t) {
            var n = this.getStateKey(e, t);
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
          (t.save = function (e, t, n) {
            var r = this.getStateKey(e, t),
              o = JSON.stringify(n);
            try {
              window.sessionStorage.setItem(r, o);
            } catch (a) {
              (window && window.___GATSBY_REACT_ROUTER_SCROLL) ||
                (window.___GATSBY_REACT_ROUTER_SCROLL = {}),
                (window.___GATSBY_REACT_ROUTER_SCROLL[r] = JSON.parse(o));
            }
          }),
          (t.getStateKey = function (e, t) {
            var n = "@@scroll|" + e.pathname;
            return null == t ? n : n + "|" + t;
          }),
          e
        );
      })();
      t.SessionStorage = r;
    },
    "/m/s": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "wrapPageElement", function () {
          return s;
        });
      var r = n("q1tI"),
        o = n("eq4K"),
        a = n("qhky"),
        i = n("Wbzz"),
        u = n("yAkg"),
        c = function (e) {
          var t = e.location,
            n = e.pageContext,
            o = Object(u.a)(),
            c = o.locale,
            s = o.config,
            l = o.defaultLang,
            f = Object(i.useStaticQuery)("698804963").site.siteMetadata.siteUrl,
            p = t.pathname;
          return r.createElement(
            a.a,
            null,
            r.createElement("html", { lang: c }),
            r.createElement("link", {
              rel: "alternate",
              hrefLang: "x-default",
              href: f,
            }),
            r.createElement("link", {
              rel: "alternate",
              hrefLang: n.hrefLang,
              href: "" + f + (p === Object(i.withPrefix)("/") ? "" : p),
            }),
            s.map(function (e) {
              var t;
              return e.code === c
                ? null
                : ((t =
                    e.code === l
                      ? "" +
                        f +
                        (n.originalPath === Object(i.withPrefix)("/")
                          ? ""
                          : n.originalPath)
                      : "" +
                        f +
                        Object(i.withPrefix)("/" + e.code + n.originalPath)),
                  r.createElement("link", {
                    key: e.code,
                    rel: "alternate",
                    hrefLang: e.hrefLang,
                    href: t,
                  }));
            }),
            r.createElement("meta", {
              property: "og:locale",
              content: n.hrefLang.replace("-", "_"),
            }),
            s.map(function (e) {
              return e.code === c
                ? null
                : r.createElement("meta", {
                    key: e.code,
                    property: "og:locale:alternate",
                    content: e.hrefLang.replace("-", "_"),
                  });
            })
          );
        },
        s = function (e) {
          var t = e.element,
            n = e.props;
          return r.createElement(
            o.b,
            { pageContext: n.pageContext },
            r.createElement(c, {
              location: n.location,
              pageContext: n.pageContext,
            }),
            t
          );
        };
    },
    "1pe3": function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        if ((void 0 === n && (n = Error), !e)) throw new n(t);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    "284h": function (e, t, n) {
      var r = n("cDf5");
      function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      e.exports = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== r(e) && "function" != typeof e))
          return { default: e };
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var u = a ? Object.getOwnPropertyDescriptor(e, i) : null;
            u && (u.get || u.set)
              ? Object.defineProperty(n, i, u)
              : (n[i] = e[i]);
          }
        return (n.default = e), t && t.set(e, n), n;
      };
    },
    "2OET": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return c;
        });
      var r = n("q1tI"),
        o = n("2mql"),
        a = n.n(o);
      n("N3fz"), a.a;
      var i = r.createContext(null),
        u = (i.Consumer, i.Provider),
        c = i;
    },
    "2mql": function (e, t, n) {
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
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        u = {};
      function c(e) {
        return r.isMemo(e) ? i : u[e.$$typeof] || o;
      }
      (u[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (u[r.Memo] = i);
      var s = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (h) {
            var o = d(n);
            o && o !== h && e(t, o, r);
          }
          var i = l(n);
          f && (i = i.concat(f(n)));
          for (var u = c(t), m = c(n), g = 0; g < i.length; ++g) {
            var v = i[g];
            if (!(a[v] || (r && r[v]) || (m && m[v]) || (u && u[v]))) {
              var y = p(n, v);
              try {
                s(t, v, y);
              } catch (b) {}
            }
          }
        }
        return t;
      };
    },
    "3uz+": function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.useScrollRestoration = function (e) {
          var t = (0, a.useLocation)(),
            n = (0, o.useContext)(r.ScrollContext),
            i = (0, o.useRef)();
          return (
            (0, o.useLayoutEffect)(function () {
              if (i.current) {
                var r = n.read(t, e);
                i.current.scrollTo(0, r || 0);
              }
            }, []),
            {
              ref: i,
              onScroll: function () {
                i.current && n.save(t, e, i.current.scrollTop);
              },
            }
          );
        });
      var r = n("Enzk"),
        o = n("q1tI"),
        a = n("YwZP");
    },
    "5yr3": function (e, t, n) {
      "use strict";
      var r = (function (e) {
        return (
          (e = e || Object.create(null)),
          {
            on: function (t, n) {
              (e[t] || (e[t] = [])).push(n);
            },
            off: function (t, n) {
              e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
            },
            emit: function (t, n) {
              (e[t] || []).slice().map(function (e) {
                e(n);
              }),
                (e["*"] || []).slice().map(function (e) {
                  e(t, n);
                });
            },
          }
        );
      })();
      t.a = r;
    },
    "6koa": function (e, t, n) {
      "use strict";
      e.exports = function (e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var n = Object.keys(e),
          r = Object.keys(t),
          o = n.length;
        if (r.length !== o) return !1;
        for (var a = 0; a < o; a++) {
          var i = n[a];
          if (e[i] !== t[i] || !Object.prototype.hasOwnProperty.call(t, i))
            return !1;
        }
        return !0;
      };
    },
    "6qGY": function (e, t) {
      e.exports = Object.assign;
    },
    "75pU": function (e, t) {
      function n(e, t, n, r) {
        var o,
          a =
            null == (o = r) || "number" == typeof o || "boolean" == typeof o
              ? r
              : n(r),
          i = t.get(a);
        return void 0 === i && ((i = e.call(this, r)), t.set(a, i)), i;
      }
      function r(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          a = t.get(o);
        return void 0 === a && ((a = e.apply(this, r)), t.set(o, a)), a;
      }
      function o(e, t, n, r, o) {
        return n.bind(t, e, r, o);
      }
      function a(e, t) {
        return o(
          e,
          this,
          1 === e.length ? n : r,
          t.cache.create(),
          t.serializer
        );
      }
      function i() {
        return JSON.stringify(arguments);
      }
      function u() {
        this.cache = Object.create(null);
      }
      (u.prototype.has = function (e) {
        return e in this.cache;
      }),
        (u.prototype.get = function (e) {
          return this.cache[e];
        }),
        (u.prototype.set = function (e, t) {
          this.cache[e] = t;
        });
      var c = {
        create: function () {
          return new u();
        },
      };
      (e.exports = function (e, t) {
        var n = t && t.cache ? t.cache : c,
          r = t && t.serializer ? t.serializer : i;
        return (t && t.strategy ? t.strategy : a)(e, {
          cache: n,
          serializer: r,
        });
      }),
        (e.exports.strategies = {
          variadic: function (e, t) {
            return o(e, this, r, t.cache.create(), t.serializer);
          },
          monadic: function (e, t) {
            return o(e, this, n, t.cache.create(), t.serializer);
          },
        });
    },
    "7hJ6": function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.useScrollRestoration = t.ScrollContainer = t.ScrollContext = void 0);
      var r = n("Enzk");
      t.ScrollContext = r.ScrollHandler;
      var o = n("hd9s");
      t.ScrollContainer = o.ScrollContainer;
      var a = n("3uz+");
      t.useScrollRestoration = a.useScrollRestoration;
    },
    "7ljp": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "MDXContext", function () {
          return l;
        }),
        n.d(t, "MDXProvider", function () {
          return d;
        }),
        n.d(t, "mdx", function () {
          return g;
        }),
        n.d(t, "useMDXComponents", function () {
          return p;
        }),
        n.d(t, "withMDXComponents", function () {
          return f;
        });
      var r = n("q1tI"),
        o = n.n(r);
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var l = o.a.createContext({}),
        f = function (e) {
          return function (t) {
            var n = p(t.components);
            return o.a.createElement(e, i({}, t, { components: n }));
          };
        },
        p = function (e) {
          var t = o.a.useContext(l),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : c(c({}, t), e)), n;
        },
        d = function (e) {
          var t = p(e.components);
          return o.a.createElement(l.Provider, { value: t }, e.children);
        },
        h = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return o.a.createElement(o.a.Fragment, {}, t);
          },
        },
        m = o.a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            a = e.originalType,
            i = e.parentName,
            u = s(e, ["components", "mdxType", "originalType", "parentName"]),
            l = p(n),
            f = r,
            d = l["".concat(i, ".").concat(f)] || l[f] || h[f] || a;
          return n
            ? o.a.createElement(d, c(c({ ref: t }, u), {}, { components: n }))
            : o.a.createElement(d, c({ ref: t }, u));
        });
      function g(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var a = n.length,
            i = new Array(a);
          i[0] = m;
          var u = {};
          for (var c in t) hasOwnProperty.call(t, c) && (u[c] = t[c]);
          (u.originalType = e),
            (u.mdxType = "string" == typeof e ? e : r),
            (i[1] = u);
          for (var s = 2; s < a; s++) i[s] = n[s];
          return o.a.createElement.apply(null, i);
        }
        return o.a.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    "8+s/": function (e, t, n) {
      "use strict";
      var r,
        o = n("q1tI"),
        a = (r = o) && "object" == typeof r && "default" in r ? r.default : r;
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var u = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      e.exports = function (e, t, n) {
        if ("function" != typeof e)
          throw new Error("Expected reducePropsToState to be a function.");
        if ("function" != typeof t)
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
            (c = e(
              s.map(function (e) {
                return e.props;
              })
            )),
              f.canUseDOM ? t(c) : n && (c = n(c));
          }
          var f = (function (e) {
            var t, n;
            function o() {
              return e.apply(this, arguments) || this;
            }
            (n = e),
              ((t = o).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = n),
              (o.peek = function () {
                return c;
              }),
              (o.rewind = function () {
                if (o.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var e = c;
                return (c = void 0), (s = []), e;
              });
            var i = o.prototype;
            return (
              (i.UNSAFE_componentWillMount = function () {
                s.push(this), l();
              }),
              (i.componentDidUpdate = function () {
                l();
              }),
              (i.componentWillUnmount = function () {
                var e = s.indexOf(this);
                s.splice(e, 1), l();
              }),
              (i.render = function () {
                return a.createElement(r, this.props);
              }),
              o
            );
          })(o.PureComponent);
          return (
            i(
              f,
              "displayName",
              "SideEffect(" +
                (function (e) {
                  return e.displayName || e.name || "Component";
                })(r) +
                ")"
            ),
            i(f, "canUseDOM", u),
            f
          );
        };
      };
    },
    "8OQS": function (e, t) {
      e.exports = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      };
    },
    "94VI": function (e, t) {
      t.polyfill = function (e) {
        return e;
      };
    },
    "9Xx/": function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return c;
      }),
        n.d(t, "d", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return a;
        }),
        n.d(t, "b", function () {
          return i;
        });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = function (e) {
          var t = e.location,
            n = t.search,
            r = t.hash,
            o = t.href,
            a = t.origin,
            i = t.protocol,
            c = t.host,
            s = t.hostname,
            l = t.port,
            f = e.location.pathname;
          !f && o && u && (f = new URL(o).pathname);
          return {
            pathname: encodeURI(decodeURI(f)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: i,
            host: c,
            hostname: s,
            port: l,
            state: e.history.state,
            key: (e.history.state && e.history.state.key) || "initial",
          };
        },
        a = function (e, t) {
          var n = [],
            a = o(e),
            i = !1,
            u = function () {};
          return {
            get location() {
              return a;
            },
            get transitioning() {
              return i;
            },
            _onTransitionComplete: function () {
              (i = !1), u();
            },
            listen: function (t) {
              n.push(t);
              var r = function () {
                (a = o(e)), t({ location: a, action: "POP" });
              };
              return (
                e.addEventListener("popstate", r),
                function () {
                  e.removeEventListener("popstate", r),
                    (n = n.filter(function (e) {
                      return e !== t;
                    }));
                }
              );
            },
            navigate: function (t) {
              var c =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                s = c.state,
                l = c.replace,
                f = void 0 !== l && l;
              if ("number" == typeof t) e.history.go(t);
              else {
                s = r({}, s, { key: Date.now() + "" });
                try {
                  i || f
                    ? e.history.replaceState(s, null, t)
                    : e.history.pushState(s, null, t);
                } catch (d) {
                  e.location[f ? "replace" : "assign"](t);
                }
              }
              (a = o(e)), (i = !0);
              var p = new Promise(function (e) {
                return (u = e);
              });
              return (
                n.forEach(function (e) {
                  return e({ location: a, action: "PUSH" });
                }),
                p
              );
            },
          };
        },
        i = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = e.indexOf("?"),
            n = {
              pathname: t > -1 ? e.substr(0, t) : e,
              search: t > -1 ? e.substr(t) : "",
            },
            r = 0,
            o = [n],
            a = [null];
          return {
            get location() {
              return o[r];
            },
            addEventListener: function (e, t) {},
            removeEventListener: function (e, t) {},
            history: {
              get entries() {
                return o;
              },
              get index() {
                return r;
              },
              get state() {
                return a[r];
              },
              pushState: function (e, t, n) {
                var i = n.split("?"),
                  u = i[0],
                  c = i[1],
                  s = void 0 === c ? "" : c;
                r++,
                  o.push({ pathname: u, search: s.length ? "?" + s : s }),
                  a.push(e);
              },
              replaceState: function (e, t, n) {
                var i = n.split("?"),
                  u = i[0],
                  c = i[1],
                  s = void 0 === c ? "" : c;
                (o[r] = { pathname: u, search: s }), (a[r] = e);
              },
              go: function (e) {
                var t = r + e;
                t < 0 || t > a.length - 1 || (r = t);
              },
            },
          };
        },
        u = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        c = a(u ? window : i()),
        s = c.navigate;
    },
    "9hXx": function (e, t, n) {
      "use strict";
      (t.__esModule = !0), (t.default = void 0);
      t.default = function (e, t) {
        if (!Array.isArray(t)) return "manifest.webmanifest";
        var n = t.find(function (t) {
          return e.startsWith(t.start_url);
        });
        return n
          ? "manifest_" + n.lang + ".webmanifest"
          : "manifest.webmanifest";
      };
    },
    BN9B: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return i;
      }),
        n.d(t, "f", function () {
          return u;
        }),
        n.d(t, "a", function () {
          return c;
        }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "d", function () {
          return f;
        });
      var r,
        o,
        a =
          ((r = function (e, t) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          });
      !(function (e) {
        (e.FORMAT_ERROR = "FORMAT_ERROR"),
          (e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER"),
          (e.INVALID_CONFIG = "INVALID_CONFIG"),
          (e.MISSING_DATA = "MISSING_DATA"),
          (e.MISSING_TRANSLATION = "MISSING_TRANSLATION");
      })(o || (o = {}));
      var i = (function (e) {
          function t(n, r, o) {
            var a =
              e.call(
                this,
                "[React Intl Error " +
                  n +
                  "] " +
                  r +
                  " \n" +
                  (o ? "\n" + o.message + "\n" + o.stack : "")
              ) || this;
            return (
              (a.code = n),
              "function" == typeof Error.captureStackTrace &&
                Error.captureStackTrace(a, t),
              a
            );
          }
          return a(t, e), t;
        })(Error),
        u = (function (e) {
          function t(t, n) {
            return e.call(this, "UNSUPPORTED_FORMATTER", t, n) || this;
          }
          return a(t, e), t;
        })(i),
        c = (function (e) {
          function t(t, n) {
            return e.call(this, "INVALID_CONFIG", t, n) || this;
          }
          return a(t, e), t;
        })(i),
        s = (function (e) {
          function t(t, n) {
            return e.call(this, "MISSING_DATA", t, n) || this;
          }
          return a(t, e), t;
        })(i),
        l = (function (e) {
          function t(t, n, r, o) {
            var a =
              e.call(
                this,
                "FORMAT_ERROR",
                t +
                  " \nLocale: " +
                  n +
                  "\nMessageID: " +
                  (null == r ? void 0 : r.id) +
                  "\nDefault Message: " +
                  (null == r ? void 0 : r.defaultMessage) +
                  "\nDescription: " +
                  (null == r ? void 0 : r.description) +
                  " \n",
                o
              ) || this;
            return (a.descriptor = r), a;
          }
          return a(t, e), t;
        })(i),
        f = (function (e) {
          function t(t, n) {
            var r =
              e.call(
                this,
                "MISSING_TRANSLATION",
                'Missing message: "' +
                  t.id +
                  '" for locale "' +
                  n +
                  '", using ' +
                  (t.defaultMessage ? "default message" : "id") +
                  " as fallback."
              ) || this;
            return (r.descriptor = t), r;
          }
          return a(t, e), t;
        })(i);
    },
    BfwJ: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "useMDXScope", function () {
          return i;
        }),
        n.d(t, "MDXScopeProvider", function () {
          return u;
        });
      var r = n("q1tI"),
        o = n.n(r),
        a = Object(r.createContext)({}),
        i = function (e) {
          var t = Object(r.useContext)(a);
          return e || t;
        },
        u = function (e) {
          var t = e.__mdxScope,
            n = e.children;
          return o.a.createElement(a.Provider, { value: t }, n);
        };
    },
    BqEn: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return u;
        }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "d", function () {
          return s;
        });
      var r,
        o,
        a =
          ((r = function (e, t) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          });
      !(function (e) {
        (e.MISSING_VALUE = "MISSING_VALUE"),
          (e.INVALID_VALUE = "INVALID_VALUE"),
          (e.MISSING_INTL_API = "MISSING_INTL_API");
      })(o || (o = {}));
      var i = (function (e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return (o.code = n), (o.originalMessage = r), o;
          }
          return (
            a(t, e),
            (t.prototype.toString = function () {
              return "[formatjs Error: " + this.code + "] " + this.message;
            }),
            t
          );
        })(Error),
        u = (function (e) {
          function t(t, n, r, o) {
            return (
              e.call(
                this,
                'Invalid values for "' +
                  t +
                  '": "' +
                  n +
                  '". Options are "' +
                  Object.keys(r).join('", "') +
                  '"',
                "INVALID_VALUE",
                o
              ) || this
            );
          }
          return a(t, e), t;
        })(i),
        c = (function (e) {
          function t(t, n, r) {
            return (
              e.call(
                this,
                'Value for "' + t + '" must be of type ' + n,
                "INVALID_VALUE",
                r
              ) || this
            );
          }
          return a(t, e), t;
        })(i),
        s = (function (e) {
          function t(t, n) {
            return (
              e.call(
                this,
                'The intl string context variable "' +
                  t +
                  '" was not provided to the string "' +
                  n +
                  '"',
                "MISSING_VALUE",
                n
              ) || this
            );
          }
          return a(t, e), t;
        })(i);
    },
    Enzk: function (e, t, n) {
      "use strict";
      var r = n("284h"),
        o = n("TqRt");
      (t.__esModule = !0), (t.ScrollHandler = t.ScrollContext = void 0);
      var a = o(n("PJYZ")),
        i = o(n("VbXa")),
        u = r(n("q1tI")),
        c = o(n("17x9")),
        s = n("/hTd"),
        l = u.createContext(new s.SessionStorage());
      (t.ScrollContext = l), (l.displayName = "GatsbyScrollContext");
      var f = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((t =
              e.call.apply(e, [this].concat(r)) ||
              this)._stateStorage = new s.SessionStorage()),
            (t.scrollListener = function () {
              var e = t.props.location.key;
              e && t._stateStorage.save(t.props.location, e, window.scrollY);
            }),
            (t.windowScroll = function (e, n) {
              t.shouldUpdateScroll(n, t.props) && window.scrollTo(0, e);
            }),
            (t.scrollToHash = function (e, n) {
              var r = document.getElementById(e.substring(1));
              r && t.shouldUpdateScroll(n, t.props) && r.scrollIntoView();
            }),
            (t.shouldUpdateScroll = function (e, n) {
              var r = t.props.shouldUpdateScroll;
              return !r || r.call((0, a.default)(t), e, n);
            }),
            t
          );
        }
        (0, i.default)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function () {
            var e;
            window.addEventListener("scroll", this.scrollListener);
            var t = this.props.location,
              n = t.key,
              r = t.hash;
            n && (e = this._stateStorage.read(this.props.location, n)),
              e
                ? this.windowScroll(e, void 0)
                : r && this.scrollToHash(decodeURI(r), void 0);
          }),
          (n.componentWillUnmount = function () {
            window.removeEventListener("scroll", this.scrollListener);
          }),
          (n.componentDidUpdate = function (e) {
            var t,
              n = this.props.location,
              r = n.hash,
              o = n.key;
            o && (t = this._stateStorage.read(this.props.location, o)),
              r && 0 === t
                ? this.scrollToHash(decodeURI(r), e)
                : this.windowScroll(t, e);
          }),
          (n.render = function () {
            return u.createElement(
              l.Provider,
              { value: this._stateStorage },
              this.props.children
            );
          }),
          t
        );
      })(u.Component);
      (t.ScrollHandler = f),
        (f.propTypes = {
          shouldUpdateScroll: c.default.func,
          children: c.default.element.isRequired,
          location: c.default.object.isRequired,
        });
    },
    IOVJ: function (e, t, n) {
      "use strict";
      var r = n("rePB"),
        o = n("dI71"),
        a = n("q1tI"),
        i = n.n(a),
        u = n("emEt"),
        c = n("xtsi");
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var f = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          Object(o.a)(t, e),
          (t.prototype.render = function () {
            var e = l(
                l({}, this.props),
                {},
                { pathContext: this.props.pageContext }
              ),
              t =
                Object(c.apiRunner)("replaceComponentRenderer", {
                  props: this.props,
                  loader: u.publicLoader,
                })[0] ||
                Object(a.createElement)(
                  this.props.pageResources.component,
                  l(
                    l({}, e),
                    {},
                    {
                      key:
                        this.props.path || this.props.pageResources.page.path,
                    }
                  )
                );
            return Object(c.apiRunner)(
              "wrapPageElement",
              { element: t, props: e },
              t,
              function (t) {
                return { element: t.result, props: e };
              }
            ).pop();
          }),
          t
        );
      })(i.a.Component);
      t.a = f;
    },
    JTKy: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("q1tI");
      t.default = { React: r };
    },
    LYrO: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "startsWith", function () {
          return a;
        }),
        n.d(t, "pick", function () {
          return i;
        }),
        n.d(t, "match", function () {
          return u;
        }),
        n.d(t, "resolve", function () {
          return c;
        }),
        n.d(t, "insertParams", function () {
          return s;
        }),
        n.d(t, "validateRedirect", function () {
          return l;
        }),
        n.d(t, "shallowCompare", function () {
          return b;
        });
      var r = n("QLaP"),
        o = n.n(r),
        a = function (e, t) {
          return e.substr(0, t.length) === t;
        },
        i = function (e, t) {
          for (
            var n = void 0,
              r = void 0,
              a = t.split("?")[0],
              i = g(a),
              u = "" === i[0],
              c = m(e),
              s = 0,
              l = c.length;
            s < l;
            s++
          ) {
            var p = !1,
              h = c[s].route;
            if (h.default) r = { route: h, params: {}, uri: t };
            else {
              for (
                var v = g(h.path),
                  b = {},
                  w = Math.max(i.length, v.length),
                  O = 0;
                O < w;
                O++
              ) {
                var P = v[O],
                  j = i[O];
                if (d(P)) {
                  b[P.slice(1) || "*"] = i
                    .slice(O)
                    .map(decodeURIComponent)
                    .join("/");
                  break;
                }
                if (void 0 === j) {
                  p = !0;
                  break;
                }
                var S = f.exec(P);
                if (S && !u) {
                  -1 === y.indexOf(S[1]) || o()(!1);
                  var E = decodeURIComponent(j);
                  b[S[1]] = E;
                } else if (P !== j) {
                  p = !0;
                  break;
                }
              }
              if (!p) {
                n = { route: h, params: b, uri: "/" + i.slice(0, O).join("/") };
                break;
              }
            }
          }
          return n || r || null;
        },
        u = function (e, t) {
          return i([{ path: e }], t);
        },
        c = function (e, t) {
          if (a(e, "/")) return e;
          var n = e.split("?"),
            r = n[0],
            o = n[1],
            i = t.split("?")[0],
            u = g(r),
            c = g(i);
          if ("" === u[0]) return v(i, o);
          if (!a(u[0], ".")) {
            var s = c.concat(u).join("/");
            return v(("/" === i ? "" : "/") + s, o);
          }
          for (var l = c.concat(u), f = [], p = 0, d = l.length; p < d; p++) {
            var h = l[p];
            ".." === h ? f.pop() : "." !== h && f.push(h);
          }
          return v("/" + f.join("/"), o);
        },
        s = function (e, t) {
          var n = e.split("?"),
            r = n[0],
            o = n[1],
            a = void 0 === o ? "" : o,
            i =
              "/" +
              g(r)
                .map(function (e) {
                  var n = f.exec(e);
                  return n ? t[n[1]] : e;
                })
                .join("/"),
            u = t.location,
            c = (u = void 0 === u ? {} : u).search,
            s = (void 0 === c ? "" : c).split("?")[1] || "";
          return (i = v(i, a, s));
        },
        l = function (e, t) {
          var n = function (e) {
            return p(e);
          };
          return (
            g(e).filter(n).sort().join("/") === g(t).filter(n).sort().join("/")
          );
        },
        f = /^:(.+)/,
        p = function (e) {
          return f.test(e);
        },
        d = function (e) {
          return e && "*" === e[0];
        },
        h = function (e, t) {
          return {
            route: e,
            score: e.default
              ? 0
              : g(e.path).reduce(function (e, t) {
                  return (
                    (e += 4),
                    !(function (e) {
                      return "" === e;
                    })(t)
                      ? p(t)
                        ? (e += 2)
                        : d(t)
                        ? (e -= 5)
                        : (e += 3)
                      : (e += 1),
                    e
                  );
                }, 0),
            index: t,
          };
        },
        m = function (e) {
          return e.map(h).sort(function (e, t) {
            return e.score < t.score
              ? 1
              : e.score > t.score
              ? -1
              : e.index - t.index;
          });
        },
        g = function (e) {
          return e.replace(/(^\/+|\/+$)/g, "").split("/");
        },
        v = function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return (
            e +
            ((n = n.filter(function (e) {
              return e && e.length > 0;
            })) && n.length > 0
              ? "?" + n.join("&")
              : "")
          );
        },
        y = ["uri", "path"],
        b = function (e, t) {
          var n = Object.keys(e);
          return (
            n.length === Object.keys(t).length &&
            n.every(function (n) {
              return t.hasOwnProperty(n) && e[n] === t[n];
            })
          );
        };
    },
    LeKB: function (e, t, n) {
      e.exports = [
        {
          plugin: n("/m/s"),
          options: {
            plugins: [],
            defaultLang: "ja",
            configPath:
              "D:\\Nova\\n.Freelance\\E\\ethereum\\ethereum-terakoya.github.io\\i18n\\config.json",
          },
        },
        {
          plugin: n("b9Nj"),
          options: { plugins: [], trackingId: "UA-107137836-4", head: !0 },
        },
        {
          plugin: n("pWkz"),
          options: { plugins: [], trackingId: "UA-107137836-4" },
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
                "D:\\Nova\\n.Freelance\\E\\ethereum\\ethereum-terakoya.github.io\\src\\components\\layout.js",
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
            cache_busting_mode: "query",
            include_favicon: !0,
            legacy: !0,
            theme_color_in_head: !0,
            cacheDigest: "5ad8205c15cb226e66da52d6a8dbb356",
          },
        },
      ];
    },
    MMVs: function (e, t, n) {
      e.exports = (function () {
        var e = !1;
        -1 !== navigator.appVersion.indexOf("MSIE 10") && (e = !0);
        var t,
          n = [],
          r = "object" == typeof document && document,
          o = e
            ? r.documentElement.doScroll("left")
            : r.documentElement.doScroll,
          a = r && (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);
        return (
          !a &&
            r &&
            r.addEventListener(
              "DOMContentLoaded",
              (t = function () {
                for (
                  r.removeEventListener("DOMContentLoaded", t), a = 1;
                  (t = n.shift());

                )
                  t();
              })
            ),
          function (e) {
            a ? setTimeout(e, 0) : n.push(e);
          }
        );
      })();
    },
    "Mu++": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var r = n("t55B"),
        o = n("75pU"),
        a = n.n(o),
        i = n("/d+U"),
        u = function () {
          return (u =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        c = function () {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var r = Array(e),
            o = 0;
          for (t = 0; t < n; t++)
            for (var a = arguments[t], i = 0, u = a.length; i < u; i++, o++)
              r[o] = a[i];
          return r;
        };
      function s(e, t) {
        return t
          ? Object.keys(e).reduce(function (n, r) {
              var o, a;
              return (
                (n[r] =
                  ((o = e[r]),
                  (a = t[r])
                    ? u(
                        u(u({}, o || {}), a || {}),
                        Object.keys(o).reduce(function (e, t) {
                          return (e[t] = u(u({}, o[t]), a[t] || {})), e;
                        }, {})
                      )
                    : o)),
                n
              );
            }, u({}, e))
          : e;
      }
      function l(e) {
        return {
          create: function () {
            return {
              has: function (t) {
                return t in e;
              },
              get: function (t) {
                return e[t];
              },
              set: function (t, n) {
                e[t] = n;
              },
            };
          },
        };
      }
      var f = a.a || o;
      var p = (function () {
        function e(t, n, r, o) {
          var a,
            u = this;
          if (
            (void 0 === n && (n = e.defaultLocale),
            (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {},
            }),
            (this.format = function (e) {
              var t = u.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var n = t.reduce(function (e, t) {
                return (
                  e.length && 0 === t.type && "string" == typeof e[e.length - 1]
                    ? (e[e.length - 1] += t.value)
                    : e.push(t.value),
                  e
                );
              }, []);
              return n.length <= 1 ? n[0] || "" : n;
            }),
            (this.formatToParts = function (e) {
              return Object(i.a)(
                u.ast,
                u.locales,
                u.formatters,
                u.formats,
                e,
                void 0,
                u.message
              );
            }),
            (this.resolvedOptions = function () {
              return {
                locale: Intl.NumberFormat.supportedLocalesOf(u.locales)[0],
              };
            }),
            (this.getAst = function () {
              return u.ast;
            }),
            "string" == typeof t)
          ) {
            if (((this.message = t), !e.__parse))
              throw new TypeError(
                "IntlMessageFormat.__parse must be set to process `message` of type `string`"
              );
            this.ast = e.__parse(t, {
              normalizeHashtagInPlural: !1,
              ignoreTag: null == o ? void 0 : o.ignoreTag,
            });
          } else this.ast = t;
          if (!Array.isArray(this.ast))
            throw new TypeError(
              "A message must be provided as a String or AST."
            );
          (this.formats = s(e.formats, r)),
            (this.locales = n),
            (this.formatters =
              (o && o.formatters) ||
              (void 0 === (a = this.formatterCache) &&
                (a = { number: {}, dateTime: {}, pluralRules: {} }),
              {
                getNumberFormat: f(
                  function () {
                    for (var e, t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    return new ((e = Intl.NumberFormat).bind.apply(
                      e,
                      c([void 0], t)
                    ))();
                  },
                  { cache: l(a.number), strategy: f.strategies.variadic }
                ),
                getDateTimeFormat: f(
                  function () {
                    for (var e, t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    return new ((e = Intl.DateTimeFormat).bind.apply(
                      e,
                      c([void 0], t)
                    ))();
                  },
                  { cache: l(a.dateTime), strategy: f.strategies.variadic }
                ),
                getPluralRules: f(
                  function () {
                    for (var e, t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    return new ((e = Intl.PluralRules).bind.apply(
                      e,
                      c([void 0], t)
                    ))();
                  },
                  { cache: l(a.pluralRules), strategy: f.strategies.variadic }
                ),
              }));
        }
        return (
          Object.defineProperty(e, "defaultLocale", {
            get: function () {
              return (
                e.memoizedDefaultLocale ||
                  (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale),
                e.memoizedDefaultLocale
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.memoizedDefaultLocale = null),
          (e.__parse = r.a),
          (e.formats = {
            number: {
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
          e
        );
      })();
    },
    N3fz: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return f;
      }),
        n.d(t, "g", function () {
          return p;
        }),
        n.d(t, "a", function () {
          return d;
        }),
        n.d(t, "d", function () {
          return h;
        }),
        n.d(t, "c", function () {
          return v;
        }),
        n.d(t, "f", function () {
          return y;
        }),
        n.d(t, "b", function () {
          return b;
        });
      var r = n("q1tI"),
        o = n("Mu++"),
        a = n("75pU"),
        i = n.n(a),
        u = n("1pe3"),
        c = n("BN9B"),
        s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        l = function () {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var r = Array(e),
            o = 0;
          for (t = 0; t < n; t++)
            for (var a = arguments[t], i = 0, u = a.length; i < u; i++, o++)
              r[o] = a[i];
          return r;
        };
      function f(e, t, n) {
        return (
          void 0 === n && (n = {}),
          t.reduce(function (t, r) {
            return r in e ? (t[r] = e[r]) : r in n && (t[r] = n[r]), t;
          }, {})
        );
      }
      function p(e) {
        Object(u.a)(
          e,
          "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry."
        );
      }
      var d = {
        formats: {},
        messages: {},
        timeZone: void 0,
        textComponent: r.Fragment,
        defaultLocale: "en",
        defaultFormats: {},
        onError: function (e) {
          0;
        },
      };
      function h() {
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
      function m(e) {
        return {
          create: function () {
            return {
              has: function (t) {
                return t in e;
              },
              get: function (t) {
                return e[t];
              },
              set: function (t, n) {
                e[t] = n;
              },
            };
          },
        };
      }
      var g = i.a || a;
      function v(e) {
        void 0 === e &&
          (e = {
            dateTime: {},
            number: {},
            message: {},
            relativeTime: {},
            pluralRules: {},
            list: {},
            displayNames: {},
          });
        var t = Intl.RelativeTimeFormat,
          n = Intl.ListFormat,
          r = Intl.DisplayNames,
          a = g(
            function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return new ((e = Intl.DateTimeFormat).bind.apply(
                e,
                l([void 0], t)
              ))();
            },
            { cache: m(e.dateTime), strategy: g.strategies.variadic }
          ),
          i = g(
            function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return new ((e = Intl.NumberFormat).bind.apply(
                e,
                l([void 0], t)
              ))();
            },
            { cache: m(e.number), strategy: g.strategies.variadic }
          ),
          u = g(
            function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return new ((e = Intl.PluralRules).bind.apply(
                e,
                l([void 0], t)
              ))();
            },
            { cache: m(e.pluralRules), strategy: g.strategies.variadic }
          );
        return {
          getDateTimeFormat: a,
          getNumberFormat: i,
          getMessageFormat: g(
            function (e, t, n, r) {
              return new o.a(
                e,
                t,
                n,
                s(
                  {
                    formatters: {
                      getNumberFormat: i,
                      getDateTimeFormat: a,
                      getPluralRules: u,
                    },
                  },
                  r || {}
                )
              );
            },
            { cache: m(e.message), strategy: g.strategies.variadic }
          ),
          getRelativeTimeFormat: g(
            function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return new (t.bind.apply(t, l([void 0], e)))();
            },
            { cache: m(e.relativeTime), strategy: g.strategies.variadic }
          ),
          getPluralRules: u,
          getListFormat: g(
            function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return new (n.bind.apply(n, l([void 0], e)))();
            },
            { cache: m(e.list), strategy: g.strategies.variadic }
          ),
          getDisplayNames: g(
            function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return new (r.bind.apply(r, l([void 0], e)))();
            },
            { cache: m(e.displayNames), strategy: g.strategies.variadic }
          ),
        };
      }
      function y(e, t, n, r) {
        var o,
          a = e && e[t];
        if ((a && (o = a[n]), o)) return o;
        r(new c.f("No " + t + " format named: " + n));
      }
      function b(e) {
        return function (t) {
          return e(r.Children.toArray(t));
        };
      }
    },
    NSX3: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("xtsi");
      "https:" !== window.location.protocol &&
      "localhost" !== window.location.hostname
        ? console.error(
            "Service workers can only be used over HTTPS, or on localhost for development"
          )
        : "serviceWorker" in navigator &&
          navigator.serviceWorker
            .register("/sw.js")
            .then(function (e) {
              e.addEventListener("updatefound", function () {
                Object(r.apiRunner)("onServiceWorkerUpdateFound", {
                  serviceWorker: e,
                });
                var t = e.installing;
                console.log("installingWorker", t),
                  t.addEventListener("statechange", function () {
                    switch (t.state) {
                      case "installed":
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            Object(r.apiRunner)("onServiceWorkerUpdateReady", {
                              serviceWorker: e,
                            }),
                            window.___failedResources &&
                              (console.log(
                                "resources failed, SW updated - reloading"
                              ),
                              window.location.reload()))
                          : (console.log("Content is now available offline!"),
                            Object(r.apiRunner)("onServiceWorkerInstalled", {
                              serviceWorker: e,
                            }));
                        break;
                      case "redundant":
                        console.error(
                          "The installing service worker became redundant."
                        ),
                          Object(r.apiRunner)("onServiceWorkerRedundant", {
                            serviceWorker: e,
                          });
                        break;
                      case "activated":
                        Object(r.apiRunner)("onServiceWorkerActive", {
                          serviceWorker: e,
                        });
                    }
                  });
              });
            })
            .catch(function (e) {
              console.error("Error during service worker registration:", e);
            });
    },
    OjiQ: function (e) {
      e.exports = JSON.parse(
        '{"description":"ブロックチェーン事業を進める中で、技術や法律などあらゆる判断軸が必要とされます。しかし、それらの視点の隔たり隔たりから、課題解決が進まない場合が多々あります。その隔たりを埋めるために、それぞれの業界のプレイヤーが課題を深掘りし、多くの事業者が自走するためのアウトプットを作り出すコミュニティです。","contact":"お問い合わせ","slogan":"技術・ビジネス・法律の観点から課題を協議し、企業のブロックチェーン活用における標準化策定を目指すコミュニティ","what":"EEA Japan とは","whatDetail":"ブロックチェーン事業を進める中で、技術や法律などあらゆる判断軸が必要とされます。しかし、それらの視点の隔たり隔たりから、課題解決が進まない場合が多々あります。その隔たりを埋めるために、それぞれの業界のプレイヤーが課題を深掘りし、多くの事業者が自走するためのアウトプットを作り出すコミュニティです。","wg":"ワーキンググループ","wgList1":"法律・技術・ビジネスなどの複数観点から課題を深掘り","wgList2":"課題からこれからの必要なアクションプランを明確化","wgList3":"Ethereum Foundationのスポンサーシップのもと海外からの知見をフィードバック","ws":"ワークショップ","wsList1":"実践型のワークショップを通じて、ブロックチェーン事業を自走するための力を身に着ける","wsList2":"テーマ深掘り型から、事業に対する適応を実現する","target":"参加対象","target1":"技術者","target1-desc":"課題解決に必要な仕様の提案や技術的アプローチの深掘りなどをビジネスや法律などの文脈を理解しながら提案したい","target2":"事業者","target2-desc":"ブロックチェーン事業を進めていく上で必要な判断軸を知りたい、実際に進めていきたいという意思がある","target3":"法律家","target3-desc":"技術的文脈、ビジネス的な文脈を読み取りながら規制を理解し、現在の最適解や必要な解決策を提案していきたい方","organize":"主催","support":"後援","contributor":"参加企業","date":"投稿日","group":"ワーキンググループ","groupName_id-voting":"ID x 投票","groupName_ethereum2.0":"イーサリアム2.0","groupName_students":"学生研究","groupName_scaling":"スケーリング","groupName_zero-knowledge-proof":"ゼロ知識証明","posts":"記事一覧","news":"お知らせ","activity":"アクティビティ","activityWorkingGroupSubtitle":"ブロックチェーンの活用によるインターネット投票の実現性検討","activityCreamSubtitle":"秘匿化プロトコルC.R.E.A.Mの開発","contributor.hitachi":" ","contributor.fujitsu":" ","contributor.act":" ","contributor.collabo_gate":" ","contributor.comps":" ","contributor.cryptel":" ","contributor.layerx":" ","contributor.waseda":" ","contributor.accenture":" ","contributor.nttdata":" ","contributor.ntt":" ","contributor.singulanet":" ","contributor.imge":" ","contributor.new":" "}'
      );
    },
    PJYZ: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    QLaP: function (e, t, n) {
      "use strict";
      e.exports = function (e, t, n, r, o, a, i, u) {
        if (!e) {
          var c;
          if (void 0 === t)
            c = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var s = [n, r, o, a, i, u],
              l = 0;
            (c = new Error(
              t.replace(/%s/g, function () {
                return s[l++];
              })
            )).name = "Invariant Violation";
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    TOwV: function (e, t, n) {
      "use strict";
      e.exports = n("qT12");
    },
    TqRt: function (e, t) {
      e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    },
    UxWs: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("dI71"),
        o = n("xtsi"),
        a = n("q1tI"),
        i = n.n(a),
        u = n("i8i4"),
        c = n.n(u),
        s = n("YwZP"),
        l = n("7hJ6"),
        f = n("MMVs"),
        p = n.n(f),
        d = n("Wbzz"),
        h = n("emEt"),
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
        w = m.reduce(function (e, t) {
          return (e[t.fromPath] = t), e;
        }, {});
      function O(e) {
        var t = w[e];
        return null != t && (window.___replace(t.toPath), !0);
      }
      var P = function (e, t) {
          O(e.pathname) ||
            Object(o.apiRunner)("onPreRouteUpdate", {
              location: e,
              prevLocation: t,
            });
        },
        j = function (e, t) {
          O(e.pathname) ||
            Object(o.apiRunner)("onRouteUpdate", {
              location: e,
              prevLocation: t,
            });
        },
        S = function (e, t) {
          if ((void 0 === t && (t = {}), "number" != typeof e)) {
            var n = Object(b.parsePath)(e).pathname,
              r = w[n];
            if (
              (r && ((e = r.toPath), (n = Object(b.parsePath)(e).pathname)),
              window.___swUpdated)
            )
              window.location = n;
            else {
              var a = setTimeout(function () {
                g.a.emit("onDelayedLoadPageResources", { pathname: n }),
                  Object(o.apiRunner)("onRouteUpdateDelayed", {
                    location: window.location,
                  });
              }, 1e3);
              h.default.loadPage(n).then(function (r) {
                if (!r || r.status === h.PageResourceStatus.Error)
                  return (
                    window.history.replaceState({}, "", location.href),
                    (window.location = n),
                    void clearTimeout(a)
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
                  console.log("Site has changed on server. Reloading browser"),
                  (window.location = n)),
                  Object(s.navigate)(e, t),
                  clearTimeout(a);
              });
            }
          } else y.c.navigate(e);
        };
      function E(e, t) {
        var n = this,
          r = t.location,
          a = r.pathname,
          i = r.hash,
          u = Object(o.apiRunner)("shouldUpdateScroll", {
            prevRouterProps: e,
            pathname: a,
            routerProps: { location: r },
            getSavedScrollPosition: function (e) {
              return n._stateStorage.read(e);
            },
          });
        if (u.length > 0) return u[u.length - 1];
        if (e && e.location.pathname === a)
          return i ? decodeURI(i.slice(1)) : [0, 0];
        return !0;
      }
      var T = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).announcementRef = i.a.createRef()),
              n
            );
          }
          Object(r.a)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidUpdate = function (e, t) {
              var n = this;
              requestAnimationFrame(function () {
                var e = "new page at " + n.props.location.pathname;
                document.title && (e = document.title);
                var t = document.querySelectorAll("#gatsby-focus-wrapper h1");
                t && t.length && (e = t[0].textContent);
                var r = "Navigated to " + e;
                n.announcementRef.current &&
                  n.announcementRef.current.innerText !== r &&
                  (n.announcementRef.current.innerText = r);
              });
            }),
            (n.render = function () {
              return i.a.createElement(
                "div",
                Object.assign({}, v, { ref: this.announcementRef })
              );
            }),
            t
          );
        })(i.a.Component),
        A = (function (e) {
          function t(t) {
            var n;
            return (n = e.call(this, t) || this), P(t.location, null), n;
          }
          Object(r.a)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              j(this.props.location, null);
            }),
            (n.componentDidUpdate = function (e, t, n) {
              n && j(this.props.location, e.location);
            }),
            (n.getSnapshotBeforeUpdate = function (e) {
              return (
                this.props.location.pathname !== e.location.pathname &&
                (P(this.props.location, e.location), !0)
              );
            }),
            (n.render = function () {
              return i.a.createElement(
                i.a.Fragment,
                null,
                this.props.children,
                i.a.createElement(T, { location: location })
              );
            }),
            t
          );
        })(i.a.Component),
        C = n("IOVJ"),
        R = n("WM4P"),
        _ = n.n(R),
        x = n("rePB");
      function k(e, t) {
        for (var n in e) if (!(n in t)) return !0;
        for (var r in t) if (e[r] !== t[r]) return !0;
        return !1;
      }
      function D(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                Object(x.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var L = (function (e) {
          function t(t) {
            var n;
            n = e.call(this) || this;
            var r = t.location,
              o = t.pageResources;
            return (
              (n.state = {
                location: I({}, r),
                pageResources: o || h.default.loadPageSync(r.pathname),
              }),
              n
            );
          }
          Object(r.a)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = e.location;
              return t.location.href !== n.href
                ? {
                    pageResources: h.default.loadPageSync(n.pathname),
                    location: I({}, n),
                  }
                : { location: I({}, n) };
            });
          var n = t.prototype;
          return (
            (n.loadResources = function (e) {
              var t = this;
              h.default.loadPage(e).then(function (n) {
                n && n.status !== h.PageResourceStatus.Error
                  ? t.setState({
                      location: I({}, window.location),
                      pageResources: n,
                    })
                  : (window.history.replaceState({}, "", location.href),
                    (window.location = e));
              });
            }),
            (n.shouldComponentUpdate = function (e, t) {
              return t.pageResources
                ? this.state.pageResources !== t.pageResources ||
                    this.state.pageResources.component !==
                      t.pageResources.component ||
                    this.state.pageResources.json !== t.pageResources.json ||
                    !(
                      this.state.location.key === t.location.key ||
                      !t.pageResources.page ||
                      (!t.pageResources.page.matchPath &&
                        !t.pageResources.page.path)
                    ) ||
                    (function (e, t, n) {
                      return k(e.props, t) || k(e.state, n);
                    })(this, e, t)
                : (this.loadResources(e.location.pathname), !1);
            }),
            (n.render = function () {
              return this.props.children(this.state);
            }),
            t
          );
        })(i.a.Component),
        N = n("cSJ8"),
        F = n("Vd8h"),
        M = new h.ProdLoader(_.a, F);
      Object(h.setLoader)(M),
        M.setApiRunner(o.apiRunner),
        (window.asyncRequires = _.a),
        (window.___emitter = g.a),
        (window.___loader = h.publicLoader),
        y.c.listen(function (e) {
          e.location.action = e.action;
        }),
        (window.___push = function (e) {
          return S(e, { replace: !1 });
        }),
        (window.___replace = function (e) {
          return S(e, { replace: !0 });
        }),
        (window.___navigate = function (e, t) {
          return S(e, t);
        }),
        O(window.location.pathname),
        Object(o.apiRunnerAsync)("onClientEntry").then(function () {
          Object(o.apiRunner)("registerServiceWorker").length > 0 && n("NSX3");
          var e = function (e) {
              return i.a.createElement(
                s.BaseContext.Provider,
                { value: { baseuri: "/", basepath: "/" } },
                i.a.createElement(C.a, e)
              );
            },
            t = i.a.createContext({}),
            a = (function (e) {
              function n() {
                return e.apply(this, arguments) || this;
              }
              return (
                Object(r.a)(n, e),
                (n.prototype.render = function () {
                  var e = this.props.children;
                  return i.a.createElement(s.Location, null, function (n) {
                    var r = n.location;
                    return i.a.createElement(L, { location: r }, function (n) {
                      var r = n.pageResources,
                        o = n.location,
                        a = Object(h.getStaticQueryResults)();
                      return i.a.createElement(
                        d.StaticQueryContext.Provider,
                        { value: a },
                        i.a.createElement(
                          t.Provider,
                          { value: { pageResources: r, location: o } },
                          e
                        )
                      );
                    });
                  });
                }),
                n
              );
            })(i.a.Component),
            u = (function (n) {
              function o() {
                return n.apply(this, arguments) || this;
              }
              return (
                Object(r.a)(o, n),
                (o.prototype.render = function () {
                  var n = this;
                  return i.a.createElement(t.Consumer, null, function (t) {
                    var r = t.pageResources,
                      o = t.location;
                    return i.a.createElement(
                      A,
                      { location: o },
                      i.a.createElement(
                        l.ScrollContext,
                        { location: o, shouldUpdateScroll: E },
                        i.a.createElement(
                          s.Router,
                          {
                            basepath: "",
                            location: o,
                            id: "gatsby-focus-wrapper",
                          },
                          i.a.createElement(
                            e,
                            Object.assign(
                              {
                                path:
                                  "/404.html" === r.page.path
                                    ? Object(N.a)(o.pathname, "")
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
            })(i.a.Component),
            f = window,
            m = f.pagePath,
            g = f.location;
          m &&
            "" + m !== g.pathname &&
            !(
              M.findMatchPath(Object(N.a)(g.pathname, "")) ||
              "/404.html" === m ||
              m.match(/^\/404\/?$/) ||
              m.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            Object(s.navigate)("" + m + g.search + g.hash, { replace: !0 }),
            h.publicLoader.loadPage(g.pathname).then(function (e) {
              if (!e || e.status === h.PageResourceStatus.Error)
                throw new Error(
                  "page resources for " +
                    g.pathname +
                    " not found. Not rendering React"
                );
              window.___webpackCompilationHash = e.page.webpackCompilationHash;
              var t = Object(o.apiRunner)(
                  "wrapRootElement",
                  { element: i.a.createElement(u, null) },
                  i.a.createElement(u, null),
                  function (e) {
                    return { element: e.result };
                  }
                ).pop(),
                n = function () {
                  return i.a.createElement(a, null, t);
                },
                r = Object(o.apiRunner)(
                  "replaceHydrateFunction",
                  void 0,
                  c.a.hydrate
                )[0];
              p()(function () {
                r(
                  i.a.createElement(n, null),
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
    VbXa: function (e, t) {
      e.exports = function (e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      };
    },
    Vd8h: function (e) {
      e.exports = JSON.parse("[]");
    },
    WM4P: function (e, t, n) {
      t.components = {
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
    Wbzz: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "graphql", function () {
          return m;
        }),
        n.d(t, "StaticQueryContext", function () {
          return f;
        }),
        n.d(t, "StaticQuery", function () {
          return d;
        }),
        n.d(t, "useStaticQuery", function () {
          return h;
        }),
        n.d(t, "prefetchPathname", function () {
          return l;
        });
      var r = n("q1tI"),
        o = n.n(r),
        a = n("+ZDr"),
        i = n.n(a);
      n.d(t, "Link", function () {
        return i.a;
      }),
        n.d(t, "withAssetPrefix", function () {
          return a.withAssetPrefix;
        }),
        n.d(t, "withPrefix", function () {
          return a.withPrefix;
        }),
        n.d(t, "parsePath", function () {
          return a.parsePath;
        }),
        n.d(t, "navigate", function () {
          return a.navigate;
        }),
        n.d(t, "push", function () {
          return a.push;
        }),
        n.d(t, "replace", function () {
          return a.replace;
        }),
        n.d(t, "navigateTo", function () {
          return a.navigateTo;
        });
      var u = n("7hJ6");
      n.d(t, "useScrollRestoration", function () {
        return u.useScrollRestoration;
      });
      var c = n("lw3w"),
        s = n.n(c);
      n.d(t, "PageRenderer", function () {
        return s.a;
      });
      var l = n("emEt").default.enqueue,
        f = o.a.createContext({});
      function p(e) {
        var t = e.staticQueryData,
          n = e.data,
          r = e.query,
          a = e.render,
          i = n ? n.data : t[r] && t[r].data;
        return o.a.createElement(
          o.a.Fragment,
          null,
          i && a(i),
          !i && o.a.createElement("div", null, "Loading (StaticQuery)")
        );
      }
      var d = function (e) {
          var t = e.data,
            n = e.query,
            r = e.render,
            a = e.children;
          return o.a.createElement(f.Consumer, null, function (e) {
            return o.a.createElement(p, {
              data: t,
              query: n,
              render: r || a,
              staticQueryData: e,
            });
          });
        },
        h = function (e) {
          var t;
          o.a.useContext;
          var n = o.a.useContext(f);
          if (isNaN(Number(e)))
            throw new Error(
              "useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`" +
                e +
                "`);\n"
            );
          if (
            null == n || null === (t = n[e]) || void 0 === t ? void 0 : t.data
          )
            return n[e].data;
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
    "YLt+": function (e) {
      e.exports = JSON.parse("[]");
    },
    YwZP: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "Link", function () {
          return k;
        }),
        n.d(t, "Location", function () {
          return b;
        }),
        n.d(t, "LocationProvider", function () {
          return w;
        }),
        n.d(t, "Match", function () {
          return M;
        }),
        n.d(t, "Redirect", function () {
          return F;
        }),
        n.d(t, "Router", function () {
          return j;
        }),
        n.d(t, "ServerLocation", function () {
          return O;
        }),
        n.d(t, "isRedirect", function () {
          return I;
        }),
        n.d(t, "redirectTo", function () {
          return L;
        }),
        n.d(t, "useLocation", function () {
          return U;
        }),
        n.d(t, "useNavigate", function () {
          return q;
        }),
        n.d(t, "useParams", function () {
          return W;
        }),
        n.d(t, "useMatch", function () {
          return B;
        }),
        n.d(t, "BaseContext", function () {
          return P;
        });
      var r = n("q1tI"),
        o = n.n(r),
        a = (n("17x9"), n("QLaP")),
        i = n.n(a),
        u = n("nqlD"),
        c = n.n(u),
        s = n("94VI"),
        l = n("LYrO");
      n.d(t, "matchPath", function () {
        return l.match;
      });
      var f = n("9Xx/");
      n.d(t, "createHistory", function () {
        return f.a;
      }),
        n.d(t, "createMemorySource", function () {
          return f.b;
        }),
        n.d(t, "navigate", function () {
          return f.d;
        }),
        n.d(t, "globalHistory", function () {
          return f.c;
        });
      var p =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
      function d(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function m(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function g(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var v = function (e, t) {
          var n = c()(t);
          return (n.displayName = e), n;
        },
        y = v("Location"),
        b = function (e) {
          var t = e.children;
          return o.a.createElement(y.Consumer, null, function (e) {
            return e ? t(e) : o.a.createElement(w, null, t);
          });
        },
        w = (function (e) {
          function t() {
            var n, r;
            h(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r = m(this, e.call.apply(e, [this].concat(a)))),
              (r.state = { context: r.getContext(), refs: { unlisten: null } }),
              m(r, n)
            );
          }
          return (
            g(t, e),
            (t.prototype.getContext = function () {
              var e = this.props.history;
              return { navigate: e.navigate, location: e.location };
            }),
            (t.prototype.componentDidCatch = function (e, t) {
              if (!I(e)) throw e;
              (0, this.props.history.navigate)(e.uri, { replace: !0 });
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              t.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete();
            }),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = this.state.refs,
                n = this.props.history;
              n._onTransitionComplete(),
                (t.unlisten = n.listen(function () {
                  Promise.resolve().then(function () {
                    requestAnimationFrame(function () {
                      e.unmounted ||
                        e.setState(function () {
                          return { context: e.getContext() };
                        });
                    });
                  });
                }));
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.state.refs;
              (this.unmounted = !0), e.unlisten();
            }),
            (t.prototype.render = function () {
              var e = this.state.context,
                t = this.props.children;
              return o.a.createElement(
                y.Provider,
                { value: e },
                "function" == typeof t ? t(e) : t || null
              );
            }),
            t
          );
        })(o.a.Component);
      w.defaultProps = { history: f.c };
      var O = function (e) {
          var t = e.url,
            n = e.children,
            r = t.indexOf("?"),
            a = void 0,
            i = "";
          return (
            r > -1 ? ((a = t.substring(0, r)), (i = t.substring(r))) : (a = t),
            o.a.createElement(
              y.Provider,
              {
                value: {
                  location: { pathname: a, search: i, hash: "" },
                  navigate: function () {
                    throw new Error("You can't call navigate on the server.");
                  },
                },
              },
              n
            )
          );
        },
        P = v("Base", { baseuri: "/", basepath: "/" }),
        j = function (e) {
          return o.a.createElement(P.Consumer, null, function (t) {
            return o.a.createElement(b, null, function (n) {
              return o.a.createElement(S, p({}, t, n, e));
            });
          });
        },
        S = (function (e) {
          function t() {
            return h(this, t), m(this, e.apply(this, arguments));
          }
          return (
            g(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.location,
                n = e.navigate,
                r = e.basepath,
                a = e.primary,
                i = e.children,
                u = (e.baseuri, e.component),
                c = void 0 === u ? "div" : u,
                s = d(e, [
                  "location",
                  "navigate",
                  "basepath",
                  "primary",
                  "children",
                  "baseuri",
                  "component",
                ]),
                f = o.a.Children.toArray(i).reduce(function (e, t) {
                  var n = G(r)(t);
                  return e.concat(n);
                }, []),
                h = t.pathname,
                m = Object(l.pick)(f, h);
              if (m) {
                var g = m.params,
                  v = m.uri,
                  y = m.route,
                  b = m.route.value;
                r = y.default ? r : y.path.replace(/\*$/, "");
                var w = p({}, g, {
                    uri: v,
                    location: t,
                    navigate: function (e, t) {
                      return n(Object(l.resolve)(e, v), t);
                    },
                  }),
                  O = o.a.cloneElement(
                    b,
                    w,
                    b.props.children
                      ? o.a.createElement(
                          j,
                          { location: t, primary: a },
                          b.props.children
                        )
                      : void 0
                  ),
                  S = a ? T : c,
                  E = a ? p({ uri: v, location: t, component: c }, s) : s;
                return o.a.createElement(
                  P.Provider,
                  { value: { baseuri: v, basepath: r } },
                  o.a.createElement(S, E, O)
                );
              }
              return null;
            }),
            t
          );
        })(o.a.PureComponent);
      S.defaultProps = { primary: !0 };
      var E = v("Focus"),
        T = function (e) {
          var t = e.uri,
            n = e.location,
            r = e.component,
            a = d(e, ["uri", "location", "component"]);
          return o.a.createElement(E.Consumer, null, function (e) {
            return o.a.createElement(
              R,
              p({}, a, { component: r, requestFocus: e, uri: t, location: n })
            );
          });
        },
        A = !0,
        C = 0,
        R = (function (e) {
          function t() {
            var n, r;
            h(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r = m(this, e.call.apply(e, [this].concat(a)))),
              (r.state = {}),
              (r.requestFocus = function (e) {
                !r.state.shouldFocus && e && e.focus();
              }),
              m(r, n)
            );
          }
          return (
            g(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              if (null == t.uri) return p({ shouldFocus: !0 }, e);
              var n = e.uri !== t.uri,
                r =
                  t.location.pathname !== e.location.pathname &&
                  e.location.pathname === e.uri;
              return p({ shouldFocus: n || r }, e);
            }),
            (t.prototype.componentDidMount = function () {
              C++, this.focus();
            }),
            (t.prototype.componentWillUnmount = function () {
              0 === --C && (A = !0);
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              e.location !== this.props.location &&
                this.state.shouldFocus &&
                this.focus();
            }),
            (t.prototype.focus = function () {
              var e = this.props.requestFocus;
              e
                ? e(this.node)
                : A
                ? (A = !1)
                : this.node &&
                  (this.node.contains(document.activeElement) ||
                    this.node.focus());
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = (t.children, t.style),
                r = (t.requestFocus, t.component),
                a = void 0 === r ? "div" : r,
                i =
                  (t.uri,
                  t.location,
                  d(t, [
                    "children",
                    "style",
                    "requestFocus",
                    "component",
                    "uri",
                    "location",
                  ]));
              return o.a.createElement(
                a,
                p(
                  {
                    style: p({ outline: "none" }, n),
                    tabIndex: "-1",
                    ref: function (t) {
                      return (e.node = t);
                    },
                  },
                  i
                ),
                o.a.createElement(
                  E.Provider,
                  { value: this.requestFocus },
                  this.props.children
                )
              );
            }),
            t
          );
        })(o.a.Component);
      Object(s.polyfill)(R);
      var _ = function () {},
        x = o.a.forwardRef;
      void 0 === x &&
        (x = function (e) {
          return e;
        });
      var k = x(function (e, t) {
        var n = e.innerRef,
          r = d(e, ["innerRef"]);
        return o.a.createElement(P.Consumer, null, function (e) {
          e.basepath;
          var a = e.baseuri;
          return o.a.createElement(b, null, function (e) {
            var i = e.location,
              u = e.navigate,
              c = r.to,
              s = r.state,
              f = r.replace,
              h = r.getProps,
              m = void 0 === h ? _ : h,
              g = d(r, ["to", "state", "replace", "getProps"]),
              v = Object(l.resolve)(c, a),
              y = encodeURI(v),
              b = i.pathname === y,
              w = Object(l.startsWith)(i.pathname, y);
            return o.a.createElement(
              "a",
              p(
                { ref: t || n, "aria-current": b ? "page" : void 0 },
                g,
                m({
                  isCurrent: b,
                  isPartiallyCurrent: w,
                  href: v,
                  location: i,
                }),
                {
                  href: v,
                  onClick: function (e) {
                    if ((g.onClick && g.onClick(e), H(e))) {
                      e.preventDefault();
                      var t = f;
                      if ("boolean" != typeof f && b) {
                        var n = p({}, i.state),
                          r = (n.key, d(n, ["key"]));
                        t = Object(l.shallowCompare)(p({}, s), r);
                      }
                      u(v, { state: s, replace: t });
                    }
                  },
                }
              )
            );
          });
        });
      });
      function D(e) {
        this.uri = e;
      }
      k.displayName = "Link";
      var I = function (e) {
          return e instanceof D;
        },
        L = function (e) {
          throw new D(e);
        },
        N = (function (e) {
          function t() {
            return h(this, t), m(this, e.apply(this, arguments));
          }
          return (
            g(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props,
                t = e.navigate,
                n = e.to,
                r = (e.from, e.replace),
                o = void 0 === r || r,
                a = e.state,
                i = (e.noThrow, e.baseuri),
                u = d(e, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ]);
              Promise.resolve().then(function () {
                var e = Object(l.resolve)(n, i);
                t(Object(l.insertParams)(e, u), { replace: o, state: a });
              });
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = (e.navigate, e.to),
                n = (e.from, e.replace, e.state, e.noThrow),
                r = e.baseuri,
                o = d(e, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ]),
                a = Object(l.resolve)(t, r);
              return n || L(Object(l.insertParams)(a, o)), null;
            }),
            t
          );
        })(o.a.Component),
        F = function (e) {
          return o.a.createElement(P.Consumer, null, function (t) {
            var n = t.baseuri;
            return o.a.createElement(b, null, function (t) {
              return o.a.createElement(N, p({}, t, { baseuri: n }, e));
            });
          });
        },
        M = function (e) {
          var t = e.path,
            n = e.children;
          return o.a.createElement(P.Consumer, null, function (e) {
            var r = e.baseuri;
            return o.a.createElement(b, null, function (e) {
              var o = e.navigate,
                a = e.location,
                i = Object(l.resolve)(t, r),
                u = Object(l.match)(i, a.pathname);
              return n({
                navigate: o,
                location: a,
                match: u ? p({}, u.params, { uri: u.uri, path: t }) : null,
              });
            });
          });
        },
        U = function () {
          var e = Object(r.useContext)(y);
          if (!e)
            throw new Error(
              "useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          return e.location;
        },
        q = function () {
          var e = Object(r.useContext)(y);
          if (!e)
            throw new Error(
              "useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          return e.navigate;
        },
        W = function () {
          var e = Object(r.useContext)(P);
          if (!e)
            throw new Error(
              "useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          var t = U(),
            n = Object(l.match)(e.basepath, t.pathname);
          return n ? n.params : null;
        },
        B = function (e) {
          if (!e)
            throw new Error(
              "useMatch(path: string) requires an argument of a string to match against"
            );
          var t = Object(r.useContext)(P);
          if (!t)
            throw new Error(
              "useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          var n = U(),
            o = Object(l.resolve)(e, t.baseuri),
            a = Object(l.match)(o, n.pathname);
          return a ? p({}, a.params, { uri: a.uri, path: e }) : null;
        },
        z = function (e) {
          return e.replace(/(^\/+|\/+$)/g, "");
        },
        G = function e(t) {
          return function (n) {
            if (!n) return null;
            if (n.type === o.a.Fragment && n.props.children)
              return o.a.Children.map(n.props.children, e(t));
            if (
              (n.props.path || n.props.default || n.type === F || i()(!1),
              n.type !== F || (n.props.from && n.props.to) || i()(!1),
              n.type !== F ||
                Object(l.validateRedirect)(n.props.from, n.props.to) ||
                i()(!1),
              n.props.default)
            )
              return { value: n, default: !0 };
            var r = n.type === F ? n.props.from : n.props.path,
              a = "/" === r ? t : z(t) + "/" + z(r);
            return {
              value: n,
              default: n.props.default,
              path: n.props.children ? z(a) + "/*" : a,
            };
          };
        },
        H = function (e) {
          return (
            !e.defaultPrevented &&
            0 === e.button &&
            !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
          );
        };
    },
    b9Nj: function (e, t, n) {
      "use strict";
      var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
      t.onRouteUpdate = function (e) {
        var t = e.location,
          n = window.GATSBY_GTAG_PLUGIN_GA_TRACKING_ID,
          o = window.GATSBY_GTAG_PLUGIN_ANONYMIZE || !1;
        if (n && "function" == typeof window.gtag) {
          var a = "";
          t && (a = "" + t.pathname + t.search + t.hash);
          var i = {};
          o && (i = { anonymize_ip: !0 }),
            window.gtag("config", n, r({ page_path: a }, i));
        }
      };
    },
    bmMU: function (e, t) {
      var n = "undefined" != typeof Element,
        r = "function" == typeof Map,
        o = "function" == typeof Set,
        a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      e.exports = function (e, t) {
        try {
          return (function e(t, i) {
            if (t === i) return !0;
            if (t && i && "object" == typeof t && "object" == typeof i) {
              if (t.constructor !== i.constructor) return !1;
              var u, c, s, l;
              if (Array.isArray(t)) {
                if ((u = t.length) != i.length) return !1;
                for (c = u; 0 != c--; ) if (!e(t[c], i[c])) return !1;
                return !0;
              }
              if (r && t instanceof Map && i instanceof Map) {
                if (t.size !== i.size) return !1;
                for (l = t.entries(); !(c = l.next()).done; )
                  if (!i.has(c.value[0])) return !1;
                for (l = t.entries(); !(c = l.next()).done; )
                  if (!e(c.value[1], i.get(c.value[0]))) return !1;
                return !0;
              }
              if (o && t instanceof Set && i instanceof Set) {
                if (t.size !== i.size) return !1;
                for (l = t.entries(); !(c = l.next()).done; )
                  if (!i.has(c.value[0])) return !1;
                return !0;
              }
              if (a && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
                if ((u = t.length) != i.length) return !1;
                for (c = u; 0 != c--; ) if (t[c] !== i[c]) return !1;
                return !0;
              }
              if (t.constructor === RegExp)
                return t.source === i.source && t.flags === i.flags;
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === i.valueOf();
              if (t.toString !== Object.prototype.toString)
                return t.toString() === i.toString();
              if ((u = (s = Object.keys(t)).length) !== Object.keys(i).length)
                return !1;
              for (c = u; 0 != c--; )
                if (!Object.prototype.hasOwnProperty.call(i, s[c])) return !1;
              if (n && t instanceof Element) return !1;
              for (c = u; 0 != c--; )
                if (
                  (("_owner" !== s[c] && "__v" !== s[c] && "__o" !== s[c]) ||
                    !t.$$typeof) &&
                  !e(t[s[c]], i[s[c]])
                )
                  return !1;
              return !0;
            }
            return t != t && i != i;
          })(e, t);
        } catch (i) {
          if ((i.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw i;
        }
      };
    },
    cDf5: function (e, t) {
      function n(t) {
        return (
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? (e.exports = n = function (e) {
                return typeof e;
              })
            : (e.exports = n = function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    cSJ8: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          void 0 === t && (t = ""),
          t
            ? e === t
              ? "/"
              : e.startsWith(t + "/")
              ? e.slice(t.length)
              : e
            : e
        );
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    cY5a: function (e, t, n) {
      "use strict";
      var r, o;
      function a(e) {
        return e.type === r.literal;
      }
      function i(e) {
        return e.type === r.argument;
      }
      function u(e) {
        return e.type === r.number;
      }
      function c(e) {
        return e.type === r.date;
      }
      function s(e) {
        return e.type === r.time;
      }
      function l(e) {
        return e.type === r.select;
      }
      function f(e) {
        return e.type === r.plural;
      }
      function p(e) {
        return e.type === r.pound;
      }
      function d(e) {
        return e.type === r.tag;
      }
      function h(e) {
        return !(!e || "object" != typeof e || 0 !== e.type);
      }
      function m(e) {
        return !(!e || "object" != typeof e || 1 !== e.type);
      }
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "e", function () {
          return a;
        }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "f", function () {
          return u;
        }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "l", function () {
          return s;
        }),
        n.d(t, "j", function () {
          return l;
        }),
        n.d(t, "h", function () {
          return f;
        }),
        n.d(t, "i", function () {
          return p;
        }),
        n.d(t, "k", function () {
          return d;
        }),
        n.d(t, "g", function () {
          return h;
        }),
        n.d(t, "d", function () {
          return m;
        }),
        (function (e) {
          (e[(e.literal = 0)] = "literal"),
            (e[(e.argument = 1)] = "argument"),
            (e[(e.number = 2)] = "number"),
            (e[(e.date = 3)] = "date"),
            (e[(e.time = 4)] = "time"),
            (e[(e.select = 5)] = "select"),
            (e[(e.plural = 6)] = "plural"),
            (e[(e.pound = 7)] = "pound"),
            (e[(e.tag = 8)] = "tag");
        })(r || (r = {})),
        (function (e) {
          (e[(e.number = 0)] = "number"), (e[(e.dateTime = 1)] = "dateTime");
        })(o || (o = {}));
    },
    cu4x: function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.parsePath = function (e) {
          var t = e || "/",
            n = "",
            r = "",
            o = t.indexOf("#");
          -1 !== o && ((r = t.substr(o)), (t = t.substr(0, o)));
          var a = t.indexOf("?");
          -1 !== a && ((n = t.substr(a)), (t = t.substr(0, a)));
          return {
            pathname: t,
            search: "?" === n ? "" : n,
            hash: "#" === r ? "" : r,
          };
        });
    },
    dI71: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    emEt: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "PageResourceStatus", function () {
          return E;
        }),
        n.d(t, "BaseLoader", function () {
          return x;
        }),
        n.d(t, "ProdLoader", function () {
          return D;
        }),
        n.d(t, "setLoader", function () {
          return I;
        }),
        n.d(t, "publicLoader", function () {
          return L;
        }),
        n.d(t, "getStaticQueryResults", function () {
          return N;
        });
      var r = n("dI71");
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return o(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? o(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var i = n("rePB"),
        u = (function (e) {
          if ("undefined" == typeof document) return !1;
          var t = document.createElement("link");
          try {
            if (t.relList && "function" == typeof t.relList.supports)
              return t.relList.supports(e);
          } catch (n) {
            return !1;
          }
          return !1;
        })("prefetch")
          ? function (e, t) {
              return new Promise(function (n, r) {
                if ("undefined" != typeof document) {
                  var o = document.createElement("link");
                  o.setAttribute("rel", "prefetch"),
                    o.setAttribute("href", e),
                    Object.keys(t).forEach(function (e) {
                      o.setAttribute(e, t[e]);
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
          : function (e) {
              return new Promise(function (t, n) {
                var r = new XMLHttpRequest();
                r.open("GET", e, !0),
                  (r.onload = function () {
                    200 === r.status ? t() : n();
                  }),
                  r.send(null);
              });
            },
        c = {},
        s = function (e, t) {
          return new Promise(function (n) {
            c[e]
              ? n()
              : u(e, t)
                  .then(function () {
                    n(), (c[e] = !0);
                  })
                  .catch(function () {});
          });
        },
        l = n("5yr3"),
        f = n("LYrO"),
        p = n("cSJ8"),
        d = function (e) {
          return void 0 === e
            ? e
            : "/" === e
            ? "/"
            : "/" === e.charAt(e.length - 1)
            ? e.slice(0, -1)
            : e;
        };
      function h(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return m(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return m(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0;
            return function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        return (n = e[Symbol.iterator]()).next.bind(n);
      }
      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var g = new Map(),
        v = [],
        y = function (e) {
          var t = decodeURIComponent(e);
          return Object(p.a)(t, "").split("#")[0].split("?")[0];
        };
      function b(e) {
        return e.startsWith("/") ||
          e.startsWith("https://") ||
          e.startsWith("http://")
          ? e
          : new URL(
              e,
              window.location.href +
                (window.location.href.endsWith("/") ? "" : "/")
            ).pathname;
      }
      var w = function (e) {
          for (var t, n = P(e), r = h(v); !(t = r()).done; ) {
            var o = t.value,
              a = o.matchPath,
              i = o.path;
            if (Object(f.match)(a, n)) return d(i);
          }
          return null;
        },
        O = function (e) {
          var t = y(b(e));
          if (g.has(t)) return g.get(t);
          var n = w(t);
          return n || (n = P(e)), g.set(t, n), n;
        },
        P = function (e) {
          var t = y(b(e));
          return "/index.html" === t && (t = "/"), (t = d(t));
        };
      function j(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                Object(i.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var E = { Error: "error", Success: "success" },
        T = function (e) {
          return (e && e.default) || e;
        },
        A = function (e) {
          var t;
          return (
            "/page-data/" +
            ("/" === e
              ? "index"
              : (t = (t = "/" === (t = e)[0] ? t.slice(1) : t).endsWith("/")
                  ? t.slice(0, -1)
                  : t)) +
            "/page-data.json"
          );
        };
      function C(e, t) {
        return (
          void 0 === t && (t = "GET"),
          new Promise(function (n, r) {
            var o = new XMLHttpRequest();
            o.open(t, e, !0),
              (o.onreadystatechange = function () {
                4 == o.readyState && n(o);
              }),
              o.send(null);
          })
        );
      }
      var R,
        _ = function (e, t) {
          void 0 === t && (t = null);
          var n = {
            componentChunkName: e.componentChunkName,
            path: e.path,
            webpackCompilationHash: e.webpackCompilationHash,
            matchPath: e.matchPath,
            staticQueryHashes: e.staticQueryHashes,
          };
          return { component: t, json: e.result, page: n };
        },
        x = (function () {
          function e(e, t) {
            (this.inFlightNetworkRequests = new Map()),
              (this.pageDb = new Map()),
              (this.inFlightDb = new Map()),
              (this.staticQueryDb = {}),
              (this.pageDataDb = new Map()),
              (this.prefetchTriggered = new Set()),
              (this.prefetchCompleted = new Set()),
              (this.loadComponent = e),
              (v = t);
          }
          var t = e.prototype;
          return (
            (t.memoizedGet = function (e) {
              var t = this,
                n = this.inFlightNetworkRequests.get(e);
              return (
                n ||
                  ((n = C(e, "GET")), this.inFlightNetworkRequests.set(e, n)),
                n
                  .then(function (n) {
                    return t.inFlightNetworkRequests.delete(e), n;
                  })
                  .catch(function (n) {
                    throw (t.inFlightNetworkRequests.delete(e), n);
                  })
              );
            }),
            (t.setApiRunner = function (e) {
              (this.apiRunner = e),
                (this.prefetchDisabled = e("disableCorePrefetching").some(
                  function (e) {
                    return e;
                  }
                ));
            }),
            (t.fetchPageDataJson = function (e) {
              var t = this,
                n = e.pagePath,
                r = e.retries,
                o = void 0 === r ? 0 : r,
                a = A(n);
              return this.memoizedGet(a).then(function (r) {
                var a = r.status,
                  i = r.responseText;
                if (200 === a)
                  try {
                    var u = JSON.parse(i);
                    if (void 0 === u.path)
                      throw new Error("not a valid pageData response");
                    return Object.assign(e, { status: E.Success, payload: u });
                  } catch (c) {}
                return 404 === a || 200 === a
                  ? "/404.html" === n
                    ? Object.assign(e, { status: E.Error })
                    : t.fetchPageDataJson(
                        Object.assign(e, {
                          pagePath: "/404.html",
                          notFound: !0,
                        })
                      )
                  : 500 === a
                  ? Object.assign(e, { status: E.Error })
                  : o < 3
                  ? t.fetchPageDataJson(Object.assign(e, { retries: o + 1 }))
                  : Object.assign(e, { status: E.Error });
              });
            }),
            (t.loadPageDataJson = function (e) {
              var t = this,
                n = O(e);
              return this.pageDataDb.has(n)
                ? Promise.resolve(this.pageDataDb.get(n))
                : this.fetchPageDataJson({ pagePath: n }).then(function (e) {
                    return t.pageDataDb.set(n, e), e;
                  });
            }),
            (t.findMatchPath = function (e) {
              return w(e);
            }),
            (t.loadPage = function (e) {
              var t = this,
                n = O(e);
              if (this.pageDb.has(n)) {
                var r = this.pageDb.get(n);
                return Promise.resolve(r.payload);
              }
              if (this.inFlightDb.has(n)) return this.inFlightDb.get(n);
              var o = Promise.all([
                this.loadAppData(),
                this.loadPageDataJson(n),
              ]).then(function (e) {
                var r = e[1];
                if (r.status === E.Error) return { status: E.Error };
                var o = r.payload,
                  a = o,
                  i = a.componentChunkName,
                  u = a.staticQueryHashes,
                  c = void 0 === u ? [] : u,
                  s = {},
                  f = t.loadComponent(i).then(function (t) {
                    var n;
                    return (
                      (s.createdAt = new Date()),
                      t
                        ? ((s.status = E.Success),
                          !0 === r.notFound && (s.notFound = !0),
                          (o = Object.assign(o, {
                            webpackCompilationHash: e[0]
                              ? e[0].webpackCompilationHash
                              : "",
                          })),
                          (n = _(o, t)))
                        : (s.status = E.Error),
                      n
                    );
                  }),
                  p = Promise.all(
                    c.map(function (e) {
                      if (t.staticQueryDb[e]) {
                        var n = t.staticQueryDb[e];
                        return { staticQueryHash: e, jsonPayload: n };
                      }
                      return t
                        .memoizedGet("/page-data/sq/d/" + e + ".json")
                        .then(function (t) {
                          var n = JSON.parse(t.responseText);
                          return { staticQueryHash: e, jsonPayload: n };
                        });
                    })
                  ).then(function (e) {
                    var n = {};
                    return (
                      e.forEach(function (e) {
                        var r = e.staticQueryHash,
                          o = e.jsonPayload;
                        (n[r] = o), (t.staticQueryDb[r] = o);
                      }),
                      n
                    );
                  });
                return Promise.all([f, p]).then(function (e) {
                  var r,
                    o = e[0],
                    a = e[1];
                  return (
                    o &&
                      ((r = S(S({}, o), {}, { staticQueryResults: a })),
                      (s.payload = r),
                      l.a.emit("onPostLoadPageResources", {
                        page: r,
                        pageResources: r,
                      })),
                    t.pageDb.set(n, s),
                    r
                  );
                });
              });
              return (
                o
                  .then(function (e) {
                    t.inFlightDb.delete(n);
                  })
                  .catch(function (e) {
                    throw (t.inFlightDb.delete(n), e);
                  }),
                this.inFlightDb.set(n, o),
                o
              );
            }),
            (t.loadPageSync = function (e) {
              var t = O(e);
              if (this.pageDb.has(t)) return this.pageDb.get(t).payload;
            }),
            (t.shouldPrefetch = function (e) {
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
                })() && !this.pageDb.has(e)
              );
            }),
            (t.prefetch = function (e) {
              var t = this;
              if (!this.shouldPrefetch(e)) return !1;
              if (
                (this.prefetchTriggered.has(e) ||
                  (this.apiRunner("onPrefetchPathname", { pathname: e }),
                  this.prefetchTriggered.add(e)),
                this.prefetchDisabled)
              )
                return !1;
              var n = O(e);
              return (
                this.doPrefetch(n).then(function () {
                  t.prefetchCompleted.has(e) ||
                    (t.apiRunner("onPostPrefetchPathname", { pathname: e }),
                    t.prefetchCompleted.add(e));
                }),
                !0
              );
            }),
            (t.doPrefetch = function (e) {
              throw new Error("doPrefetch not implemented");
            }),
            (t.hovering = function (e) {
              this.loadPage(e);
            }),
            (t.getResourceURLsForPathname = function (e) {
              var t = O(e),
                n = this.pageDataDb.get(t);
              if (n) {
                var r = _(n.payload);
                return [].concat(a(k(r.page.componentChunkName)), [A(t)]);
              }
              return null;
            }),
            (t.isPageNotFound = function (e) {
              var t = O(e),
                n = this.pageDb.get(t);
              return n && !0 === n.notFound;
            }),
            (t.loadAppData = function (e) {
              var t = this;
              return (
                void 0 === e && (e = 0),
                this.memoizedGet("/page-data/app-data.json").then(function (n) {
                  var r,
                    o = n.status,
                    a = n.responseText;
                  if (200 !== o && e < 3) return t.loadAppData(e + 1);
                  if (200 === o)
                    try {
                      var i = JSON.parse(a);
                      if (void 0 === i.webpackCompilationHash)
                        throw new Error("not a valid app-data response");
                      r = i;
                    } catch (u) {}
                  return r;
                })
              );
            }),
            e
          );
        })(),
        k = function (e) {
          return (window.___chunkMapping[e] || []).map(function (e) {
            return "" + e;
          });
        },
        D = (function (e) {
          function t(t, n) {
            return (
              e.call(
                this,
                function (e) {
                  return t.components[e]
                    ? t.components[e]()
                        .then(T)
                        .catch(function () {
                          return null;
                        })
                    : Promise.resolve();
                },
                n
              ) || this
            );
          }
          Object(r.a)(t, e);
          var n = t.prototype;
          return (
            (n.doPrefetch = function (e) {
              var t = this,
                n = A(e);
              return s(n, { crossOrigin: "anonymous", as: "fetch" })
                .then(function () {
                  return t.loadPageDataJson(e);
                })
                .then(function (e) {
                  if (e.status !== E.Success) return Promise.resolve();
                  var t = e.payload,
                    n = t.componentChunkName,
                    r = k(n);
                  return Promise.all(r.map(s)).then(function () {
                    return t;
                  });
                });
            }),
            (n.loadPageDataJson = function (t) {
              return e.prototype.loadPageDataJson
                .call(this, t)
                .then(function (e) {
                  return e.notFound
                    ? C(t, "HEAD").then(function (t) {
                        return 200 === t.status ? { status: E.Error } : e;
                      })
                    : e;
                });
            }),
            t
          );
        })(x),
        I = function (e) {
          R = e;
        },
        L = {
          getResourcesForPathname: function (e) {
            return (
              console.warn(
                "Warning: getResourcesForPathname is deprecated. Use loadPage instead"
              ),
              R.i.loadPage(e)
            );
          },
          getResourcesForPathnameSync: function (e) {
            return (
              console.warn(
                "Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead"
              ),
              R.i.loadPageSync(e)
            );
          },
          enqueue: function (e) {
            return R.prefetch(e);
          },
          getResourceURLsForPathname: function (e) {
            return R.getResourceURLsForPathname(e);
          },
          loadPage: function (e) {
            return R.loadPage(e);
          },
          loadPageSync: function (e) {
            return R.loadPageSync(e);
          },
          prefetch: function (e) {
            return R.prefetch(e);
          },
          isPageNotFound: function (e) {
            return R.isPageNotFound(e);
          },
          hovering: function (e) {
            return R.hovering(e);
          },
          loadAppData: function () {
            return R.loadAppData();
          },
        };
      t.default = L;
      function N() {
        return R.staticQueryDb;
      }
    },
    eq4K: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return i;
        });
      var r = n("q1tI"),
        o = n("+IEj"),
        a = r.createContext(o.defaultLang),
        i = function (e) {
          var t = e.children,
            n = e.pageContext.locale,
            i = void 0 === n ? o.defaultLang : n;
          return r.createElement(a.Provider, { value: i }, t);
        };
    },
    fQgO: function (e, t, n) {
      var r = { "./en.json": "s+WA", "./ja.json": "OjiQ" };
      function o(e) {
        var t = a(e);
        return n(t);
      }
      function a(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (o.keys = function () {
        return Object.keys(r);
      }),
        (o.resolve = a),
        (e.exports = o),
        (o.id = "fQgO");
    },
    "flL/": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "wrapRootElement", function () {
          return g;
        });
      var r = n("rePB"),
        o = n("q1tI"),
        a = n.n(o),
        i = n("7ljp"),
        u = n("BfwJ"),
        c = n("gXpC"),
        s = n("JTKy").default,
        l = Object.assign({}, s);
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var d = {};
      c.plugins.forEach(function (e) {
        var t = e.guards,
          n = void 0 === t ? {} : t,
          r = e.components;
        Object.entries(r).forEach(function (e) {
          var t = e[0],
            r = e[1];
          d[t]
            ? d.push({ guard: n[t], Component: r })
            : (d[t] = [{ guard: n[t], Component: r }]);
        });
      });
      var h = Object.entries(d)
          .map(function (e) {
            var t,
              n = e[0],
              r = e[1];
            return (
              ((t = {})[n] = (function (e) {
                return function (t) {
                  var n = e.find(function (e) {
                    var n = e.guard;
                    return !n || n(t);
                  }).Component;
                  return a.a.createElement(n, t);
                };
              })(r.concat({ guard: void 0, Component: n }))),
              t
            );
          })
          .reduce(function (e, t) {
            return p(p({}, e), t);
          }, {}),
        m = Object(i.withMDXComponents)(function (e) {
          var t = e.components,
            n = e.children;
          return a.a.createElement(
            u.MDXScopeProvider,
            { __mdxScope: l },
            a.a.createElement(i.MDXProvider, { components: p(p({}, t), h) }, n)
          );
        }),
        g = function (e) {
          var t = e.element;
          return a.a.createElement(m, null, t);
        };
    },
    gXpC: function (e, t) {
      e.exports = { plugins: [] };
    },
    hd9s: function (e, t, n) {
      "use strict";
      var r = n("284h"),
        o = n("TqRt");
      (t.__esModule = !0), (t.ScrollContainer = void 0);
      var a = o(n("pVnL")),
        i = o(n("VbXa")),
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
        d = (function (e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          (0, i.default)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              var e = this,
                t = c.default.findDOMNode(this),
                n = this.props,
                r = n.location,
                o = n.scrollKey;
              if (t) {
                t.addEventListener("scroll", function () {
                  e.props.context.save(r, o, t.scrollTop);
                });
                var a = this.props.context.read(r, o);
                t.scrollTo(0, a || 0);
              }
            }),
            (n.render = function () {
              return this.props.children;
            }),
            t
          );
        })(u.Component),
        h = function (e) {
          return u.createElement(f.Location, null, function (t) {
            var n = t.location;
            return u.createElement(l.ScrollContext.Consumer, null, function (
              t
            ) {
              return u.createElement(
                d,
                (0, a.default)({}, e, { context: t, location: n })
              );
            });
          });
        };
      (t.ScrollContainer = h), (h.propTypes = p);
    },
    k7kT: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "wrapPageElement", function () {
          return Y;
        });
      var r = n("q1tI"),
        o = n("2OET"),
        a = n("N3fz"),
        i = n("BN9B"),
        u = [
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
        ];
      function c(e, t, n) {
        var r = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === n && (n = {});
        var c = n.format,
          s = (c && Object(a.f)(o, "number", c, i)) || {};
        return t(r, Object(a.e)(n, u, s));
      }
      function s(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return c(e, t, r).format(n);
        } catch (o) {
          e.onError(new i.e("FORMAT_ERROR", "Error formatting number.", o));
        }
        return String(n);
      }
      function l(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return c(e, t, r).formatToParts(n);
        } catch (o) {
          e.onError(new i.e("FORMAT_ERROR", "Error formatting number.", o));
        }
        return [];
      }
      var f = n("BqEn"),
        p = ["numeric", "style"];
      function d(e, t, n, r, o) {
        void 0 === o && (o = {}),
          r || (r = "second"),
          Intl.RelativeTimeFormat ||
            e.onError(
              new f.a(
                'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
                "MISSING_INTL_API"
              )
            );
        try {
          return (function (e, t, n) {
            var r = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === n && (n = {});
            var u = n.format,
              c = (!!u && Object(a.f)(o, "relative", u, i)) || {};
            return t(r, Object(a.e)(n, p, c));
          })(e, t, o).format(n, r);
        } catch (u) {
          e.onError(new i.b("Error formatting relative time.", u));
        }
        return String(n);
      }
      var h = function () {
          return (h =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        m = [
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
          "fractionalSecondDigits",
          "calendar",
          "numberingSystem",
        ];
      function g(e, t, n, r) {
        var o = e.locale,
          i = e.formats,
          u = e.onError,
          c = e.timeZone;
        void 0 === r && (r = {});
        var s = r.format,
          l = h(h({}, c && { timeZone: c }), s && Object(a.f)(i, t, s, u)),
          f = Object(a.e)(r, m, l);
        return (
          "time" !== t ||
            f.hour ||
            f.minute ||
            f.second ||
            (f = h(h({}, f), { hour: "numeric", minute: "numeric" })),
          n(o, f)
        );
      }
      function v(e, t, n, r) {
        void 0 === r && (r = {});
        var o = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return g(e, "date", t, r).format(o);
        } catch (a) {
          e.onError(new i.e("FORMAT_ERROR", "Error formatting date.", a));
        }
        return String(o);
      }
      function y(e, t, n, r) {
        void 0 === r && (r = {});
        var o = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return g(e, "time", t, r).format(o);
        } catch (a) {
          e.onError(new i.e("FORMAT_ERROR", "Error formatting time.", a));
        }
        return String(o);
      }
      function b(e, t, n, r) {
        void 0 === r && (r = {});
        var o = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return g(e, "date", t, r).formatToParts(o);
        } catch (a) {
          e.onError(new i.e("FORMAT_ERROR", "Error formatting date.", a));
        }
        return [];
      }
      function w(e, t, n, r) {
        void 0 === r && (r = {});
        var o = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return g(e, "time", t, r).formatToParts(o);
        } catch (a) {
          e.onError(new i.e("FORMAT_ERROR", "Error formatting time.", a));
        }
        return [];
      }
      var O = ["localeMatcher", "type"];
      function P(e, t, n, r) {
        var o = e.locale,
          u = e.onError;
        void 0 === r && (r = {}),
          Intl.PluralRules ||
            u(
              new f.a(
                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                "MISSING_INTL_API"
              )
            );
        var c = Object(a.e)(r, O);
        try {
          return t(o, c).select(n);
        } catch (s) {
          u(new i.b("Error formatting plural.", s));
        }
        return "other";
      }
      var j = n("1pe3"),
        S = n("Mu++"),
        E = n("/d+U"),
        T = n("cY5a"),
        A = function () {
          return (A =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        C = function () {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var r = Array(e),
            o = 0;
          for (t = 0; t < n; t++)
            for (var a = arguments[t], i = 0, u = a.length; i < u; i++, o++)
              r[o] = a[i];
          return r;
        };
      function R(e, t) {
        return Object.keys(e).reduce(function (n, r) {
          return (n[r] = A({ timeZone: t }, e[r])), n;
        }, {});
      }
      function _(e, t) {
        return Object.keys(A(A({}, e), t)).reduce(function (n, r) {
          return (n[r] = A(A({}, e[r] || {}), t[r] || {})), n;
        }, {});
      }
      function x(e, t) {
        if (!t) return e;
        var n = S.a.formats;
        return A(A(A({}, n), e), {
          date: _(R(n.date, t), R(e.date || {}, t)),
          time: _(R(n.time, t), R(e.time || {}, t)),
        });
      }
      function k(e, t) {
        return Array.isArray(e) && t
          ? r.createElement.apply(r, C([r.Fragment, null], e))
          : e;
      }
      function D(e, t, n, r) {
        var o = e.locale,
          u = e.formats,
          c = e.messages,
          s = e.defaultLocale,
          l = e.defaultFormats,
          f = e.onError,
          p = e.timeZone,
          d = e.wrapRichTextChunksInFragment;
        void 0 === n && (n = { id: "" });
        var h = n.id,
          m = n.defaultMessage;
        Object(j.a)(
          !!h,
          "[React Intl] An `id` must be provided to format a message."
        );
        var g = String(h),
          v = c && Object.prototype.hasOwnProperty.call(c, g) && c[g];
        if (Array.isArray(v) && 1 === v.length && v[0].type === T.a.literal)
          return v[0].value;
        if (!r && v && "string" == typeof v)
          return v.replace(/'\{(.*?)\}'/gi, "{$1}");
        var y =
          r &&
          (function (e) {
            return Object.keys(e).reduce(function (t, n) {
              var r = e[n];
              return (t[n] = Object(E.b)(r) ? Object(a.b)(r) : r), t;
            }, {});
          })(r);
        if (((u = x(u, p)), (l = x(l, p)), !v)) {
          if (
            ((!m || (o && o.toLowerCase() !== s.toLowerCase())) &&
              f(new i.d(n, o)),
            m)
          )
            try {
              return k(t.getMessageFormat(m, s, l).format(y), d);
            } catch (b) {
              return (
                f(
                  new i.b(
                    'Error formatting default message for: "' +
                      g +
                      '", rendering default message verbatim',
                    o,
                    n,
                    b
                  )
                ),
                m
              );
            }
          return g;
        }
        try {
          return k(t.getMessageFormat(v, o, u, { formatters: t }).format(y), d);
        } catch (b) {
          f(
            new i.b(
              'Error formatting message: "' +
                g +
                '", using ' +
                (m ? "default message" : "id") +
                " as fallback.",
              o,
              n,
              b
            )
          );
        }
        if (m)
          try {
            return k(t.getMessageFormat(m, s, l).format(y), d);
          } catch (b) {
            f(
              new i.b(
                'Error formatting the default message for: "' +
                  g +
                  '", rendering message verbatim',
                o,
                n,
                b
              )
            );
          }
        return v || m || g;
      }
      var I = n("6koa"),
        L = n.n(I),
        N = ["localeMatcher", "type", "style"],
        F = Date.now();
      function M(e, t, n, r) {
        var o = e.locale,
          u = e.onError;
        void 0 === r && (r = {}),
          Intl.ListFormat ||
            u(
              new f.a(
                'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
                "MISSING_INTL_API"
              )
            );
        var c = Object(a.e)(r, N);
        try {
          var s = {},
            l = n.map(function (e, t) {
              if ("object" == typeof e) {
                var n = (function (e) {
                  return F + "_" + e + "_" + F;
                })(t);
                return (s[n] = e), n;
              }
              return String(e);
            });
          return Object.keys(s).length
            ? t(o, c)
                .formatToParts(l)
                .reduce(function (e, t) {
                  var n = t.value;
                  return (
                    s[n]
                      ? e.push(s[n])
                      : "string" == typeof e[e.length - 1]
                      ? (e[e.length - 1] += n)
                      : e.push(n),
                    e
                  );
                }, [])
            : t(o, c).format(l);
        } catch (p) {
          u(new i.e("FORMAT_ERROR", "Error formatting list.", p));
        }
        return n;
      }
      var U = ["localeMatcher", "style", "type", "fallback"];
      function q(e, t, n, r) {
        var o = e.locale,
          u = e.onError;
        void 0 === r && (r = {}),
          Intl.DisplayNames ||
            u(
              new f.a(
                'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
                "MISSING_INTL_API"
              )
            );
        var c = Object(a.e)(r, U);
        try {
          return t(o, c).of(n);
        } catch (s) {
          u(new i.e("FORMAT_ERROR", "Error formatting display name.", s));
        }
      }
      var W,
        B =
          ((W = function (e, t) {
            return (W =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            function n() {
              this.constructor = e;
            }
            W(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        z = function () {
          return (z =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        G = L.a || I;
      function H(e) {
        return {
          locale: e.locale,
          timeZone: e.timeZone,
          formats: e.formats,
          textComponent: e.textComponent,
          messages: e.messages,
          defaultLocale: e.defaultLocale,
          defaultFormats: e.defaultFormats,
          onError: e.onError,
          wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
        };
      }
      function V(e, t) {
        var n = Object(a.c)(t),
          r = z(z({}, a.a), e),
          o = r.locale,
          u = r.defaultLocale,
          c = r.onError;
        return (
          o
            ? !Intl.NumberFormat.supportedLocalesOf(o).length && c
              ? c(
                  new i.c(
                    'Missing locale data for locale: "' +
                      o +
                      '" in Intl.NumberFormat. Using default locale: "' +
                      u +
                      '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'
                  )
                )
              : !Intl.DateTimeFormat.supportedLocalesOf(o).length &&
                c &&
                c(
                  new i.c(
                    'Missing locale data for locale: "' +
                      o +
                      '" in Intl.DateTimeFormat. Using default locale: "' +
                      u +
                      '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'
                  )
                )
            : (c &&
                c(
                  new i.a(
                    '"locale" was not configured, using "' +
                      u +
                      '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'
                  )
                ),
              (r.locale = r.defaultLocale || "en")),
          z(z({}, r), {
            formatters: n,
            formatNumber: s.bind(null, r, n.getNumberFormat),
            formatNumberToParts: l.bind(null, r, n.getNumberFormat),
            formatRelativeTime: d.bind(null, r, n.getRelativeTimeFormat),
            formatDate: v.bind(null, r, n.getDateTimeFormat),
            formatDateToParts: b.bind(null, r, n.getDateTimeFormat),
            formatTime: y.bind(null, r, n.getDateTimeFormat),
            formatTimeToParts: w.bind(null, r, n.getDateTimeFormat),
            formatPlural: P.bind(null, r, n.getPluralRules),
            formatMessage: D.bind(null, r, n),
            formatList: M.bind(null, r, n.getListFormat),
            formatDisplayName: q.bind(null, r, n.getDisplayNames),
          })
        );
      }
      var J = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.cache = Object(a.d)()),
              (t.state = {
                cache: t.cache,
                intl: V(H(t.props), t.cache),
                prevConfig: H(t.props),
              }),
              t
            );
          }
          return (
            B(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = t.prevConfig,
                r = t.cache,
                o = H(e);
              return G(n, o) ? null : { intl: V(o, r), prevConfig: o };
            }),
            (t.prototype.render = function () {
              return (
                Object(a.g)(this.state.intl),
                r.createElement(
                  o.b,
                  { value: this.state.intl },
                  this.props.children
                )
              );
            }),
            (t.displayName = "IntlProvider"),
            (t.defaultProps = a.a),
            t
          );
        })(r.PureComponent),
        Y = function (e) {
          var t = e.element,
            o = e.props.pageContext.locale,
            a = n("fQgO")("./" + o + ".json");
          return r.createElement(J, { locale: o, key: o, messages: a }, t);
        };
    },
    lSNA: function (e, t) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      };
    },
    lw3w: function (e, t, n) {
      var r;
      e.exports = ((r = n("rzlk")) && r.default) || r;
    },
    npZl: function (e, t, n) {
      "use strict";
      var r = n("TqRt");
      n("Wbzz"), r(n("9hXx"));
    },
    nqlD: function (e, t, n) {
      var r = n("q1tI").createContext;
      (e.exports = r), (e.exports.default = r);
    },
    pVnL: function (e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      e.exports = n;
    },
    pWkz: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "onRouteUpdate", function () {
          return i;
        }),
        n.d(t, "onInitialClientRender", function () {
          return u;
        });
      var r = new Set();
      function o(e, t) {
        var n = null;
        return function () {
          n && clearTimeout(n);
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          n = setTimeout.apply(void 0, [e, t].concat(o));
        };
      }
      function a() {
        function e(e) {
          var t, n, o, a;
          r.has(e.name) ||
            (r.add(e.name),
            (n = (t = e).name),
            (o = t.value),
            (a = t.id),
            window.ga("send", "event", {
              eventCategory: "Web Vitals",
              eventAction: n,
              eventLabel: a,
              eventValue: Math.round("CLS" === n ? 1e3 * o : o),
              nonInteraction: !0,
              transport: "beacon",
            }));
        }
        return n
          .e(12)
          .then(n.bind(null, "UfIE"))
          .then(function (t) {
            var n = t.getLCP,
              r = t.getFID,
              a = t.getCLS,
              i = o(e, 3e3),
              u = e,
              c = o(e, 3e3);
            a(i, !0), r(u, !0), n(c, !0);
          });
      }
      var i = function (e, t) {
        var n = e.location;
        void 0 === t && (t = {});
        var r = window.ga;
        if ("function" != typeof r) return null;
        if (
          n &&
          void 0 !== window.excludeGAPaths &&
          window.excludeGAPaths.some(function (e) {
            return e.test(n.pathname);
          })
        )
          return null;
        var o = Math.max(32, t.pageTransitionDelay || 0);
        return (
          setTimeout(function () {
            var e = n ? n.pathname + n.search + n.hash : void 0;
            r("set", "page", e), r("send", "pageview");
          }, o),
          null
        );
      };
      function u(e, t) {
        "function" == typeof ga && t.enableWebVitalsTracking && a();
      }
    },
    qT12: function (e, t, n) {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        a = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        u = r ? Symbol.for("react.strict_mode") : 60108,
        c = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        l = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        d = r ? Symbol.for("react.forward_ref") : 60112,
        h = r ? Symbol.for("react.suspense") : 60113,
        m = r ? Symbol.for("react.suspense_list") : 60120,
        g = r ? Symbol.for("react.memo") : 60115,
        v = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        w = r ? Symbol.for("react.responder") : 60118,
        O = r ? Symbol.for("react.scope") : 60119;
      function P(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case o:
              switch ((e = e.type)) {
                case f:
                case p:
                case i:
                case c:
                case u:
                case h:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case l:
                    case d:
                    case v:
                    case g:
                    case s:
                      return e;
                    default:
                      return t;
                  }
              }
            case a:
              return t;
          }
        }
      }
      function j(e) {
        return P(e) === p;
      }
      (t.AsyncMode = f),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = l),
        (t.ContextProvider = s),
        (t.Element = o),
        (t.ForwardRef = d),
        (t.Fragment = i),
        (t.Lazy = v),
        (t.Memo = g),
        (t.Portal = a),
        (t.Profiler = c),
        (t.StrictMode = u),
        (t.Suspense = h),
        (t.isAsyncMode = function (e) {
          return j(e) || P(e) === f;
        }),
        (t.isConcurrentMode = j),
        (t.isContextConsumer = function (e) {
          return P(e) === l;
        }),
        (t.isContextProvider = function (e) {
          return P(e) === s;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === o;
        }),
        (t.isForwardRef = function (e) {
          return P(e) === d;
        }),
        (t.isFragment = function (e) {
          return P(e) === i;
        }),
        (t.isLazy = function (e) {
          return P(e) === v;
        }),
        (t.isMemo = function (e) {
          return P(e) === g;
        }),
        (t.isPortal = function (e) {
          return P(e) === a;
        }),
        (t.isProfiler = function (e) {
          return P(e) === c;
        }),
        (t.isStrictMode = function (e) {
          return P(e) === u;
        }),
        (t.isSuspense = function (e) {
          return P(e) === h;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === i ||
            e === p ||
            e === c ||
            e === u ||
            e === h ||
            e === m ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === g ||
                e.$$typeof === s ||
                e.$$typeof === l ||
                e.$$typeof === d ||
                e.$$typeof === b ||
                e.$$typeof === w ||
                e.$$typeof === O ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = P);
    },
    qhky: function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return me;
        });
        var r,
          o,
          a,
          i,
          u = n("17x9"),
          c = n.n(u),
          s = n("8+s/"),
          l = n.n(s),
          f = n("bmMU"),
          p = n.n(f),
          d = n("q1tI"),
          h = n.n(d),
          m = n("6qGY"),
          g = n.n(m),
          v = "bodyAttributes",
          y = "htmlAttributes",
          b = "titleAttributes",
          w = {
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
            (Object.keys(w).map(function (e) {
              return w[e];
            }),
            "charset"),
          P = "cssText",
          j = "href",
          S = "http-equiv",
          E = "innerHTML",
          T = "itemprop",
          A = "name",
          C = "property",
          R = "rel",
          _ = "src",
          x = "target",
          k = {
            accesskey: "accessKey",
            charset: "charSet",
            class: "className",
            contenteditable: "contentEditable",
            contextmenu: "contextMenu",
            "http-equiv": "httpEquiv",
            itemprop: "itemProp",
            tabindex: "tabIndex",
          },
          D = "defaultTitle",
          I = "defer",
          L = "encodeSpecialCharacters",
          N = "onChangeClientState",
          F = "titleTemplate",
          M = Object.keys(k).reduce(function (e, t) {
            return (e[k[t]] = t), e;
          }, {}),
          U = [w.NOSCRIPT, w.SCRIPT, w.STYLE],
          q =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          W = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          B = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          z =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          G = function (e, t) {
            var n = {};
            for (var r in e)
              t.indexOf(r) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
            return n;
          },
          H = function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          },
          V = function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            return !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#x27;");
          },
          J = function (e) {
            var t = K(e, w.TITLE),
              n = K(e, F);
            if (n && t)
              return n.replace(/%s/g, function () {
                return Array.isArray(t) ? t.join("") : t;
              });
            var r = K(e, D);
            return t || r || void 0;
          },
          Y = function (e) {
            return K(e, N) || function () {};
          },
          $ = function (e, t) {
            return t
              .filter(function (t) {
                return void 0 !== t[e];
              })
              .map(function (t) {
                return t[e];
              })
              .reduce(function (e, t) {
                return z({}, e, t);
              }, {});
          },
          Q = function (e, t) {
            return t
              .filter(function (e) {
                return void 0 !== e[w.BASE];
              })
              .map(function (e) {
                return e[w.BASE];
              })
              .reverse()
              .reduce(function (t, n) {
                if (!t.length)
                  for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                    var a = r[o].toLowerCase();
                    if (-1 !== e.indexOf(a) && n[a]) return t.concat(n);
                  }
                return t;
              }, []);
          },
          Z = function (e, t, n) {
            var r = {};
            return n
              .filter(function (t) {
                return (
                  !!Array.isArray(t[e]) ||
                  (void 0 !== t[e] &&
                    re(
                      "Helmet: " +
                        e +
                        ' should be of type "Array". Instead found type "' +
                        q(t[e]) +
                        '"'
                    ),
                  !1)
                );
              })
              .map(function (t) {
                return t[e];
              })
              .reverse()
              .reduce(function (e, n) {
                var o = {};
                n.filter(function (e) {
                  for (
                    var n = void 0, a = Object.keys(e), i = 0;
                    i < a.length;
                    i++
                  ) {
                    var u = a[i],
                      c = u.toLowerCase();
                    -1 === t.indexOf(c) ||
                      (n === R && "canonical" === e[n].toLowerCase()) ||
                      (c === R && "stylesheet" === e[c].toLowerCase()) ||
                      (n = c),
                      -1 === t.indexOf(u) ||
                        (u !== E && u !== P && u !== T) ||
                        (n = u);
                  }
                  if (!n || !e[n]) return !1;
                  var s = e[n].toLowerCase();
                  return (
                    r[n] || (r[n] = {}),
                    o[n] || (o[n] = {}),
                    !r[n][s] && ((o[n][s] = !0), !0)
                  );
                })
                  .reverse()
                  .forEach(function (t) {
                    return e.push(t);
                  });
                for (var a = Object.keys(o), i = 0; i < a.length; i++) {
                  var u = a[i],
                    c = g()({}, r[u], o[u]);
                  r[u] = c;
                }
                return e;
              }, [])
              .reverse();
          },
          K = function (e, t) {
            for (var n = e.length - 1; n >= 0; n--) {
              var r = e[n];
              if (r.hasOwnProperty(t)) return r[t];
            }
            return null;
          },
          X =
            ((r = Date.now()),
            function (e) {
              var t = Date.now();
              t - r > 16
                ? ((r = t), e(t))
                : setTimeout(function () {
                    X(e);
                  }, 0);
            }),
          ee = function (e) {
            return clearTimeout(e);
          },
          te =
            "undefined" != typeof window
              ? (window.requestAnimationFrame &&
                  window.requestAnimationFrame.bind(window)) ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                X
              : e.requestAnimationFrame || X,
          ne =
            "undefined" != typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                ee
              : e.cancelAnimationFrame || ee,
          re = function (e) {
            return (
              console && "function" == typeof console.warn && console.warn(e)
            );
          },
          oe = null,
          ae = function (e, t) {
            var n = e.baseTag,
              r = e.bodyAttributes,
              o = e.htmlAttributes,
              a = e.linkTags,
              i = e.metaTags,
              u = e.noscriptTags,
              c = e.onChangeClientState,
              s = e.scriptTags,
              l = e.styleTags,
              f = e.title,
              p = e.titleAttributes;
            ce(w.BODY, r), ce(w.HTML, o), ue(f, p);
            var d = {
                baseTag: se(w.BASE, n),
                linkTags: se(w.LINK, a),
                metaTags: se(w.META, i),
                noscriptTags: se(w.NOSCRIPT, u),
                scriptTags: se(w.SCRIPT, s),
                styleTags: se(w.STYLE, l),
              },
              h = {},
              m = {};
            Object.keys(d).forEach(function (e) {
              var t = d[e],
                n = t.newTags,
                r = t.oldTags;
              n.length && (h[e] = n), r.length && (m[e] = d[e].oldTags);
            }),
              t && t(),
              c(e, h, m);
          },
          ie = function (e) {
            return Array.isArray(e) ? e.join("") : e;
          },
          ue = function (e, t) {
            void 0 !== e && document.title !== e && (document.title = ie(e)),
              ce(w.TITLE, t);
          },
          ce = function (e, t) {
            var n = document.getElementsByTagName(e)[0];
            if (n) {
              for (
                var r = n.getAttribute("data-react-helmet"),
                  o = r ? r.split(",") : [],
                  a = [].concat(o),
                  i = Object.keys(t),
                  u = 0;
                u < i.length;
                u++
              ) {
                var c = i[u],
                  s = t[c] || "";
                n.getAttribute(c) !== s && n.setAttribute(c, s),
                  -1 === o.indexOf(c) && o.push(c);
                var l = a.indexOf(c);
                -1 !== l && a.splice(l, 1);
              }
              for (var f = a.length - 1; f >= 0; f--) n.removeAttribute(a[f]);
              o.length === a.length
                ? n.removeAttribute("data-react-helmet")
                : n.getAttribute("data-react-helmet") !== i.join(",") &&
                  n.setAttribute("data-react-helmet", i.join(","));
            }
          },
          se = function (e, t) {
            var n = document.head || document.querySelector(w.HEAD),
              r = n.querySelectorAll(e + "[data-react-helmet]"),
              o = Array.prototype.slice.call(r),
              a = [],
              i = void 0;
            return (
              t &&
                t.length &&
                t.forEach(function (t) {
                  var n = document.createElement(e);
                  for (var r in t)
                    if (t.hasOwnProperty(r))
                      if (r === E) n.innerHTML = t.innerHTML;
                      else if (r === P)
                        n.styleSheet
                          ? (n.styleSheet.cssText = t.cssText)
                          : n.appendChild(document.createTextNode(t.cssText));
                      else {
                        var u = void 0 === t[r] ? "" : t[r];
                        n.setAttribute(r, u);
                      }
                  n.setAttribute("data-react-helmet", "true"),
                    o.some(function (e, t) {
                      return (i = t), n.isEqualNode(e);
                    })
                      ? o.splice(i, 1)
                      : a.push(n);
                }),
              o.forEach(function (e) {
                return e.parentNode.removeChild(e);
              }),
              a.forEach(function (e) {
                return n.appendChild(e);
              }),
              { oldTags: o, newTags: a }
            );
          },
          le = function (e) {
            return Object.keys(e).reduce(function (t, n) {
              var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
              return t ? t + " " + r : r;
            }, "");
          },
          fe = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return Object.keys(e).reduce(function (t, n) {
              return (t[k[n] || n] = e[n]), t;
            }, t);
          },
          pe = function (e, t, n) {
            switch (e) {
              case w.TITLE:
                return {
                  toComponent: function () {
                    return (
                      (e = t.title),
                      (n = t.titleAttributes),
                      ((r = { key: e })["data-react-helmet"] = !0),
                      (o = fe(n, r)),
                      [h.a.createElement(w.TITLE, o, e)]
                    );
                    var e, n, r, o;
                  },
                  toString: function () {
                    return (function (e, t, n, r) {
                      var o = le(n),
                        a = ie(t);
                      return o
                        ? "<" +
                            e +
                            ' data-react-helmet="true" ' +
                            o +
                            ">" +
                            V(a, r) +
                            "</" +
                            e +
                            ">"
                        : "<" +
                            e +
                            ' data-react-helmet="true">' +
                            V(a, r) +
                            "</" +
                            e +
                            ">";
                    })(e, t.title, t.titleAttributes, n);
                  },
                };
              case v:
              case y:
                return {
                  toComponent: function () {
                    return fe(t);
                  },
                  toString: function () {
                    return le(t);
                  },
                };
              default:
                return {
                  toComponent: function () {
                    return (function (e, t) {
                      return t.map(function (t, n) {
                        var r,
                          o = (((r = { key: n })["data-react-helmet"] = !0), r);
                        return (
                          Object.keys(t).forEach(function (e) {
                            var n = k[e] || e;
                            if (n === E || n === P) {
                              var r = t.innerHTML || t.cssText;
                              o.dangerouslySetInnerHTML = { __html: r };
                            } else o[n] = t[e];
                          }),
                          h.a.createElement(e, o)
                        );
                      });
                    })(e, t);
                  },
                  toString: function () {
                    return (function (e, t, n) {
                      return t.reduce(function (t, r) {
                        var o = Object.keys(r)
                            .filter(function (e) {
                              return !(e === E || e === P);
                            })
                            .reduce(function (e, t) {
                              var o =
                                void 0 === r[t]
                                  ? t
                                  : t + '="' + V(r[t], n) + '"';
                              return e ? e + " " + o : o;
                            }, ""),
                          a = r.innerHTML || r.cssText || "",
                          i = -1 === U.indexOf(e);
                        return (
                          t +
                          "<" +
                          e +
                          ' data-react-helmet="true" ' +
                          o +
                          (i ? "/>" : ">" + a + "</" + e + ">")
                        );
                      }, "");
                    })(e, t, n);
                  },
                };
            }
          },
          de = function (e) {
            var t = e.baseTag,
              n = e.bodyAttributes,
              r = e.encode,
              o = e.htmlAttributes,
              a = e.linkTags,
              i = e.metaTags,
              u = e.noscriptTags,
              c = e.scriptTags,
              s = e.styleTags,
              l = e.title,
              f = void 0 === l ? "" : l,
              p = e.titleAttributes;
            return {
              base: pe(w.BASE, t, r),
              bodyAttributes: pe(v, n, r),
              htmlAttributes: pe(y, o, r),
              link: pe(w.LINK, a, r),
              meta: pe(w.META, i, r),
              noscript: pe(w.NOSCRIPT, u, r),
              script: pe(w.SCRIPT, c, r),
              style: pe(w.STYLE, s, r),
              title: pe(w.TITLE, { title: f, titleAttributes: p }, r),
            };
          },
          he = l()(
            function (e) {
              return {
                baseTag: Q([j, x], e),
                bodyAttributes: $(v, e),
                defer: K(e, I),
                encode: K(e, L),
                htmlAttributes: $(y, e),
                linkTags: Z(w.LINK, [R, j], e),
                metaTags: Z(w.META, [A, O, S, C, T], e),
                noscriptTags: Z(w.NOSCRIPT, [E], e),
                onChangeClientState: Y(e),
                scriptTags: Z(w.SCRIPT, [_, E], e),
                styleTags: Z(w.STYLE, [P], e),
                title: J(e),
                titleAttributes: $(b, e),
              };
            },
            function (e) {
              oe && ne(oe),
                e.defer
                  ? (oe = te(function () {
                      ae(e, function () {
                        oe = null;
                      });
                    }))
                  : (ae(e), (oe = null));
            },
            de
          )(function () {
            return null;
          }),
          me =
            ((o = he),
            (i = a = (function (e) {
              function t() {
                return W(this, t), H(this, e.apply(this, arguments));
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                (t.prototype.shouldComponentUpdate = function (e) {
                  return !p()(this.props, e);
                }),
                (t.prototype.mapNestedChildrenToProps = function (e, t) {
                  if (!t) return null;
                  switch (e.type) {
                    case w.SCRIPT:
                    case w.NOSCRIPT:
                      return { innerHTML: t };
                    case w.STYLE:
                      return { cssText: t };
                  }
                  throw new Error(
                    "<" +
                      e.type +
                      " /> elements are self-closing and can not contain children. Refer to our API for more information."
                  );
                }),
                (t.prototype.flattenArrayTypeChildren = function (e) {
                  var t,
                    n = e.child,
                    r = e.arrayTypeChildren,
                    o = e.newChildProps,
                    a = e.nestedChildren;
                  return z(
                    {},
                    r,
                    (((t = {})[n.type] = [].concat(r[n.type] || [], [
                      z({}, o, this.mapNestedChildrenToProps(n, a)),
                    ])),
                    t)
                  );
                }),
                (t.prototype.mapObjectTypeChildren = function (e) {
                  var t,
                    n,
                    r = e.child,
                    o = e.newProps,
                    a = e.newChildProps,
                    i = e.nestedChildren;
                  switch (r.type) {
                    case w.TITLE:
                      return z(
                        {},
                        o,
                        (((t = {})[r.type] = i),
                        (t.titleAttributes = z({}, a)),
                        t)
                      );
                    case w.BODY:
                      return z({}, o, { bodyAttributes: z({}, a) });
                    case w.HTML:
                      return z({}, o, { htmlAttributes: z({}, a) });
                  }
                  return z({}, o, (((n = {})[r.type] = z({}, a)), n));
                }),
                (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                  var n = z({}, t);
                  return (
                    Object.keys(e).forEach(function (t) {
                      var r;
                      n = z({}, n, (((r = {})[t] = e[t]), r));
                    }),
                    n
                  );
                }),
                (t.prototype.warnOnInvalidChildren = function (e, t) {
                  return !0;
                }),
                (t.prototype.mapChildrenToProps = function (e, t) {
                  var n = this,
                    r = {};
                  return (
                    h.a.Children.forEach(e, function (e) {
                      if (e && e.props) {
                        var o = e.props,
                          a = o.children,
                          i = (function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                            return Object.keys(e).reduce(function (t, n) {
                              return (t[M[n] || n] = e[n]), t;
                            }, t);
                          })(G(o, ["children"]));
                        switch ((n.warnOnInvalidChildren(e, a), e.type)) {
                          case w.LINK:
                          case w.META:
                          case w.NOSCRIPT:
                          case w.SCRIPT:
                          case w.STYLE:
                            r = n.flattenArrayTypeChildren({
                              child: e,
                              arrayTypeChildren: r,
                              newChildProps: i,
                              nestedChildren: a,
                            });
                            break;
                          default:
                            t = n.mapObjectTypeChildren({
                              child: e,
                              newProps: t,
                              newChildProps: i,
                              nestedChildren: a,
                            });
                        }
                      }
                    }),
                    (t = this.mapArrayTypeChildrenToProps(r, t))
                  );
                }),
                (t.prototype.render = function () {
                  var e = this.props,
                    t = e.children,
                    n = G(e, ["children"]),
                    r = z({}, n);
                  return (
                    t && (r = this.mapChildrenToProps(t, r)),
                    h.a.createElement(o, r)
                  );
                }),
                B(t, null, [
                  {
                    key: "canUseDOM",
                    set: function (e) {
                      o.canUseDOM = e;
                    },
                  },
                ]),
                t
              );
            })(h.a.Component)),
            (a.propTypes = {
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
            (a.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
            (a.peek = o.peek),
            (a.rewind = function () {
              var e = o.rewind();
              return (
                e ||
                  (e = de({
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
                e
              );
            }),
            i);
        me.renderStatic = me.rewind;
      }.call(this, n("yLpj")));
    },
    rePB: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    rzlk: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("rePB"),
        o = n("q1tI"),
        a = n.n(o),
        i = n("emEt"),
        u = n("IOVJ");
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      t.default = function (e) {
        var t = e.location,
          n = i.default.loadPageSync(t.pathname);
        return n
          ? a.a.createElement(
              u.a,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? c(Object(n), !0).forEach(function (t) {
                        Object(r.a)(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : c(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({ location: t, pageResources: n }, n.json)
            )
          : null;
      };
    },
    "s+WA": function (e) {
      e.exports = JSON.parse(
        '{"description":"As we move forward with our blockchain business, we are required to make all sorts of decisions, ranging from technology to law. However, due to the usual differences in the point of view, there are times when we cannot find a solution. To bridge such an expertise gap, this community where players from various industries come together, hold workshops, and produce output that could help businesses to self-propel themselves.","contact":"Contact us","slogan":"A community that digs deep into issues from the perspective of technology, business, and law, and gives companies the ability to run their blockchain businesses on their own.","what":"About EEA Japan","whatDetail":"As we move forward with our blockchain business, we are required to make all sorts of decisions, ranging from technology to law. However, due to the usual differences in the point of view, there are times when we cannot find a solution. To bridge such an expertise gap, this community where players from various industries come together, hold workshops, and produce output that could help businesses to self-propel themselves.","wg":"Working group","wgList1":"Exploring issues from multiple perspectives, such as law, technology, and business","wgList2":"Clarifying the required action plan by looking at the issue","wgList3":"Feedback from overseas thanks to the sponsorship of the Ethereum Foundation","ws":"Workshop","wsList1":"Through practical workshops, gain the power to self-propel your blockchain business","wsList2":"Deeper topics for a workshop, with practical demonstrations on how to apply them to businesses","target":"Eligibility for participation","target1":"Engineers/Technical experts","target1-desc":"Those who want to propose technical solutions while keeping business and legal aspects into consideration.","target2":"Businesspersons","target2-desc":"Those who have a desire to pursue a business related to blockchain technology and want to gain useful knowledge.","target3":"Lawyers","target3-desc":"Those who want to understand the governing laws and regulations while knowing about the technical and business context, and those who would like to propose solutions.","organize":"Organized by","support":"Sponsored by","contributor":"Contributor","date":"Post date","group":"Working group","groupName_id-voting":"ID x Voting","groupName_ethereum2.0":"Ethereum2.0","groupName_students":"Students\' research","groupName_scaling":"Scaling","groupName_zero-knowledge-proof":"Zero Knowledge Proof","posts":"All posts","news":"News","activity":"Activity","activityWorkingGroupSubtitle":"Study on the possibility to introduce online voting by using blockchain","activityCreamSubtitle":"Development of C.R.E.A.M (Confidential Reliable Ethereum Anonymous Mixer)","contributor.hitachi":" ","contributor.fujitsu":" ","contributor.act":" ","contributor.collabo_gate":" ","contributor.comps":" ","contributor.cryptel":" ","contributor.layerx":" ","contributor.waseda":" ","contributor.accenture":" ","contributor.nttdata":" ","contributor.ntt":" ","contributor.singulanet":" ","contributor.imge":" ","contributor.new":" "}'
      );
    },
    t55B: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var r,
        o = n("cY5a"),
        a =
          ((r = function (e, t) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        u = (function (e) {
          function t(n, r, o, a) {
            var i = e.call(this) || this;
            return (
              (i.message = n),
              (i.expected = r),
              (i.found = o),
              (i.location = a),
              (i.name = "SyntaxError"),
              "function" == typeof Error.captureStackTrace &&
                Error.captureStackTrace(i, t),
              i
            );
          }
          return (
            a(t, e),
            (t.buildMessage = function (e, t) {
              function n(e) {
                return e.charCodeAt(0).toString(16).toUpperCase();
              }
              function r(e) {
                return e
                  .replace(/\\/g, "\\\\")
                  .replace(/"/g, '\\"')
                  .replace(/\0/g, "\\0")
                  .replace(/\t/g, "\\t")
                  .replace(/\n/g, "\\n")
                  .replace(/\r/g, "\\r")
                  .replace(/[\x00-\x0F]/g, function (e) {
                    return "\\x0" + n(e);
                  })
                  .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                    return "\\x" + n(e);
                  });
              }
              function o(e) {
                return e
                  .replace(/\\/g, "\\\\")
                  .replace(/\]/g, "\\]")
                  .replace(/\^/g, "\\^")
                  .replace(/-/g, "\\-")
                  .replace(/\0/g, "\\0")
                  .replace(/\t/g, "\\t")
                  .replace(/\n/g, "\\n")
                  .replace(/\r/g, "\\r")
                  .replace(/[\x00-\x0F]/g, function (e) {
                    return "\\x0" + n(e);
                  })
                  .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                    return "\\x" + n(e);
                  });
              }
              function a(e) {
                switch (e.type) {
                  case "literal":
                    return '"' + r(e.text) + '"';
                  case "class":
                    var t = e.parts.map(function (e) {
                      return Array.isArray(e) ? o(e[0]) + "-" + o(e[1]) : o(e);
                    });
                    return "[" + (e.inverted ? "^" : "") + t + "]";
                  case "any":
                    return "any character";
                  case "end":
                    return "end of input";
                  case "other":
                    return e.description;
                }
              }
              return (
                "Expected " +
                (function (e) {
                  var t,
                    n,
                    r = e.map(a);
                  if ((r.sort(), r.length > 0)) {
                    for (t = 1, n = 1; t < r.length; t++)
                      r[t - 1] !== r[t] && ((r[n] = r[t]), n++);
                    r.length = n;
                  }
                  switch (r.length) {
                    case 1:
                      return r[0];
                    case 2:
                      return r[0] + " or " + r[1];
                    default:
                      return (
                        r.slice(0, -1).join(", ") + ", or " + r[r.length - 1]
                      );
                  }
                })(e) +
                " but " +
                (((i = t) ? '"' + r(i) + '"' : "end of input") + " found.")
              );
              var i;
            }),
            t
          );
        })(Error);
      var c = function (e, t) {
          t = void 0 !== t ? t : {};
          var n,
            r = {},
            a = { start: _e },
            c = _e,
            s = je("<", !1),
            l = function (e) {
              return e.join("");
            },
            f = je("#", !1),
            p = Ee("tagElement"),
            d = je("/>", !1),
            h = je(">", !1),
            m = je("</", !1),
            g = Ee("argumentElement"),
            v = je("{", !1),
            y = je("}", !1),
            b = Ee("numberSkeletonId"),
            w = /^['\/{}]/,
            O = Se(["'", "/", "{", "}"], !1, !1),
            P = { type: "any" },
            j = Ee("numberSkeletonTokenOption"),
            S = je("/", !1),
            E = Ee("numberSkeletonToken"),
            T = je("::", !1),
            A = function (e) {
              return nt.pop(), e.replace(/\s*$/, "");
            },
            C = je(",", !1),
            R = je("number", !1),
            _ = function (e, t, n) {
              return i(
                {
                  type:
                    "number" === t
                      ? o.a.number
                      : "date" === t
                      ? o.a.date
                      : o.a.time,
                  style: n && n[2],
                  value: e,
                },
                ot()
              );
            },
            x = je("'", !1),
            k = /^[^']/,
            D = Se(["'"], !0, !1),
            I = /^[^a-zA-Z'{}]/,
            L = Se([["a", "z"], ["A", "Z"], "'", "{", "}"], !0, !1),
            N = /^[a-zA-Z]/,
            F = Se(
              [
                ["a", "z"],
                ["A", "Z"],
              ],
              !1,
              !1
            ),
            M = je("date", !1),
            U = je("time", !1),
            q = je("plural", !1),
            W = je("selectordinal", !1),
            B = je("offset:", !1),
            z = je("select", !1),
            G = je("=", !1),
            H = Ee("whitespace"),
            V = /^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
            J = Se(
              [
                ["\t", "\r"],
                " ",
                "",
                " ",
                " ",
                [" ", " "],
                "\u2028",
                "\u2029",
                " ",
                " ",
                "　",
              ],
              !1,
              !1
            ),
            Y = Ee("syntax pattern"),
            $ = /^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,
            Q = Se(
              [
                ["!", "/"],
                [":", "@"],
                ["[", "^"],
                "`",
                ["{", "~"],
                ["¡", "§"],
                "©",
                "«",
                "¬",
                "®",
                "°",
                "±",
                "¶",
                "»",
                "¿",
                "×",
                "÷",
                ["‐", "‧"],
                ["‰", "‾"],
                ["⁁", "⁓"],
                ["⁕", "⁞"],
                ["←", "⑟"],
                ["─", "❵"],
                ["➔", "⯿"],
                ["⸀", "⹿"],
                ["、", "〃"],
                ["〈", "〠"],
                "〰",
                "﴾",
                "﴿",
                "﹅",
                "﹆",
              ],
              !1,
              !1
            ),
            Z = Ee("optional whitespace"),
            K = Ee("number"),
            X = je("-", !1),
            ee = (Ee("apostrophe"), Ee("double apostrophes")),
            te = je("''", !1),
            ne = function (e) {
              return !(
                "<" === e ||
                "{" === e ||
                (rt() && "#" === e) ||
                (nt.length > 1 && "}" === e)
              );
            },
            re = je("\n", !1),
            oe = Ee("argNameOrNumber"),
            ae = Ee("validTag"),
            ie = Ee("argNumber"),
            ue = je("0", !1),
            ce = /^[1-9]/,
            se = Se([["1", "9"]], !1, !1),
            le = /^[0-9]/,
            fe = Se([["0", "9"]], !1, !1),
            pe = Ee("argName"),
            de = Ee("tagName"),
            he = 0,
            me = 0,
            ge = [{ line: 1, column: 1 }],
            ve = 0,
            ye = [],
            be = 0;
          if (void 0 !== t.startRule) {
            if (!(t.startRule in a))
              throw new Error(
                "Can't start parsing from rule \"" + t.startRule + '".'
              );
            c = a[t.startRule];
          }
          function we() {
            return e.substring(me, he);
          }
          function Oe() {
            return Ae(me, he);
          }
          function Pe(e, t) {
            throw (function (e, t) {
              return new u(e, [], "", t);
            })(e, (t = void 0 !== t ? t : Ae(me, he)));
          }
          function je(e, t) {
            return { type: "literal", text: e, ignoreCase: t };
          }
          function Se(e, t, n) {
            return { type: "class", parts: e, inverted: t, ignoreCase: n };
          }
          function Ee(e) {
            return { type: "other", description: e };
          }
          function Te(t) {
            var n,
              r = ge[t];
            if (r) return r;
            for (n = t - 1; !ge[n]; ) n--;
            for (r = { line: (r = ge[n]).line, column: r.column }; n < t; )
              10 === e.charCodeAt(n) ? (r.line++, (r.column = 1)) : r.column++,
                n++;
            return (ge[t] = r), r;
          }
          function Ae(e, t) {
            var n = Te(e),
              r = Te(t);
            return {
              start: { offset: e, line: n.line, column: n.column },
              end: { offset: t, line: r.line, column: r.column },
            };
          }
          function Ce(e) {
            he < ve || (he > ve && ((ve = he), (ye = [])), ye.push(e));
          }
          function Re(e, t, n) {
            return new u(u.buildMessage(e, t), e, t, n);
          }
          function _e() {
            return xe();
          }
          function xe() {
            var e, t;
            for (e = [], t = ke(); t !== r; ) e.push(t), (t = ke());
            return e;
          }
          function ke() {
            var t, n;
            return (
              (t = he),
              (me = he),
              (!at ? void 0 : r) !== r &&
              (n = (function () {
                var e, t, n, a;
                be++,
                  (e = Le()) === r &&
                    ((e = he),
                    (t = Ne()) !== r && (n = xe()) !== r && (a = Fe()) !== r
                      ? ((me = e),
                        (c = n),
                        (u = t) !== (s = a) &&
                          Pe('Mismatch tag "' + u + '" !== "' + s + '"', Oe()),
                        (t = i({ type: o.a.tag, value: u, children: c }, ot())),
                        (e = t))
                      : ((he = e), (e = r)));
                var u, c, s;
                be--, e === r && ((t = r), 0 === be && Ce(p));
                return e;
              })()) !== r
                ? ((me = t), (t = n))
                : ((he = t), (t = r)),
              t === r &&
                (t = (function () {
                  var e, t;
                  (e = he),
                    (t = De()) !== r &&
                      ((me = e),
                      (n = t),
                      (t = i({ type: o.a.literal, value: n }, ot())));
                  var n;
                  return (e = t);
                })()) === r &&
                (t = (function () {
                  var t, n, a, u;
                  be++,
                    (t = he),
                    123 === e.charCodeAt(he)
                      ? ((n = "{"), he++)
                      : ((n = r), 0 === be && Ce(v));
                  n !== r && Je() !== r && (a = Ke()) !== r && Je() !== r
                    ? (125 === e.charCodeAt(he)
                        ? ((u = "}"), he++)
                        : ((u = r), 0 === be && Ce(y)),
                      u !== r
                        ? ((me = t),
                          (c = a),
                          (n = i({ type: o.a.argument, value: c }, ot())),
                          (t = n))
                        : ((he = t), (t = r)))
                    : ((he = t), (t = r));
                  var c;
                  be--, t === r && ((n = r), 0 === be && Ce(g));
                  return t;
                })()) === r &&
                (t = (function () {
                  var t;
                  (t = (function () {
                    var t, n, o, a, u, c, s, l, f;
                    (t = he),
                      123 === e.charCodeAt(he)
                        ? ((n = "{"), he++)
                        : ((n = r), 0 === be && Ce(v));
                    n !== r && Je() !== r && (o = Ke()) !== r && Je() !== r
                      ? (44 === e.charCodeAt(he)
                          ? ((a = ","), he++)
                          : ((a = r), 0 === be && Ce(C)),
                        a !== r && Je() !== r
                          ? ("number" === e.substr(he, 6)
                              ? ((u = "number"), (he += 6))
                              : ((u = r), 0 === be && Ce(R)),
                            u !== r && Je() !== r
                              ? ((c = he),
                                44 === e.charCodeAt(he)
                                  ? ((s = ","), he++)
                                  : ((s = r), 0 === be && Ce(C)),
                                s !== r &&
                                (l = Je()) !== r &&
                                (f = (function () {
                                  var t, n, o;
                                  (t = he),
                                    "::" === e.substr(he, 2)
                                      ? ((n = "::"), (he += 2))
                                      : ((n = r), 0 === be && Ce(T));
                                  n !== r &&
                                  (o = (function () {
                                    var e, t, n;
                                    if (((e = he), (t = []), (n = qe()) !== r))
                                      for (; n !== r; ) t.push(n), (n = qe());
                                    else t = r;
                                    t !== r &&
                                      ((me = e),
                                      (t = i({ type: 0, tokens: t }, ot())));
                                    return (e = t);
                                  })()) !== r
                                    ? ((me = t), (t = n = o))
                                    : ((he = t), (t = r));
                                  t === r &&
                                    ((t = he),
                                    (me = he),
                                    nt.push("numberArgStyle"),
                                    (n = (n = !0) ? void 0 : r) !== r &&
                                    (o = De()) !== r
                                      ? ((me = t), (n = A(o)), (t = n))
                                      : ((he = t), (t = r)));
                                  return t;
                                })()) !== r
                                  ? (c = s = [s, l, f])
                                  : ((he = c), (c = r)),
                                c === r && (c = null),
                                c !== r && (s = Je()) !== r
                                  ? (125 === e.charCodeAt(he)
                                      ? ((l = "}"), he++)
                                      : ((l = r), 0 === be && Ce(y)),
                                    l !== r
                                      ? ((me = t), (n = _(o, u, c)), (t = n))
                                      : ((he = t), (t = r)))
                                  : ((he = t), (t = r)))
                              : ((he = t), (t = r)))
                          : ((he = t), (t = r)))
                      : ((he = t), (t = r));
                    return t;
                  })()) === r &&
                    (t = (function () {
                      var t, n, o, a, u, c, s, l, f;
                      (t = he),
                        123 === e.charCodeAt(he)
                          ? ((n = "{"), he++)
                          : ((n = r), 0 === be && Ce(v));
                      n !== r && Je() !== r && (o = Ke()) !== r && Je() !== r
                        ? (44 === e.charCodeAt(he)
                            ? ((a = ","), he++)
                            : ((a = r), 0 === be && Ce(C)),
                          a !== r && Je() !== r
                            ? ("date" === e.substr(he, 4)
                                ? ((u = "date"), (he += 4))
                                : ((u = r), 0 === be && Ce(M)),
                              u === r &&
                                ("time" === e.substr(he, 4)
                                  ? ((u = "time"), (he += 4))
                                  : ((u = r), 0 === be && Ce(U))),
                              u !== r && Je() !== r
                                ? ((c = he),
                                  44 === e.charCodeAt(he)
                                    ? ((s = ","), he++)
                                    : ((s = r), 0 === be && Ce(C)),
                                  s !== r &&
                                  (l = Je()) !== r &&
                                  (f = (function () {
                                    var t, n, o;
                                    (t = he),
                                      "::" === e.substr(he, 2)
                                        ? ((n = "::"), (he += 2))
                                        : ((n = r), 0 === be && Ce(T));
                                    n !== r &&
                                    (o = (function () {
                                      var t, n, o, a;
                                      (t = he),
                                        (n = he),
                                        (o = []),
                                        (a = We()) === r && (a = Be());
                                      if (a !== r)
                                        for (; a !== r; )
                                          o.push(a),
                                            (a = We()) === r && (a = Be());
                                      else o = r;
                                      n = o !== r ? e.substring(n, he) : o;
                                      n !== r &&
                                        ((me = t),
                                        (n = i({ type: 1, pattern: n }, ot())));
                                      return (t = n);
                                    })()) !== r
                                      ? ((me = t), (t = n = o))
                                      : ((he = t), (t = r));
                                    t === r &&
                                      ((t = he),
                                      (me = he),
                                      nt.push("dateOrTimeArgStyle"),
                                      (n = (n = !0) ? void 0 : r) !== r &&
                                      (o = De()) !== r
                                        ? ((me = t), (n = A(o)), (t = n))
                                        : ((he = t), (t = r)));
                                    return t;
                                  })()) !== r
                                    ? (c = s = [s, l, f])
                                    : ((he = c), (c = r)),
                                  c === r && (c = null),
                                  c !== r && (s = Je()) !== r
                                    ? (125 === e.charCodeAt(he)
                                        ? ((l = "}"), he++)
                                        : ((l = r), 0 === be && Ce(y)),
                                      l !== r
                                        ? ((me = t), (n = _(o, u, c)), (t = n))
                                        : ((he = t), (t = r)))
                                    : ((he = t), (t = r)))
                                : ((he = t), (t = r)))
                            : ((he = t), (t = r)))
                        : ((he = t), (t = r));
                      return t;
                    })());
                  return t;
                })()) === r &&
                (t = (function () {
                  var t, n, a, u, c, s, l, f, p, d, h;
                  (t = he),
                    123 === e.charCodeAt(he)
                      ? ((n = "{"), he++)
                      : ((n = r), 0 === be && Ce(v));
                  if (n !== r)
                    if (Je() !== r)
                      if ((a = Ke()) !== r)
                        if (Je() !== r)
                          if (
                            (44 === e.charCodeAt(he)
                              ? ((u = ","), he++)
                              : ((u = r), 0 === be && Ce(C)),
                            u !== r)
                          )
                            if (Je() !== r)
                              if (
                                ("plural" === e.substr(he, 6)
                                  ? ((c = "plural"), (he += 6))
                                  : ((c = r), 0 === be && Ce(q)),
                                c === r &&
                                  ("selectordinal" === e.substr(he, 13)
                                    ? ((c = "selectordinal"), (he += 13))
                                    : ((c = r), 0 === be && Ce(W))),
                                c !== r)
                              )
                                if (Je() !== r)
                                  if (
                                    (44 === e.charCodeAt(he)
                                      ? ((s = ","), he++)
                                      : ((s = r), 0 === be && Ce(C)),
                                    s !== r)
                                  )
                                    if (Je() !== r)
                                      if (
                                        ((l = he),
                                        "offset:" === e.substr(he, 7)
                                          ? ((f = "offset:"), (he += 7))
                                          : ((f = r), 0 === be && Ce(B)),
                                        f !== r &&
                                        (p = Je()) !== r &&
                                        (d = Ye()) !== r
                                          ? (l = f = [f, p, d])
                                          : ((he = l), (l = r)),
                                        l === r && (l = null),
                                        l !== r)
                                      )
                                        if ((f = Je()) !== r) {
                                          if (((p = []), (d = Ge()) !== r))
                                            for (; d !== r; )
                                              p.push(d), (d = Ge());
                                          else p = r;
                                          p !== r && (d = Je()) !== r
                                            ? (125 === e.charCodeAt(he)
                                                ? ((h = "}"), he++)
                                                : ((h = r), 0 === be && Ce(y)),
                                              h !== r
                                                ? ((me = t),
                                                  (n = (function (e, t, n, r) {
                                                    return i(
                                                      {
                                                        type: o.a.plural,
                                                        pluralType:
                                                          "plural" === t
                                                            ? "cardinal"
                                                            : "ordinal",
                                                        value: e,
                                                        offset: n ? n[2] : 0,
                                                        options: r.reduce(
                                                          function (e, t) {
                                                            var n = t.id,
                                                              r = t.value,
                                                              o = t.location;
                                                            return (
                                                              n in e &&
                                                                Pe(
                                                                  'Duplicate option "' +
                                                                    n +
                                                                    '" in plural element: "' +
                                                                    we() +
                                                                    '"',
                                                                  Oe()
                                                                ),
                                                              (e[n] = {
                                                                value: r,
                                                                location: o,
                                                              }),
                                                              e
                                                            );
                                                          },
                                                          {}
                                                        ),
                                                      },
                                                      ot()
                                                    );
                                                  })(a, c, l, p)),
                                                  (t = n))
                                                : ((he = t), (t = r)))
                                            : ((he = t), (t = r));
                                        } else (he = t), (t = r);
                                      else (he = t), (t = r);
                                    else (he = t), (t = r);
                                  else (he = t), (t = r);
                                else (he = t), (t = r);
                              else (he = t), (t = r);
                            else (he = t), (t = r);
                          else (he = t), (t = r);
                        else (he = t), (t = r);
                      else (he = t), (t = r);
                    else (he = t), (t = r);
                  else (he = t), (t = r);
                  return t;
                })()) === r &&
                (t = (function () {
                  var t, n, a, u, c, s, l, f, p;
                  (t = he),
                    123 === e.charCodeAt(he)
                      ? ((n = "{"), he++)
                      : ((n = r), 0 === be && Ce(v));
                  if (n !== r)
                    if (Je() !== r)
                      if ((a = Ke()) !== r)
                        if (Je() !== r)
                          if (
                            (44 === e.charCodeAt(he)
                              ? ((u = ","), he++)
                              : ((u = r), 0 === be && Ce(C)),
                            u !== r)
                          )
                            if (Je() !== r)
                              if (
                                ("select" === e.substr(he, 6)
                                  ? ((c = "select"), (he += 6))
                                  : ((c = r), 0 === be && Ce(z)),
                                c !== r)
                              )
                                if (Je() !== r)
                                  if (
                                    (44 === e.charCodeAt(he)
                                      ? ((s = ","), he++)
                                      : ((s = r), 0 === be && Ce(C)),
                                    s !== r)
                                  )
                                    if (Je() !== r) {
                                      if (((l = []), (f = ze()) !== r))
                                        for (; f !== r; ) l.push(f), (f = ze());
                                      else l = r;
                                      l !== r && (f = Je()) !== r
                                        ? (125 === e.charCodeAt(he)
                                            ? ((p = "}"), he++)
                                            : ((p = r), 0 === be && Ce(y)),
                                          p !== r
                                            ? ((me = t),
                                              (n = (function (e, t) {
                                                return i(
                                                  {
                                                    type: o.a.select,
                                                    value: e,
                                                    options: t.reduce(function (
                                                      e,
                                                      t
                                                    ) {
                                                      var n = t.id,
                                                        r = t.value,
                                                        o = t.location;
                                                      return (
                                                        n in e &&
                                                          Pe(
                                                            'Duplicate option "' +
                                                              n +
                                                              '" in select element: "' +
                                                              we() +
                                                              '"',
                                                            Oe()
                                                          ),
                                                        (e[n] = {
                                                          value: r,
                                                          location: o,
                                                        }),
                                                        e
                                                      );
                                                    },
                                                    {}),
                                                  },
                                                  ot()
                                                );
                                              })(a, l)),
                                              (t = n))
                                            : ((he = t), (t = r)))
                                        : ((he = t), (t = r));
                                    } else (he = t), (t = r);
                                  else (he = t), (t = r);
                                else (he = t), (t = r);
                              else (he = t), (t = r);
                            else (he = t), (t = r);
                          else (he = t), (t = r);
                        else (he = t), (t = r);
                      else (he = t), (t = r);
                    else (he = t), (t = r);
                  else (he = t), (t = r);
                  return t;
                })()) === r &&
                (t = (function () {
                  var t, n;
                  (t = he),
                    35 === e.charCodeAt(he)
                      ? ((n = "#"), he++)
                      : ((n = r), 0 === be && Ce(f));
                  n !== r && ((me = t), (n = i({ type: o.a.pound }, ot())));
                  return (t = n);
                })()),
              t
            );
          }
          function De() {
            var t, n, o, a;
            if (((t = he), (me = he), (n = (n = at) ? void 0 : r) !== r)) {
              if (
                ((o = []),
                (a = $e()) === r &&
                  (a = Qe()) === r &&
                  (a = Ze()) === r &&
                  (60 === e.charCodeAt(he)
                    ? ((a = "<"), he++)
                    : ((a = r), 0 === be && Ce(s))),
                a !== r)
              )
                for (; a !== r; )
                  o.push(a),
                    (a = $e()) === r &&
                      (a = Qe()) === r &&
                      (a = Ze()) === r &&
                      (60 === e.charCodeAt(he)
                        ? ((a = "<"), he++)
                        : ((a = r), 0 === be && Ce(s)));
              else o = r;
              o !== r ? ((me = t), (t = n = l(o))) : ((he = t), (t = r));
            } else (he = t), (t = r);
            if (t === r) {
              if (
                ((t = he),
                (n = []),
                (o = $e()) === r &&
                  (o = Qe()) === r &&
                  (o = Ze()) === r &&
                  (o = Ie()),
                o !== r)
              )
                for (; o !== r; )
                  n.push(o),
                    (o = $e()) === r &&
                      (o = Qe()) === r &&
                      (o = Ze()) === r &&
                      (o = Ie());
              else n = r;
              n !== r && ((me = t), (n = l(n))), (t = n);
            }
            return t;
          }
          function Ie() {
            var t, n, o;
            return (
              (t = he),
              (n = he),
              be++,
              (o = Ne()) === r && (o = Fe()) === r && (o = Le()),
              be--,
              o === r ? (n = void 0) : ((he = n), (n = r)),
              n !== r
                ? (60 === e.charCodeAt(he)
                    ? ((o = "<"), he++)
                    : ((o = r), 0 === be && Ce(s)),
                  o !== r ? ((me = t), (t = n = "<")) : ((he = t), (t = r)))
                : ((he = t), (t = r)),
              t
            );
          }
          function Le() {
            var t, n, a, u, c, l, f;
            return (
              (t = he),
              (n = he),
              60 === e.charCodeAt(he)
                ? ((a = "<"), he++)
                : ((a = r), 0 === be && Ce(s)),
              a !== r && (u = Xe()) !== r && (c = Je()) !== r
                ? ("/>" === e.substr(he, 2)
                    ? ((l = "/>"), (he += 2))
                    : ((l = r), 0 === be && Ce(d)),
                  l !== r ? (n = a = [a, u, c, l]) : ((he = n), (n = r)))
                : ((he = n), (n = r)),
              n !== r &&
                ((me = t),
                (f = n),
                (n = i({ type: o.a.literal, value: f.join("") }, ot()))),
              (t = n)
            );
          }
          function Ne() {
            var t, n, o, a;
            return (
              (t = he),
              60 === e.charCodeAt(he)
                ? ((n = "<"), he++)
                : ((n = r), 0 === be && Ce(s)),
              n !== r && (o = Xe()) !== r
                ? (62 === e.charCodeAt(he)
                    ? ((a = ">"), he++)
                    : ((a = r), 0 === be && Ce(h)),
                  a !== r ? ((me = t), (t = n = o)) : ((he = t), (t = r)))
                : ((he = t), (t = r)),
              t
            );
          }
          function Fe() {
            var t, n, o, a;
            return (
              (t = he),
              "</" === e.substr(he, 2)
                ? ((n = "</"), (he += 2))
                : ((n = r), 0 === be && Ce(m)),
              n !== r && (o = Xe()) !== r
                ? (62 === e.charCodeAt(he)
                    ? ((a = ">"), he++)
                    : ((a = r), 0 === be && Ce(h)),
                  a !== r ? ((me = t), (t = n = o)) : ((he = t), (t = r)))
                : ((he = t), (t = r)),
              t
            );
          }
          function Me() {
            var t, n, o, a, i;
            if (
              (be++,
              (t = he),
              (n = []),
              (o = he),
              (a = he),
              be++,
              (i = He()) === r &&
                (w.test(e.charAt(he))
                  ? ((i = e.charAt(he)), he++)
                  : ((i = r), 0 === be && Ce(O))),
              be--,
              i === r ? (a = void 0) : ((he = a), (a = r)),
              a !== r
                ? (e.length > he
                    ? ((i = e.charAt(he)), he++)
                    : ((i = r), 0 === be && Ce(P)),
                  i !== r ? (o = a = [a, i]) : ((he = o), (o = r)))
                : ((he = o), (o = r)),
              o !== r)
            )
              for (; o !== r; )
                n.push(o),
                  (o = he),
                  (a = he),
                  be++,
                  (i = He()) === r &&
                    (w.test(e.charAt(he))
                      ? ((i = e.charAt(he)), he++)
                      : ((i = r), 0 === be && Ce(O))),
                  be--,
                  i === r ? (a = void 0) : ((he = a), (a = r)),
                  a !== r
                    ? (e.length > he
                        ? ((i = e.charAt(he)), he++)
                        : ((i = r), 0 === be && Ce(P)),
                      i !== r ? (o = a = [a, i]) : ((he = o), (o = r)))
                    : ((he = o), (o = r));
            else n = r;
            return (
              (t = n !== r ? e.substring(t, he) : n),
              be--,
              t === r && ((n = r), 0 === be && Ce(b)),
              t
            );
          }
          function Ue() {
            var t, n, o;
            return (
              be++,
              (t = he),
              47 === e.charCodeAt(he)
                ? ((n = "/"), he++)
                : ((n = r), 0 === be && Ce(S)),
              n !== r && (o = Me()) !== r
                ? ((me = t), (t = n = o))
                : ((he = t), (t = r)),
              be--,
              t === r && ((n = r), 0 === be && Ce(j)),
              t
            );
          }
          function qe() {
            var e, t, n, o;
            if ((be++, (e = he), Je() !== r))
              if ((t = Me()) !== r) {
                for (n = [], o = Ue(); o !== r; ) n.push(o), (o = Ue());
                n !== r
                  ? ((me = e),
                    (e = (function (e, t) {
                      return { stem: e, options: t };
                    })(t, n)))
                  : ((he = e), (e = r));
              } else (he = e), (e = r);
            else (he = e), (e = r);
            return be--, e === r && (r, 0 === be && Ce(E)), e;
          }
          function We() {
            var t, n, o, a;
            if (
              ((t = he),
              39 === e.charCodeAt(he)
                ? ((n = "'"), he++)
                : ((n = r), 0 === be && Ce(x)),
              n !== r)
            ) {
              if (
                ((o = []),
                (a = $e()) === r &&
                  (k.test(e.charAt(he))
                    ? ((a = e.charAt(he)), he++)
                    : ((a = r), 0 === be && Ce(D))),
                a !== r)
              )
                for (; a !== r; )
                  o.push(a),
                    (a = $e()) === r &&
                      (k.test(e.charAt(he))
                        ? ((a = e.charAt(he)), he++)
                        : ((a = r), 0 === be && Ce(D)));
              else o = r;
              o !== r
                ? (39 === e.charCodeAt(he)
                    ? ((a = "'"), he++)
                    : ((a = r), 0 === be && Ce(x)),
                  a !== r ? (t = n = [n, o, a]) : ((he = t), (t = r)))
                : ((he = t), (t = r));
            } else (he = t), (t = r);
            if (t === r)
              if (
                ((t = []),
                (n = $e()) === r &&
                  (I.test(e.charAt(he))
                    ? ((n = e.charAt(he)), he++)
                    : ((n = r), 0 === be && Ce(L))),
                n !== r)
              )
                for (; n !== r; )
                  t.push(n),
                    (n = $e()) === r &&
                      (I.test(e.charAt(he))
                        ? ((n = e.charAt(he)), he++)
                        : ((n = r), 0 === be && Ce(L)));
              else t = r;
            return t;
          }
          function Be() {
            var t, n;
            if (
              ((t = []),
              N.test(e.charAt(he))
                ? ((n = e.charAt(he)), he++)
                : ((n = r), 0 === be && Ce(F)),
              n !== r)
            )
              for (; n !== r; )
                t.push(n),
                  N.test(e.charAt(he))
                    ? ((n = e.charAt(he)), he++)
                    : ((n = r), 0 === be && Ce(F));
            else t = r;
            return t;
          }
          function ze() {
            var t, n, o, a, u, c, s;
            return (
              (t = he),
              Je() !== r && (n = tt()) !== r && Je() !== r
                ? (123 === e.charCodeAt(he)
                    ? ((o = "{"), he++)
                    : ((o = r), 0 === be && Ce(v)),
                  o !== r
                    ? ((me = he),
                      nt.push("select"),
                      (!0 ? void 0 : r) !== r && (a = xe()) !== r
                        ? (125 === e.charCodeAt(he)
                            ? ((u = "}"), he++)
                            : ((u = r), 0 === be && Ce(y)),
                          u !== r
                            ? ((me = t),
                              (c = n),
                              (s = a),
                              nt.pop(),
                              (t = i({ id: c, value: s }, ot())))
                            : ((he = t), (t = r)))
                        : ((he = t), (t = r)))
                    : ((he = t), (t = r)))
                : ((he = t), (t = r)),
              t
            );
          }
          function Ge() {
            var t, n, o, a, u, c, s;
            return (
              (t = he),
              Je() !== r &&
              (n = (function () {
                var t, n, o, a;
                return (
                  (t = he),
                  (n = he),
                  61 === e.charCodeAt(he)
                    ? ((o = "="), he++)
                    : ((o = r), 0 === be && Ce(G)),
                  o !== r && (a = Ye()) !== r
                    ? (n = o = [o, a])
                    : ((he = n), (n = r)),
                  (t = n !== r ? e.substring(t, he) : n) === r && (t = tt()),
                  t
                );
              })()) !== r &&
              Je() !== r
                ? (123 === e.charCodeAt(he)
                    ? ((o = "{"), he++)
                    : ((o = r), 0 === be && Ce(v)),
                  o !== r
                    ? ((me = he),
                      nt.push("plural"),
                      (!0 ? void 0 : r) !== r && (a = xe()) !== r
                        ? (125 === e.charCodeAt(he)
                            ? ((u = "}"), he++)
                            : ((u = r), 0 === be && Ce(y)),
                          u !== r
                            ? ((me = t),
                              (c = n),
                              (s = a),
                              nt.pop(),
                              (t = i({ id: c, value: s }, ot())))
                            : ((he = t), (t = r)))
                        : ((he = t), (t = r)))
                    : ((he = t), (t = r)))
                : ((he = t), (t = r)),
              t
            );
          }
          function He() {
            var t;
            return (
              be++,
              V.test(e.charAt(he))
                ? ((t = e.charAt(he)), he++)
                : ((t = r), 0 === be && Ce(J)),
              be--,
              t === r && (r, 0 === be && Ce(H)),
              t
            );
          }
          function Ve() {
            var t;
            return (
              be++,
              $.test(e.charAt(he))
                ? ((t = e.charAt(he)), he++)
                : ((t = r), 0 === be && Ce(Q)),
              be--,
              t === r && (r, 0 === be && Ce(Y)),
              t
            );
          }
          function Je() {
            var t, n, o;
            for (be++, t = he, n = [], o = He(); o !== r; )
              n.push(o), (o = He());
            return (
              (t = n !== r ? e.substring(t, he) : n),
              be--,
              t === r && ((n = r), 0 === be && Ce(Z)),
              t
            );
          }
          function Ye() {
            var t, n, o, a, i;
            return (
              be++,
              (t = he),
              45 === e.charCodeAt(he)
                ? ((n = "-"), he++)
                : ((n = r), 0 === be && Ce(X)),
              n === r && (n = null),
              n !== r && (o = et()) !== r
                ? ((me = t), (a = n), (t = n = (i = o) ? (a ? -i : i) : 0))
                : ((he = t), (t = r)),
              be--,
              t === r && ((n = r), 0 === be && Ce(K)),
              t
            );
          }
          function $e() {
            var t, n;
            return (
              be++,
              (t = he),
              "''" === e.substr(he, 2)
                ? ((n = "''"), (he += 2))
                : ((n = r), 0 === be && Ce(te)),
              n !== r && ((me = t), (n = "'")),
              be--,
              (t = n) === r && ((n = r), 0 === be && Ce(ee)),
              t
            );
          }
          function Qe() {
            var t, n, o, a, i, u;
            if (
              ((t = he),
              39 === e.charCodeAt(he)
                ? ((n = "'"), he++)
                : ((n = r), 0 === be && Ce(x)),
              n !== r)
            )
              if (
                (o = (function () {
                  var t, n, o, a;
                  (t = he),
                    (n = he),
                    e.length > he
                      ? ((o = e.charAt(he)), he++)
                      : ((o = r), 0 === be && Ce(P));
                  o !== r
                    ? ((me = he),
                      (a = (a =
                        "<" === (i = o) ||
                        ">" === i ||
                        "{" === i ||
                        "}" === i ||
                        (rt() && "#" === i))
                        ? void 0
                        : r) !== r
                        ? (n = o = [o, a])
                        : ((he = n), (n = r)))
                    : ((he = n), (n = r));
                  var i;
                  t = n !== r ? e.substring(t, he) : n;
                  return t;
                })()) !== r
              ) {
                for (
                  a = he,
                    i = [],
                    "''" === e.substr(he, 2)
                      ? ((u = "''"), (he += 2))
                      : ((u = r), 0 === be && Ce(te)),
                    u === r &&
                      (k.test(e.charAt(he))
                        ? ((u = e.charAt(he)), he++)
                        : ((u = r), 0 === be && Ce(D)));
                  u !== r;

                )
                  i.push(u),
                    "''" === e.substr(he, 2)
                      ? ((u = "''"), (he += 2))
                      : ((u = r), 0 === be && Ce(te)),
                    u === r &&
                      (k.test(e.charAt(he))
                        ? ((u = e.charAt(he)), he++)
                        : ((u = r), 0 === be && Ce(D)));
                (a = i !== r ? e.substring(a, he) : i) !== r
                  ? (39 === e.charCodeAt(he)
                      ? ((i = "'"), he++)
                      : ((i = r), 0 === be && Ce(x)),
                    i === r && (i = null),
                    i !== r
                      ? ((me = t), (t = n = o + a.replace("''", "'")))
                      : ((he = t), (t = r)))
                  : ((he = t), (t = r));
              } else (he = t), (t = r);
            else (he = t), (t = r);
            return t;
          }
          function Ze() {
            var t, n, o, a;
            return (
              (t = he),
              (n = he),
              e.length > he
                ? ((o = e.charAt(he)), he++)
                : ((o = r), 0 === be && Ce(P)),
              o !== r
                ? ((me = he),
                  (a = (a = ne(o)) ? void 0 : r) !== r
                    ? (n = o = [o, a])
                    : ((he = n), (n = r)))
                : ((he = n), (n = r)),
              n === r &&
                (10 === e.charCodeAt(he)
                  ? ((n = "\n"), he++)
                  : ((n = r), 0 === be && Ce(re))),
              (t = n !== r ? e.substring(t, he) : n)
            );
          }
          function Ke() {
            var t, n;
            return (
              be++,
              (t = he),
              (n = et()) === r && (n = tt()),
              (t = n !== r ? e.substring(t, he) : n),
              be--,
              t === r && ((n = r), 0 === be && Ce(oe)),
              t
            );
          }
          function Xe() {
            var t, n;
            return (
              be++,
              (t = he),
              (n = et()) === r &&
                (n = (function () {
                  var t, n, o, a, i;
                  be++,
                    (t = he),
                    (n = []),
                    45 === e.charCodeAt(he)
                      ? ((o = "-"), he++)
                      : ((o = r), 0 === be && Ce(X));
                  o === r &&
                    ((o = he),
                    (a = he),
                    be++,
                    (i = He()) === r && (i = Ve()),
                    be--,
                    i === r ? (a = void 0) : ((he = a), (a = r)),
                    a !== r
                      ? (e.length > he
                          ? ((i = e.charAt(he)), he++)
                          : ((i = r), 0 === be && Ce(P)),
                        i !== r ? (o = a = [a, i]) : ((he = o), (o = r)))
                      : ((he = o), (o = r)));
                  if (o !== r)
                    for (; o !== r; )
                      n.push(o),
                        45 === e.charCodeAt(he)
                          ? ((o = "-"), he++)
                          : ((o = r), 0 === be && Ce(X)),
                        o === r &&
                          ((o = he),
                          (a = he),
                          be++,
                          (i = He()) === r && (i = Ve()),
                          be--,
                          i === r ? (a = void 0) : ((he = a), (a = r)),
                          a !== r
                            ? (e.length > he
                                ? ((i = e.charAt(he)), he++)
                                : ((i = r), 0 === be && Ce(P)),
                              i !== r ? (o = a = [a, i]) : ((he = o), (o = r)))
                            : ((he = o), (o = r)));
                  else n = r;
                  t = n !== r ? e.substring(t, he) : n;
                  be--, t === r && ((n = r), 0 === be && Ce(de));
                  return t;
                })()),
              (t = n !== r ? e.substring(t, he) : n),
              be--,
              t === r && ((n = r), 0 === be && Ce(ae)),
              t
            );
          }
          function et() {
            var t, n, o, a, i;
            if (
              (be++,
              (t = he),
              48 === e.charCodeAt(he)
                ? ((n = "0"), he++)
                : ((n = r), 0 === be && Ce(ue)),
              n !== r && ((me = t), (n = 0)),
              (t = n) === r)
            ) {
              if (
                ((t = he),
                (n = he),
                ce.test(e.charAt(he))
                  ? ((o = e.charAt(he)), he++)
                  : ((o = r), 0 === be && Ce(se)),
                o !== r)
              ) {
                for (
                  a = [],
                    le.test(e.charAt(he))
                      ? ((i = e.charAt(he)), he++)
                      : ((i = r), 0 === be && Ce(fe));
                  i !== r;

                )
                  a.push(i),
                    le.test(e.charAt(he))
                      ? ((i = e.charAt(he)), he++)
                      : ((i = r), 0 === be && Ce(fe));
                a !== r ? (n = o = [o, a]) : ((he = n), (n = r));
              } else (he = n), (n = r);
              n !== r && ((me = t), (n = parseInt(n.join(""), 10))), (t = n);
            }
            return be--, t === r && ((n = r), 0 === be && Ce(ie)), t;
          }
          function tt() {
            var t, n, o, a, i;
            if (
              (be++,
              (t = he),
              (n = []),
              (o = he),
              (a = he),
              be++,
              (i = He()) === r && (i = Ve()),
              be--,
              i === r ? (a = void 0) : ((he = a), (a = r)),
              a !== r
                ? (e.length > he
                    ? ((i = e.charAt(he)), he++)
                    : ((i = r), 0 === be && Ce(P)),
                  i !== r ? (o = a = [a, i]) : ((he = o), (o = r)))
                : ((he = o), (o = r)),
              o !== r)
            )
              for (; o !== r; )
                n.push(o),
                  (o = he),
                  (a = he),
                  be++,
                  (i = He()) === r && (i = Ve()),
                  be--,
                  i === r ? (a = void 0) : ((he = a), (a = r)),
                  a !== r
                    ? (e.length > he
                        ? ((i = e.charAt(he)), he++)
                        : ((i = r), 0 === be && Ce(P)),
                      i !== r ? (o = a = [a, i]) : ((he = o), (o = r)))
                    : ((he = o), (o = r));
            else n = r;
            return (
              (t = n !== r ? e.substring(t, he) : n),
              be--,
              t === r && ((n = r), 0 === be && Ce(pe)),
              t
            );
          }
          var nt = ["root"];
          function rt() {
            return "plural" === nt[nt.length - 1];
          }
          function ot() {
            return t && t.captureLocation ? { location: Oe() } : {};
          }
          var at = t && t.ignoreTag;
          if ((n = c()) !== r && he === e.length) return n;
          throw (
            (n !== r && he < e.length && Ce({ type: "end" }),
            Re(
              ye,
              ve < e.length ? e.charAt(ve) : null,
              ve < e.length ? Ae(ve, ve + 1) : Ae(ve, ve)
            ))
          );
        },
        s = function () {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var r = Array(e),
            o = 0;
          for (t = 0; t < n; t++)
            for (var a = arguments[t], i = 0, u = a.length; i < u; i++, o++)
              r[o] = a[i];
          return r;
        },
        l = /(^|[^\\])#/g;
      function f(e, t) {
        var n = c(e, t);
        return (
          (t && !1 === t.normalizeHashtagInPlural) ||
            (function e(t) {
              t.forEach(function (t) {
                (Object(o.h)(t) || Object(o.j)(t)) &&
                  Object.keys(t.options).forEach(function (n) {
                    for (
                      var r, a = t.options[n], i = -1, u = void 0, f = 0;
                      f < a.value.length;
                      f++
                    ) {
                      var p = a.value[f];
                      if (Object(o.e)(p) && l.test(p.value)) {
                        (i = f), (u = p);
                        break;
                      }
                    }
                    if (u) {
                      var d = u.value.replace(l, "$1{" + t.value + ", number}"),
                        h = c(d);
                      (r = a.value).splice.apply(r, s([i, 1], h));
                    }
                    e(a.value);
                  });
              });
            })(n),
          n
        );
      }
    },
    vgXZ: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return f;
        });
      var r = function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        o = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
      function a(e) {
        var t = {};
        return (
          e.replace(o, function (e) {
            var n = e.length;
            switch (e[0]) {
              case "G":
                t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
                break;
              case "y":
                t.year = 2 === n ? "2-digit" : "numeric";
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
                t.month = ["numeric", "2-digit", "short", "long", "narrow"][
                  n - 1
                ];
                break;
              case "w":
              case "W":
                throw new RangeError("`w/W` (week) patterns are not supported");
              case "d":
                t.day = ["numeric", "2-digit"][n - 1];
                break;
              case "D":
              case "F":
              case "g":
                throw new RangeError(
                  "`D/F/g` (day) patterns are not supported, use `d` instead"
                );
              case "E":
                t.weekday = 4 === n ? "short" : 5 === n ? "narrow" : "short";
                break;
              case "e":
                if (n < 4)
                  throw new RangeError(
                    "`e..eee` (weekday) patterns are not supported"
                  );
                t.weekday = ["short", "long", "narrow", "short"][n - 4];
                break;
              case "c":
                if (n < 4)
                  throw new RangeError(
                    "`c..ccc` (weekday) patterns are not supported"
                  );
                t.weekday = ["short", "long", "narrow", "short"][n - 4];
                break;
              case "a":
                t.hour12 = !0;
                break;
              case "b":
              case "B":
                throw new RangeError(
                  "`b/B` (period) patterns are not supported, use `a` instead"
                );
              case "h":
                (t.hourCycle = "h12"), (t.hour = ["numeric", "2-digit"][n - 1]);
                break;
              case "H":
                (t.hourCycle = "h23"), (t.hour = ["numeric", "2-digit"][n - 1]);
                break;
              case "K":
                (t.hourCycle = "h11"), (t.hour = ["numeric", "2-digit"][n - 1]);
                break;
              case "k":
                (t.hourCycle = "h24"), (t.hour = ["numeric", "2-digit"][n - 1]);
                break;
              case "j":
              case "J":
              case "C":
                throw new RangeError(
                  "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead"
                );
              case "m":
                t.minute = ["numeric", "2-digit"][n - 1];
                break;
              case "s":
                t.second = ["numeric", "2-digit"][n - 1];
                break;
              case "S":
              case "A":
                throw new RangeError(
                  "`S/A` (second) pattenrs are not supported, use `s` instead"
                );
              case "z":
                t.timeZoneName = n < 4 ? "short" : "long";
                break;
              case "Z":
              case "O":
              case "v":
              case "V":
              case "X":
              case "x":
                throw new RangeError(
                  "`Z/O/v/V/X/x` (timeZone) pattenrs are not supported, use `z` instead"
                );
            }
            return "";
          }),
          t
        );
      }
      var i = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        u = /^(@+)?(\+|#+)?$/g;
      function c(e) {
        var t = {};
        return (
          e.replace(u, function (e, n, r) {
            return (
              "string" != typeof r
                ? ((t.minimumSignificantDigits = n.length),
                  (t.maximumSignificantDigits = n.length))
                : "+" === r
                ? (t.minimumSignificantDigits = n.length)
                : "#" === n[0]
                ? (t.maximumSignificantDigits = n.length)
                : ((t.minimumSignificantDigits = n.length),
                  (t.maximumSignificantDigits =
                    n.length + ("string" == typeof r ? r.length : 0))),
              ""
            );
          }),
          t
        );
      }
      function s(e) {
        switch (e) {
          case "sign-auto":
            return { signDisplay: "auto" };
          case "sign-accounting":
            return { currencySign: "accounting" };
          case "sign-always":
            return { signDisplay: "always" };
          case "sign-accounting-always":
            return { signDisplay: "always", currencySign: "accounting" };
          case "sign-except-zero":
            return { signDisplay: "exceptZero" };
          case "sign-accounting-except-zero":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
          case "sign-never":
            return { signDisplay: "never" };
        }
      }
      function l(e) {
        var t = s(e);
        return t || {};
      }
      function f(e) {
        for (var t = {}, n = 0, o = e; n < o.length; n++) {
          var a = o[n];
          switch (a.stem) {
            case "percent":
              t.style = "percent";
              continue;
            case "currency":
              (t.style = "currency"), (t.currency = a.options[0]);
              continue;
            case "group-off":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
              (t.style = "unit"),
                (t.unit = a.options[0].replace(/^(.*?)-/, ""));
              continue;
            case "compact-short":
              (t.notation = "compact"), (t.compactDisplay = "short");
              continue;
            case "compact-long":
              (t.notation = "compact"), (t.compactDisplay = "long");
              continue;
            case "scientific":
              t = r(
                r(r({}, t), { notation: "scientific" }),
                a.options.reduce(function (e, t) {
                  return r(r({}, e), l(t));
                }, {})
              );
              continue;
            case "engineering":
              t = r(
                r(r({}, t), { notation: "engineering" }),
                a.options.reduce(function (e, t) {
                  return r(r({}, e), l(t));
                }, {})
              );
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              (t.currencyDisplay = "narrowSymbol"), (t.unitDisplay = "narrow");
              continue;
            case "unit-width-short":
              (t.currencyDisplay = "code"), (t.unitDisplay = "short");
              continue;
            case "unit-width-full-name":
              (t.currencyDisplay = "name"), (t.unitDisplay = "long");
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
          }
          if (i.test(a.stem)) {
            if (a.options.length > 1)
              throw new RangeError(
                "Fraction-precision stems only accept a single optional option"
              );
            a.stem.replace(i, function (e, n, r, o, a, i) {
              return (
                "*" === r
                  ? (t.minimumFractionDigits = n.length)
                  : o && "#" === o[0]
                  ? (t.maximumFractionDigits = o.length)
                  : a && i
                  ? ((t.minimumFractionDigits = a.length),
                    (t.maximumFractionDigits = a.length + i.length))
                  : ((t.minimumFractionDigits = n.length),
                    (t.maximumFractionDigits = n.length)),
                ""
              );
            }),
              a.options.length && (t = r(r({}, t), c(a.options[0])));
          } else if (u.test(a.stem)) t = r(r({}, t), c(a.stem));
          else {
            var f = s(a.stem);
            f && (t = r(r({}, t), f));
          }
        }
        return t;
      }
    },
    xtsi: function (e, t, n) {
      var r = n("LeKB"),
        o = n("emEt").publicLoader,
        a = o.getResourcesForPathname,
        i = o.getResourcesForPathnameSync,
        u = o.getResourceURLsForPathname,
        c = o.loadPage,
        s = o.loadPageSync;
      (t.apiRunner = function (e, t, n, o) {
        void 0 === t && (t = {});
        var l = r.map(function (n) {
          if (n.plugin[e]) {
            (t.getResourcesForPathnameSync = i),
              (t.getResourcesForPathname = a),
              (t.getResourceURLsForPathname = u),
              (t.loadPage = c),
              (t.loadPageSync = s);
            var r = n.plugin[e](t, n.options);
            return r && o && (t = o({ args: t, result: r, plugin: n })), r;
          }
        });
        return (l = l.filter(function (e) {
          return void 0 !== e;
        })).length > 0
          ? l
          : n
          ? [n]
          : [];
      }),
        (t.apiRunnerAsync = function (e, t, n) {
          return r.reduce(function (n, r) {
            return r.plugin[e]
              ? n.then(function () {
                  return r.plugin[e](t, r.options);
                })
              : n;
          }, Promise.resolve());
        });
    },
    yAkg: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n("q1tI"),
        o = n("eq4K"),
        a = n("Wbzz"),
        i = function () {
          var e = r.useContext(o.a),
            t = Object(a.useStaticQuery)("1942350144").themeI18N;
          return { locale: e, defaultLang: t.defaultLang, config: t.config };
        };
    },
    yLpj: function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
  },
  [["UxWs", 2, 10]],
]);
//# sourceMappingURL=app-cb3dcb6132064ed8ecb3.js.map
