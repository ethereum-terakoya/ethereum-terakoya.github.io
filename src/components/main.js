import React from "react";
import { useIntl } from "react-intl";
import Img from "gatsby-image";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Activity from "../components/activity";
import AboutETHTerakoya from "./aboutETHTerakoya";
import ParticipationTarget from "./participationTarget";
import Sponsor from "./sponsor";
import Contributor from "./contributor";

const Hero = ({ logo }) => {
  const intl = useIntl();

  return (
    <div className="main-header container-fluid">
      <div className="header-contents">
        <div className="title-area">
          <Col sm={5} className="upper">
            <div className="header-img">
              <Img fixed={logo.childImageSharp.fixed} className="" />
            </div>
            <div className="title text-white text-left">ETHTerakoya</div>
          </Col>
        </div>
        <div>
          <Col sm={5}>
            {/*slogan*/}
            <div className="slogan text-white text-left">
              {intl.formatMessage({ id: "slogan" })}
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
};

const ContactUs = ({ title }) => {
  return (
    <Row className="py-2 mb-5 contact-us">
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
      <Container className="mt-5">
        {/* ETHTerakoya（イーサテラコヤ）とは */}
        <AboutETHTerakoya />

        {/* activity */}
        <Activity />

        {/* お問い合わせ */}
        <ContactUs title={intl.formatMessage({ id: "contact" })} />
      </Container>

      {/* 参加対象 */}
      <ParticipationTarget />

      <Container className="mb-4">

      {/* 参加企業 */}
      <Contributor />

        <Sponsor data={data} />

        {/* お問い合わせ */}
        <ContactUs title={intl.formatMessage({ id: "contact" })} />
      </Container>

    </React.Fragment>
  );
};

export default Main;
