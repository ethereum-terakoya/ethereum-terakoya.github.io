(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    FJi0: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        i = a.n(n),
        r = a("JI6e"),
        l = a("7vrA"),
        o = a("3Z9Z"),
        c = a("Bl7J"),
        s = a("vrFN"),
        m = a("wx14"),
        d = a("zLVn"),
        u = a("TSYQ"),
        p = a.n(u),
        h = a("vUet"),
        E = a("YdCC"),
        b = function (e) {
          return i.a.forwardRef(function (t, a) {
            return i.a.createElement(
              "div",
              Object(m.a)({}, t, { ref: a, className: p()(t.className, e) })
            );
          });
        },
        k = a("Wzyw"),
        y = ["bsPrefix", "className", "variant", "as"],
        v = i.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            n = e.className,
            r = e.variant,
            l = e.as,
            o = void 0 === l ? "img" : l,
            c = Object(d.a)(e, y),
            s = Object(h.a)(a, "card-img");
          return i.a.createElement(
            o,
            Object(m.a)({ ref: t, className: p()(r ? s + "-" + r : s, n) }, c)
          );
        });
      (v.displayName = "CardImg"), (v.defaultProps = { variant: null });
      var g = v,
        f = [
          "bsPrefix",
          "className",
          "bg",
          "text",
          "border",
          "body",
          "children",
          "as",
        ],
        T = b("h5"),
        w = b("h6"),
        x = Object(E.a)("card-body"),
        j = Object(E.a)("card-title", { Component: T }),
        O = Object(E.a)("card-subtitle", { Component: w }),
        N = Object(E.a)("card-link", { Component: "a" }),
        P = Object(E.a)("card-text", { Component: "p" }),
        H = Object(E.a)("card-header"),
        M = Object(E.a)("card-footer"),
        I = Object(E.a)("card-img-overlay"),
        B = i.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            r = e.className,
            l = e.bg,
            o = e.text,
            c = e.border,
            s = e.body,
            u = e.children,
            E = e.as,
            b = void 0 === E ? "div" : E,
            y = Object(d.a)(e, f),
            v = Object(h.a)(a, "card"),
            g = Object(n.useMemo)(
              function () {
                return { cardHeaderBsPrefix: v + "-header" };
              },
              [v]
            );
          return i.a.createElement(
            k.a.Provider,
            { value: g },
            i.a.createElement(
              b,
              Object(m.a)({ ref: t }, y, {
                className: p()(
                  r,
                  v,
                  l && "bg-" + l,
                  o && "text-" + o,
                  c && "border-" + c
                ),
              }),
              s ? i.a.createElement(x, null, u) : u
            )
          );
        });
      (B.displayName = "Card"),
        (B.defaultProps = { body: !1 }),
        (B.Img = g),
        (B.Title = j),
        (B.Subtitle = O),
        (B.Body = x),
        (B.Link = N),
        (B.Text = P),
        (B.Header = H),
        (B.Footer = M),
        (B.ImgOverlay = I);
      var C = B,
        F = a("dDsW");
      t.default = function (e) {
        e.data;
        var t = e.pageContext,
          a = Object(F.a)(),
          n =
            "ja" === t.locale
              ? [
                  {
                    date: "2021/10/29",
                    title: "公開イベント",
                    linkTitle:
                      "ブロックチェーンのビジネス利用に必要な性能評価観点 - イーサリアム性能評価ワークショップ",
                    link: "https://peatix.com/event/3042248/view",
                    description:
                      "ETHTerakoyaではユーザー企業・開発企業に在籍する有識者でディスカッションを行い、ブロックチェーンの性能比較に必要な「共通の評価指標」を策定。実際にテストの実施までを行っています。今回の公開ワークショップでは、過去7回に渡るグループディスカッションの内容をもとにした成果発表を行います。",
                  },
                  {
                    date: "2021/6/10",
                    title: "公開イベント",
                    linkTitle:
                      "企業でのブロックチェーン研究開発最前線！ブロックチェーンの研究課題から見える可能性",
                    link: "https://peatix.com/event/1923158/view",
                    description:
                      "今回は企業に属しながらも、学生として研究をされている2名のスピーカーをお招きし、プライバシー・ゼロ知識証明に関する解説を行います。",
                  },
                  {
                    date: "2021/3/10",
                    title: "公開イベント",
                    linkTitle:
                      "【AMAイベント】宮口あやとヴィタリックにEthereumとEFについてなんでも聞いてみよう！",
                    link: "http://ptix.at/D7M4IR",
                    description:
                      "Ethereumコミュニティをリードする、宮口あや氏とヴィタリック氏を招き、Ethereumを深堀りしていきます。また、質問箱を通じて、視聴者様からの質問を拾って回答します。詳細は上記リンクよりご参照ください。",
                  },
                  {
                    date: "2021/3/4",
                    title: "公開イベント",
                    linkTitle:
                      "次世代リサーチャーから見るブロックチェーン技術の可能性とは？【ETHTerakoya x Blockchain EXE】",
                    link: "https://peatix.com/event/1826527",
                    description:
                      "今回のETHTerakoyaは、次世代若手リサーチャーが集い、ブロックチェーン技術に対するインサイトとその可能性について議論を深掘りします。",
                  },
                  {
                    date: "2021/2/4",
                    title: "公開イベント",
                    linkTitle:
                      "【ETH2.0特集】識者が語る、スケーリング技術によるこれからのEthereum",
                    link: "https://peatix.com/event/1778244?lang=ja",
                    description:
                      "今回はETH2.0の最新動向、主に「スケーリング」「シャーディング」について、開発/実用/研究の最前線で活躍する識者達が解説します。",
                  },
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
                    date: "2021/6/10",
                    title: "Public Event",
                    linkTitle:
                      "The latest trend of Blockchain - subject and possibility -",
                    link: "https://peatix.com/event/1923158/view",
                    description:
                      "The student researchers talk about privacy and zero-knowledge proof.",
                  },
                  {
                    date: "2021/3/10",
                    title: "Public Event",
                    linkTitle:
                      "【AMA Event】Interactive session about Ethereum and Ethereum Foundation with Aya Miyaguchi and Vitalik Buterin",
                    link: "http://ptix.at/D7M4IR",
                    description:
                      "We invite Aya Miyaguchi and Vitalik Buterin who lead the Ethereum community and have an interactive session that viewer also can ask them questions.",
                  },
                  {
                    date: "2021/3/4",
                    title: "Public Event",
                    linkTitle: "The possibility of blockchain technology",
                    link: "https://peatix.com/event/1826527",
                    description:
                      "The up and coming researchers discuss the possibility of blockchain and introduce their insight.",
                  },
                  {
                    date: "2021/2/4",
                    title: "Public Event",
                    linkTitle:
                      "Ethereum's future, which is shaped by scaling technology",
                    link: "https://peatix.com/event/1778244?lang=ja",
                    description:
                      "The experts in system development / operation / research explain the latest trend in Ethereum, especially about scaling and sharding.",
                  },
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
        return i.a.createElement(
          c.a,
          null,
          i.a.createElement(s.a, { title: "NEWS" }),
          i.a.createElement(
            l.a,
            { className: "py-5" },
            i.a.createElement(
              o.a,
              null,
              i.a.createElement(
                r.a,
                null,
                i.a.createElement(
                  "p",
                  { className: "main-submenu-title" },
                  a.formatMessage({ id: "news" })
                )
              )
            ),
            n.map(function (e, t) {
              return i.a.createElement(
                o.a,
                { className: "py-4", key: t },
                i.a.createElement(
                  r.a,
                  { xs: 12, sm: 2 },
                  i.a.createElement("p", null, e.date)
                ),
                i.a.createElement(
                  r.a,
                  { xs: 12, sm: 10 },
                  i.a.createElement(
                    C,
                    { style: { width: "100%" } },
                    i.a.createElement(C.Header, null, e.title),
                    i.a.createElement(
                      C.Body,
                      null,
                      i.a.createElement(
                        C.Title,
                        null,
                        i.a.createElement(
                          C.Link,
                          { href: e.link, target: "blank" },
                          e.linkTitle
                        )
                      ),
                      i.a.createElement(C.Text, null, e.description)
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
        i = a.n(n),
        r = a("qhky"),
        l = a("Wbzz");
      t.a = function (e) {
        var t = e.description,
          a = e.children,
          n = e.title,
          o = e.image,
          c = Object(l.useStaticQuery)("2364640217"),
          s = c.site,
          m = c.ogImageDefault,
          d = o
            ? s.siteMetadata.siteUrl.concat(o)
            : s.siteMetadata.siteUrl.concat(m.childImageSharp.fixed.src),
          u = "undefined" != typeof window ? window.location.href : "";
        return i.a.createElement(
          r.a,
          { title: n, titleTemplate: "%s | " + s.siteMetadata.title },
          i.a.createElement("meta", { name: "description", content: t }),
          i.a.createElement("meta", { property: "og:title", content: n }),
          i.a.createElement("meta", { property: "og:description", content: t }),
          i.a.createElement("meta", { property: "og:image", content: d }),
          i.a.createElement("meta", {
            property: "og:type",
            content: "website",
          }),
          i.a.createElement("meta", {
            property: "og:site_name",
            content: s.siteMetadata.title,
          }),
          i.a.createElement("meta", { property: "og:url", content: u }),
          i.a.createElement("meta", {
            name: "twitter:card",
            content: "summary",
          }),
          i.a.createElement("meta", {
            name: "twitter:creator",
            content: s.siteMetadata.author,
          }),
          i.a.createElement("meta", { name: "twitter:title", content: n }),
          i.a.createElement("meta", { name: "twitter:image", content: d }),
          i.a.createElement("meta", {
            name: "twitter:description",
            content: t,
          }),
          a
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-news-js-371716a63f732cb953b8.js.map