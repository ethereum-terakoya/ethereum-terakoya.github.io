(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    FJi0: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        r = a.n(n),
        i = a("JI6e"),
        l = a("7vrA"),
        c = a("3Z9Z"),
        o = a("Bl7J"),
        m = a("vrFN"),
        s = a("wx14"),
        d = a("zLVn"),
        u = a("TSYQ"),
        p = a.n(u),
        h = a("vUet"),
        E = a("YdCC"),
        b = function (e) {
          return r.a.forwardRef(function (t, a) {
            return r.a.createElement(
              "div",
              Object(s.a)({}, t, { ref: a, className: p()(t.className, e) })
            );
          });
        },
        g = a("Wzyw"),
        y = r.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            n = e.className,
            i = e.variant,
            l = e.as,
            c = void 0 === l ? "img" : l,
            o = Object(d.a)(e, ["bsPrefix", "className", "variant", "as"]),
            m = Object(h.a)(a, "card-img");
          return r.a.createElement(
            c,
            Object(s.a)({ ref: t, className: p()(i ? m + "-" + i : m, n) }, o)
          );
        });
      (y.displayName = "CardImg"), (y.defaultProps = { variant: null });
      var f = y,
        v = b("h5"),
        w = b("h6"),
        k = Object(E.a)("card-body"),
        j = Object(E.a)("card-title", { Component: v }),
        x = Object(E.a)("card-subtitle", { Component: w }),
        T = Object(E.a)("card-link", { Component: "a" }),
        O = Object(E.a)("card-text", { Component: "p" }),
        N = Object(E.a)("card-header"),
        P = Object(E.a)("card-footer"),
        C = Object(E.a)("card-img-overlay"),
        H = r.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            i = e.className,
            l = e.bg,
            c = e.text,
            o = e.border,
            m = e.body,
            u = e.children,
            E = e.as,
            b = void 0 === E ? "div" : E,
            y = Object(d.a)(e, [
              "bsPrefix",
              "className",
              "bg",
              "text",
              "border",
              "body",
              "children",
              "as",
            ]),
            f = Object(h.a)(a, "card"),
            v = Object(n.useMemo)(
              function () {
                return { cardHeaderBsPrefix: f + "-header" };
              },
              [f]
            );
          return r.a.createElement(
            g.a.Provider,
            { value: v },
            r.a.createElement(
              b,
              Object(s.a)({ ref: t }, y, {
                className: p()(
                  i,
                  f,
                  l && "bg-" + l,
                  c && "text-" + c,
                  o && "border-" + o
                ),
              }),
              m ? r.a.createElement(k, null, u) : u
            )
          );
        });
      (H.displayName = "Card"),
        (H.defaultProps = { body: !1 }),
        (H.Img = f),
        (H.Title = j),
        (H.Subtitle = x),
        (H.Body = k),
        (H.Link = T),
        (H.Text = O),
        (H.Header = N),
        (H.Footer = P),
        (H.ImgOverlay = C);
      var I = H,
        M = a("dDsW");
      t.default = function (e) {
        e.data;
        var t = e.pageContext,
          a = Object(M.a)(),
          n =
            "ja" === t.locale
              ? [
                  {
                    date: "2020/11/30",
                    title: "公開イベント",
                    linkTitle:
                      "【ローンチ直前】Ethereum大型アップデート「ETH2.0」の全容に迫る",
                    link: "https://peatix.com/event/1713336?lang=ja",
                    description:
                      "世界一のブロックチェーン開発者コミュニティであるEthereum。新たなフェーズへの移行として、Ethereum2.0のローンチを控えています。今回、Ethereum財団の支援のもと誕生したコミュニティ「ETHTerakoya」にて、イーサリアムの最新動向について解説します。",
                  },
                  {
                    date: "2020/11/06",
                    title: "公開ワークショップ",
                    linkTitle:
                      "インターネット投票はブロックチェーンによって実現されるか？ブロックチェーン×マイナンバーから考える可能性",
                    link: "https://peatix.com/event/1679864?lang=ja",
                    description:
                      "電子政府の重要性が高まり、マイナンバーやインターネット投票への期待感が高まっている。今回、Ethereum財団の支援のもと誕生したコミュニティ「ETHTerakoya」にて、ビジネス・技術・法律の専門家が集まり、インターネット投票の実現に向けたブロックチェーン技術活用についての討論を行った。その成果物共有の場として、インターネット投票に求められる法律や技術要件について発表を行う。",
                  },
                ]
              : [
                  {
                    date: "2020/11/30",
                    title: "Public Event",
                    linkTitle:
                      'Deep insight into "ETH2.0" the major update of Ethereum',
                    link: "https://peatix.com/event/1713336?lang=ja",
                    description:
                      'Ethereum is one of the largest developer community in the world. The major update "Ethereum2.0" will be launched to accelerate to the next phase. ETHTerakoya supported by Ethereum Foundation explain the latest trend in Ethereum.',
                  },
                  {
                    date: "2020/11/06",
                    title: "Public Workshop",
                    linkTitle:
                      "Possibility to introduce online voting by using blockchain - Blockchain × My Number -",
                    link: "https://peatix.com/event/1679864?lang=ja",
                    description:
                      "Business/technology/legal professionals have gathered as ETHTerakoya community supported by Ethereum Foundation and discussed how to introduce online voting by using blockchain. We hold the workshop to share the final report shows legal and technology requirement and other insights.",
                  },
                ];
        return r.a.createElement(
          o.a,
          null,
          r.a.createElement(m.a, { title: "NEWS" }),
          r.a.createElement(
            l.a,
            { className: "py-5" },
            r.a.createElement(
              c.a,
              null,
              r.a.createElement(
                i.a,
                null,
                r.a.createElement(
                  "p",
                  { className: "main-submenu-title" },
                  a.formatMessage({ id: "news" })
                )
              )
            ),
            n.map(function (e, t) {
              return r.a.createElement(
                c.a,
                { className: "py-5", key: t },
                r.a.createElement(
                  i.a,
                  { xs: 12, sm: 2 },
                  r.a.createElement("p", null, e.date)
                ),
                r.a.createElement(
                  i.a,
                  { xs: 12, sm: 10 },
                  r.a.createElement(
                    I,
                    { style: { width: "100%" } },
                    r.a.createElement(I.Header, null, e.title),
                    r.a.createElement(
                      I.Body,
                      null,
                      r.a.createElement(
                        I.Title,
                        null,
                        r.a.createElement(
                          I.Link,
                          { href: e.link, target: "blank" },
                          e.linkTitle
                        )
                      ),
                      r.a.createElement(I.Text, null, e.description)
                    )
                  )
                )
              );
            })
          )
        );
      };
    },
    vrFN: function (e, t, a) {
      "use strict";
      var n = a("q1tI"),
        r = a.n(n),
        i = a("qhky"),
        l = a("Wbzz");
      t.a = function (e) {
        var t = e.description,
          a = e.children,
          n = e.title,
          c = e.image,
          o = Object(l.useStaticQuery)("2364640217"),
          m = o.site,
          s = o.ogImageDefault,
          d = c
            ? m.siteMetadata.siteUrl.concat(c)
            : m.siteMetadata.siteUrl.concat(s.childImageSharp.fixed.src),
          u = "undefined" != typeof window ? window.location.href : "";
        return r.a.createElement(
          i.a,
          { title: n, titleTemplate: "%s | " + m.siteMetadata.title },
          r.a.createElement("meta", { name: "description", content: t }),
          r.a.createElement("meta", { property: "og:title", content: n }),
          r.a.createElement("meta", { property: "og:description", content: t }),
          r.a.createElement("meta", { property: "og:image", content: d }),
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
          r.a.createElement("meta", { name: "twitter:image", content: d }),
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
//# sourceMappingURL=component---src-pages-news-js-6c4cb8231fa80a3074b8.js.map