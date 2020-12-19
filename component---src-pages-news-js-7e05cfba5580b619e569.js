(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    FJi0: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        r = a.n(n),
        c = a("JI6e"),
        i = a("7vrA"),
        o = a("3Z9Z"),
        l = a("Bl7J"),
        m = a("vrFN");
      t.default = function () {
        return r.a.createElement(
          l.a,
          null,
          r.a.createElement(m.a, { title: "NEWS" }),
          r.a.createElement(
            i.a,
            null,
            r.a.createElement(
              o.a,
              null,
              r.a.createElement(
                c.a,
                null,
                r.a.createElement("h1", null, "Coming soon...")
              )
            )
          )
        );
      };
    },
    vrFN: function (e, t, a) {
      "use strict";
      var n = a("q1tI"),
        r = a.n(n),
        c = a("qhky"),
        i = a("Wbzz");
      t.a = function (e) {
        var t = e.description,
          a = e.children,
          n = e.title,
          o = e.image,
          l = Object(i.useStaticQuery)("2364640217"),
          m = l.site,
          s = l.ogImageDefault,
          p = o
            ? m.siteMetadata.siteUrl.concat(o)
            : m.siteMetadata.siteUrl.concat(s.childImageSharp.fixed.src),
          u = "undefined" != typeof window ? window.location.href : "";
        return r.a.createElement(
          c.a,
          { title: n, titleTemplate: "%s | " + m.siteMetadata.title },
          r.a.createElement("meta", { name: "description", content: t }),
          r.a.createElement("meta", { property: "og:title", content: n }),
          r.a.createElement("meta", { property: "og:description", content: t }),
          r.a.createElement("meta", { property: "og:image", content: p }),
          r.a.createElement("meta", {
            property: "og:type",
            content: "website",
          }),
          r.a.createElement("meta", {
            property: "og:site_name",
            content: m.siteMetadata.title,
          }),
          r.a.createElement("meta", { property: "og:url", content: u }),
          r.a.createElement("meta", {
            name: "twitter:card",
            content: "summary",
          }),
          r.a.createElement("meta", {
            name: "twitter:creator",
            content: m.siteMetadata.author,
          }),
          r.a.createElement("meta", { name: "twitter:title", content: n }),
          r.a.createElement("meta", { name: "twitter:image", content: p }),
          r.a.createElement("meta", {
            name: "twitter:description",
            content: t,
          }),
          a
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-news-js-7e05cfba5580b619e569.js.map
