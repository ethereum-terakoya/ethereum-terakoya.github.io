(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    rV4e: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        r = a.n(n),
        l = a("Frpm"),
        c = a("dDsW"),
        m = a("JI6e"),
        o = a("7vrA"),
        i = a("3Z9Z"),
        s = a("Bl7J"),
        p = a("vrFN");
      t.default = function (e) {
        var t = e.pageContext,
          a = e.data,
          n = Object(c.a)(),
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
                  n.formatMessage({ id: "groupName_" + t.group }),
                  " ",
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
                        l.a,
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
    },
    vrFN: function (e, t, a) {
      "use strict";
      var n = a("q1tI"),
        r = a.n(n),
        l = a("qhky"),
        c = a("Wbzz");
      t.a = function (e) {
        var t = e.description,
          a = e.children,
          n = e.title,
          m = e.image,
          o = Object(c.useStaticQuery)("1442128573"),
          i = o.site,
          s = o.ogImageDefault,
          p = m
            ? i.siteMetadata.siteUrl.concat(m)
            : i.siteMetadata.siteUrl.concat(s.childImageSharp.fixed.src),
          d = "undefined" != typeof window ? window.location.href : "";
        return r.a.createElement(
          l.a,
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
//# sourceMappingURL=component---src-templates-group-js-7316c29a732edc001033.js.map
