(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    FJi0: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a("rePB"),
        n = a("q1tI"),
        l = a.n(n),
        r = a("JI6e"),
        o = a("7vrA"),
        s = a("3Z9Z"),
        c = a("Bl7J"),
        d = a("vrFN"),
        h = a("wx14"),
        m = a("zLVn"),
        p = a("TSYQ"),
        u = a.n(p),
        b = a("vUet"),
        k = a("YdCC"),
        E = function (e) {
          return l.a.forwardRef(function (t, a) {
            return l.a.createElement(
              "div",
              Object(h.a)({}, t, { ref: a, className: u()(t.className, e) })
            );
          });
        },
        T = a("Wzyw"),
        y = ["bsPrefix", "className", "variant", "as"],
        v = l.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            i = e.className,
            n = e.variant,
            r = e.as,
            o = void 0 === r ? "img" : r,
            s = Object(m.a)(e, y),
            c = Object(b.a)(a, "card-img");
          return l.a.createElement(
            o,
            Object(h.a)({ ref: t, className: u()(n ? c + "-" + n : c, i) }, s)
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
        x = E("h5"),
        w = E("h6"),
        j = Object(k.a)("card-body"),
        O = Object(k.a)("card-title", { Component: x }),
        P = Object(k.a)("card-subtitle", { Component: w }),
        H = Object(k.a)("card-link", { Component: "a" }),
        N = Object(k.a)("card-text", { Component: "p" }),
        I = Object(k.a)("card-header"),
        S = Object(k.a)("card-footer"),
        A = Object(k.a)("card-img-overlay"),
        J = l.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            i = e.className,
            r = e.bg,
            o = e.text,
            s = e.border,
            c = e.body,
            d = e.children,
            p = e.as,
            k = void 0 === p ? "div" : p,
            E = Object(m.a)(e, f),
            y = Object(b.a)(a, "card"),
            v = Object(n.useMemo)(
              function () {
                return { cardHeaderBsPrefix: y + "-header" };
              },
              [y]
            );
          return l.a.createElement(
            T.a.Provider,
            { value: v },
            l.a.createElement(
              k,
              Object(h.a)({ ref: t }, E, {
                className: u()(
                  i,
                  y,
                  r && "bg-" + r,
                  o && "text-" + o,
                  s && "border-" + s
                ),
              }),
              c ? l.a.createElement(j, null, d) : d
            )
          );
        });
      (J.displayName = "Card"),
        (J.defaultProps = { body: !1 }),
        (J.Img = g),
        (J.Title = O),
        (J.Subtitle = P),
        (J.Body = j),
        (J.Link = H),
        (J.Text = N),
        (J.Header = I),
        (J.Footer = S),
        (J.ImgOverlay = A);
      var D = J,
        B = a("dDsW"),
        G = a("9eSz"),
        W = a.n(G);
      function F(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, i);
        }
        return a;
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(a), !0).forEach(function (t) {
                Object(i.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : F(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      t.default = function (e) {
        var t = e.data,
          a = e.pageContext,
          i = Object(B.a)(),
          n = [
            t.image1SP.childImageSharp.fixed,
            M(
              M({}, t.image1DSK.childImageSharp.fixed),
              {},
              { media: "(min-width: 992px)" }
            ),
          ],
          h = [
            t.image2SP.childImageSharp.fixed,
            M(
              M({}, t.image2DSK.childImageSharp.fixed),
              {},
              { media: "(min-width: 992px)" }
            ),
          ],
          m = [
            t.imageGlobal.childImageSharp.fixed,
            M(
              M({}, t.imageGlobal.childImageSharp.fixed),
              {},
              { media: "(min-width: 992px)" }
            ),
          ],
          p = [
            t.imageGlobal2.childImageSharp.fixed,
            M(
              M({}, t.imageGlobal2.childImageSharp.fixed),
              {},
              { media: "(min-width: 992px)" }
            ),
          ],
          u =
            "ja" === a.locale
              ? [
                  {
                    date: "2023年04月13日",
                    title: "お知らせ",
                    thumbnail: p,
                    linkTitle:
                      "ETHGlobal Tokyoに日本を代表する企業が集結：今、企業とブロックチェーンエコシステムの融合により何が起ころうとしているのか？ 後編",
                    link: "/events/20230413",
                    description:
                      "2023年4月13日から4日間に渡って開催されたETHGlobal Tokyoハッカソン。このイベントの中で、エンタープライズイーサリアムアライアンスジャパンが主催する「エンタープライズイーサリアムステージ」が行われた。ブロックチェーンを活用したサービスやプロダクトを開発・提供している大企業、公的機関の開発者や研究者が一堂に会した歴史に残るブロックチェーンイベントとなった。",
                  },
                  {
                    date: "2023年04月13日",
                    title: "お知らせ",
                    thumbnail: m,
                    linkTitle:
                      "ETHGlobal Tokyoに日本を代表する企業が集結：今、企業とブロックチェーンエコシステムの融合により何が起ころうとしているのか？ 前編",
                    link: "/events/20230412",
                    description:
                      "2023年4月13日から4日間に渡って開催されたETHGlobal Tokyoハッカソン。このイベントの中で、エンタープライズイーサリアムアライアンスジャパンが主催する「エンタープライズイーサリアムステージ」が行われた。ブロックチェーンを活用したサービスやプロダクトを開発・提供している大企業、公的機関の開発者や研究者が一堂に会した歴史に残るブロックチェーンイベントとなった。",
                  },
                  {
                    date: "2022年11月17日",
                    title: "お知らせ",
                    thumbnail: h,
                    linkTitle:
                      "EEA Japan主催「【スクエニ、日立が語る】ゲームxNFT、Web3x分散型IDによるブロックチェーン事業の最前線」を共同開催しました",
                    link: "/events/20221117",
                    description:
                      "2022年10月31日、EEA Japan（エンタープライズ・イーサリアム・アライアンス・ジャパン）主催による「【スクエニ、日立が語る】ゲームxNFT、Web3x分散型IDによるブロックチェーン事業の最前線」を開催しました。",
                  },
                  {
                    date: "2022年7月13日",
                    title: "お知らせ",
                    thumbnail: n,
                    linkTitle:
                      "EEA Japan主催「インターオペラビリティがもたらすエンタープライズブロックチェーンの進化とは」",
                    link: "/events/20220713",
                    description:
                      "2022年7月1日に同イベントを開催いたしました。オンラインではなく、リアル開催となり、セッション終了後に行われた交流会では、登壇者と参加者の間で活発な意見交換が行われ、大いに盛り上がりました。",
                  },
                  {
                    date: "2022年7月1日",
                    title: "お知らせ",
                    linkTitle: "",
                    link: "#",
                    description:
                      "ETHTerakoyaをEEA Japanコミュニティに統合しました。",
                  },
                  {
                    date: "2021年10月29日",
                    title: "公開イベント",
                    linkTitle:
                      "ブロックチェーンのビジネス利用に必要な性能評価観点 - イーサリアム性能評価ワークショップ",
                    link: "https://peatix.com/event/3042248/view",
                    description:
                      "ETHTerakoyaではユーザー企業・開発企業に在籍する有識者でディスカッションを行い、ブロックチェーンの性能比較に必要な「共通の評価指標」を策定。実際にテストの実施までを行っています。今回の公開ワークショップでは、過去7回に渡るグループディスカッションの内容をもとにした成果発表を行います。",
                  },
                  {
                    date: "2021年6月10日",
                    title: "公開イベント",
                    linkTitle:
                      "企業でのブロックチェーン研究開発最前線！ブロックチェーンの研究課題から見える可能性",
                    link: "https://peatix.com/event/1923158/view",
                    description:
                      "今回は企業に属しながらも、学生として研究をされている2名のスピーカーをお招きし、プライバシー・ゼロ知識証明に関する解説を行います。",
                  },
                  {
                    date: "2021年3月10日",
                    title: "公開イベント",
                    linkTitle:
                      "【AMAイベント】宮口あやとヴィタリックにEthereumとEFについてなんでも聞いてみよう！",
                    link: "http://ptix.at/D7M4IR",
                    description:
                      "Ethereumコミュニティをリードする、宮口あや氏とヴィタリック氏を招き、Ethereumを深堀りしていきます。また、質問箱を通じて、視聴者様からの質問を拾って回答します。詳細は上記リンクよりご参照ください。",
                  },
                  {
                    date: "2021年3月4日",
                    title: "公開イベント",
                    linkTitle:
                      "次世代リサーチャーから見るブロックチェーン技術の可能性とは？【ETHTerakoya x Blockchain EXE】",
                    link: "https://peatix.com/event/1826527",
                    description:
                      "今回のETHTerakoyaは、次世代若手リサーチャーが集い、ブロックチェーン技術に対するインサイトとその可能性について議論を深掘りします。",
                  },
                  {
                    date: "2021年2月4日",
                    title: "公開イベント",
                    linkTitle:
                      "【ETH2.0特集】識者が語る、スケーリング技術によるこれからのEthereum",
                    link: "https://peatix.com/event/1778244?lang=ja",
                    description:
                      "今回はETH2.0の最新動向、主に「スケーリング」「シャーディング」について、開発/実用/研究の最前線で活躍する識者達が解説します。",
                  },
                  {
                    date: "2020年11月30日",
                    title: "公開イベント",
                    linkTitle:
                      "【ローンチ直前】Ethereum大型アップデート「ETH2.0」の全容に迫る",
                    link: "https://peatix.com/event/1713336?lang=ja",
                    description:
                      "世界一のブロックチェーン開発者コミュニティであるEthereum。新たなフェーズへの移行として、Ethereum2.0のローンチを控えています。今回、Ethereum財団の支援のもと誕生したコミュニティ「ETHTerakoya」にて、イーサリアムの最新動向について解説します。",
                  },
                  {
                    date: "2020年11月06日",
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
                    date: "2023年04月13日",
                    title: "お知らせ",
                    thumbnail: p,
                    linkTitle:
                      "ETHGlobal Tokyoに日本を代表する企業が集結：今、企業とブロックチェーンエコシステムの融合により何が起ころうとしているのか？ 後編",
                    link: "/events/20230413",
                    description:
                      "2023年4月13日から4日間に渡って開催されたETHGlobal Tokyoハッカソン。このイベントの中で、エンタープライズイーサリアムアライアンスジャパンが主催する「エンタープライズイーサリアムステージ」が行われた。ブロックチェーンを活用したサービスやプロダクトを開発・提供している大企業、公的機関の開発者や研究者が一堂に会した歴史に残るブロックチェーンイベントとなった。",
                  },
                  {
                    date: "2023年04月13日",
                    title: "お知らせ",
                    thumbnail: m,
                    linkTitle:
                      "ETHGlobal Tokyoに日本を代表する企業が集結：今、企業とブロックチェーンエコシステムの融合により何が起ころうとしているのか？ 前編",
                    link: "/events/20230412",
                    description:
                      "2023年4月13日から4日間に渡って開催されたETHGlobal Tokyoハッカソン。このイベントの中で、エンタープライズイーサリアムアライアンスジャパンが主催する「エンタープライズイーサリアムステージ」が行われた。ブロックチェーンを活用したサービスやプロダクトを開発・提供している大企業、公的機関の開発者や研究者が一堂に会した歴史に残るブロックチェーンイベントとなった。",
                  },
                  {
                    date: "2022/11/17",
                    title: "News",
                    thumbnail: h,
                    linkTitle:
                      '"[Square Enix and Hitachi Talk] about the cutting edge of blockchain business with game x NFT and Web3 x  distributed ID" hosted by EEA Japan',
                    link: "/en/events/20221117",
                    description:
                      'On October 31, 2022, EEA Japan (Enterprise Ethereum Alliance Japan) hosted "[Square Enix and Hitachi Talk] about the cutting edge of blockchain business with game xNFT and Web3x distributed ID".',
                  },
                  {
                    date: "2022/7/13",
                    title: "News",
                    thumbnail: n,
                    linkTitle:
                      '"What Interoperability Means for the Evolution of Enterprise Blockchain," hosted by EEA Japan',
                    link: "/en/events/20220713",
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
        return l.a.createElement(
          c.a,
          null,
          l.a.createElement(d.a, { title: "NEWS" }),
          l.a.createElement(
            o.a,
            { className: "py-5" },
            l.a.createElement(
              s.a,
              null,
              l.a.createElement(
                r.a,
                null,
                l.a.createElement(
                  "p",
                  { className: "main-submenu-title" },
                  i.formatMessage({ id: "news" })
                )
              )
            ),
            u.map(function (e, t) {
              return l.a.createElement(
                s.a,
                { className: "py-4", key: t },
                l.a.createElement(
                  r.a,
                  { xs: 12, sm: 2 },
                  l.a.createElement("p", null, e.date)
                ),
                l.a.createElement(
                  r.a,
                  { xs: 12, sm: 10 },
                  l.a.createElement(
                    D,
                    { style: { width: "100%" } },
                    l.a.createElement(D.Header, null, e.title),
                    l.a.createElement(
                      D.Body,
                      { className: "card-body" },
                      e.thumbnail
                        ? l.a.createElement(
                            D.Link,
                            {
                              className: "image-card-body",
                              href: e.link,
                              target: "#" !== e.link && "blank",
                            },
                            l.a.createElement(W.a, { fixed: e.thumbnail })
                          )
                        : "",
                      l.a.createElement(
                        "div",
                        { className: "card-titles" },
                        l.a.createElement(
                          D.Title,
                          null,
                          l.a.createElement(
                            D.Link,
                            { href: e.link, target: "#" !== e.link && "blank" },
                            e.linkTitle
                          )
                        ),
                        "" === e.linkTitle
                          ? l.a.createElement("p", null, e.description)
                          : l.a.createElement(D.Text, null, e.description)
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
//# sourceMappingURL=component---src-pages-news-js-1ca821b4ea3aba280e1f.js.map
