(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    "6qSS": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("q1tI"),
        o = n.n(r),
        a = n("A2+M"),
        l = n("JI6e"),
        i = n("7vrA"),
        c = n("3Z9Z"),
        u = n("Bl7J"),
        s = n("vrFN"),
        p = function e(t) {
          var n = t.tableOfContents,
            r = t.depth;
          return o.a.createElement(
            "ul",
            null,
            n.map(function (t) {
              return o.a.createElement(
                "li",
                { key: t.url },
                o.a.createElement("a", { href: t.url }, t.title),
                t.items &&
                  o.a.createElement(e, {
                    tableOfContents: t.items,
                    depth: r + 1,
                  })
              );
            })
          );
        },
        m = function (e) {
          var t = e.tableOfContents;
          return o.a.createElement(
            "div",
            { className: "toc-container" },
            o.a.createElement("h3", { className: "h6" }, "Table of Contents"),
            o.a.createElement(p, { tableOfContents: t, depth: 0 })
          );
        };
      t.default = function (e) {
        var t,
          n,
          r,
          p,
          d,
          f,
          v,
          x,
          y,
          b,
          E,
          g,
          h,
          O,
          w,
          _ = e.data;
        return o.a.createElement(
          u.a,
          null,
          o.a.createElement(s.a, {
            title:
              null == _ ||
              null === (t = _.mdx) ||
              void 0 === t ||
              null === (n = t.frontmatter) ||
              void 0 === n
                ? void 0
                : n.title,
            image:
              (null == _ ||
              null === (r = _.mdx) ||
              void 0 === r ||
              null === (p = r.frontmatter) ||
              void 0 === p
                ? void 0
                : p.image) &&
              (null == _ ||
              null === (d = _.mdx) ||
              void 0 === d ||
              null === (f = d.frontmatter) ||
              void 0 === f
                ? void 0
                : f.image.childImageSharp.fixed.src),
            description:
              null == _ || null === (v = _.mdx) || void 0 === v
                ? void 0
                : v.excerpt,
          }),
          o.a.createElement(
            i.a,
            null,
            o.a.createElement(
              c.a,
              null,
              o.a.createElement(
                l.a,
                null,
                o.a.createElement(
                  "h1",
                  { className: "pb-3 pt-5 font-weight-bold" },
                  null == _ ||
                    null === (x = _.mdx) ||
                    void 0 === x ||
                    null === (y = x.frontmatter) ||
                    void 0 === y
                    ? void 0
                    : y.title
                ),
                o.a.createElement(
                  "div",
                  null,
                  null == _ ||
                    null === (b = _.mdx) ||
                    void 0 === b ||
                    null === (E = b.frontmatter) ||
                    void 0 === E ||
                    null === (g = E.date) ||
                    void 0 === g
                    ? void 0
                    : g.toString()
                )
              )
            ),
            o.a.createElement(
              c.a,
              null,
              o.a.createElement(
                l.a,
                { sm: 4, className: "d-none d-sm-block" },
                o.a.createElement(m, {
                  tableOfContents:
                    null == _ ||
                    null === (h = _.mdx) ||
                    void 0 === h ||
                    null === (O = h.tableOfContents) ||
                    void 0 === O
                      ? void 0
                      : O.items,
                })
              ),
              o.a.createElement(
                l.a,
                { sm: { order: "first" }, className: "post" },
                o.a.createElement(
                  a.MDXRenderer,
                  null,
                  null == _ || null === (w = _.mdx) || void 0 === w
                    ? void 0
                    : w.body
                )
              )
            )
          )
        );
      };
    },
    "A2+M": function (e, t, n) {
      var r = n("X8hv");
      e.exports = { MDXRenderer: r };
    },
    Bnag: function (e, t) {
      (e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    EbDI: function (e, t) {
      (e.exports = function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    Ijbi: function (e, t, n) {
      var r = n("WkPL");
      (e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    RIqP: function (e, t, n) {
      var r = n("Ijbi"),
        o = n("EbDI"),
        a = n("ZhPi"),
        l = n("Bnag");
      (e.exports = function (e) {
        return r(e) || o(e) || a(e) || l();
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    WkPL: function (e, t) {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    X8hv: function (e, t, n) {
      var r = n("RIqP"),
        o = n("sXyB"),
        a = n("lSNA"),
        l = n("8OQS"),
        i = ["scope", "children"];
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var s = n("q1tI"),
        p = n("7ljp").mdx,
        m = n("BfwJ").useMDXScope;
      e.exports = function (e) {
        var t = e.scope,
          n = e.children,
          a = l(e, i),
          c = m(t),
          d = s.useMemo(
            function () {
              if (!n) return null;
              var e = u({ React: s, mdx: p }, c),
                t = Object.keys(e),
                a = t.map(function (t) {
                  return e[t];
                });
              return o(Function, ["_fn"].concat(t, ["" + n])).apply(
                void 0,
                [{}].concat(r(a))
              );
            },
            [n, t]
          );
        return s.createElement(d, u({}, a));
      };
    },
    ZhPi: function (e, t, n) {
      var r = n("WkPL");
      (e.exports = function (e, t) {
        if (e) {
          if ("string" == typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          );
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    b48C: function (e, t) {
      (e.exports = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    sXyB: function (e, t, n) {
      var r = n("SksO"),
        o = n("b48C");
      function a(t, n, l) {
        return (
          o()
            ? ((e.exports = a = Reflect.construct.bind()),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports))
            : ((e.exports = a = function (e, t, n) {
                var o = [null];
                o.push.apply(o, t);
                var a = new (Function.bind.apply(e, o))();
                return n && r(a, n.prototype), a;
              }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports)),
          a.apply(null, arguments)
        );
      }
      (e.exports = a),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    vrFN: function (e, t, n) {
      "use strict";
      var r = n("q1tI"),
        o = n.n(r),
        a = n("qhky"),
        l = n("Wbzz");
      t.a = function (e) {
        var t = e.description,
          n = e.children,
          r = e.title,
          i = e.image,
          c = Object(l.useStaticQuery)("1442128573"),
          u = c.site,
          s = c.ogImageDefault,
          p = i
            ? u.siteMetadata.siteUrl.concat(i)
            : u.siteMetadata.siteUrl.concat(s.childImageSharp.fixed.src),
          m = "undefined" != typeof window ? window.location.href : "";
        return o.a.createElement(
          a.a,
          { title: r, titleTemplate: "%s | " + u.siteMetadata.title },
          o.a.createElement("meta", { name: "description", content: t }),
          o.a.createElement("meta", {
            property: "og:title",
            content: r,
            key: "title",
          }),
          o.a.createElement("meta", { property: "og:description", content: t }),
          o.a.createElement("meta", {
            property: "og:image",
            content: p,
            key: "image",
          }),
          o.a.createElement("meta", {
            property: "og:type",
            content: "website",
          }),
          o.a.createElement("meta", {
            property: "og:site_name",
            content: u.siteMetadata.title,
          }),
          o.a.createElement("meta", { property: "og:url", content: m }),
          o.a.createElement("meta", {
            name: "twitter:card",
            content: "summary_large_image",
            key: "misc-card",
          }),
          o.a.createElement("meta", {
            name: "twitter:creator",
            content: u.siteMetadata.author,
          }),
          o.a.createElement("meta", { name: "twitter:title", content: r }),
          o.a.createElement("meta", { name: "twitter:image", content: p }),
          o.a.createElement("meta", {
            name: "twitter:description",
            content: t,
          }),
          n
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-templates-post-js-96e6765dafc4af278fe3.js.map
