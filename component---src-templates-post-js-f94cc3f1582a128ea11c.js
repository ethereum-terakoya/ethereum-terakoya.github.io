(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    "6qSS": function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("q1tI"),
        a = r.n(n),
        o = r("A2+M"),
        c = r("JI6e"),
        l = r("7vrA"),
        i = r("3Z9Z"),
        s = r("Bl7J"),
        u = r("vrFN"),
        p = function e(t) {
          var r = t.tableOfContents,
            n = t.depth;
          return a.a.createElement(
            "ul",
            null,
            r.map(function (t) {
              return a.a.createElement(
                "li",
                { key: t.url },
                a.a.createElement("a", { href: t.url }, t.title),
                t.items &&
                  a.a.createElement(e, {
                    tableOfContents: t.items,
                    depth: n + 1,
                  })
              );
            })
          );
        },
        m = function (e) {
          var t = e.tableOfContents;
          return a.a.createElement(
            "div",
            { className: "toc-container" },
            a.a.createElement("h3", { className: "h6" }, "Table of Contents"),
            a.a.createElement(p, { tableOfContents: t, depth: 0 })
          );
        };
      t.default = function (e) {
        var t = e.data;
        return a.a.createElement(
          s.a,
          null,
          a.a.createElement(u.a, {
            title: t.mdx.frontmatter.title,
            image:
              t.mdx.frontmatter.image &&
              t.mdx.frontmatter.image.childImageSharp.fixed.src,
            description: t.mdx.excerpt,
          }),
          a.a.createElement(
            l.a,
            null,
            a.a.createElement(
              i.a,
              null,
              a.a.createElement(
                c.a,
                null,
                a.a.createElement(
                  "h1",
                  { className: "pb-3 pt-5 font-weight-bold" },
                  t.mdx.frontmatter.title
                ),
                a.a.createElement(
                  "div",
                  null,
                  t.mdx.frontmatter.date.toString()
                )
              )
            ),
            a.a.createElement(
              i.a,
              null,
              a.a.createElement(
                c.a,
                { sm: 4, className: "d-none d-sm-block" },
                a.a.createElement(m, {
                  tableOfContents: t.mdx.tableOfContents.items,
                })
              ),
              a.a.createElement(
                c.a,
                { sm: { order: "first" }, className: "post" },
                a.a.createElement(o.MDXRenderer, null, t.mdx.body)
              )
            )
          )
        );
      };
    },
    "A2+M": function (e, t, r) {
      var n = r("X8hv");
      e.exports = { MDXRenderer: n };
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
    Ijbi: function (e, t, r) {
      var n = r("WkPL");
      (e.exports = function (e) {
        if (Array.isArray(e)) return n(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    RIqP: function (e, t, r) {
      var n = r("Ijbi"),
        a = r("EbDI"),
        o = r("ZhPi"),
        c = r("Bnag");
      (e.exports = function (e) {
        return n(e) || a(e) || o(e) || c();
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    WkPL: function (e, t) {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    X8hv: function (e, t, r) {
      var n = r("RIqP"),
        a = r("sXyB"),
        o = r("lSNA"),
        c = r("8OQS"),
        l = ["scope", "children"];
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var u = r("q1tI"),
        p = r("7ljp").mdx,
        m = r("BfwJ").useMDXScope;
      e.exports = function (e) {
        var t = e.scope,
          r = e.children,
          o = c(e, l),
          i = m(t),
          f = u.useMemo(
            function () {
              if (!r) return null;
              var e = s({ React: u, mdx: p }, i),
                t = Object.keys(e),
                o = t.map(function (t) {
                  return e[t];
                });
              return a(Function, ["_fn"].concat(t, ["" + r])).apply(
                void 0,
                [{}].concat(n(o))
              );
            },
            [r, t]
          );
        return u.createElement(f, s({}, o));
      };
    },
    ZhPi: function (e, t, r) {
      var n = r("WkPL");
      (e.exports = function (e, t) {
        if (e) {
          if ("string" == typeof e) return n(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
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
    sXyB: function (e, t, r) {
      var n = r("SksO"),
        a = r("b48C");
      function o(t, r, c) {
        return (
          a()
            ? ((e.exports = o = Reflect.construct.bind()),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports))
            : ((e.exports = o = function (e, t, r) {
                var a = [null];
                a.push.apply(a, t);
                var o = new (Function.bind.apply(e, a))();
                return r && n(o, r.prototype), o;
              }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports)),
          o.apply(null, arguments)
        );
      }
      (e.exports = o),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    vrFN: function (e, t, r) {
      "use strict";
      var n = r("q1tI"),
        a = r.n(n),
        o = r("qhky"),
        c = r("Wbzz");
      t.a = function (e) {
        var t = e.description,
          r = e.children,
          n = e.title,
          l = e.image,
          i = Object(c.useStaticQuery)("1442128573"),
          s = i.site,
          u = i.ogImageDefault,
          p = l
            ? s.siteMetadata.siteUrl.concat(l)
            : s.siteMetadata.siteUrl.concat(u.childImageSharp.fixed.src),
          m = "undefined" != typeof window ? window.location.href : "";
        return a.a.createElement(
          o.a,
          { title: n, titleTemplate: "%s | " + s.siteMetadata.title },
          a.a.createElement("meta", { name: "description", content: t }),
          a.a.createElement("meta", {
            property: "og:title",
            content: n,
            key: "title",
          }),
          a.a.createElement("meta", { property: "og:description", content: t }),
          a.a.createElement("meta", {
            property: "og:image",
            content: p,
            key: "image",
          }),
          a.a.createElement("meta", {
            property: "og:type",
            content: "website",
          }),
          a.a.createElement("meta", {
            property: "og:site_name",
            content: s.siteMetadata.title,
          }),
          a.a.createElement("meta", { property: "og:url", content: m }),
          a.a.createElement("meta", {
            name: "twitter:card",
            content: "summary_large_image",
            key: "misc-card",
          }),
          a.a.createElement("meta", {
            name: "twitter:creator",
            content: s.siteMetadata.author,
          }),
          a.a.createElement("meta", { name: "twitter:title", content: n }),
          a.a.createElement("meta", { name: "twitter:image", content: p }),
          a.a.createElement("meta", {
            name: "twitter:description",
            content: t,
          }),
          r
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-templates-post-js-f94cc3f1582a128ea11c.js.map
