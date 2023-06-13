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
        c = n("7vrA"),
        i = n("3Z9Z"),
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
          x,
          v,
          y,
          b,
          E,
          g,
          h,
          O = e.data;
        return o.a.createElement(
          u.a,
          null,
          o.a.createElement(s.a, {
            title:
              null == O ||
              null === (t = O.mdx) ||
              void 0 === t ||
              null === (n = t.frontmatter) ||
              void 0 === n
                ? void 0
                : n.title,
            image:
              (null == O ||
              null === (r = O.mdx) ||
              void 0 === r ||
              null === (p = r.frontmatter) ||
              void 0 === p
                ? void 0
                : p.image) &&
              (null == O ||
              null === (d = O.mdx) ||
              void 0 === d ||
              null === (f = d.frontmatter) ||
              void 0 === f
                ? void 0
                : f.image.childImageSharp.fixed.src),
            description:
              null == O || null === (x = O.mdx) || void 0 === x
                ? void 0
                : x.excerpt,
          }),
          o.a.createElement(
            c.a,
            null,
            o.a.createElement(
              i.a,
              null,
              o.a.createElement(
                l.a,
                null,
                o.a.createElement(
                  "h1",
                  { className: "pb-3 pt-5 font-weight-bold" },
                  O.mdx.frontmatter.title
                ),
                o.a.createElement(
                  "div",
                  null,
                  null == O ||
                    null === (v = O.mdx) ||
                    void 0 === v ||
                    null === (y = v.frontmatter) ||
                    void 0 === y ||
                    null === (b = y.date) ||
                    void 0 === b
                    ? void 0
                    : b.toString()
                )
              )
            ),
            o.a.createElement(
              i.a,
              null,
              o.a.createElement(
                l.a,
                { sm: 4, className: "d-none d-sm-block" },
                o.a.createElement(m, {
                  tableOfContents:
                    null == O ||
                    null === (E = O.mdx) ||
                    void 0 === E ||
                    null === (g = E.tableOfContents) ||
                    void 0 === g
                      ? void 0
                      : g.items,
                })
              ),
              o.a.createElement(
                l.a,
                { sm: { order: "first" }, className: "post" },
                o.a.createElement(
                  a.MDXRenderer,
                  null,
                  null == O || null === (h = O.mdx) || void 0 === h
                    ? void 0
                    : h.body
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
        c = ["scope", "children"];
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
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
      var s = n("q1tI"),
        p = n("7ljp").mdx,
        m = n("BfwJ").useMDXScope;
      e.exports = function (e) {
        var t = e.scope,
          n = e.children,
          a = l(e, c),
          i = m(t),
          d = s.useMemo(
            function () {
              if (!n) return null;
              var e = u({ React: s, mdx: p }, i),
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
          c = e.image,
          i = Object(l.useStaticQuery)("1442128573"),
          u = i.site,
          s = i.ogImageDefault,
          p = c
            ? u.siteMetadata.siteUrl.concat(c)
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
//# sourceMappingURL=component---src-templates-post-js-346a0774f7b5350962ea.js.map
