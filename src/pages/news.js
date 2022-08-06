import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Card } from "react-bootstrap";
import { useIntl } from "react-intl";

const News = ({ data, pageContext }) => {
  const intl = useIntl();

  const list =
    pageContext.locale === "ja"
      ? [
          // jp
          {
            date: "2022/7/1",
            title: "公開イベント",
            linkTitle:
              "ETHTerakoyaをEEA Japanコミュニティに統合しました。",
            link: "#",
            description: "",
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
          // en
          {
            date: "2022/7/1",
            title: "公開イベント",
            linkTitle:
              "ETHTerakoya has been merged into EEA Japan community.",
            link: "#",
            description: "",
          },
          {
            date: "2021/10/29",
            title: "Public Event",
            linkTitle:
              "Performance evaluation viewpoint required for business use of blockchain - Ethereum performance evaluation workshop",
            link: "https://peatix.com/event/3042248/view",
            description: `At ETHTerakoya, we hold discussions with experts in companies and developers to establish a "common evaluation standard" required to compare blockchain functionality. We also conduct actual tests. In the public workshop this time, we will announce our results based on the 7 group discussions we have held in the past.`,
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

  return (
    <Layout>
      <SEO title={"NEWS"} />
      <Container className="py-5">
        {/* title */}
        <Row>
          <Col>
            <p className={"main-submenu-title"}>
              {intl.formatMessage({ id: "news" })}
            </p>
          </Col>
        </Row>

        {/* list */}
        {list.map((item, index) => {
          return (
            <Row className="py-4" key={index}>
              <Col xs={12} sm={2}>
                <p>{item.date}</p>
              </Col>
              <Col xs={12} sm={10}>
                <Card style={{ width: "100%" }}>
                  <Card.Header>{item.title}</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <Card.Link href={item.link} target={item.link !== "#" && "blank"}>
                        {item.linkTitle}
                      </Card.Link>
                    </Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Container>
    </Layout>
  );
};

export default News;
