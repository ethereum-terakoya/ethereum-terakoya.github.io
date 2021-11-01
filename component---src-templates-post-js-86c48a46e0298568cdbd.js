(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    "6qSS": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "query", function () {
          return f;
        });
      var r = n("q1tI"),
        a = n.n(r),
        o = n("A2+M"),
        c = n("JI6e"),
        i = n("7vrA"),
        l = n("3Z9Z"),
        u = n("Bl7J"),
        s = n("vrFN"),
        m = function e(t) {
          var n = t.tableOfContents,
            r = t.depth;
          return a.a.createElement(
            "ul",
            null,
            n.map(function (t) {
              return a.a.createElement(
                "li",
                { key: t.url },
                a.a.createElement("a", { href: t.url }, t.title),
                t.items &&
                  a.a.createElement(e, {
                    tableOfContents: t.items,
                    depth: r + 1,
                  })
              );
            })
          );
        },
        p = function (e) {
          var t = e.tableOfContents;
          return a.a.createElement(
            "div",
            { className: "toc-container" },
            a.a.createElement("h3", { className: "h6" }, "Table of Contents"),
            a.a.createElement(m, { tableOfContents: t, depth: 0 })
          );
        },
        f =
          ((t.default = function (e) {
            var t = e.data;
            return (
              console.log(t, "datadatadata"),
              a.a.createElement(
                u.a,
                null,
                a.a.createElement(s.a, {
                  title: t.mdx.frontmatter.title,
                  description: t.mdx.excerpt,
                }),
                a.a.createElement(
                  i.a,
                  null,
                  a.a.createElement(
                    l.a,
                    null,
                    a.a.createElement(
                      c.a,
                      null,
                      a.a.createElement(
                        "h1",
                        { className: "pb-3 pt-5 font-weight-bold" },
                        t.mdx.frontmatter.title
                      ),
                      a.a.createElement("div", null, t.mdx.frontmatter.date)
                    )
                  ),
                  a.a.createElement(
                    l.a,
                    null,
                    a.a.createElement(
                      c.a,
                      { sm: 4, className: "d-none d-sm-block" },
                      a.a.createElement(p, {
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
              )
            );
          }),
          "3290529092");
    },
    "A2+M": function (e, t, n) {
      var r = n("X8hv");
      e.exports = { MDXRenderer: r };
    },
    Bnag: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    EbDI: function (e, t) {
      e.exports = function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    Ijbi: function (e, t, n) {
      var r = n("WkPL");
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    RIqP: function (e, t, n) {
      var r = n("Ijbi"),
        a = n("EbDI"),
        o = n("ZhPi"),
        c = n("Bnag");
      e.exports = function (e) {
        return r(e) || a(e) || o(e) || c();
      };
    },
    SksO: function (e, t) {
      function n(t, r) {
        return (
          (e.exports = n =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          n(t, r)
        );
      }
      e.exports = n;
    },
    WkPL: function (e, t) {
      e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      };
    },
    X8hv: function (e, t, n) {
      var r = n("sXyB"),
        a = n("RIqP"),
        o = n("lSNA"),
        c = n("8OQS");
      function i(e, t) {
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
            ? i(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var u = n("q1tI"),
        s = n("7ljp"),
        m = s.useMDXComponents,
        p = s.mdx,
        f = n("BfwJ").useMDXScope;
      e.exports = function (e) {
        var t = e.scope,
          n = e.components,
          o = e.children,
          i = c(e, ["scope", "components", "children"]),
          s = m(n),
          d = f(t),
          y = u.useMemo(
            function () {
              if (!o) return null;
              var e = l({ React: u, mdx: p }, d),
                t = Object.keys(e),
                n = t.map(function (t) {
                  return e[t];
                });
              return r(Function, ["_fn"].concat(a(t), ["" + o])).apply(
                void 0,
                [{}].concat(a(n))
              );
            },
            [o, t]
          );
        return u.createElement(y, l({ components: s }, i));
      };
    },
    ZhPi: function (e, t, n) {
      var r = n("WkPL");
      e.exports = function (e, t) {
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
      };
    },
    b48C: function (e, t) {
      e.exports = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      };
    },
    sXyB: function (e, t, n) {
      var r = n("SksO"),
        a = n("b48C");
      function o(t, n, c) {
        return (
          a()
            ? (e.exports = o = Reflect.construct)
            : (e.exports = o = function (e, t, n) {
                var a = [null];
                a.push.apply(a, t);
                var o = new (Function.bind.apply(e, a))();
                return n && r(o, n.prototype), o;
              }),
          o.apply(null, arguments)
        );
      }
      e.exports = o;
    },
    vrFN: function (e, t, n) {
      "use strict";
      var r = n("q1tI"),
        a = n.n(r),
        o = n("qhky"),
        c = n("Wbzz");
      t.a = function (e) {
        var t = e.description,
          n = e.children,
          r = e.title,
          i = e.image,
          l = Object(c.useStaticQuery)("2364640217"),
          u = l.site,
          s = l.ogImageDefault,
          m = i
            ? u.siteMetadata.siteUrl.concat(i)
            : u.siteMetadata.siteUrl.concat(s.childImageSharp.fixed.src),
          p = "undefined" != typeof window ? window.location.href : "";
        return a.a.createElement(
          o.a,
          { title: r, titleTemplate: "%s | " + u.siteMetadata.title },
          a.a.createElement("meta", { name: "description", content: t }),
          a.a.createElement("meta", { property: "og:title", content: r }),
          a.a.createElement("meta", { property: "og:description", content: t }),
          a.a.createElement("meta", { property: "og:image", content: m }),
          a.a.createElement("meta", {
            property: "og:type",
            content: "website",
          }),
          a.a.createElement("meta", {
            property: "og:site_name",
            content: u.siteMetadata.title,
          }),
          a.a.createElement("meta", { property: "og:url", content: p }),
          a.a.createElement("meta", {
            name: "twitter:card",
            content: "summary",
          }),
          a.a.createElement("meta", {
            name: "twitter:creator",
            content: u.siteMetadata.author,
          }),
          a.a.createElement("meta", { name: "twitter:title", content: r }),
          a.a.createElement("meta", { name: "twitter:image", content: m }),
          a.a.createElement("meta", {
            name: "twitter:description",
            content: t,
          }),
          n
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-templates-post-js-86c48a46e0298568cdbd.js.map
