(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    rV4e: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "query", function () {
          return d;
        });
      var n = a("q1tI"),
        r = a.n(n),
        c = a("Frpm"),
        l = a("dDsW"),
        m = a("JI6e"),
        o = a("7vrA"),
        i = a("3Z9Z"),
        s = a("Bl7J"),
        p = a("vrFN");
      t.default = function (e) {
        var t = e.pageContext,
          a = e.data,
          n = Object(l.a)(),
          d = t.group.toUpperCase();
        return r.a.createElement(
          s.a,
          null,
          r.a.createElement(p.a, { title: d }),
          r.a.createElement(
            o.a,
            { className: "py-5" },
            r.a.createElement(
              i.a,
              { className: "mb-5" },
              r.a.createElement(
                m.a,
                null,
                r.a.createElement(
                  "h1",
                  { className: "font-weight-bold" },
                  d,
                  " ",
                  n.formatMessage({ id: "group" })
                ),
                r.a.createElement("p", null, n.formatMessage({ id: "posts" }))
              )
            ),
            r.a.createElement(
              "ul",
              { className: "list-unstyled" },
              a.allMdx.edges.map(function (e) {
                var a = e.node;
                return r.a.createElement(
                  "li",
                  { key: a.frontmatter.slug, className: "post-list-item" },
                  r.a.createElement(
                    i.a,
                    null,
                    r.a.createElement(m.a, { md: 3 }, a.frontmatter.date),
                    r.a.createElement(
                      m.a,
                      null,
                      r.a.createElement(
                        c.a,
                        {
                          to: "/" + t.group + "/" + a.parent.relativeDirectory,
                        },
                        r.a.createElement(
                          "b",
                          { className: "h3 font-weight-bold" },
                          a.frontmatter.title
                        )
                      )
                    )
                  )
                );
              })
            )
          )
        );
      };
      var d = "2433145767";
    },
    vrFN: function (e, t, a) {
      "use strict";
      var n = a("q1tI"),
        r = a.n(n),
        c = a("qhky"),
        l = a("Wbzz");
      t.a = function (e) {
        var t = e.description,
          a = e.children,
          n = e.title,
          m = e.image,
          o = Object(l.useStaticQuery)("2364640217"),
          i = o.site,
          s = o.ogImageDefault,
          p = m
            ? i.siteMetadata.siteUrl.concat(m)
            : i.siteMetadata.siteUrl.concat(s.childImageSharp.fixed.src),
          d = "undefined" != typeof window ? window.location.href : "";
        return r.a.createElement(
          c.a,
          { title: n, titleTemplate: "%s | " + i.siteMetadata.title },
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
            content: i.siteMetadata.title,
          }),
          r.a.createElement("meta", { property: "og:url", content: d }),
          r.a.createElement("meta", {
            name: "twitter:card",
            content: "summary",
          }),
          r.a.createElement("meta", {
            name: "twitter:creator",
            content: i.siteMetadata.author,
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
//# sourceMappingURL=component---src-templates-group-js-141d13c5759a353eab8e.js.map