import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Card } from "react-bootstrap";
import {useIntl} from "react-intl";

const News = ({ data, pageContext }) => {
  const intl = useIntl();

  const list = pageContext.locale === "ja" ? [
    // jp
    {
      date: '2020/11/30',
      title: '公開イベント',
      linkTitle: '【ローンチ直前】Ethereum大型アップデート「ETH2.0」の全容に迫る',
      link: 'https://peatix.com/event/1713336?lang=ja',
      description: '世界一のブロックチェーン開発者コミュニティであるEthreum。新たなフェーズへの移行として、Ethereum2.0のローンチを控えています。今回、Ethreum財団の支援のもと誕生したコミュニティ「ETHTerakoya」にて、イーサリアムの最新動向について解説します。'
    },
    {
      date: '2020/11/06',
      title: '公開ワークショップ',
      linkTitle: 'インターネット投票はブロックチェーンによって実現されるか？ブロックチェーン×マイナンバーから考える可能性',
      link: 'https://peatix.com/event/1679864?lang=ja',
      description: '電子政府の重要性が高まり、マイナンバーやインターネット投票への期待感が高まっている。今回、Ethreum財団の支援のもと誕生したコミュニティ「ETHTerakoya」にて、ビジネス・技術・法律の専門家が集まり、インターネット投票の実現に向けたブロックチェーン技術活用についての討論を行った。その成果物共有の場として、インターネット投票に求められる法律や技術要件について発表を行う。'
    }
  ] : [
    // en
    {
      date: '2020/11/30',
      title: 'public event',
      linkTitle: 'title1',
      link: 'https://peatix.com/event/1713336?lang=ja',
      description: 'description1'
    },
    {
      date: '2020/11/06',
      title: 'public work shop',
      linkTitle: 'title2',
      link: 'https://peatix.com/event/1679864?lang=ja',
      description: 'description2'
    }
  ]

  return (
    <Layout>
      <SEO title={"NEWS"} />
      <Container className="py-5">
        {/* title */}
        <Row>
          <Col>
            <p className={'main-submenu-title'}>
              {intl.formatMessage({id: "news"})}
            </p>
          </Col>
        </Row>

        {/* list */}
        {list.map((item, index) => {
          return (
            <Row className="py-5" key={index}>
              <Col xs={2} sm={2}>
                <p>{item.date}</p>
              </Col>
              <Col xs={10} sm={10}>
                <Card style={{ width: '100%' }} >
                  <Card.Header>{item.title}</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <Card.Link href={item.link} target={"blank"}>
                        {item.linkTitle}
                      </Card.Link>
                    </Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )
        })}
      </Container>
    </Layout>
  );
};

export default News;
