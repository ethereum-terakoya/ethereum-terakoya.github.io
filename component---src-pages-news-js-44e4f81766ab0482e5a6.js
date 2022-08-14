(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    FJi0: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a("q1tI"),
        n = a.n(i),
        l = a("JI6e"),
        r = a("7vrA"),
        o = a("3Z9Z"),
        s = a("Bl7J"),
        c = a("vrFN"),
        d = a("wx14"),
        h = a("zLVn"),
        u = a("TSYQ"),
        m = a.n(u),
        p = a("vUet"),
        b = a("YdCC"),
        k = function (e) {
          return n.a.forwardRef(function (t, a) {
            return n.a.createElement(
              "div",
              Object(d.a)({}, t, { ref: a, className: m()(t.className, e) })
            );
          });
        },
        E = a("Wzyw"),
        v = ["bsPrefix", "className", "variant", "as"],
        y = n.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            i = e.className,
            l = e.variant,
            r = e.as,
            o = void 0 === r ? "img" : r,
            s = Object(h.a)(e, v),
            c = Object(p.a)(a, "card-img");
          return n.a.createElement(
            o,
            Object(d.a)({ ref: t, className: m()(l ? c + "-" + l : c, i) }, s)
          );
        });
      (y.displayName = "CardImg"), (y.defaultProps = { variant: null });
      var T = y,
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
        g = k("h5"),
        w = k("h6"),
        x = Object(b.a)("card-body"),
        j = Object(b.a)("card-title", { Component: g }),
        N = Object(b.a)("card-subtitle", { Component: w }),
        O = Object(b.a)("card-link", { Component: "a" }),
        H = Object(b.a)("card-text", { Component: "p" }),
        P = Object(b.a)("card-header"),
        A = Object(b.a)("card-footer"),
        B = Object(b.a)("card-img-overlay"),
        I = n.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            l = e.className,
            r = e.bg,
            o = e.text,
            s = e.border,
            c = e.body,
            u = e.children,
            b = e.as,
            k = void 0 === b ? "div" : b,
            v = Object(h.a)(e, f),
            y = Object(p.a)(a, "card"),
            T = Object(i.useMemo)(
              function () {
                return { cardHeaderBsPrefix: y + "-header" };
              },
              [y]
            );
          return n.a.createElement(
            E.a.Provider,
            { value: T },
            n.a.createElement(
              k,
              Object(d.a)({ ref: t }, v, {
                className: m()(
                  l,
                  y,
                  r && "bg-" + r,
                  o && "text-" + o,
                  s && "border-" + s
                ),
              }),
              c ? n.a.createElement(x, null, u) : u
            )
          );
        });
      (I.displayName = "Card"),
        (I.defaultProps = { body: !1 }),
        (I.Img = T),
        (I.Title = j),
        (I.Subtitle = N),
        (I.Body = x),
        (I.Link = O),
        (I.Text = H),
        (I.Header = P),
        (I.Footer = A),
        (I.ImgOverlay = B);
      var J = I,
        M = a("dDsW"),
        C = a("9eSz"),
        W = a.n(C);
      t.default = function (e) {
        var t = e.data,
          a = e.pageContext,
          i = Object(M.a)(),
          d =
            "ja" === a.locale
              ? [
                  {
                    date: "2022/7/13",
                    title: "お知らせ",
                    thumbnail: t.thumbnail,
                    linkTitle:
                      "EEA Japan主催「インターオペラビリティがもたらすエンタープライズブロックチェーンの進化とは」",
                    link: "/events/2022713",
                    description:
                      "2022年7月1日に同イベントを開催いたしました。オンラインではなく、リアル開催となり、セッション終了後に行われた交流会では、登壇者と参加者の間で活発な意見交換が行われ、大いに盛り上がりました。",
                  },
                  {
                    date: "2022/7/1",
                    title: "お知らせ",
                    linkTitle: "",
                    link: "#",
                    description:
                      "ETHTerakoyaをEEA Japanコミュニティに統合しました。",
                  },
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
                    date: "2022/7/13",
                    title: "News",
                    thumbnail: t.thumbnail,
                    linkTitle:
                      '"What Interoperability Means for the Evolution of Enterprise Blockchain," hosted by EEA Japan',
                    link: "/en/events/2022713",
                    description:
                      "The event was held on July 1, 2022. The session was not held online, but on site, and the networking session held after the session was a lively exchange of ideas and opinions between the speakers and the participants.",
                  },
                  {
                    date: "2022/7/1",
                    title: "News",
                    linkTitle: "",
                    link: "#",
                    description:
                      "ETHTerakoya has been merged into EEA Japan community.",
                  },
                  {
                    date: "2021/10/29",
                    title: "Public Event",
                    linkTitle:
                      "Performance evaluation viewpoint required for business use of blockchain - Ethereum performance evaluation workshop",
                    link: "https://peatix.com/event/3042248/view",
                    description:
                      'At ETHTerakoya, we hold discussions with experts in companies and developers to establish a "common evaluation standard" required to compare blockchain functionality. We also conduct actual tests. In the public workshop this time, we will announce our results based on the 7 group discussions we have held in the past.',
                  },
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
        return n.a.createElement(
          s.a,
          null,
          n.a.createElement(c.a, { title: "NEWS" }),
          n.a.createElement(
            r.a,
            { className: "py-5" },
            n.a.createElement(
              o.a,
              null,
              n.a.createElement(
                l.a,
                null,
                n.a.createElement(
                  "p",
                  { className: "main-submenu-title" },
                  i.formatMessage({ id: "news" })
                )
              )
            ),
            d.map(function (e, t) {
              return n.a.createElement(
                o.a,
                { className: "py-4", key: t },
                n.a.createElement(
                  l.a,
                  { xs: 12, sm: 2 },
                  n.a.createElement("p", null, e.date)
                ),
                n.a.createElement(
                  l.a,
                  { xs: 12, sm: 10 },
                  n.a.createElement(
                    J,
                    { style: { width: "100%" } },
                    n.a.createElement(J.Header, null, e.title),
                    n.a.createElement(
                      J.Body,
                      { className: "card-body" },
                      e.thumbnail
                        ? n.a.createElement(
                            J.Link,
                            {
                              className: "image-card-body",
                              href: e.link,
                              target: "#" !== e.link && "blank",
                            },
                            n.a.createElement(W.a, {
                              fixed: e.thumbnail.childImageSharp.fixed,
                            })
                          )
                        : "",
                      n.a.createElement(
                        "div",
                        { className: "card-titles" },
                        n.a.createElement(
                          J.Title,
                          null,
                          n.a.createElement(
                            J.Link,
                            { href: e.link, target: "#" !== e.link && "blank" },
                            e.linkTitle
                          )
                        ),
                        "" === e.linkTitle
                          ? n.a.createElement("p", null, e.description)
                          : n.a.createElement(J.Text, null, e.description)
                      )
                    )
                  )
                )
              );
            })
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-news-js-44e4f81766ab0482e5a6.js.map
