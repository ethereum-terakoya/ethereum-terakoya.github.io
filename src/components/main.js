import React from "react";
import { useIntl } from "react-intl";
import Img from "gatsby-image";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import {LocalizedLink} from "gatsby-theme-i18n";
import {Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Hero = ({ logo }) => {
  const intl = useIntl();
  return (
    <Jumbotron>
      <Container className="catch">
        <Row>
          <Col xs={4}>
            <div><Img fixed={logo.childImageSharp.fixed} className="ml-3" /></div>
            <div className="title display-6 text-white">ETHTerakoya</div>
          </Col>
          <Col xs={8}>
            {/*slogan*/}
            <div className="slogan text-right text-white">
              <span className="description">技術・ビジネス・法律の観点から課題を協議し</span>
              <span className="description">企業のブロックチェーン活用における</span>
              <span className="description">標準化策定を目指すコミュニティ</span>
                {/*{intl.formatMessage({ id: "slogan" })}*/}
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

const ContactUs = ({ title }) => {
  return (
    <Row className="py-2 mb-5">
      <Col>
        <div className="text-center">
          <a
            href="https://forms.gle/3ptEzDnWtrzqShMz8"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="info">{title}</Button>
          </a>
        </div>
      </Col>
    </Row>
  );
};

const Main = ({ data }) => {
  const intl = useIntl();
  return (
    <React.Fragment>
      <Hero logo={data.logo} />
      <Container className="py-5">
        <Row>
          <Col className="pt-4 pb-4">
            <h4 className="text-center mb-4 h3">
              {intl.formatMessage({ id: "what" })}
            </h4>
            <p className={"mb-4"}>{intl.formatMessage({ id: "whatDetail" })}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <hr/>
          </Col>
        </Row>

        {/*events*/}
        <Row>
          <Col>
            <Container className="py-5" >
              <Row className="py-5">
                <Col xs={2}>
                  2020/11/30
                </Col>
                <Col xs={10}>
                  <Card style={{ width: '100%' }} >
                    <Card.Header>公開イベント</Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <Card.Link href="https://peatix.com/event/1713336?lang=ja" target={"blank"}>
                          【ローンチ直前】Ethereum大型アップデート「ETH2.0」の全容に迫る
                        </Card.Link>
                      </Card.Title>
                      <Card.Text>
                        世界一のブロックチェーン開発者コミュニティであるEthreum。新たなフェーズへの移行として、Ethereum2.0のローンチを控えています。今回、Ethreum財団の支援のもと誕生したコミュニティ「ETHTerakoya」にて、イーサリアムの最新動向について解説します。
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col xs={2}>
                  2020/11/06
                </Col>
                <Col xs={10}>
                  <Card style={{ width: '100%' }}>
                    <Card.Header>公開ワークショップ</Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <Card.Link href="https://peatix.com/event/1679864?lang=ja" target={"blank"}>
                          インターネット投票はブロックチェーンによって実現されるか？<br/>ブロックチェーン×マイナンバーから考える可能性
                        </Card.Link>
                      </Card.Title>
                      <Card.Text>
                        電子政府の重要性が高まり、マイナンバーやインターネット投票への期待感が高まっている。今回、Ethreum財団の支援のもと誕生したコミュニティ「ETHTerakoya」にて、ビジネス・技術・法律の専門家が集まり、インターネット投票の実現に向けたブロックチェーン技術活用についての討論を行った。その成果物共有の場として、インターネット投票に求められる法律や技術要件について発表を行う。
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr/>
          </Col>
        </Row>

        {/*menu*/}
        <Row className={'pt-5'}>
          <Col>
            <Container className="main-menu-item">
              <Row>
                <Col className="text-center">
                  <div className={"category"}>Working Group</div>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <LocalizedLink to="/id-voting/" className={"title"}>
                    ID x Voting x Blockchain
                  </LocalizedLink>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <div className={"description"}>インターネット投票の実現にむけて</div>
                </Col>
              </Row>
            </Container>

          </Col>
          <Col>

            <Container className="main-menu-item">
              <Row>
                <Col className="text-center">
                  <div className={"category"}>OSS</div>
                </Col>
              </Row>
              <Row>
                <Col className="text-center" >
                  <Link className="title">
                    C.R.E.A.M
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <div className={"description"}>Confidential Reliable Ethereum Anonymous Mixer</div>
                  <div className={"link-icon"}>
                    <Link to="https://github.com/couger-inc/cream" target={"blank"}>
                      <FontAwesomeIcon icon={faGithub}/>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>

          </Col>
        </Row>

        <Row>
          <Col>
            <hr/>
          </Col>
        </Row>

        <Row className="bg-beige">
          <Col className="col-sm py-md-5 pb-5">
            <h4 className="text-center mb-5">
              <span role="img" aria-label="friendship">
                👬
              </span>
              <span role="img" aria-label="friendship different order">
                👫
              </span>
              {intl.formatMessage({ id: "wg" })}
            </h4>
            <ul>
              <li>{intl.formatMessage({ id: "wgList1" })}</li>
              <li>{intl.formatMessage({ id: "wgList2" })}</li>
              <li>{intl.formatMessage({ id: "wgList3" })}</li>
            </ul>
          </Col>
          <Col className="col-sm py-md-5 pb-5">
            <h4 className="text-center mb-5">
              <span role="img" aria-label="male researcher">
                👨‍🔬
              </span>
              <span role="img" aria-label="female researcher">
                👩‍⚕
              </span>
              {intl.formatMessage({ id: "ws" })}
            </h4>
            <ul>
              <li>{intl.formatMessage({ id: "wsList1" })}</li>
              <li>{intl.formatMessage({ id: "wsList2" })}</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Container fluid className="bg-beige">
            <Row className="justify-content-md-center py-5 bg-beige">
              <Col className="col-12 col-sm-6">
                <h4 className="text-center mb-5">
                  {intl.formatMessage({ id: "target" })}
                </h4>
                <ul>
                  <li>{intl.formatMessage({ id: "target1" })}</li>
                  <li>{intl.formatMessage({ id: "target2" })}</li>
                  <li>{intl.formatMessage({ id: "target3" })}</li>
                </ul>
              </Col>
            </Row>
            <Row><Col>
              <ContactUs title={intl.formatMessage({ id: "contact" })} />
            </Col></Row>
          </Container>

        </Row>

      </Container>
      <Container>

      </Container>
      <Container>
        <Row className="py-5">
          <Col>
            <h4 className="text-center mb-5">
              {intl.formatMessage({ id: "organize" })}
            </h4>
            <div className="text-center">
              <Img fixed={data.couger.childImageSharp.fixed} />
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <Col>
            <h4 className="text-center mb-5">
              {intl.formatMessage({ id: "support" })}
            </h4>
            <div className="text-center">
              <Img fixed={data.ef.childImageSharp.fixed} />
            </div>
          </Col>
        </Row>
        <ContactUs title={intl.formatMessage({ id: "contact" })} />
      </Container>
    </React.Fragment>
  );
};

export default Main;
